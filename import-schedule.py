from __future__ import annotations

import json
import re
import sys
from collections import Counter
from datetime import date, datetime
from pathlib import Path

from openpyxl import load_workbook
from PIL import Image, ImageOps


DEFAULT_SOURCE = Path(
    r"C:\Users\horizonclip02\Documents\ChatGPT\记忆\card-calendar-web"
    r"\outputs\01a1805e-fee0-7e92-9397-8198e2cd9f2c"
    r"\恋与深空_微博全量整理_2026-10-30_角色配色.xlsx"
)
OUTPUT = Path(__file__).with_name("data.js")
PROFILE_URL = "https://weibo.com/u/7484247626"
IMAGE_ROOT = Path(r"C:\Users\horizonclip02\Desktop")
POOL_CARD_DIR = Path(__file__).with_name("assets") / "pool-cards"
CHARACTER_ORDER = ["沈星回", "黎深", "祁煜", "秦彻", "夏以昼"]

CHARACTER_COLORS = {
    "沈星回": "#8F77B5",
    "黎深": "#58B2DC",
    "祁煜": "#F596AA",
    "秦彻": "#C73E3A",
    "夏以昼": "#E98B2A",
}

CHARACTER_OVERRIDES = {
    (2024, "心律狙击"): "秦彻",
    (2025, "坠入澄空"): "夏以昼",
}

GALLERY_OVERRIDES = {
    (2024, "心潮微澜"): [
        ("images/2024-01-24_4993676843157296_01.jpg", "沈星回"),
        ("images/2024-01-24_4993679359740257_01.jpg", "祁煜"),
        ("images/2024-01-24_4993681877369432_01.jpg", "黎深"),
        ("images/2024-01-24_4993676843157296_02.jpg", "沈星回"),
        ("images/2024-01-24_4993679359740257_02.jpg", "祁煜"),
        ("images/2024-01-24_4993681877369432_02.jpg", "黎深"),
    ],
    (2024, "独家拥抱"): [
        ("images/2024-02-28_5006352866871792_01.jpg", ""),
        ("images/2024-02-28_5006360271392035_01.jpg", ""),
    ],
    (2024, "跨越光年"): [
        ("images/2024-02-20_5003461626170130_02.jpg", ""),
        ("images/2024-02-20_5003461626170130_03.jpg", ""),
        ("images/2024-02-20_5003461626170130_04.jpg", ""),
    ],
    (2024, "眸光映照处"): [
        ("images/2024-03-08_5009615731820745_01.jpg", ""),
        ("images/2024-03-08_5009617018683570_01.jpg", ""),
        ("images/2024-03-08_5009618693259383_01.jpg", ""),
    ],
}

GALLERY_LAYOUT_OVERRIDES = {
    (2024, "跨越光年"): 1,
}

CATEGORY_COLORS = {
    "mixed": "#5DAC81",
    "solo": "#F596AA",
    "special": "#FFC408",
    "permanent": "#5DAC81",
}

UI_COLOR_OVERRIDES = {
    "#C3EAD5": "#5DAC81",
    "#FFEEAD": "#FFC408",
    "#AA71D5": "#8F77B5",
    "#00B0F0": "#58B2DC",
    "#FC76A9": "#F596AA",
    "#C00000": "#C73E3A",
    "#E40D08": "#C73E3A",
    "#EE822F": "#E98B2A",
}

RULE_OVERRIDES = {
    "极空回响": """兑换规则
在常驻许愿「极空回响」内，每许愿一次，可以获得1个时光星尘，并随机获得掉落预览中的1个奖励。时光星尘可在许愿商店内兑换道具。

*每日许愿次数上限为999次，该次数在所有许愿之间共享。
*每日许愿次数将于每日5:00重置。

许愿规则
[五星]
许愿获得5星思念的基础概率为1%，获得5星思念的综合概率（含保底）为2.1%。
若连续60次许愿未获得5星思念，则从第61次开始，每次许愿获得5星思念的概率比前一次增加10%，直至达到100%。
即：最多70次许愿，必定获得5星思念。
*期间若获得5星思念，概率恢复至1%。

[四星]
许愿获得4星思念的基础概率为7%，获得4星思念的综合概率（含保底）为12%。
每进行10次许愿，必得一个4星或以上思念。
*未触发概率提升及保底时，所有思念均分基础概率。
*当触发概率提升及保底时，以具体规则为准。

转化规则
当重复获得相同思念时（获取方式包括但不限于许愿、商店兑换、系统赠送等），思念将转化为对应数量的思念碎片。
若5星思念已进阶至满阶，每次获得相同思念，则将自动转化为40个记忆心砂·璀璨；
若4星思念已进阶至满阶，每次获得相同思念，则将自动转化为30个记忆心砂·珍贵；
若3星思念已进阶至满阶，每次获得相同思念，则将自动转化为20个记忆心砂·稀有。

其他
视频仅为效果演示，获取思念时，将自动读取您的塑容数据。
*不同塑容数据可能会影响部分动作交互的表现效果，请以实机表现为准。"""
}


def iso_date(value) -> str | None:
    if value is None:
        return None
    if isinstance(value, datetime):
        return value.date().isoformat()
    if isinstance(value, date):
        return value.isoformat()
    text = str(value).strip()
    if text in {"", "至今", "None"}:
        return None
    return text[:10]


def extract_period_time(text: str, date_value: str | None, fallback: str) -> str:
    if not date_value:
        return fallback
    parsed = date.fromisoformat(date_value)
    pattern = re.compile(
        rf"{parsed.month}月{parsed.day}日(?:更新后)?\s*"
        rf"(上午|下午|晚上|凌晨)?\s*(\d{{1,2}})[:：](\d{{2}})"
    )
    match = pattern.search(text)
    if not match:
        return fallback

    period = match.group(1) or ""
    hour = int(match.group(2))
    minute = int(match.group(3))
    if period in {"下午", "晚上"} and hour < 12:
        hour += 12
    elif period == "凌晨" and hour == 12:
        hour = 0
    return f"{hour:02d}:{minute:02d}"


def extract_period_time(text: str, date_value: str | None, fallback: str) -> str:
    if not date_value:
        return fallback
    parsed = date.fromisoformat(date_value)
    pattern = re.compile(
        rf"{parsed.month}月{parsed.day}日(?:更新后)?\s*"
        rf"(上午|下午|晚上|凌晨)?\s*(\d{{1,2}})[:：](\d{{2}})"
    )
    match = pattern.search(text)
    if not match:
        return fallback

    period = match.group(1) or ""
    hour = int(match.group(2))
    minute = int(match.group(3))
    if period in {"下午", "晚上"} and hour < 12:
        hour += 12
    elif period == "凌晨" and hour == 12:
        hour = 0
    return f"{hour:02d}:{minute:02d}"


def category_for(mode: str, end_value) -> str:
    if mode == "常驻池" and end_value == "至今":
        return "permanent"
    if "混池" in mode:
        return "mixed"
    if "单人" in mode:
        return "solo"
    if "常驻池" in mode:
        return "special"
    return "special"


def is_welfare_mode(mode: str) -> bool:
    return any(token in mode for token in ("免费四星", "免费月卡", "签到福利", "登录领取福利", "十日与你"))


def filter_group_for(mode: str, category: str) -> str:
    if "十日与你" in mode or "免费四星" in mode:
        return "free4"
    if "免费月卡" in mode or "免费五星" in mode:
        return "free5"
    if "签到福利" in mode or "登录领取福利" in mode:
        return "checkin"
    return category


def unique(items):
    return list(dict.fromkeys(item for item in items if item))


def pool_size_for(mode: str) -> int:
    if "五人" in mode:
        return 5
    if "四人" in mode:
        return 4
    if "三人" in mode:
        return 3
    return 1


def existing_image(relative_path: str | None) -> Path | None:
    if not relative_path:
        return None
    source = IMAGE_ROOT / str(relative_path).replace("/", "\\")
    return source if source.is_file() else None


def character_image_source(title: str, character: str, start: str | None, posts: list[tuple]) -> Path | None:
    normalized_title = title.replace("[复刻]", "")
    start_date = date.fromisoformat(start) if start else None
    matches = []
    for post in posts:
        body = str(post[3] or "")
        source = existing_image(post[8])
        if not source or normalized_title not in body or character not in body:
            continue

        other_characters = sum(
            1 for name in CHARACTER_ORDER if name != character and name in body
        )
        score = 100 if f"「{character}·" in body else 0
        score += 45 if "全新五星互动思念" in body else 0
        score += 38 if "全新五星日冕套装思念" in body else 0
        score += 34 if "五星思念免费领取" in body else 0
        score += 28 if "四星思念登录免费领" in body else 0
        score -= other_characters * 18

        post_date = post[1]
        if isinstance(post_date, datetime):
            post_date = post_date.date()
        elif not isinstance(post_date, date):
            try:
                post_date = date.fromisoformat(str(post_date)[:10])
            except ValueError:
                post_date = None
        distance = abs((post_date - start_date).days) if post_date and start_date else 999
        matches.append((-score, distance, source))

    return min(matches)[2] if matches else None


def make_pool_card(source: Path, character: str = "") -> str | None:
    suffix = f"__{character}" if character else ""
    destination = POOL_CARD_DIR / f"{source.stem}{suffix}.webp"
    if destination.is_file():
        return f"./assets/pool-cards/{destination.name}"

    try:
        with Image.open(source) as image:
            image.seek(0)
            image = ImageOps.exif_transpose(image).convert("RGB")
            # Keep enough source resolution for long-form announcement posters.
            # A short fixed height turned 1000 × 7500px images into 106px-wide thumbnails.
            image.thumbnail((1000, 16000), Image.Resampling.LANCZOS)
            POOL_CARD_DIR.mkdir(parents=True, exist_ok=True)
            image.save(destination, "WEBP", quality=82, method=6)
        return f"./assets/pool-cards/{destination.name}"
    except Exception as error:
        print(f"card image skipped: {source}: {error}", file=sys.stderr)
        return None


def gallery_for_event(
    mode: str,
    title: str,
    characters: list[str],
    start: str | None,
    post: tuple | None,
    posts: list[tuple],
    images_by_link: dict[str, list[str]],
) -> tuple[int, list[dict]]:
    if mode == "常驻池":
        return 1, []

    size = pool_size_for(mode)
    start_year = int(start[:4]) if start else None
    gallery_override = GALLERY_OVERRIDES.get((start_year, title))
    if gallery_override:
        gallery = []
        for filename, label in gallery_override:
            source = existing_image(filename)
            if not source:
                continue
            image_path = make_pool_card(source, label)
            if image_path:
                gallery.append({"src": image_path, "label": label})
        return GALLERY_LAYOUT_OVERRIDES.get((start_year, title), size), gallery

    ordered_characters = [name for name in CHARACTER_ORDER if name in characters]
    selected: list[tuple[Path, str]] = []
    seen: set[str] = set()

    if size > 1:
        for character in ordered_characters:
            source = character_image_source(title, character, start, posts)
            if source and str(source) not in seen:
                selected.append((source, character))
                seen.add(str(source))
            if len(selected) >= size:
                break

    if post and len(selected) < size:
        for relative_path in images_by_link.get(post[10], []):
            source = existing_image(relative_path)
            if source and str(source) not in seen:
                selected.append((source, ""))
                seen.add(str(source))
            if len(selected) >= size:
                break

    gallery = []
    for source, character in selected:
        image_path = make_pool_card(source, character)
        if image_path:
            gallery.append({"src": image_path, "label": character})

    return size, gallery


def extract_characters(text: str, mode: str) -> tuple[list[str], str | None]:
    counts = Counter({name: text.count(name) for name in CHARACTER_COLORS if name in text})
    ranked = [name for name, _ in counts.most_common()]
    if "混池" in mode or "星谕罗盘" in mode:
        return ranked, None
    if ranked:
        return ranked, ranked[0]
    return [], None


def summary_for(mode: str, category: str, character: str | None, duration: int | None) -> str:
    duration_text = f"共开放 {duration} 天。" if duration else ""
    if category == "permanent":
        return "长期开放的常驻内容，固定在日历顶部展示，不占用每日活动色条。"
    if category == "mixed":
        return f"{mode}限定排期，{duration_text}日历使用薄荷色标记完整开放区间。"
    if category == "solo":
        owner = f"{character}的单人主题" if character else "单人主题"
        return f"{owner}卡池，{duration_text}角色色用于快速定位同角色活动。"
    if any(token in mode for token in ("签到", "免费", "登录", "领取", "十日与你")):
        return f"{mode}福利活动，{duration_text}奖励内容和领取条件以官方微博公告为准。"
    return f"{mode}特别活动，{duration_text}该活动使用独立类型色展示。"


def advice_for(category: str, mode: str, remake: bool) -> list[str]:
    if category == "permanent":
        return ["常驻内容与限时活动分开安排。", "进入详情页确认卡池机制和当前开放状态。"]
    if category == "mixed":
        return ["先确认本期最想获取的卡面，再安排投入。", "同月有单人池时，按活动结束日期倒排计划。"]
    if category == "solo":
        return ["先确认角色代表色和目标卡面是否一致。", "短期卡池建议收藏后设置提醒。"]
    if any(token in mode for token in ("签到", "免费", "登录", "领取", "十日与你")):
        return ["先核对领取条件和累计签到天数。", "福利活动不等同于付费卡池，以官方公告为准。"]
    if remake:
        return ["复刻活动保留原始活动信息与本次开放时间。", "先确认是否已拥有目标内容，再决定是否参与。"]
    return ["先确认活动机制及资源类型。", "具体规则以官方微博公告为准。"]


def fill_color(cell) -> str | None:
    foreground = cell.fill.fgColor
    if foreground.type == "rgb" and isinstance(foreground.rgb, str):
        return f"#{foreground.rgb[-6:]}"
    if foreground.type == "theme" and foreground.theme == 5:
        return "#EE822F"
    return None


def make_event(
    row: tuple,
    row_number: int,
    post_text: str,
    sheet_color: str | None,
    gallery: list[dict],
    gallery_layout: int,
) -> dict:
    mode = str(row[0] or "").strip()
    year = int(row[1])
    title = str(row[2] or "").strip()
    start = iso_date(row[4])
    end = None if row[5] == "至今" else iso_date(row[5])
    start_time = extract_period_time(post_text, start, "05:00")
    end_time = extract_period_time(post_text, end, "04:59") if end else None
    start_time = extract_period_time(post_text, start, "05:00")
    end_time = extract_period_time(post_text, end, "04:59") if end else None
    duration = int(row[7]) if row[7] is not None else None
    category = category_for(mode, row[5])
    characters, primary = extract_characters(post_text, mode)

    override = CHARACTER_OVERRIDES.get((year, title))
    if override:
        primary = override
        characters = unique([override, *characters])

    if category == "permanent":
        characters = []
        primary = None

    primary_color = CHARACTER_COLORS.get(primary) if primary else None

    remake = bool(row[15]) or title.startswith("[复刻]") or "复刻" in mode
    source_url = row[9] or PROFILE_URL
    tags = unique([mode, *characters, "复刻" if remake else "", "规则说明" if title in RULE_OVERRIDES else ""])

    return {
        "id": f"schedule-{start}-{row_number:03d}",
        "title": title,
        "type": category,
        "mode": mode,
        "start": start,
        "end": end,
        "startAt": f"{start}T{start_time}:00+08:00",
        "endAt": f"{end}T{end_time}:00+08:00" if end and end_time else None,
        "startTime": start_time,
        "endTime": end_time,
        "startAt": f"{start}T{start_time}:00+08:00",
        "endAt": f"{end}T{end_time}:00+08:00" if end and end_time else None,
        "startTime": start_time,
        "endTime": end_time,
        "previewAt": iso_date(row[3]),
        "advanceDays": int(row[6]) if row[6] is not None else None,
        "durationDays": duration,
        "color": UI_COLOR_OVERRIDES.get(
            sheet_color, sheet_color or primary_color or CATEGORY_COLORS[category]
        ),
        "subtitle": f"{primary} · {mode}" if primary else mode,
        "characters": characters,
        "primaryCharacter": primary,
        "filterGroup": filter_group_for(mode, category),
        "rulesText": RULE_OVERRIDES.get(title),
        "isWelfare": is_welfare_mode(mode),
        "remake": remake,
        "tags": tags,
        "summary": summary_for(mode, category, primary, duration),
        "advice": advice_for(category, mode, remake),
        "notes": row[14],
        "sourceUrl": source_url,
        "sourcePostDate": iso_date(row[8]),
        "imageCount": int(row[10] or 0),
        "videoCount": int(row[11] or 0),
        "gallery": gallery,
        "galleryLayout": gallery_layout,
        "sourceRow": row_number,
    }


def main() -> None:
    source = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SOURCE
    workbook = load_workbook(source, read_only=True, data_only=True)
    schedule = workbook["排期总表"]
    posts = workbook["全部微博"]
    images = workbook["图片与视频索引"]

    post_rows = list(posts.iter_rows(min_row=6, values_only=True))
    post_rows_by_url = {
        row[10]: row
        for row in post_rows
        if row[10]
    }
    images_by_link: dict[str, list[str]] = {}
    for image in images.iter_rows(min_row=5, values_only=True):
        if image[1] == "图片" and image[8] and image[5]:
            images_by_link.setdefault(image[8], []).append(str(image[5]))
    events = []
    for row_number, row_cells in enumerate(
        schedule.iter_rows(min_row=6, max_row=135, values_only=False),
        start=6,
    ):
        row = tuple(cell.value for cell in row_cells)
        if not row[2] or not row[4]:
            continue
        post = post_rows_by_url.get(row[9])
        mode = str(row[0] or "").strip()
        title = str(row[2] or "").strip()
        post_text = str((post[3] if post else "") or "")
        characters, _ = extract_characters(post_text, mode)
        override = CHARACTER_OVERRIDES.get((int(row[1]), title))
        if override:
            characters = unique([override, *characters])
        gallery_layout, gallery = gallery_for_event(
            mode,
            title,
            characters,
            iso_date(row[4]),
            post,
            post_rows,
            images_by_link,
        )
        events.append(
            make_event(
                row,
                row_number,
                post_text,
                fill_color(row_cells[2]),
                gallery,
                gallery_layout,
            )
        )

    cancellation_post = next(
        (
            row
            for row in posts.iter_rows(min_row=6, values_only=True)
            if "敖尹取消上线" in str(row[3] or "")
        ),
        None,
    )
    if cancellation_post:
        notice_date = iso_date(cancellation_post[1])
        events.append(
            {
                "id": f"notice-aoyin-cancelled-{notice_date}",
                "title": "敖尹上线取消公告",
                "type": "special",
                "mode": "官方公告",
                "start": notice_date,
                "end": notice_date,
                "startAt": f"{notice_date}T20:00:00+08:00",
                "endAt": f"{notice_date}T20:00:00+08:00",
                "startTime": "20:00",
                "endTime": "20:00",
                "startAt": f"{notice_date}T20:00:00+08:00",
                "endAt": f"{notice_date}T20:00:00+08:00",
                "startTime": "20:00",
                "endTime": "20:00",
                "previewAt": notice_date,
                "advanceDays": 0,
                "durationDays": 1,
                "color": CATEGORY_COLORS["special"],
                "subtitle": "6.30 官方公告 · 新男主项目调整",
                "characters": ["敖尹"],
                "primaryCharacter": None,
                "filterGroup": "special",
                "isWelfare": False,
                "remake": False,
                "isNotice": True,
                "tags": ["官方公告", "敖尹", "取消上线"],
                "summary": (
                    "2026年6月30日，官方宣布取消新男主敖尹的上线与开发安排，"
                    "并说明未来不再推出新男主。公告称原计划6.0版本的其它系统玩法"
                    "和自选五星思念限时概率UP活动仍将正常上线。"
                ),
                "advice": [
                    "该日期是公告节点，不是卡池开放日期。",
                    "补偿内容与6.0版本调整请以官方微博原文为准。",
                ],
                "notes": "由全部微博中的官方公告补充。",
                "sourceUrl": cancellation_post[10],
                "sourcePostDate": notice_date,
                "imageCount": int(cancellation_post[5] or 0),
                "videoCount": int(cancellation_post[6] or 0),
                "gallery": [],
                "galleryLayout": 1,
                "sourceRow": None,
            }
        )

    events.append(
        {
            "id": "manual-2026-07-09-yulan-remake",
            "title": "[复刻]欲揽旖旎色",
            "type": "mixed",
            "mode": "四人混池复刻",
            "start": "2026-07-09",
            "end": "2026-07-17",
            "startAt": "2026-07-09T05:00:00+08:00",
            "endAt": "2026-07-17T04:59:00+08:00",
            "startTime": "05:00",
            "endTime": "04:59",
            "startAt": "2026-07-09T05:00:00+08:00",
            "endAt": "2026-07-17T04:59:00+08:00",
            "startTime": "05:00",
            "endTime": "04:59",
            "previewAt": "2026-07-09",
            "advanceDays": 0,
            "durationDays": 9,
            "color": CATEGORY_COLORS["mixed"],
            "subtitle": "四人混池复刻",
            "characters": [],
            "primaryCharacter": None,
            "filterGroup": "mixed",
            "rulesText": None,
            "isWelfare": False,
            "remake": True,
            "sourceLabel": "游戏内公告",
            "tags": ["四人混池", "复刻", "游戏内公告"],
            "summary": "四人混池「欲揽旖旎色」复刻排期。",
            "advice": [],
            "notes": "来源：游戏内公告",
            "sourceUrl": "",
            "sourcePostDate": None,
            "imageCount": 0,
            "videoCount": 0,
            "gallery": [],
            "galleryLayout": 4,
            "sourceRow": 9999,
        }
    )

    events.sort(key=lambda event: (event["start"], event["sourceRow"]))
    payload = {
        "meta": {
            "title": "临空日历",
            "dataLabel": "2024–2026 微博排期",
            "updatedAt": "2026-10-30",
            "contentVersion": "weibo-2026-10-30",
            "sourceLabel": "@恋与深空 微博",
            "sourceUrl": PROFILE_URL,
            "recordCount": len(events),
        },
        "categories": {
            "mixed": {"label": "多人混池", "color": CATEGORY_COLORS["mixed"]},
            "solo": {"label": "单人卡池", "color": CATEGORY_COLORS["solo"]},
            "special": {"label": "特别活动", "color": CATEGORY_COLORS["special"]},
            "permanent": {"label": "常驻开放", "color": CATEGORY_COLORS["permanent"]},
        },
        "characters": {
            name: {"color": color} for name, color in CHARACTER_COLORS.items()
        },
        "events": events,
    }

    rendered = (
        "window.TIDE_CALENDAR_DATA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n"
    )
    OUTPUT.write_text(rendered, encoding="utf-8")
    print(
        json.dumps(
            {
                "output": str(OUTPUT),
                "events": len(events),
                "first": events[0]["start"],
                "last": max(event["end"] or event["start"] for event in events),
                "withLinks": sum(event["sourceUrl"] != PROFILE_URL for event in events),
                "withCharacters": sum(bool(event["characters"]) for event in events),
                "withGalleries": sum(bool(event["gallery"]) for event in events),
                "galleryImages": sum(len(event["gallery"]) for event in events),
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
