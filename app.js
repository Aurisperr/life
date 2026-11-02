(() => {
  const data = window.TIDE_CALENDAR_DATA;
  const palette = {
    cloud: "#FBFBFB",
    mist: "#F2F2F4",
    lavenderLight: "#C2C3D0",
    lavender: "#B1B3C1",
    plumMist: "#D7D4DC",
    softSlate: "#9498AD",
    pearl: "#E3E2E7",
    slate: "#787B8E",
    ink: "#4E4E5F",
    rose: "#DFC1C2"
  };

  const galleryImage = (filename, label) => ({
    src: `./assets/event-galleries/${filename}`,
    label
  });

  const eventContentOverrides = {
    "schedule-2026-03-28-103": {
      gallery: [
        galleryImage("2026-03-25_5280315580875015_01.jpg", "夏以昼 · 沉冥幽眷"),
        galleryImage("2026-03-25_5280318099555145_01.jpg", "夏以昼 · 沉冥相遥")
      ],
      imageCount: 2,
      galleryLayout: 2
    },
    "schedule-2026-03-19-101": {
      gallery: [galleryImage("2026-03-17_5277415221231642_01.jpg", "祁煜 · 共潮生")],
      imageCount: 1,
      galleryLayout: 1
    },
    "schedule-2026-04-13-106": {
      gallery: [
        galleryImage("2026-04-10_5286112525811987_03.jpg", "秦彻 · 生日活动海报"),
        galleryImage("2026-04-10_5286116304355588_01.jpg", "秦彻 · 肆雨照夜")
      ],
      imageCount: 2,
      galleryLayout: 1
    },
    "schedule-2026-04-30-108": {
      gallery: [
        galleryImage("2026-04-27_5292289804468798_01.jpg", "沈星回 · 池光温陷"),
        galleryImage("2026-04-27_5292292120248565_01.jpg", "黎深 · 雪色深流"),
        galleryImage("2026-04-27_5292294658064762_01.jpg", "祁煜 · 滟滟花期"),
        galleryImage("2026-04-27_5292297349497842_01.jpg", "秦彻 · 缭夜魂与"),
        galleryImage("2026-04-27_5292299674455068_01.jpg", "夏以昼 · 蔓生本能")
      ],
      imageCount: 5,
      galleryLayout: 3
    },
    "miyue-2026-04-30-16": {
      gallery: [
        galleryImage("2026-04-28_5292654381499704_04.jpg", "夏以昼 · 倾目如驻"),
        galleryImage("2026-04-28_5292654381499704_03.jpg", "祁煜 · 一掷独衷")
      ],
      imageCount: 2,
      galleryLayout: 1
    },
    "schedule-2026-03-19-102": {
      gallery: [
        galleryImage("2026-03-18_5277781382402210_01.jpg", "沈星回"),
        galleryImage("2026-03-18_5277781382402210_02.jpg", "黎深"),
        galleryImage("2026-03-18_5277781382402210_03.jpg", "祁煜")
      ],
      imageCount: 3,
      galleryLayout: 3
    },
    "schedule-2026-02-10-096": {
      galleryLayout: 3
    },
    "schedule-2026-05-31-114": {
      gallery: [
        galleryImage("2026-05-29_5303873310822954_01.jpg", "沈星回"),
        galleryImage("2026-05-29_5303873310822954_02.jpg", "黎深"),
        galleryImage("2026-05-29_5303873310822954_03.jpg", "祁煜")
      ],
      imageCount: 3,
      galleryLayout: 3
    },
    "schedule-2026-06-08-116": {
      gallery: [
        galleryImage("2026-06-06_5306768633627265_03.jpg", "夏以昼 · 生日活动海报"),
        galleryImage("2026-06-06_5306772413743967_01.jpg", "夏以昼 · 万里皆予你")
      ],
      imageCount: 2,
      galleryLayout: 1
    },
    "schedule-2026-06-17-117": {
      gallery: [
        galleryImage("2026-06-14_5309666483503134_01.jpg", "沈星回 · 越夜携心"),
        galleryImage("2026-06-14_5309668997988686_01.jpg", "黎深 · 曙色将倾"),
        galleryImage("2026-06-14_5309671515882021_01.jpg", "祁煜 · 彼日如恒"),
        galleryImage("2026-06-14_5309674033250370_01.jpg", "秦彻 · 别幕终曲"),
        galleryImage("2026-06-14_5309676545641998_01.jpg", "夏以昼 · 触而可及")
      ],
      imageCount: 5,
      galleryLayout: 3
    },
    "miyue-2026-06-27-17": {
      gallery: [
        galleryImage("2026-06-15_5310056548533366_03.jpg", "沈星回 · 怦怦制胜"),
        galleryImage("2026-06-15_5310056548533366_04.jpg", "黎深 · 念念有声")
      ],
      imageCount: 2,
      galleryLayout: 1
    },
    "manual-2026-07-09-yulan-remake": {
      gallery: [
        galleryImage("2024-09-20_5080637473554463_01.jpg", "沈星回 · 聆花意"),
        galleryImage("2024-09-20_5080639984373381_01.jpg", "黎深 · 枕月眠"),
        galleryImage("2024-09-20_5080642708834522_01.jpg", "祁煜 · 画琳琅"),
        galleryImage("2024-09-20_5080645191076179_01.jpg", "秦彻 · 风临野")
      ],
      imageCount: 4,
      galleryLayout: 2
    },
    "schedule-2026-08-17-122": {
      gallery: [
        galleryImage("2026-08-14_5331774653863438_01.jpg", "祁煜 · 玄面昭昭"),
        galleryImage("2026-08-14_5331777174635585_01.jpg", "祁煜 · 玄面无相")
      ],
      imageCount: 2,
      galleryLayout: 2
    },
    "miyue-2026-08-24-18": {
      gallery: [
        galleryImage("2026-08-22_5334683824424323_03.jpg", "秦彻 · 临界点"),
        galleryImage("2026-08-22_5334683824424323_04.jpg", "祁煜 · 晒日长")
      ],
      imageCount: 2,
      galleryLayout: 1
    },
    "schedule-2026-09-22-128": {
      gallery: [
        galleryImage("2026-09-20_5345180494070300_01.jpg", "沈星回 · 如栖璨空"),
        galleryImage("2026-09-20_5345183011177373_01.jpg", "黎深 · 繁夜让渡"),
        galleryImage("2026-09-20_5345185527758994_01.jpg", "祁煜 · 赴予醺色"),
        galleryImage("2026-09-20_5345188043293512_01.jpg", "秦彻 · 华筵和奏"),
        galleryImage("2026-09-20_5345190556470286_01.jpg", "夏以昼 · 盛宵尽夺")
      ],
      imageCount: 5,
      galleryLayout: 3
    },
    "schedule-2026-10-11-132": {
      gallery: [
        galleryImage("2026-10-08_5351704729485789_03.jpg", "沈星回 · 生日活动海报"),
        galleryImage("2026-10-08_5351708502789005_01.jpg", "沈星回 · 愿得此瞬")
      ],
      imageCount: 2,
      galleryLayout: 1
    },
    "miyue-2026-10-21-19": {
      gallery: [
        galleryImage("2026-10-17_5354977545160465_03.jpg", "夏以昼 · 漓漓愫意"),
        galleryImage("2026-10-17_5354977545160465_04.jpg", "沈星回 · 逾界私心")
      ],
      imageCount: 2,
      galleryLayout: 1
    }
  };

  function normalizeEvent(event) {
    const normalized = Object.assign({}, event);
    const rawTitle = String(normalized.title || "");
    const sourceTitle = rawTitle.replace(/^\[复刻\]/, "");
    const isSingleDayPool = normalized.mode === "单人日卡池";
    const isSingleDayReplay =
      isSingleDayPool &&
      (normalized.remake || rawTitle.startsWith("[复刻]") || sourceTitle === "当海湮没于海");

    if (isSingleDayReplay) {
      normalized.title = `[复刻]${sourceTitle}`;
      normalized.mode = "单人日卡池复刻";
      normalized.subtitle = String(normalized.subtitle || "").replace(
        /单人日卡池(?!复刻)/,
        "单人日卡池复刻"
      );
      normalized.remake = true;
      normalized.tags = Array.from(
        new Set([
          ...(normalized.tags || []).filter(
            (tag) => tag !== "单人日卡池" && tag !== "单人日卡池复刻"
          ),
          "单人日卡池复刻",
          "复刻"
        ])
      );
    }

    return Object.assign(normalized, eventContentOverrides[normalized.id] || {});
  }

  function expandMiyueEvents(items = []) {
    return items.map((item, index) => {
      const memories = Array.from(new Set(item.memories || []));
      const memoryTitles = memories.map((memory) => {
        const separatorIndex = memory.indexOf("·");
        return separatorIndex === -1 ? memory : memory.slice(separatorIndex + 1);
      });
      const characters = Array.from(
        new Set(memories.map((memory) => memory.split("·")[0]).filter(Boolean))
      );
      const remakeLabel = item.remake ? "往期密约思念 · 饰品 · 称号" : memories.join(" / ");
      const miyueTitle = `${item.remake ? "密约复刻" : "密约"}${
        memoryTitles.length ? `·${memoryTitles.join(" / ")}` : ""
      }`;
      const gallery = item.galleryFiles?.length
        ? item.galleryFiles
        : item.galleryPrefix
          ? Array.from({ length: item.imageCount || 0 }, (_, imageIndex) => ({
              src: `./assets/miyue-cards/${item.galleryPrefix}_${pad(imageIndex + 1)}.jpg`,
              label: imageIndex === 0 ? "活动公告" : `活动奖励展示 ${imageIndex + 1}`,
              fullWidth: imageIndex === 0
            }))
          : [];
      return {
        id: `miyue-${item.start}-${index + 1}`,
        title: item.title || miyueTitle,
        type: "special",
        mode: item.remake ? "密约限时复刻" : "密约任务",
        start: item.start,
        end: item.end,
        startAt: `${item.start}T05:00:00+08:00`,
        endAt: `${item.end}T04:59:00+08:00`,
        startTime: "05:00",
        endTime: "04:59",
        color: "#73737D",
        subtitle: remakeLabel,
        characters,
        primaryCharacter: null,
        filterGroup: "special",
        rulesText: null,
        isWelfare: false,
        remake: Boolean(item.remake),
        tags: item.remake
          ? ["密约", "限时复刻", ...memories]
          : ["密约", "四星思念", ...memories],
        summary: item.remake
          ? `「密约」限时复刻开放往期密约思念${memories.length ? `「${memories.join(
              "」「"
            )}」` : ""}、配套饰品与称号，部分奖励需要在未获得的情况下前往商城获取。`
          : `完成「密约」任务提升密约等级，可免费领取极空许愿券等日常奖励；解锁特别密约后，可获取 ${memories.join(
              "、"
            )} 等限定四星思念与配套饰品。`,
        advice: item.remake
          ? [
              "先确认已拥有的思念与饰品，避免重复购买。",
              "复刻时间与当期密约可能重叠，按获取优先级安排。"
            ]
          : [
              "日常密约奖励可免费领取，限定四星需按需解锁特别密约。",
              "活动周期较长，留意结束当天的 04:59 截止时间。"
            ],
        notes: item.remake
          ? "按官方微博「密约」公告补充，复刻期在日历中显示为 42% 半透明紫灰圆点。"
          : "按官方微博「密约」公告补充，日历中显示为半透明横杠。",
        sourceLabel: item.sourceLabel || null,
        sourceUrl: item.sourceUrl,
        sourcePostDate: item.sourcePostDate,
        imageCount: gallery.length,
        videoCount: 0,
        gallery,
        galleryLayout: item.galleryLayout || "miyue",
        calendarTone: item.remake ? "corner-dot" : "secondary",
        calendarBarColor: "#73737D",
        cornerDotColor: item.remake ? "#73737D" : null,
        sourceRow: null
      };
    });
  }

  const events = data.events
    .concat(
      data.supplementalEvents || [],
      data.storylineEvents || [],
      expandMiyueEvents(data.miyueEvents || [])
    )
    .map(normalizeEvent);
  let demoToday = startOfDay(new Date());
  const requestedDensity = new URLSearchParams(window.location.search).get("density");

  let viewDate = new Date(demoToday.getFullYear(), demoToday.getMonth(), 1);
  let selectedDate = new Date(demoToday);
  let activeFilter = "all";
  let pickerYear = viewDate.getFullYear();
  let calendarMode = "year";
  let yearSpan = 3;
  let yearViewStart = demoToday.getFullYear() - 2;
  let density = requestedDensity === "compact" ? "compact" : "comfortable";
  let currentEventId = null;
  let pullCardEventId = null;
  let pullScreenshotData = "";
  let pullCropOutput = "";
  let pullCropState = null;
  let pullCropDrag = null;
  let pullCropOutputTimer = null;
  let imageLightboxTrigger = null;
  let favoriteIds = readFavoritesFallback();
  let toastTimer = null;
  const PULL_CROP_ASPECT = 27 / 19;

  const elements = {
    topbar: document.querySelector(".topbar"),
    calendarPanel: document.querySelector(".calendar-panel"),
    floatingYearBar: document.getElementById("floatingYearBar"),
    floatingYearLabel: document.getElementById("floatingYearLabel"),
    floatingYearCount: document.getElementById("floatingYearCount"),
    workspace: document.querySelector(".workspace"),
    grid: document.getElementById("calendarGrid"),
    yearView: document.getElementById("yearView"),
    weekdayRow: document.getElementById("weekdayRow"),
    scrollHint: document.getElementById("scrollHint"),
    yearRangeSwitcher: document.getElementById("yearRangeSwitcher"),
    characterLegend: document.getElementById("characterLegend"),
    legendMixed: document.getElementById("legendMixed"),
    legendSolo: document.getElementById("legendSolo"),
    legendSpecial: document.getElementById("legendSpecial"),
    modeButtons: Array.from(document.querySelectorAll("[data-calendar-mode]")),
    yearSpanButtons: Array.from(document.querySelectorAll("[data-year-span]")),
    densityButtons: Array.from(document.querySelectorAll("[data-density]")),
    previousMonth: document.getElementById("previousMonth"),
    nextMonth: document.getElementById("nextMonth"),
    todayButton: document.getElementById("todayButton"),
    displayYear: document.getElementById("displayYear"),
    displayMonth: document.getElementById("displayMonth"),
    monthTitleButton: document.getElementById("monthTitleButton"),
    monthEventCount: document.getElementById("monthEventCount"),
    demoDateLabel: document.getElementById("demoDateLabel"),
    desktopAgenda: document.getElementById("desktopAgenda"),
    agendaTitle: document.getElementById("agendaTitle"),
    agendaWeekday: document.getElementById("agendaWeekday"),
    agendaList: document.getElementById("agendaList"),
    upcomingList: document.getElementById("upcomingList"),
    permanentNote: document.getElementById("permanentNote"),
    backdrop: document.getElementById("backdrop"),
    dateSheet: document.getElementById("dateSheet"),
    dateSheetTitle: document.getElementById("dateSheetTitle"),
    dateSheetSubtitle: document.getElementById("dateSheetSubtitle"),
    sheetAgendaList: document.getElementById("sheetAgendaList"),
    closeDateSheet: document.getElementById("closeDateSheet"),
    monthPicker: document.getElementById("monthPicker"),
    monthPickerTitle: document.getElementById("monthPickerTitle"),
    monthPickerGrid: document.getElementById("monthPickerGrid"),
    pickerPreviousYear: document.getElementById("pickerPreviousYear"),
    pickerNextYear: document.getElementById("pickerNextYear"),
    cancelMonthPicker: document.getElementById("cancelMonthPicker"),
    eventModal: document.getElementById("eventModal"),
    eventDetail: document.getElementById("eventDetail"),
    pullRecordModal: document.getElementById("pullRecordModal"),
    closePullRecord: document.getElementById("closePullRecord"),
    cancelPullRecord: document.getElementById("cancelPullRecord"),
    savePullCard: document.getElementById("savePullCard"),
    pullScreenshotInput: document.getElementById("pullScreenshotInput"),
    pullScreenshotName: document.getElementById("pullScreenshotName"),
    pullCropEditor: document.getElementById("pullCropEditor"),
    pullCropViewport: document.getElementById("pullCropViewport"),
    pullCropImage: document.getElementById("pullCropImage"),
    pullCropZoom: document.getElementById("pullCropZoom"),
    resetPullCrop: document.getElementById("resetPullCrop"),
    pullCountInput: document.getElementById("pullCountInput"),
    diamondInput: document.getElementById("diamondInput"),
    costInput: document.getElementById("costInput"),
    pullCardPreview: document.getElementById("pullCardPreview"),
    imageLightbox: document.getElementById("imageLightbox"),
    imageLightboxScroller: document.querySelector(".image-lightbox-scroller"),
    imageLightboxImage: document.getElementById("imageLightboxImage"),
    imageLightboxCaption: document.getElementById("imageLightboxCaption"),
    toast: document.getElementById("toast")
  };

  function parseDate(value) {
    if (value instanceof Date) return new Date(value.getFullYear(), value.getMonth(), value.getDate());
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function dateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function sameDay(first, second) {
    return dateKey(first) === dateKey(second);
  }

  function daysBetween(from, to) {
    return Math.round((startOfDay(to) - startOfDay(from)) / 86400000);
  }

  function weekdayLabel(date) {
    return `星期${["日", "一", "二", "三", "四", "五", "六"][date.getDay()]}`;
  }

  function monthRangeLabel(event) {
    const start = parseDate(event.start);
    const startTime = event.startTime ? ` ${event.startTime}` : "";
    if (event.permanent || !event.end) {
      return `${start.getFullYear()}.${pad(start.getMonth() + 1)}.${pad(start.getDate())}${startTime} — 长期`;
    }
    const end = parseDate(event.end);
    const endTime = event.endTime ? ` ${event.endTime}` : "";
    return `${start.getFullYear()}.${pad(start.getMonth() + 1)}.${pad(start.getDate())}${startTime} — ${end.getFullYear()}.${pad(end.getMonth() + 1)}.${pad(end.getDate())}${endTime}`;
  }

  function compactDateRange(event) {
    const start = parseDate(event.start);
    const startTime = event.startTime ? ` ${event.startTime}` : "";
    if (event.permanent || !event.end) {
      return event.startTime ? `长期开放 · ${event.startTime} 起` : "长期开放";
    }
    const end = parseDate(event.end);
    const endTime = event.endTime ? ` ${event.endTime}` : "";
    if (start.getFullYear() === end.getFullYear()) {
      return `${start.getMonth() + 1}.${start.getDate()}${startTime} – ${end.getMonth() + 1}.${end.getDate()}${endTime}`;
    }
    return `${start.getFullYear()}.${start.getMonth() + 1}.${start.getDate()}${startTime} – ${end.getFullYear()}.${end.getMonth() + 1}.${end.getDate()}${endTime}`;
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function isBirthdayRemakeEvent(event) {
    return /生日复刻(?:卡池|池)/.test(String(event.mode || ""));
  }

  function isBirthdayMonthlyEvent(event) {
    return String(event.mode || "").includes("生日月卡池");
  }

  function isRemakeEvent(event) {
    return Boolean(
      event.remake ||
        String(event.title || "").startsWith("[复刻]") ||
        String(event.mode || "").includes("复刻")
    );
  }

  function isSingleDayPoolReplayEvent(event) {
    return isRemakeEvent(event) && String(event.mode || "").startsWith("单人日卡池");
  }

  function isMonthlyPoolReplayEvent(event) {
    return isRemakeEvent(event) && String(event.mode || "").startsWith("单人月卡池");
  }

  function isFreeMonthlyEvent(event) {
    return String(event.mode || "").includes("免费月卡");
  }

  function dayEventPriority(event) {
    const mode = String(event.mode || "");
    const remake = isRemakeEvent(event);
    if (isMixedPoolEvent(event) && !remake) return 0;
    if (mode.startsWith("单人日卡池") && !remake) return 10;
    if (isBirthdayMonthlyEvent(event)) return 20;
    if (mode.startsWith("单人月卡池") && !remake) return 30;
    if (isBirthdayRemakeEvent(event)) return 40;
    if (isMixedPoolEvent(event) && remake) return 50;
    if (isSingleDayPoolReplayEvent(event)) return 60;
    if (isMonthlyPoolReplayEvent(event)) return 70;
    if (remake && !isMiyueEvent(event)) return 80;
    if (isFreeMonthlyEvent(event)) return 90;
    if (isMiyueEvent(event) && remake) return 100;
    if (isMiyueEvent(event)) return 120;
    return 110;
  }

  function calendarTypeFor(event) {
    return isBirthdayRemakeEvent(event) ? "solo" : event.type;
  }

  function categoryFor(event) {
    return data.categories[calendarTypeFor(event)] || data.categories.special;
  }

  function isMiyueEvent(event) {
    return event.calendarTone === "secondary" || event.calendarTone === "corner-dot";
  }

  function isMixedPoolEvent(event) {
    const title = String(event.title || "").replace(/^\[复刻\]/, "");
    return (
      event.filterGroup === "mixed" ||
      title === "倾慕臻礼" ||
      String(event.mode || "").includes("星谕罗盘")
    );
  }

  function isStorylineEvent(event) {
    return event.filterGroup === "storyline" || event.type === "storyline";
  }

  function isSpecialFilterEvent(event) {
    return (
      calendarTypeFor(event) === "special" &&
      !isMiyueEvent(event) &&
      !isMixedPoolEvent(event) &&
      !isStorylineEvent(event) &&
      event.filterGroup !== "free4" &&
      event.filterGroup !== "free5"
    );
  }

  function supportsPullCard(event) {
    const mode = String(event.mode || "");
    return !(
      event.filterGroup === "free4" ||
      event.filterGroup === "free5" ||
      event.filterGroup === "checkin" ||
      isStorylineEvent(event) ||
      isMiyueEvent(event) ||
      mode.includes("十日活动任务") ||
      mode.includes("签到") ||
      (event.title.includes("敖尹") && event.title.includes("取消"))
    );
  }

  function filterLabelFor(event) {
    const labels = {
      mixed: "混池",
      solo: "单人",
      free4: "四星签到",
      free5: "免费五星",
      miyue: "密约",
      checkin: "签到",
      storyline: "分线更新",
      special: "特别",
      permanent: "常驻开放"
    };
    if (isMiyueEvent(event)) return labels.miyue;
    if (isMixedPoolEvent(event)) return labels.mixed;
    if (isBirthdayRemakeEvent(event)) return labels.solo;
    return labels[event.filterGroup || event.type] || categoryFor(event).label;
  }

  function eventOverlapsDay(event, day) {
    if (event.permanent) return false;
    const start = parseDate(event.start);
    const end = event.end ? parseDate(event.end) : start;
    return startOfDay(day) >= startOfDay(start) && startOfDay(day) <= startOfDay(end);
  }

  function eventsForDay(day, includeHidden = false) {
    return events
      .filter((event) => event.type !== "permanent")
      .filter((event) => includeHidden || matchesFilter(event))
      .filter((event) => eventOverlapsDay(event, day))
      .sort((first, second) => {
        const categoryOrder = { mixed: 0, solo: 1, special: 2 };
        const firstPriority = dayEventPriority(first);
        const secondPriority = dayEventPriority(second);
        const firstType = calendarTypeFor(first);
        const secondType = calendarTypeFor(second);
        return (
          firstPriority - secondPriority ||
          (categoryOrder[firstType] == null ? 9 : categoryOrder[firstType]) -
            (categoryOrder[secondType] == null ? 9 : categoryOrder[secondType]) ||
          (Number.isFinite(first.displayOrder) ? first.displayOrder : 0) -
            (Number.isFinite(second.displayOrder) ? second.displayOrder : 0) ||
          parseDate(first.start) - parseDate(second.start)
        );
      });
  }

  function calendarEventsForDisplay(dayEvents, maxVisible, primarySlots) {
    const primaryEvents = dayEvents.filter((event) => event.calendarTone !== "secondary");
    const secondaryEvents = dayEvents.filter((event) => event.calendarTone === "secondary");
    const visibleEvents = primaryEvents.slice(0, primarySlots);

    visibleEvents.push(
      ...secondaryEvents.slice(0, Math.min(secondaryEvents.length, Math.max(1, maxVisible - primarySlots)))
    );

    if (visibleEvents.length < maxVisible) {
      visibleEvents.push(...primaryEvents.slice(primarySlots, primarySlots + maxVisible - visibleEvents.length));
    }
    if (visibleEvents.length < maxVisible) {
      visibleEvents.push(...secondaryEvents.slice(1, 1 + maxVisible - visibleEvents.length));
    }

    return visibleEvents.slice(0, maxVisible);
  }

  function matchesFilter(event) {
    if (activeFilter === "all") return true;
    if (activeFilter === "mixed") return isMixedPoolEvent(event);
    if (activeFilter === "solo") {
      return event.filterGroup === "solo" || calendarTypeFor(event) === "solo";
    }
    if (activeFilter === "free4") return event.filterGroup === "free4";
    if (activeFilter === "free5") {
      return event.filterGroup === "free5" || isStorylineEvent(event);
    }
    if (activeFilter === "miyue") return isMiyueEvent(event);
    if (activeFilter === "storyline") return isStorylineEvent(event);
    if (activeFilter === "special") return isSpecialFilterEvent(event);
    return (event.filterGroup || event.type) === activeFilter;
  }

  function eventsInMonth(year, month, includeHidden = false) {
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    return events
      .filter((event) => event.type !== "permanent")
      .filter((event) => includeHidden || matchesFilter(event))
      .filter((event) => {
        const start = parseDate(event.start);
        const end = event.end ? parseDate(event.end) : start;
        return startOfDay(start) <= last && startOfDay(end) >= first;
      });
  }

  function statusFor(event, date = demoToday) {
    if (event.permanent || !event.end) return { text: "长期开放", tone: "permanent" };
    const start = event.startAt ? new Date(event.startAt) : parseDate(event.start);
    const end = event.endAt ? new Date(event.endAt) : parseDate(event.end);
    const target = date === demoToday ? new Date() : new Date(date);

    if (target < start) {
      const minutes = Math.max(1, Math.ceil((start - target) / 60000));
      if (minutes < 60) return { text: `${minutes} 分钟后开始`, tone: "upcoming" };
      if (minutes < 1440) return { text: `${Math.ceil(minutes / 60)} 小时后开始`, tone: "upcoming" };
      return { text: `${Math.ceil(minutes / 1440)} 天后开始`, tone: "upcoming" };
    }

    if (target > end) return { text: "已结束", tone: "ended" };

    const minutes = Math.max(1, Math.ceil((end - target) / 60000));
    if (minutes < 60) return { text: `剩 ${minutes} 分钟`, tone: "urgent" };
    if (minutes < 1440) return { text: `剩 ${Math.ceil(minutes / 60)} 小时`, tone: "urgent" };
    return { text: `剩 ${Math.ceil(minutes / 1440)} 天`, tone: "active" };
  }

  function eventChip(event) {
    const secondaryClass = event.calendarTone === "secondary" ? " is-secondary" : "";
    return `
      <span class="event-chip${secondaryClass}" style="--chip-color:${escapeHtml(
        event.color
      )}" title="${escapeHtml(event.title)}">
        <span>${escapeHtml(event.title)}</span>
      </span>
    `;
  }

  function isWelfareEvent(event) {
    return Boolean(event.isWelfare);
  }

  function isCornerMarkedEvent(event) {
    return isWelfareEvent(event) || event.calendarTone === "corner-dot";
  }

  function cornerDotsMarkup(cornerEvents) {
    if (!cornerEvents.length) return "";
    const rows = [];
    for (let index = 0; index < cornerEvents.length; index += 2) {
      rows.push(cornerEvents.slice(index, index + 2));
    }
    const dots = rows
      .map(
        (rowEvents) =>
          `<span class="welfare-corner-row">${rowEvents
            .map((event) => {
              const remakeClass =
                event.calendarTone === "corner-dot" ? " is-miyue-remake" : "";
              return `<i class="welfare-corner-dot${remakeClass}" style="--welfare-color:${escapeHtml(
                event.cornerDotColor || (event.mode === "十日活动任务" ? "#FFC408" : event.color)
              )}"></i>`;
            })
            .join("")}</span>`
      )
      .join("");
    return `<span class="welfare-corner-dots" title="${escapeHtml(
      cornerEvents.map((event) => event.title).join("、")
    )}" aria-hidden="true">${dots}</span>`;
  }

  function agendaItem(event) {
    const status = statusFor(event);
    const secondaryClass = event.calendarTone === "secondary" ? " is-secondary" : "";
    const miyueClass =
      event.calendarTone === "secondary" || event.calendarTone === "corner-dot"
        ? " is-miyue"
        : "";
    return `
      <button class="agenda-item${secondaryClass}${miyueClass}" type="button" data-event-id="${escapeHtml(
        event.id
      )}" style="--event-color:${escapeHtml(event.color)}">
        <span class="agenda-type-line">
          <span>${escapeHtml(event.mode)}</span>
          <span class="status-text">${escapeHtml(status.text)}</span>
        </span>
        <h3>${escapeHtml(event.title)}</h3>
        <span class="agenda-meta">
          <span>${escapeHtml(compactDateRange(event))}</span>
          <span class="tag">${escapeHtml(
            event.primaryCharacter ||
              (calendarTypeFor(event) === "solo" ? "单人卡池" : filterLabelFor(event))
          )}</span>
        </span>
      </button>
    `;
  }

  function emptyAgenda(compact = false) {
    return `
      <div class="empty-state" style="${compact ? "min-height:140px" : ""}">
        <div class="empty-state-inner">
          <span class="empty-state-mark" aria-hidden="true"></span>
          <strong>这一天还没有卡池</strong>
          <p>${
            calendarMode === "year"
              ? "继续上下滚动查看其他月份，或切换筛选条件。"
              : "左右滑动查看其他月份，或切换筛选条件。"
          }</p>
        </div>
      </div>
    `;
  }

  function renderCalendar() {
    syncModeControls();
    elements.demoDateLabel.textContent = `今天 ${demoToday.getMonth() + 1} 月 ${demoToday.getDate()} 日`;

    if (calendarMode === "year") {
      renderYearView();
    } else {
      renderMonthView();
    }

    renderAgenda();
    renderUpcoming();
    updateAmbient();
    updateFloatingYearBar();
  }

  function renderMonthView() {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstOfMonth = new Date(year, month, 1);
    const mondayOffset = (firstOfMonth.getDay() + 6) % 7;
    const gridStart = addDays(firstOfMonth, -mondayOffset);
    const monthEvents = eventsInMonth(year, month);

    elements.yearView.hidden = true;
    elements.grid.hidden = false;
    elements.weekdayRow.hidden = false;
    elements.yearRangeSwitcher.hidden = true;
    elements.displayYear.textContent = `${year}年`;
    elements.displayMonth.textContent = `${month + 1}月`;
    elements.monthEventCount.textContent = `${monthEvents.length} 个活动`;
    setScrollHint("左右滑动切换月份");

    const markup = [];
    for (let index = 0; index < 42; index += 1) {
      const day = addDays(gridStart, index);
      const dayEvents = eventsForDay(day);
      const poolEvents = dayEvents.filter((event) => !isCornerMarkedEvent(event));
      const cornerEvents = dayEvents.filter(isCornerMarkedEvent);
      const outside = day.getMonth() !== month;
      const selected = sameDay(day, selectedDate);
      const today = sameDay(day, demoToday);
      const accent =
        (poolEvents[0] && poolEvents[0].color) || (selected ? palette.slate : palette.lavender);
      const labelParts = [
        `${day.getMonth() + 1}月${day.getDate()}日`,
        weekdayLabel(day),
        dayEvents.length ? dayEvents.map((event) => event.title).join("、") : "没有卡池"
      ];
      const displayEvents = calendarEventsForDisplay(poolEvents, 2, 1);
      const chips = displayEvents.map(eventChip).join("");
      const more =
        poolEvents.length > displayEvents.length
          ? `<span class="event-more">+${poolEvents.length - displayEvents.length}</span>`
          : "";
      const cornerDots = cornerDotsMarkup(cornerEvents);

      markup.push(`
        <button
          class="calendar-day${outside ? " is-outside" : ""}${selected ? " is-selected" : ""}${
            today ? " is-today" : ""
          }"
          type="button"
          role="gridcell"
          data-date="${dateKey(day)}"
          aria-label="${escapeHtml(labelParts.join("，"))}"
          aria-selected="${selected}"
          style="--day-accent:${escapeHtml(accent)}"
        >
          <span class="day-number">${day.getDate()}</span>
          ${cornerDots}
          <span class="day-events">${chips}${more}</span>
        </button>
      `);
    }

    elements.grid.innerHTML = markup.join("");
  }

  function renderYearView() {
    const endYear = yearViewStart + yearSpan - 1;
    const years = Array.from({ length: yearSpan }, (_, index) => yearViewStart + index);
    const visibleEvents = new Set();
    const firstVisibleDay = new Date(yearViewStart, 0, 1);
    const lastVisibleDay = new Date(yearViewStart + yearSpan, 0, 0);

    events
      .filter((event) => event.type === "permanent")
      .filter(matchesFilter)
      .filter((event) => {
        const start = parseDate(event.start);
        const end = event.end ? parseDate(event.end) : null;
        return start <= lastVisibleDay && (!end || end >= firstVisibleDay);
      })
      .forEach((event) => visibleEvents.add(event.id));

    elements.grid.hidden = true;
    elements.weekdayRow.hidden = true;
    elements.yearView.hidden = false;
    elements.yearRangeSwitcher.hidden = false;
    elements.displayYear.textContent =
      yearSpan === 1 ? `${yearViewStart}年` : `${yearViewStart} — ${endYear}`;
    elements.displayMonth.textContent = "全年";
    setScrollHint("上下滚动浏览完整档期");

    elements.yearView.innerHTML = years
      .map((year) => {
        const months = Array.from({ length: 12 }, (_, month) => {
          const monthEvents = eventsInMonth(year, month);
          monthEvents.forEach((event) => visibleEvents.add(event.id));
          return renderYearMonth(year, month, monthEvents);
        }).join("");

        const yearEventCount = yearsEventCount(year);
        return `
          <section class="year-block" id="year-${year}" aria-labelledby="year-title-${year}">
            <header class="year-block-heading">
              <div>
                <span class="year-kicker">YEAR IN VIEW</span>
                <h2 id="year-title-${year}">${year}</h2>
              </div>
              <span class="year-event-count">${yearEventCount} 个活动</span>
            </header>
            <div class="year-months">${months}</div>
          </section>
        `;
      })
      .join("");

    elements.monthEventCount.textContent = `${visibleEvents.size} 个活动`;
  }

  function yearsEventCount(year) {
    const first = new Date(year, 0, 1);
    const last = new Date(year, 11, 31);
    const permanentCount = events.filter((event) => {
      if (event.type !== "permanent") return false;
      if (!matchesFilter(event)) return false;
      const start = parseDate(event.start);
      return start >= first && start <= last;
    }).length;
    return eventsInMonthRange(year, 0, year, 11).length + permanentCount;
  }

  function eventsInMonthRange(startYear, startMonth, endYear, endMonth) {
    const first = new Date(startYear, startMonth, 1);
    const last = new Date(endYear, endMonth + 1, 0);
    return events
      .filter((event) => event.type !== "permanent")
      .filter(matchesFilter)
      .filter((event) => {
        const start = parseDate(event.start);
        const end = event.end ? parseDate(event.end) : start;
        return startOfDay(start) <= last && startOfDay(end) >= first;
      });
  }

  function renderYearMonth(year, month, monthEvents) {
    const firstOfMonth = new Date(year, month, 1);
    const mondayOffset = (firstOfMonth.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];

    for (let index = 0; index < mondayOffset; index += 1) {
      cells.push('<span class="year-day is-blank" aria-hidden="true"></span>');
    }

    for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber += 1) {
      const day = new Date(year, month, dayNumber);
      const dayEvents = eventsForDay(day);
      const poolEvents = dayEvents.filter((event) => !isCornerMarkedEvent(event));
      const cornerEvents = dayEvents.filter(isCornerMarkedEvent);
      const selected = sameDay(day, selectedDate);
      const today = sameDay(day, demoToday);
      const accent =
        (poolEvents[0] && poolEvents[0].color) || (selected ? palette.slate : palette.lavender);
      const labelParts = [
        `${month + 1}月${dayNumber}日`,
        weekdayLabel(day),
        dayEvents.length ? dayEvents.map((event) => event.title).join("、") : "没有卡池"
      ];
      const displayEvents = calendarEventsForDisplay(poolEvents, 4, 3);
      const bars = displayEvents
        .map(
          (event) => {
            const secondaryClass = event.calendarTone === "secondary" ? " is-secondary" : "";
            return `<span class="year-event-bar${secondaryClass}" style="--chip-color:${escapeHtml(
              event.calendarBarColor || event.color
            )}" title="${escapeHtml(event.title)}"></span>`;
          }
        )
        .join("");
      const more =
        poolEvents.length > displayEvents.length
          ? `<span class="year-event-more">+${poolEvents.length - displayEvents.length}</span>`
          : "";
      const cornerDots = cornerDotsMarkup(cornerEvents);
      const tabIndex = dayEvents.length || selected || today ? "0" : "-1";

      cells.push(`
        <button
          class="year-day${selected ? " is-selected" : ""}${today ? " is-today" : ""}"
          type="button"
          role="gridcell"
          data-date="${dateKey(day)}"
          tabindex="${tabIndex}"
          aria-label="${escapeHtml(labelParts.join("，"))}"
          style="--day-accent:${escapeHtml(accent)}"
        >
          <span class="year-day-number">${dayNumber}</span>
          ${cornerDots}
          <span class="year-day-events">${bars}${more}</span>
        </button>
      `);
    }

    while (cells.length % 7 !== 0) {
      cells.push('<span class="year-day is-blank" aria-hidden="true"></span>');
    }

    return `
      <article class="year-month" aria-labelledby="year-month-${year}-${month}">
        <header class="year-month-heading">
          <h3 id="year-month-${year}-${month}">${month + 1}月</h3>
          <span>${monthEvents.length ? `${monthEvents.length} 个活动` : "暂无卡池"}</span>
        </header>
        <div class="mini-weekday-row" aria-hidden="true">
          <span>一</span><span>二</span><span>三</span><span>四</span>
          <span>五</span><span>六</span><span>日</span>
        </div>
        <div class="mini-calendar-grid" role="grid" aria-label="${year}年${month + 1}月">
          ${cells.join("")}
        </div>
      </article>
    `;
  }

  function setScrollHint(text) {
    elements.scrollHint.lastChild.textContent = ` ${text}`;
  }

  function updateFloatingYearBar() {
    if (calendarMode !== "year" || elements.dateSheet.hidden === false) {
      elements.floatingYearBar.classList.remove("is-visible");
      return;
    }

    const panelRect = elements.calendarPanel.getBoundingClientRect();
    const topbarRect = elements.topbar.getBoundingClientRect();
    const top = topbarRect.bottom + 10;
    const activeYear = Array.from(elements.yearView.querySelectorAll(".year-block")).find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= top + 2 && rect.bottom > top + 78;
    });

    elements.floatingYearBar.style.left = `${panelRect.left + 12}px`;
    elements.floatingYearBar.style.top = `${top}px`;
    elements.floatingYearBar.style.width = `${Math.max(0, panelRect.width - 24)}px`;

    if (!activeYear) {
      elements.floatingYearBar.classList.remove("is-visible");
      return;
    }

    elements.floatingYearLabel.textContent = activeYear.id.replace("year-", "");
    const activeYearCount = activeYear.querySelector(".year-event-count");
    elements.floatingYearCount.textContent = activeYearCount ? activeYearCount.textContent : "";
    elements.floatingYearBar.classList.add("is-visible");
  }

  function syncModeControls() {
    const yearMode = calendarMode === "year";
    document.body.dataset.density = density;
    elements.workspace.classList.toggle("is-year-mode", yearMode);
    elements.modeButtons.forEach((button) => {
      const selected = button.dataset.calendarMode === calendarMode;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    elements.yearSpanButtons.forEach((button) => {
      const selected = Number(button.dataset.yearSpan) === yearSpan;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    elements.densityButtons.forEach((button) => {
      const selected = button.dataset.density === density;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  function renderCharacterLegend() {
    const characterColors = Object.values(data.characters).map((character) => character.color);
    elements.legendMixed.style.backgroundColor = data.categories.mixed.color;
    elements.legendSolo.style.background = `linear-gradient(135deg, ${characterColors.join(", ")})`;
    elements.legendSpecial.style.backgroundColor = data.categories.special.color;
    elements.characterLegend.innerHTML = Object.entries(data.characters)
      .map(
        ([name, character]) => `
          <span class="legend-item">
            <i class="legend-dot" style="background:${escapeHtml(character.color)}"></i>
            ${escapeHtml(name)}
          </span>
        `
      )
      .join("");
  }

  function renderAgenda() {
    const dayEvents = eventsForDay(selectedDate);
    const dateLabel = `${selectedDate.getMonth() + 1}月${selectedDate.getDate()}日`;
    elements.agendaTitle.textContent = dateLabel;
    elements.agendaWeekday.textContent = weekdayLabel(selectedDate);
    elements.dateSheetTitle.textContent = dateLabel;
    elements.dateSheetSubtitle.textContent = `${weekdayLabel(selectedDate)} · ${
      dayEvents.length ? `${dayEvents.length} 个卡池` : "暂无卡池"
    }`;

    const agendaMarkup = dayEvents.length ? dayEvents.map(agendaItem).join("") : emptyAgenda();
    elements.agendaList.innerHTML = agendaMarkup;
    elements.sheetAgendaList.innerHTML = dayEvents.length ? dayEvents.map(agendaItem).join("") : emptyAgenda(true);

    const permanent = events.find((event) => event.type === "permanent");
    elements.permanentNote.hidden = !permanent;
    if (permanent) {
      elements.permanentNote.dataset.eventId = permanent.id;
      elements.permanentNote.innerHTML = `
        <span class="permanent-symbol" aria-hidden="true"></span>
        <div>
          <small>常驻开放</small>
          <strong>${escapeHtml(permanent.title)}</strong>
        </div>
        <span class="permanent-state">长期</span>
      `;
    }
  }

  function renderUpcoming() {
    const currentAndUpcoming = events
      .filter(matchesFilter)
      .filter((event) => {
        if (event.type === "permanent") return true;
        const end = event.end ? parseDate(event.end) : parseDate(event.start);
        return end >= startOfDay(demoToday);
      })
      .sort((first, second) => {
        const firstStart = parseDate(first.start);
        const secondStart = parseDate(second.start);
        const today = startOfDay(demoToday);
        const firstActive = firstStart <= today;
        const secondActive = secondStart <= today;
        if (firstActive !== secondActive) return firstActive ? -1 : 1;
        if (firstActive) {
          return parseDate(first.end || first.start) - parseDate(second.end || second.start);
        }
        return firstStart - secondStart;
      })
      .slice(0, 3);

    if (!currentAndUpcoming.length) {
      elements.upcomingList.innerHTML = emptyAgenda(true);
      return;
    }

    elements.upcomingList.innerHTML = currentAndUpcoming
      .map((event) => {
        const start = parseDate(event.start);
        return `
          <button class="upcoming-card" type="button" data-event-id="${escapeHtml(
            event.id
          )}" style="--event-color:${escapeHtml(event.color)}">
            <span class="upcoming-card-top">
              <span>${escapeHtml(event.mode)}</span>
              <span>${escapeHtml(statusFor(event).text)}</span>
            </span>
            <h3>${escapeHtml(event.title)}</h3>
            <p>${escapeHtml(event.subtitle)}</p>
            <span class="upcoming-card-footer">
              <span class="upcoming-date">
                ${start.getMonth() + 1}月${start.getDate()}日
                <i></i>
                ${escapeHtml(compactDateRange(event).split(" – ")[1] || "长期")}
              </span>
              <span class="round-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M14 7l5 5-5 5"/></svg>
              </span>
            </span>
          </button>
        `;
      })
      .join("");
  }

  function updateAmbient() {
    document.body.style.setProperty("--ambient-one", palette.lavenderLight);
    document.body.style.setProperty("--ambient-two", palette.plumMist);
    document.body.style.setProperty("--ambient-three", palette.rose);
  }

  function selectDay(date) {
    selectedDate = startOfDay(parseDate(date));
    renderCalendar();
    if (window.matchMedia("(max-width: 760px)").matches) {
      openDateSheet();
    }
  }

  function changeMonth(delta) {
    viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + delta, 1);
    pickerYear = viewDate.getFullYear();
    chooseMonthDefaultDay();
    renderCalendar();
  }

  function changeYear(delta) {
    yearViewStart += delta * yearSpan;
    ensureSelectionWithinYears();
    renderCalendar();
  }

  function shiftPeriod(delta) {
    if (calendarMode === "year") changeYear(delta);
    else changeMonth(delta);
  }

  function setCalendarMode(mode) {
    calendarMode = mode;
    if (mode === "year") {
      yearViewStart = viewDate.getFullYear() - (yearSpan - 1);
      ensureSelectionWithinYears();
    } else {
      viewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
      pickerYear = viewDate.getFullYear();
    }
    renderCalendar();
  }

  function setYearSpan(span) {
    yearSpan = span;
    ensureSelectionWithinYears();
    renderCalendar();
  }

  function ensureSelectionWithinYears() {
    const first = new Date(yearViewStart, 0, 1);
    const last = new Date(yearViewStart + yearSpan, 0, 0);
    if (selectedDate < first || selectedDate > last) {
      const nextEvent = events
        .filter((event) => event.type !== "permanent" && matchesFilter(event))
        .map((event) => ({
          start: parseDate(event.start),
          end: event.end ? parseDate(event.end) : parseDate(event.start)
        }))
        .filter((event) => event.start <= last && event.end >= first)
        .sort((firstEvent, secondEvent) => firstEvent.start - secondEvent.start)[0];
      selectedDate = nextEvent ? (nextEvent.start < first ? first : nextEvent.start) : first;
    }
  }

  function chooseMonthDefaultDay() {
    const first = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
    const last = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
    let candidate = first;
    for (let day = 1; day <= last.getDate(); day += 1) {
      const current = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
      if (eventsForDay(current).length) {
        candidate = current;
        break;
      }
    }
    selectedDate = candidate;
  }

  function goToDemoToday() {
    demoToday = startOfDay(new Date());
    viewDate = new Date(demoToday.getFullYear(), demoToday.getMonth(), 1);
    selectedDate = new Date(demoToday);
    yearViewStart = demoToday.getFullYear() - (yearSpan - 1);
    pickerYear = viewDate.getFullYear();
    renderCalendar();
    showToast("已回到今天");
  }

  function refreshSystemDate() {
    const nextToday = startOfDay(new Date());
    if (sameDay(nextToday, demoToday)) return;

    const wasFollowingToday = sameDay(selectedDate, demoToday);
    demoToday = nextToday;
    if (wasFollowingToday) {
      viewDate = new Date(demoToday.getFullYear(), demoToday.getMonth(), 1);
      selectedDate = new Date(demoToday);
      yearViewStart = demoToday.getFullYear() - (yearSpan - 1);
    }
    renderCalendar();
  }

  function scheduleMidnightRefresh() {
    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      1
    );
    window.setTimeout(() => {
      refreshSystemDate();
      scheduleMidnightRefresh();
    }, Math.max(1000, nextMidnight.getTime() - now.getTime()));
  }

  function openDateSheet() {
    elements.dateSheet.hidden = false;
    elements.backdrop.hidden = false;
    document.body.classList.add("is-modal-open");
    window.setTimeout(() => elements.closeDateSheet.focus(), 20);
  }

  function closeDateSheet() {
    elements.dateSheet.hidden = true;
    elements.backdrop.hidden = true;
    document.body.classList.remove("is-modal-open");
  }

  function renderMonthPicker() {
    elements.monthPickerTitle.textContent = `${pickerYear}年`;
    elements.monthPickerGrid.innerHTML = Array.from({ length: 12 }, (_, month) => {
      const hasEvents = eventsInMonth(pickerYear, month, true).length > 0;
      const current = pickerYear === viewDate.getFullYear() && month === viewDate.getMonth();
      return `
        <button
          class="month-choice${current ? " is-current" : ""}${hasEvents ? " has-events" : ""}"
          type="button"
          data-picker-month="${month}"
          aria-label="${pickerYear}年${month + 1}月${hasEvents ? "，有卡池" : "，暂无卡池"}"
        >${month + 1}月</button>
      `;
    }).join("");
  }

  function openMonthPicker() {
    pickerYear = calendarMode === "year" ? yearViewStart : viewDate.getFullYear();
    renderMonthPicker();
    elements.monthPicker.hidden = false;
    document.body.classList.add("is-modal-open");
  }

  function closeMonthPicker() {
    elements.monthPicker.hidden = true;
    document.body.classList.remove("is-modal-open");
  }

  function chooseMonth(month) {
    viewDate = new Date(pickerYear, month, 1);
    calendarMode = "month";
    chooseMonthDefaultDay();
    renderCalendar();
    closeMonthPicker();
  }

  function eventHero(event) {
    const favorite = favoriteIds.includes(event.id);
    const character =
      event.primaryCharacter || (event.characters && event.characters.length === 1 ? event.characters[0] : "");
    return `
      <header class="event-hero">
        <div class="event-hero-top">
          <button class="glass-action" type="button" data-close-event aria-label="关闭详情">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <div class="hero-actions">
            ${
              supportsPullCard(event)
                ? `<button
                    class="glass-action pull-card-action"
                    type="button"
                    data-pull-card-id="${escapeHtml(event.id)}"
                    aria-label="制作抽数卡片"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 7.5h3l1.2-2h7.6l1.2 2h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z"/>
                      <circle cx="12" cy="13" r="3.2"/>
                    </svg>
                    <span>抽数卡片</span>
                  </button>`
                : ""
            }
            <button
              class="glass-action${favorite ? " is-favorite" : ""}"
              type="button"
              data-favorite-id="${escapeHtml(event.id)}"
              aria-label="${favorite ? "取消收藏" : "收藏卡池"}"
              aria-pressed="${favorite}"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>
              <span>${favorite ? "已收藏" : "收藏"}</span>
            </button>
          </div>
        </div>
        <div class="event-hero-copy">
          <span class="hero-type">${escapeHtml(categoryFor(event).label)} · ${escapeHtml(event.mode)}</span>
          <h2 id="eventDetailTitle">${escapeHtml(event.title)}</h2>
          ${character ? `<p class="hero-character-pill">${escapeHtml(character)}</p>` : ""}
        </div>
      </header>
    `;
  }

  function eventGalleryMarkup(event) {
    if (!event.gallery || !event.gallery.length) return "";
    const numericLayout = [2, 3, 4, 5].includes(event.galleryLayout) ? event.galleryLayout : 1;
    const layout =
      event.galleryLayout === "pair-then-wide"
        ? "pair-then-wide"
        : event.galleryLayout === "miyue"
          ? "miyue"
          : numericLayout;
    return `
      <section class="event-gallery-section" aria-labelledby="eventGalleryTitle">
        <h3 id="eventGalleryTitle">${escapeHtml(event.title)}</h3>
        <div class="event-gallery gallery-${layout}">
          ${event.gallery
            .map((image) => {
              const imageLabel = image.label
                ? `${event.title} · ${image.label}`
                : event.title;
              const itemClass = image.fullWidth ? " is-full-width" : "";
              return `
                <span class="event-gallery-item${itemClass}">
                  <img
                    class="event-gallery-image"
                    src="${escapeHtml(image.src)}"
                    alt="${escapeHtml(imageLabel)}"
                    data-gallery-src="${escapeHtml(image.src)}"
                    data-gallery-label="${escapeHtml(imageLabel)}"
                    role="button"
                    tabindex="0"
                    aria-label="${escapeHtml(imageLabel)}"
                    aria-haspopup="dialog"
                    loading="lazy"
                  />
                </span>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  function formatCardNumber(value, decimals, minimumDecimals) {
    if (value === "" || value == null) return "—";
    const number = Number(value);
    if (!Number.isFinite(number)) return "—";
    const maximumFractionDigits = decimals || 0;
    return number.toLocaleString("zh-CN", {
      minimumFractionDigits: minimumDecimals == null ? maximumFractionDigits : minimumDecimals,
      maximumFractionDigits
    });
  }

  function pullCardValues() {
    return {
      pulls: elements.pullCountInput.value.trim(),
      diamonds: elements.diamondInput.value.trim(),
      cost: elements.costInput.value.trim()
    };
  }

  function getPullCropGeometry() {
    const image = elements.pullCropImage;
    const viewport = elements.pullCropViewport;
    if (!pullCropState || !image.naturalWidth || !image.naturalHeight) return null;

    const stageWidth = viewport.clientWidth;
    const stageHeight = viewport.clientHeight;
    if (!stageWidth || !stageHeight) return null;

    const coverScale = Math.max(stageWidth / image.naturalWidth, stageHeight / image.naturalHeight);
    const scale = coverScale * pullCropState.zoom;
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    const maxOffsetX = Math.max(0, (drawWidth - stageWidth) / 2);
    const maxOffsetY = Math.max(0, (drawHeight - stageHeight) / 2);

    pullCropState.offsetX = Math.max(-maxOffsetX, Math.min(maxOffsetX, pullCropState.offsetX));
    pullCropState.offsetY = Math.max(-maxOffsetY, Math.min(maxOffsetY, pullCropState.offsetY));

    const imageLeft = (stageWidth - drawWidth) / 2 + pullCropState.offsetX;
    const imageTop = (stageHeight - drawHeight) / 2 + pullCropState.offsetY;
    const sourceX = Math.max(0, Math.min(image.naturalWidth, -imageLeft / scale));
    const sourceY = Math.max(0, Math.min(image.naturalHeight, -imageTop / scale));
    const sourceWidth = Math.min(image.naturalWidth - sourceX, stageWidth / scale);
    const sourceHeight = Math.min(image.naturalHeight - sourceY, stageHeight / scale);

    return {
      stageWidth,
      stageHeight,
      drawWidth,
      drawHeight,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight
    };
  }

  function applyPullCropTransform() {
    const geometry = getPullCropGeometry();
    if (!geometry) return null;
    elements.pullCropImage.style.width = `${geometry.drawWidth}px`;
    elements.pullCropImage.style.height = `${geometry.drawHeight}px`;
    elements.pullCropImage.style.transform =
      `translate(calc(-50% + ${pullCropState.offsetX}px), calc(-50% + ${pullCropState.offsetY}px))`;
    return geometry;
  }

  function drawPullCrop(context, x, y, width, height) {
    const geometry = getPullCropGeometry();
    if (!geometry) return false;
    context.drawImage(
      elements.pullCropImage,
      geometry.sourceX,
      geometry.sourceY,
      geometry.sourceWidth,
      geometry.sourceHeight,
      x,
      y,
      width,
      height
    );
    return true;
  }

  function updatePullCropOutput() {
    window.clearTimeout(pullCropOutputTimer);
    if (!pullCropState) return;
    const canvas = document.createElement("canvas");
    canvas.width = 760;
    canvas.height = Math.round(canvas.width / PULL_CROP_ASPECT);
    const context = canvas.getContext("2d");
    if (!context || !drawPullCrop(context, 0, 0, canvas.width, canvas.height)) return;
    pullCropOutput = canvas.toDataURL("image/jpeg", 0.92);
    renderPullCardPreview();
  }

  function schedulePullCropOutput() {
    window.clearTimeout(pullCropOutputTimer);
    pullCropOutputTimer = window.setTimeout(updatePullCropOutput, 70);
  }

  function resetPullCrop() {
    if (!pullCropState) return;
    pullCropState.zoom = 1;
    pullCropState.offsetX = 0;
    pullCropState.offsetY = 0;
    elements.pullCropZoom.value = "1";
    applyPullCropTransform();
    updatePullCropOutput();
  }

  function syncPullSaveState(isSaving) {
    const values = pullCardValues();
    const pulls = Number(values.pulls);
    elements.savePullCard.disabled =
      Boolean(isSaving) ||
      !pullScreenshotData ||
      !pullCropOutput ||
      values.pulls === "" ||
      !Number.isFinite(pulls) ||
      pulls <= 0;
    elements.savePullCard.textContent = isSaving ? "正在生成…" : "保存卡片";
  }

  function renderPullCardPreview() {
    const event = events.find((item) => item.id === pullCardEventId);
    if (!event) {
      elements.pullCardPreview.innerHTML = "";
      syncPullSaveState(false);
      return;
    }

    const values = pullCardValues();
    const pulls = Number(values.pulls);
    const cost = Number(values.cost);
    const average =
      values.pulls !== "" && values.cost !== "" && Number.isFinite(pulls) && pulls > 0 && Number.isFinite(cost)
        ? `约 ¥${formatCardNumber(cost / pulls, 2)} / 抽`
        : "填写数据后实时预览";
    const character =
      event.primaryCharacter || (event.characters && event.characters.length === 1 ? event.characters[0] : "");
    const previewImage = pullCropOutput || pullScreenshotData;
    const imageLayer = previewImage
      ? `<img class="pull-card-shot" src="${escapeHtml(previewImage)}" alt="裁切后的游戏截图" />`
      : '<div class="pull-card-placeholder">上传游戏截图<br /><small>作为卡片主画面</small></div>';

    elements.pullCardPreview.innerHTML = `
      <article class="pull-card-face" style="--card-accent:${escapeHtml(event.color)}">
        <div class="pull-card-visual">${imageLayer}</div>
        <div class="pull-card-body">
          <div class="pull-card-heading">
            <div>
              <p>临空日历 · PULL RECORD</p>
              <h3>${escapeHtml(event.title)}</h3>
            </div>
            ${character ? `<span>${escapeHtml(character)}</span>` : ""}
          </div>
          <p class="pull-card-period">${escapeHtml(compactDateRange(event))}</p>
          <div class="pull-card-stats">
            <div><strong>${escapeHtml(formatCardNumber(values.pulls))}</strong><span>抽</span></div>
            <div><strong>${escapeHtml(formatCardNumber(values.diamonds))}</strong><span>钻石</span></div>
            <div><strong>${escapeHtml(formatCardNumber(values.cost, 2, 0))}</strong><span>元</span></div>
          </div>
          <p class="pull-card-average">${escapeHtml(average)}</p>
        </div>
      </article>
    `;
    syncPullSaveState(false);
  }

  function openPullRecord(eventId) {
    if (!events.some((event) => event.id === eventId)) return;
    pullCardEventId = eventId;
    pullScreenshotData = "";
    pullCropOutput = "";
    pullCropState = null;
    pullCropDrag = null;
    window.clearTimeout(pullCropOutputTimer);
    elements.pullScreenshotInput.value = "";
    elements.pullCropImage.removeAttribute("src");
    elements.pullCropEditor.hidden = true;
    elements.pullCropZoom.value = "1";
    elements.pullCropViewport.classList.remove("is-dragging");
    elements.pullCountInput.value = "";
    elements.diamondInput.value = "";
    elements.costInput.value = "";
    elements.pullScreenshotName.textContent = "JPG、PNG、WebP";
    renderPullCardPreview();
    elements.pullRecordModal.hidden = false;
    document.body.classList.add("is-modal-open");
    window.setTimeout(() => elements.pullCountInput.focus(), 30);
  }

  function closePullRecord() {
    elements.pullRecordModal.hidden = true;
    if (elements.eventModal.hidden) document.body.classList.remove("is-modal-open");
  }

  function savePullCard() {
    const event = events.find((item) => item.id === pullCardEventId);
    const values = pullCardValues();
    if (!event) return;
    if (!pullScreenshotData) {
      showToast("请先上传游戏截图");
      return;
    }
    if (values.pulls === "" || Number(values.pulls) < 0) {
      showToast("请填写抽数");
      return;
    }
    if (!pullCropOutput) {
      showToast("请先调整截图裁切");
      return;
    }

    syncPullSaveState(true);
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1440;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const visualHeight = 760;
    const bodyTop = 760;
    const font = '"PingFang SC", "Microsoft YaHei", sans-serif';

    if (!context || !drawPullCrop(context, 0, 0, width, visualHeight)) {
      syncPullSaveState(false);
      showToast("截图裁切失败，请重新上传");
      return;
    }

    const shade = context.createLinearGradient(0, bodyTop - 190, 0, bodyTop + 25);
    shade.addColorStop(0, "rgba(252,252,252,0)");
    shade.addColorStop(1, "#fcfcfc");
    context.fillStyle = shade;
    context.fillRect(0, bodyTop - 190, width, 215);
    context.fillStyle = "#fcfcfc";
    context.fillRect(0, bodyTop, width, height - bodyTop);

    context.fillStyle = "#787b8e";
    context.font = `500 24px ${font}`;
    context.fillText("临空日历 · PULL RECORD", 64, 850);

    context.fillStyle = "#454252";
    context.font = `600 58px ${font}`;
    drawWrappedText(context, event.title, 64, 920, 820, 56, 2);
    context.fillStyle = "#787b8e";
    context.font = `500 25px ${font}`;
    context.fillText(compactDateRange(event), 64, 1020);

    const stats = [
      ["抽数", formatCardNumber(values.pulls), "抽"],
      ["钻石", formatCardNumber(values.diamonds), "钻石"],
      ["花费", formatCardNumber(values.cost, 2, 0), "元"]
    ];
    stats.forEach((stat, index) => {
      const x = 64 + index * 324;
      context.fillStyle = "rgba(227,226,231,0.62)";
      roundRect(context, x, 1080, 300, 188, 24);
      context.fill();
      context.fillStyle = "#787b8e";
      context.font = `500 22px ${font}`;
      context.fillText(stat[0], x + 24, 1128);
      context.fillStyle = "#454252";
      context.font = `600 42px ${font}`;
      context.fillText(`${stat[1]} ${stat[2]}`, x + 24, 1192);
    });

    const pulls = Number(values.pulls);
    const cost = Number(values.cost);
    const average =
      values.cost !== "" && pulls > 0 && Number.isFinite(cost)
        ? `约 ¥${formatCardNumber(cost / pulls, 2)} / 抽`
        : "";
    if (average) {
      context.fillStyle = "#9699b1";
      context.font = `500 22px ${font}`;
      context.fillText(average, 64, 1340);
    }

    context.fillStyle = "#9699b1";
    context.font = `500 18px ${font}`;
    context.textAlign = "right";
    context.fillText("LIN KONG CALENDAR", width - 64, 1340);
    context.textAlign = "left";

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          showToast("卡片生成失败，请重试");
          syncPullSaveState(false);
          return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        const safeTitle = event.title.replace(/[\\/:*?"<>|]/g, "_");
        link.download = `临空日历_${safeTitle}_抽数卡片.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.setTimeout(() => URL.revokeObjectURL(url), 1500);
        syncPullSaveState(false);
        showToast("抽数卡片已生成");
      },
      "image/png",
      1
    );
  }

  function drawWrappedText(context, text, x, y, maxWidth, lineHeight, maxLines) {
    const lines = [];
    let line = "";
    let overflow = false;
    for (const character of String(text)) {
      const next = line + character;
      if (context.measureText(next).width > maxWidth && line) {
        lines.push(line);
        if (maxLines && lines.length >= maxLines) {
          overflow = true;
          break;
        }
        line = character;
      } else {
        line = next;
      }
    }
    if (!overflow && line) lines.push(line);
    if (overflow) {
      let clipped = lines[maxLines - 1];
      while (clipped && context.measureText(`${clipped}…`).width > maxWidth) {
        clipped = clipped.slice(0, -1);
      }
      lines[maxLines - 1] = `${clipped}…`;
    }
    lines.slice(0, maxLines || lines.length).forEach((textLine, index) => {
      context.fillText(textLine, x, y + index * lineHeight);
    });
  }

  function roundRect(context, x, y, width, height, radius) {
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
  }

  function openEvent(eventId) {
    const event = events.find((item) => item.id === eventId);
    if (!event) return;
    currentEventId = eventId;
    const status = statusFor(event);
    const favorite = favoriteIds.includes(event.id);
    const heroCharacter =
      event.primaryCharacter || (event.characters && event.characters.length === 1 ? event.characters[0] : "");
    const tags = [categoryFor(event).label, event.mode]
      .concat(event.tags || [])
      .filter((tag) => tag !== heroCharacter);
    const uniqueTags = Array.from(new Set(tags));
    const sourceUrl = event.sourceUrl || "";
    const hasOriginalPost = Boolean(sourceUrl && sourceUrl !== data.meta.sourceUrl);
    const sourceLabel = event.sourceLabel || (hasOriginalPost ? "原始微博公告" : "官方微博主页");
    const sourceAttribution =
      sourceLabel === "游戏内公告" ? "来源：游戏内公告" : `来自 ${data.meta.sourceLabel}`;

    elements.eventDetail.innerHTML = `
      <article class="event-detail" style="--event-color:${escapeHtml(event.color)}">
        ${eventHero(event)}
        <div class="event-content">
          <div class="event-time-block">
            <div>
              <small>OPEN PERIOD</small>
              <strong>${escapeHtml(monthRangeLabel(event))}</strong>
            </div>
            <span class="event-countdown">${escapeHtml(status.text)}</span>
          </div>
          <div class="tag-row">
            ${uniqueTags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
          </div>
          ${
            event.rulesText
              ? `<section class="guide-section">
                  <h3>卡池规则</h3>
                  <div class="rules-body">${escapeHtml(event.rulesText)}</div>
                </section>`
              : ""
          }
          ${
            sourceUrl
              ? `<a class="source-announcement-button" href="${escapeHtml(
                  sourceUrl
                )}" target="_blank" rel="noopener noreferrer">
                  <span>${escapeHtml(sourceLabel)}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>`
              : `<div class="source-announcement-button is-static">
                  <span>${escapeHtml(sourceLabel)}</span>
                </div>`
          }
          ${eventGalleryMarkup(event)}
          <div class="event-source-note">
            <span>${escapeHtml(sourceAttribution)}</span>
          </div>
        </div>
      </article>
    `;

    elements.eventModal.hidden = false;
    document.body.classList.add("is-modal-open");

    const favoriteButton = elements.eventDetail.querySelector("[data-favorite-id]");
    if (favoriteButton) {
      favoriteButton.classList.toggle("is-favorite", favorite);
    }
  }

  function closeEvent() {
    elements.eventModal.hidden = true;
    elements.eventDetail.innerHTML = "";
    currentEventId = null;
    if (elements.dateSheet.hidden && elements.monthPicker.hidden) {
      document.body.classList.remove("is-modal-open");
    }
  }

  function openImageLightbox(src, label) {
    if (!src) return;
    imageLightboxTrigger =
      document.activeElement && document.activeElement.matches?.(".event-gallery-image")
        ? document.activeElement
        : null;
    elements.imageLightboxImage.src = src;
    elements.imageLightboxImage.alt = label;
    elements.imageLightboxCaption.textContent = label;
    elements.imageLightbox.setAttribute("aria-label", label);
    elements.imageLightboxScroller.classList.remove("is-centered");
    elements.imageLightboxImage.classList.remove("is-viewport-fit", "is-long-image");
    elements.imageLightboxImage.style.removeProperty("max-height");
    elements.imageLightbox.hidden = false;
    elements.imageLightbox.scrollTop = 0;
    elements.imageLightbox.focus();
    if (elements.imageLightboxImage.complete) positionImageLightbox();
  }

  function positionImageLightbox() {
    if (elements.imageLightbox.hidden || !elements.imageLightboxImage.naturalWidth) return;
    window.requestAnimationFrame(() => {
      const image = elements.imageLightboxImage;
      const aspectRatio = image.naturalHeight / image.naturalWidth;
      const isLongImage = aspectRatio > 2.5;
      const scrollerStyle = window.getComputedStyle(elements.imageLightboxScroller);
      const captionStyle = window.getComputedStyle(elements.imageLightboxCaption);
      const captionSpace =
        elements.imageLightboxCaption.offsetHeight +
        parseFloat(captionStyle.marginTop || "0") +
        parseFloat(captionStyle.marginBottom || "0");
      const availableImageHeight = Math.max(
        1,
        elements.imageLightbox.clientHeight -
          parseFloat(scrollerStyle.paddingTop || "0") -
          parseFloat(scrollerStyle.paddingBottom || "0") -
          captionSpace
      );
      image.classList.toggle("is-viewport-fit", !isLongImage);
      image.classList.toggle("is-long-image", isLongImage);
      image.style.maxHeight = isLongImage ? "none" : `${Math.floor(availableImageHeight)}px`;
      window.requestAnimationFrame(() => {
        const availableHeight =
          elements.imageLightbox.clientHeight -
          parseFloat(scrollerStyle.paddingTop || "0") -
          parseFloat(scrollerStyle.paddingBottom || "0");
        const figureHeight = elements.imageLightboxScroller
          .querySelector("figure")
          .getBoundingClientRect().height;
        const fits = !isLongImage && figureHeight <= availableHeight + 1;
        elements.imageLightboxScroller.classList.toggle("is-centered", fits);
        elements.imageLightbox.scrollTop = 0;
      });
    });
  }

  function closeImageLightbox() {
    elements.imageLightbox.hidden = true;
    elements.imageLightboxImage.removeAttribute("src");
    elements.imageLightboxImage.alt = "";
    elements.imageLightboxCaption.textContent = "";
    if (imageLightboxTrigger && document.contains(imageLightboxTrigger)) {
      imageLightboxTrigger.focus();
    }
    imageLightboxTrigger = null;
  }

  function toggleFavorite(eventId) {
    if (favoriteIds.includes(eventId)) {
      favoriteIds = favoriteIds.filter((id) => id !== eventId);
      showToast("已取消收藏");
    } else {
      favoriteIds = favoriteIds.concat(eventId);
      showToast("已收藏卡池");
    }
    writeFavorites(favoriteIds);
    openEvent(eventId);
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.hidden = false;
    toastTimer = window.setTimeout(() => {
      elements.toast.hidden = true;
    }, 2200);
  }

  const FAVORITES_STORAGE_KEY = "tide-calendar-favorites";
  let buildVersionPromise = null;

  function readFavoritesFallback() {
    try {
      const stored = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");
      return Array.isArray(stored) ? stored : [];
    } catch (error) {
      return [];
    }
  }

  function readBuildVersion(launchOptions) {
    const miniToolEnv = launchOptions && launchOptions.miniToolEnv;
    return Number(miniToolEnv && miniToolEnv.buildVersion) || 0;
  }

  async function getBuildVersion() {
    const xhs = window.xhs;
    const syncVersion = readBuildVersion(xhs && xhs.launchOptions);
    if (syncVersion) return syncVersion;
    if (buildVersionPromise) return buildVersionPromise;

    buildVersionPromise = (async () => {
      const miniTool = xhs && xhs.miniTool;
      if (!miniTool || typeof miniTool.getLaunchOptions !== "function") return 0;
      try {
        return readBuildVersion(await miniTool.getLaunchOptions());
      } catch (error) {
        return 0;
      }
    })();
    return buildVersionPromise;
  }

  function getClientVersion(buildVersion) {
    return Math.floor((Number(buildVersion) || 0) / 1000);
  }

  async function readFavorites() {
    const miniTool = window.xhs && window.xhs.miniTool;
    const buildVersion = await getBuildVersion();
    if (
      getClientVersion(buildVersion) >= 9460 &&
      miniTool &&
      typeof miniTool.getStorage === "function"
    ) {
      try {
        const result = await miniTool.getStorage({ key: FAVORITES_STORAGE_KEY });
        const parsed = JSON.parse((result && result.data) || "[]");
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        return readFavoritesFallback();
      }
    }
    return readFavoritesFallback();
  }

  async function writeFavorites(ids) {
    const serialized = JSON.stringify(ids);
    const miniTool = window.xhs && window.xhs.miniTool;
    const buildVersion = await getBuildVersion();
    if (
      getClientVersion(buildVersion) >= 9460 &&
      miniTool &&
      typeof miniTool.setStorage === "function"
    ) {
      try {
        await miniTool.setStorage({ key: FAVORITES_STORAGE_KEY, data: serialized });
        return;
      } catch (error) {
        // Fall through to browser storage when platform storage is unavailable.
      }
    }
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, serialized);
    } catch (error) {
      // Local storage is an enhancement; the prototype still works without it.
    }
  }

  async function hydrateFavorites() {
    favoriteIds = await readFavorites();
    if (currentEventId) openEvent(currentEventId);
  }

  elements.previousMonth.addEventListener("click", () => shiftPeriod(-1));
  elements.nextMonth.addEventListener("click", () => shiftPeriod(1));
  elements.todayButton.addEventListener("click", goToDemoToday);
  elements.monthTitleButton.addEventListener("click", openMonthPicker);
  elements.closeDateSheet.addEventListener("click", closeDateSheet);
  elements.backdrop.addEventListener("click", closeDateSheet);
  elements.cancelMonthPicker.addEventListener("click", closeMonthPicker);
  elements.pickerPreviousYear.addEventListener("click", () => {
    pickerYear -= 1;
    renderMonthPicker();
  });
  elements.pickerNextYear.addEventListener("click", () => {
    pickerYear += 1;
    renderMonthPicker();
  });

  elements.grid.addEventListener("click", (event) => {
    const button = event.target.closest(".calendar-day");
    if (!button) return;
    selectDay(button.dataset.date);
  });

  elements.yearView.addEventListener("click", (event) => {
    const button = event.target.closest(".year-day[data-date]");
    if (!button) return;
    selectDay(button.dataset.date);
  });

  [elements.agendaList, elements.sheetAgendaList, elements.upcomingList, elements.permanentNote].forEach(
    (container) => {
      container.addEventListener("click", (event) => {
        const eventButton = event.target.closest("[data-event-id]");
        if (eventButton) openEvent(eventButton.dataset.eventId);
      });
    }
  );

  elements.eventDetail.addEventListener("click", (event) => {
    const galleryImage = event.target.closest(".event-gallery-image[data-gallery-src]");
    if (galleryImage) {
      openImageLightbox(galleryImage.dataset.gallerySrc, galleryImage.dataset.galleryLabel);
      return;
    }
    if (event.target.closest("[data-close-event]")) {
      closeEvent();
      return;
    }
    const favoriteButton = event.target.closest("[data-favorite-id]");
    if (favoriteButton) {
      toggleFavorite(favoriteButton.dataset.favoriteId);
      return;
    }
    const pullButton = event.target.closest("[data-pull-card-id]");
    if (pullButton) openPullRecord(pullButton.dataset.pullCardId);
  });
  elements.eventDetail.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const galleryImage = event.target.closest(".event-gallery-image[data-gallery-src]");
    if (!galleryImage) return;
    event.preventDefault();
    openImageLightbox(galleryImage.dataset.gallerySrc, galleryImage.dataset.galleryLabel);
  });
  elements.imageLightboxImage.addEventListener("click", closeImageLightbox);
  elements.imageLightboxImage.addEventListener("load", positionImageLightbox);
  elements.imageLightbox.addEventListener("click", (event) => {
    if (event.target === elements.imageLightbox || event.target.classList.contains("image-lightbox-scroller")) {
      closeImageLightbox();
    }
  });

  elements.closePullRecord.addEventListener("click", closePullRecord);
  elements.cancelPullRecord.addEventListener("click", closePullRecord);
  elements.savePullCard.addEventListener("click", savePullCard);
  elements.pullRecordModal.addEventListener("click", (event) => {
    if (event.target === elements.pullRecordModal) closePullRecord();
  });
  elements.pullCropImage.addEventListener("load", () => {
    elements.pullCropViewport.classList.remove("is-loading");
    pullCropState = { zoom: 1, offsetX: 0, offsetY: 0 };
    elements.pullCropZoom.value = "1";
    window.requestAnimationFrame(() => {
      applyPullCropTransform();
      updatePullCropOutput();
    });
  });
  elements.pullCropImage.addEventListener("error", () => {
    elements.pullCropViewport.classList.remove("is-loading");
    pullCropState = null;
    pullCropOutput = "";
    renderPullCardPreview();
    showToast("截图读取失败，请重新上传");
  });
  elements.pullCropViewport.addEventListener("pointerdown", (event) => {
    if (!pullCropState) return;
    event.preventDefault();
    pullCropDrag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: pullCropState.offsetX,
      offsetY: pullCropState.offsetY
    };
    elements.pullCropViewport.setPointerCapture(event.pointerId);
    elements.pullCropViewport.classList.add("is-dragging");
  });
  elements.pullCropViewport.addEventListener("pointermove", (event) => {
    if (!pullCropDrag || pullCropDrag.pointerId !== event.pointerId || !pullCropState) return;
    pullCropState.offsetX = pullCropDrag.offsetX + event.clientX - pullCropDrag.startX;
    pullCropState.offsetY = pullCropDrag.offsetY + event.clientY - pullCropDrag.startY;
    applyPullCropTransform();
    schedulePullCropOutput();
  });
  const endPullCropDrag = (event) => {
    if (!pullCropDrag || pullCropDrag.pointerId !== event.pointerId) return;
    if (elements.pullCropViewport.hasPointerCapture(event.pointerId)) {
      elements.pullCropViewport.releasePointerCapture(event.pointerId);
    }
    pullCropDrag = null;
    elements.pullCropViewport.classList.remove("is-dragging");
    updatePullCropOutput();
  };
  elements.pullCropViewport.addEventListener("pointerup", endPullCropDrag);
  elements.pullCropViewport.addEventListener("pointercancel", endPullCropDrag);
  elements.pullCropZoom.addEventListener("input", () => {
    if (!pullCropState) return;
    pullCropState.zoom = Number(elements.pullCropZoom.value);
    applyPullCropTransform();
    schedulePullCropOutput();
  });
  elements.pullCropZoom.addEventListener("change", updatePullCropOutput);
  elements.resetPullCrop.addEventListener("click", resetPullCrop);
  window.addEventListener("resize", () => {
    if (!pullCropState || elements.pullCropEditor.hidden) return;
    window.requestAnimationFrame(() => {
      applyPullCropTransform();
      schedulePullCropOutput();
    });
  });
  window.addEventListener("resize", () => {
    if (!elements.imageLightbox.hidden) positionImageLightbox();
  });
  elements.pullScreenshotInput.addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (!/^image\//.test(file.type)) {
      showToast("请选择图片文件");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      showToast("图片不能超过 20MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      pullScreenshotData = String(reader.result || "");
      pullCropOutput = "";
      pullCropState = null;
      elements.pullScreenshotName.textContent = file.name;
      elements.pullCropEditor.hidden = false;
      elements.pullCropViewport.classList.add("is-loading");
      elements.pullCropImage.removeAttribute("src");
      elements.pullCropImage.src = pullScreenshotData;
      renderPullCardPreview();
    };
    reader.onerror = () => showToast("截图读取失败，请重新选择");
    reader.readAsDataURL(file);
  });
  [elements.pullCountInput, elements.diamondInput, elements.costInput].forEach((input) => {
    input.addEventListener("input", renderPullCardPreview);
  });

  document.addEventListener("click", (event) => {
    const modeButton = event.target.closest("[data-calendar-mode]");
    if (modeButton) {
      setCalendarMode(modeButton.dataset.calendarMode);
      return;
    }

    const yearSpanButton = event.target.closest("[data-year-span]");
    if (yearSpanButton) {
      setYearSpan(Number(yearSpanButton.dataset.yearSpan));
      return;
    }

    const densityButton = event.target.closest("button[data-density]");
    if (densityButton) {
      density = densityButton.dataset.density;
      syncModeControls();
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("density", density);
        window.history.replaceState({}, "", url);
      } catch (error) {
        // The visual mode still applies when the browser restricts URL updates for local files.
      }
      return;
    }

    const filter = event.target.closest("[data-filter]");
    if (filter) {
      activeFilter = filter.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((button) => {
        const selected = button.dataset.filter === activeFilter;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
      renderCalendar();
      return;
    }

    const monthChoice = event.target.closest("[data-picker-month]");
    if (monthChoice) {
      chooseMonth(Number(monthChoice.dataset.pickerMonth));
      return;
    }

  });

  elements.eventModal.addEventListener("click", (event) => {
    if (event.target === elements.eventModal) closeEvent();
  });
  elements.monthPicker.addEventListener("click", (event) => {
    if (event.target === elements.monthPicker) closeMonthPicker();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!elements.imageLightbox.hidden) closeImageLightbox();
      else if (!elements.pullRecordModal.hidden) closePullRecord();
      else if (!elements.eventModal.hidden) closeEvent();
      else if (!elements.monthPicker.hidden) closeMonthPicker();
      else if (!elements.dateSheet.hidden) closeDateSheet();
    }

    if (
      document.activeElement &&
      document.activeElement.closest("#calendarGrid, #yearView")
    ) {
      if (event.key === "ArrowLeft") shiftPeriod(-1);
      if (event.key === "ArrowRight") shiftPeriod(1);
    }
  });

  let swipeStart = null;
  elements.grid.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];
      swipeStart = { x: touch.clientX, y: touch.clientY, time: Date.now() };
    },
    { passive: true }
  );

  elements.grid.addEventListener(
    "touchend",
    (event) => {
      if (!swipeStart) return;
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - swipeStart.x;
      const deltaY = touch.clientY - swipeStart.y;
      const elapsed = Date.now() - swipeStart.time;
      const horizontal = Math.abs(deltaX) > 52 && Math.abs(deltaX) > Math.abs(deltaY) * 1.35;
      if (horizontal && elapsed < 700) {
        changeMonth(deltaX < 0 ? 1 : -1);
      }
      swipeStart = null;
    },
    { passive: true }
  );

  let sheetSwipeStart = null;
  elements.dateSheet.addEventListener(
    "touchstart",
    (event) => {
      sheetSwipeStart = event.changedTouches[0].clientY;
    },
    { passive: true }
  );
  elements.dateSheet.addEventListener(
    "touchend",
    (event) => {
      const deltaY = event.changedTouches[0].clientY - (sheetSwipeStart || 0);
      if (sheetSwipeStart !== null && deltaY > 80) closeDateSheet();
      sheetSwipeStart = null;
    },
    { passive: true }
  );

  document.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType !== "mouse") return;
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    },
    { passive: true }
  );

  const syncScrolledChrome = () => {
    elements.topbar.classList.toggle("is-scrolled", window.scrollY > 18);
    updateFloatingYearBar();
  };
  window.addEventListener("scroll", syncScrolledChrome, { passive: true });

  function supportsFlexGap() {
    const flex = document.createElement("div");
    flex.style.position = "absolute";
    flex.style.visibility = "hidden";
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
    document.body.appendChild(flex);
    const supported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    return supported;
  }

  function updateViewportHeight() {
    document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
  }

  async function syncContainerLayout() {
    updateViewportHeight();
    const miniTool = window.xhs && window.xhs.miniTool;
    const buildVersion = await getBuildVersion();
    if (
      getClientVersion(buildVersion) < 9490 ||
      !miniTool ||
      typeof miniTool.getWindowInfo !== "function"
    ) {
      return;
    }

    try {
      const info = await miniTool.getWindowInfo();
      const safeArea = info.safeArea || {};
      let topInset = Number(safeArea.top) || 0;
      const buttonRegions = info.menuButtons || {};
      ["back", "me", "share"].forEach((name) => {
        const region = buttonRegions[name];
        if (region) topInset = Math.max(topInset, Number(region.bottom) + 8 || 0);
      });
      document.documentElement.style.setProperty("--container-top-inset", `${topInset}px`);
      document.documentElement.style.setProperty(
        "--safe-area-inset-bottom",
        `${Number(safeArea.bottom) || 0}px`
      );
      if (Number(info.windowHeight) > 0) {
        document.documentElement.style.setProperty("--app-height", `${info.windowHeight}px`);
      }
    } catch (error) {
      updateViewportHeight();
    }
  }

  if (supportsFlexGap()) {
    document.documentElement.classList.add("supports-flex-gap");
  }
  if (window.xhs && window.xhs.miniTool) {
    document.body.classList.add("is-minitool");
  }
  window.addEventListener(
    "resize",
    () => {
      updateFloatingYearBar();
      updateViewportHeight();
    },
    { passive: true }
  );
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) refreshSystemDate();
  });
  syncScrolledChrome();

  renderCharacterLegend();
  renderCalendar();
  scheduleMidnightRefresh();
  hydrateFavorites();
  syncContainerLayout();
})();
