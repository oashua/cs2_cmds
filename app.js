const commands = [
  {
    name: "开启作弊",
    command: "sv_cheats",
    description: "大部分训练指令需要先开启作弊。",
    category: "基础设置",
    tags: ["训练", "必要"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "1",
        options: [
          { label: "开启", value: "1" },
          { label: "关闭", value: "0" }
        ]
      }
    ]
  },
  {
    name: "冻结/停止机器人",
    command: "bot_stop",
    description: "让所有机器人停止移动。",
    category: "机器人控制",
    tags: ["BOT", "定位"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "1",
        options: [
          { label: "停止", value: "1" },
          { label: "恢复", value: "0" }
        ]
      }
    ]
  },
  {
    name: "机器人模仿",
    command: "bot_mimic",
    description: "机器人模仿你的移动路径。",
    category: "机器人控制",
    tags: ["BOT", "练习"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "1",
        options: [
          { label: "开启", value: "1" },
          { label: "关闭", value: "0" }
        ]
      }
    ]
  },
  {
    name: "机器人蹲下",
    command: "bot_crouch",
    description: "让机器人保持蹲姿。",
    category: "机器人控制",
    tags: ["BOT"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "1",
        options: [
          { label: "开启", value: "1" },
          { label: "关闭", value: "0" }
        ]
      }
    ]
  },
  {
    name: "放置机器人",
    command: "bot_place",
    description: "在瞄准位置放置一个机器人。",
    category: "机器人控制",
    tags: ["BOT", "站位"]
  },
  {
    name: "机器人不射击",
    command: "bot_dont_shoot",
    description: "机器人不再开火，方便投掷练习。",
    category: "机器人控制",
    tags: ["BOT", "投掷"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "1",
        options: [
          { label: "开启", value: "1" },
          { label: "关闭", value: "0" }
        ]
      }
    ]
  },
  {
    name: "删除所有机器人",
    command: "bot_kick",
    description: "移除所有机器人。",
    category: "机器人控制",
    tags: ["BOT"]
  },
  {
    name: "添加 CT 机器人",
    command: "bot_add_ct",
    description: "添加一名 CT 机器人。",
    category: "机器人控制",
    tags: ["BOT"]
  },
  {
    name: "添加 T 机器人",
    command: "bot_add_t",
    description: "添加一名 T 机器人。",
    category: "机器人控制",
    tags: ["BOT"]
  },
  {
    name: "投掷物轨迹",
    command: "sv_grenade_trajectory",
    description: "显示投掷物飞行轨迹。",
    category: "投掷物练习",
    tags: ["轨迹", "投掷"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "1",
        options: [
          { label: "开启", value: "1" },
          { label: "关闭", value: "0" }
        ]
      }
    ]
  },
  {
    name: "轨迹显示时间",
    command: "sv_grenade_trajectory_time",
    description: "轨迹显示持续时间（秒）。",
    category: "投掷物练习",
    tags: ["轨迹", "投掷"],
    params: [
      {
        key: "seconds",
        label: "秒数",
        type: "number",
        default: "10",
        min: 0,
        max: 60,
        step: 1
      }
    ]
  },
  {
    name: "显示弹道落点",
    command: "sv_showimpacts",
    description: "显示子弹/投掷物的碰撞点。",
    category: "投掷物练习",
    tags: ["落点", "调试"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "1",
        options: [
          { label: "开启", value: "1" },
          { label: "关闭", value: "0" }
        ]
      }
    ]
  },
  {
    name: "落点显示时间",
    command: "sv_showimpacts_time",
    description: "碰撞点显示持续时间。",
    category: "投掷物练习",
    tags: ["落点", "调试"],
    params: [
      {
        key: "seconds",
        label: "秒数",
        type: "number",
        default: "10",
        min: 0,
        max: 60,
        step: 1
      }
    ]
  },
  {
    name: "投掷预览",
    command: "cl_grenadepreview",
    description: "显示投掷物落点的实时预览。",
    category: "投掷物练习",
    tags: ["落点", "投掷"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "1",
        options: [
          { label: "开启", value: "1" },
          { label: "关闭", value: "0" }
        ]
      }
    ]
  },
  {
    name: "无限弹药",
    command: "sv_infinite_ammo",
    description: "开启无限弹药与投掷物。",
    category: "基础设置",
    tags: ["训练"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "1",
        options: [
          { label: "开启", value: "1" },
          { label: "关闭", value: "0" }
        ]
      }
    ]
  },
  {
    name: "显示位置",
    command: "cl_showpos",
    description: "显示当前位置坐标与速度。",
    category: "基础设置",
    tags: ["定位", "调试"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "1",
        options: [
          { label: "开启", value: "1" },
          { label: "关闭", value: "0" }
        ]
      }
    ]
  },
  {
    name: "无敌",
    command: "god",
    description: "开启无敌模式。",
    category: "基础设置",
    tags: ["训练"]
  },
  {
    name: "穿墙飞行",
    command: "noclip",
    description: "自由飞行模式，便于找投掷点。",
    category: "基础设置",
    tags: ["移动", "探索"]
  },
  {
    name: "立即重开",
    command: "mp_restartgame",
    description: "立即重新开始回合。",
    category: "对局设置",
    tags: ["训练"],
    params: [
      {
        key: "seconds",
        label: "秒数",
        type: "number",
        default: "1",
        min: 0,
        max: 60,
        step: 1
      }
    ]
  },
  {
    name: "回合准备时间 0",
    command: "mp_freezetime",
    description: "关闭回合开始的冻结时间。",
    category: "对局设置",
    tags: ["训练"],
    params: [
      {
        key: "seconds",
        label: "秒数",
        type: "number",
        default: "0",
        min: 0,
        max: 60,
        step: 1
      }
    ]
  },
  {
    name: "允许随处购买",
    command: "mp_buy_anywhere",
    description: "允许在任意位置购买武器。",
    category: "对局设置",
    tags: ["购买", "训练"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "1",
        options: [
          { label: "开启", value: "1" },
          { label: "关闭", value: "0" }
        ]
      }
    ]
  },
  {
    name: "购买时间 600",
    command: "mp_buytime",
    description: "延长购买时间（秒）。",
    category: "对局设置",
    tags: ["购买"],
    params: [
      {
        key: "seconds",
        label: "秒数",
        type: "number",
        default: "600",
        min: 0,
        max: 9999,
        step: 10
      }
    ]
  },
  {
    name: "回合时长 60",
    command: "mp_roundtime_defuse",
    description: "设置拆弹模式回合时长。",
    category: "对局设置",
    tags: ["训练"],
    params: [
      {
        key: "minutes",
        label: "分钟",
        type: "number",
        default: "60",
        min: 1,
        max: 120,
        step: 1
      }
    ]
  },
  {
    name: "关闭自动平衡",
    command: "mp_autoteambalance",
    description: "关闭自动平衡。",
    category: "对局设置",
    tags: ["训练"],
    params: [
      {
        key: "state",
        label: "开关",
        type: "select",
        default: "0",
        options: [
          { label: "开启", value: "1" },
          { label: "关闭", value: "0" }
        ]
      }
    ]
  },
  {
    name: "无限起始金钱",
    command: "mp_startmoney",
    description: "设置回合起始金钱。",
    category: "对局设置",
    tags: ["经济"],
    params: [
      {
        key: "money",
        label: "金额",
        type: "number",
        default: "16000",
        min: 0,
        max: 60000,
        step: 500
      }
    ]
  },
  {
    name: "结束热身",
    command: "mp_warmup_end",
    description: "立即结束热身。",
    category: "对局设置",
    tags: ["训练"]
  }
];

const cardsEl = document.getElementById("cards");
const searchInput = document.getElementById("searchInput");
const tagSelect = document.getElementById("tagSelect");
const favoriteSelect = document.getElementById("favoriteSelect");
const countLabel = document.getElementById("countLabel");
const toast = document.getElementById("toast");
const resetBtn = document.getElementById("resetBtn");
const selectedCount = document.getElementById("selectedCount");
const clearHotkeysBtn = document.getElementById("clearHotkeysBtn");
const shareCodeBtn = document.getElementById("shareCodeBtn");
const shareCodeInput = document.getElementById("shareCodeInput");
const applyShareCodeBtn = document.getElementById("applyShareCodeBtn");
const clearSelectedBtn = document.getElementById("clearSelectedBtn");

const favoriteKey = "cs_cmd_favorites";
const hotkeyKey = "cs_cmd_hotkeys";
const paramKey = "cs_cmd_params";
const sharePrefix = "cs2:";

const selected = new Set();
const commandIndex = new Map(commands.map((item, index) => [item.command, index]));

const loadFavorites = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(favoriteKey) || "[]"));
  } catch (error) {
    return new Set();
  }
};

const saveFavorites = (favorites) => {
  localStorage.setItem(favoriteKey, JSON.stringify([...favorites]));
};

const loadHotkeys = () => {
  try {
    return JSON.parse(localStorage.getItem(hotkeyKey) || "{}");
  } catch (error) {
    return {};
  }
};

const saveHotkeys = (value) => {
  localStorage.setItem(hotkeyKey, JSON.stringify(value));
};

const loadParams = () => {
  try {
    return JSON.parse(localStorage.getItem(paramKey) || "{}");
  } catch (error) {
    return {};
  }
};

const saveParams = (value) => {
  localStorage.setItem(paramKey, JSON.stringify(value));
};

let favorites = loadFavorites();
let hotkeys = loadHotkeys();
let pendingHotkeyCommand = null;
let paramValues = loadParams();

const normalizeBindKey = (event) => {
  const ignored = ["Control", "Shift", "Alt", "Meta"];
  if (ignored.includes(event.key)) return null;
  if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
    showToast("CS2 绑定仅支持单键，请按单个键");
    return null;
  }
  const keyMap = {
    " ": "SPACE",
    ArrowUp: "UPARROW",
    ArrowDown: "DOWNARROW",
    ArrowLeft: "LEFTARROW",
    ArrowRight: "RIGHTARROW",
    Escape: "ESCAPE",
    Enter: "ENTER",
    Tab: "TAB",
    Backspace: "BACKSPACE",
    Delete: "DEL",
    Home: "HOME",
    End: "END",
    PageUp: "PGUP",
    PageDown: "PGDN",
    Insert: "INS"
  };
  if (keyMap[event.key]) return keyMap[event.key];
  if (event.key.length === 1) return event.key.toUpperCase();
  return event.key.toUpperCase();
};

const findHotkeyConflict = (key, currentCommand) =>
  Object.entries(hotkeys).find(
    ([command, boundKey]) => boundKey === key && command !== currentCommand
  );

const uniqueTags = [
  "全部",
  ...new Set(commands.flatMap((item) => item.tags || []))
];

const buildTagOptions = () => {
  tagSelect.innerHTML = "";
  uniqueTags.forEach((tag) => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    tagSelect.appendChild(option);
  });
};

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
};

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    showToast("已复制到剪贴板");
  } catch (error) {
    showToast("复制失败，请手动复制");
  }
};

const matchKeyword = (item, keyword) => {
  if (!keyword) return true;
  const target = [
    item.name,
    item.command,
    item.description,
    item.category,
    ...(item.tags || [])
  ]
    .join(" ")
    .toLowerCase();
  return target.includes(keyword.toLowerCase());
};

const isFavorite = (command) => favorites.has(command);

const toggleFavorite = (command) => {
  if (favorites.has(command)) {
    favorites.delete(command);
  } else {
    favorites.add(command);
  }
  saveFavorites(favorites);
};

const parseSharedCommands = (text) =>
  text
    .split(/[;\n]+/)
    .map((line) => line.trim())
    .filter(Boolean);

const getParamValue = (item, param) => {
  const stored = paramValues[item.command];
  if (stored && stored[param.key] !== undefined) {
    return stored[param.key];
  }
  return param.default ?? "";
};

const setParamValue = (item, param, value) => {
  paramValues = {
    ...paramValues,
    [item.command]: {
      ...(paramValues[item.command] || {}),
      [param.key]: value
    }
  };
  saveParams(paramValues);
};

const buildCommandText = (item) => {
  const params = item.params || [];
  if (!params.length) return item.command;
  const values = params.map((param) => getParamValue(item, param));
  return [item.command, ...values].join(" ");
};

const updateSelectedSummary = () => {
  selectedCount.textContent = selected.size;
  const disabled = selected.size === 0;
  shareCodeBtn.disabled = disabled;
  clearSelectedBtn.disabled = disabled;
};

const renderCards = () => {
  const keyword = searchInput.value.trim();
  const tag = tagSelect.value;
  const favoriteFilter = favoriteSelect.value;

  const filtered = commands.filter((item) => {
    if (!matchKeyword(item, keyword)) return false;
    if (tag !== "全部" && !(item.tags || []).includes(tag)) return false;
    if (favoriteFilter === "favorites" && !isFavorite(item.command)) return false;
    return true;
  });

  countLabel.textContent = filtered.length;

  cardsEl.innerHTML = "";
  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";

    const header = document.createElement("div");
    header.className = "card-header";

    const left = document.createElement("div");
    left.className = "card-header-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "select-checkbox";
    checkbox.checked = selected.has(item.command);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        selected.add(item.command);
      } else {
        selected.delete(item.command);
        if (hotkeys[item.command]) {
          delete hotkeys[item.command];
          saveHotkeys(hotkeys);
        }
      }
      updateSelectedSummary();
    });

    left.addEventListener("click", (event) => {
      if (event.target === checkbox) return;
      checkbox.checked = !checkbox.checked;
      if (checkbox.checked) {
        selected.add(item.command);
      } else {
        selected.delete(item.command);
        if (hotkeys[item.command]) {
          delete hotkeys[item.command];
          saveHotkeys(hotkeys);
        }
      }
      updateSelectedSummary();
    });

    const title = document.createElement("h3");
    title.textContent = item.name;

    left.append(checkbox, title);

    header.append(left);

    const description = document.createElement("p");
    description.textContent = item.description;

    const paramWrap = document.createElement("div");
    paramWrap.className = "params";
    (item.params || []).forEach((param) => {
      const field = document.createElement("label");
      field.className = "param-field";

      const label = document.createElement("span");
      label.textContent = param.label;

      let input;
      const currentValue = getParamValue(item, param);
      if (param.type === "select") {
        input = document.createElement("select");
        (param.options || []).forEach((option) => {
          const optionEl = document.createElement("option");
          optionEl.value = option.value;
          optionEl.textContent = option.label;
          input.appendChild(optionEl);
        });
        input.value = currentValue;
      } else {
        input = document.createElement("input");
        input.type = "number";
        if (param.min !== undefined) input.min = param.min;
        if (param.max !== undefined) input.max = param.max;
        if (param.step !== undefined) input.step = param.step;
        input.value = currentValue;
      }
      input.addEventListener("change", () => {
        setParamValue(item, param, input.value);
        code.textContent = buildCommandText(item);
      });

      field.append(label, input);
      paramWrap.appendChild(field);
    });

    const commandBox = document.createElement("div");
    commandBox.className = "command";

    const code = document.createElement("code");
  code.textContent = buildCommandText(item);

    const copyBtn = document.createElement("button");
    copyBtn.textContent = "复制";
    copyBtn.addEventListener("click", () => copyText(item.command));

    commandBox.append(code, copyBtn);

    const tags = document.createElement("div");
    tags.className = "tags";
    (item.tags || []).forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.className = "tag";
      tagEl.textContent = tag;
      tagEl.addEventListener("click", () => {
        searchInput.value = tag;
        renderCards();
      });
      tags.appendChild(tagEl);
    });

    const footer = document.createElement("div");
    footer.className = "card-footer";

    const favoriteBtn = document.createElement("button");
    favoriteBtn.className = "favorite";
    favoriteBtn.textContent = isFavorite(item.command) ? "已收藏" : "点击收藏";
    if (isFavorite(item.command)) {
      favoriteBtn.classList.add("active");
    }
    favoriteBtn.addEventListener("click", () => {
      toggleFavorite(item.command);
      favorites = loadFavorites();
      renderCards();
    });

    const hotkeyBtn = document.createElement("button");
    hotkeyBtn.className = "hotkey";
    const currentHotkey = hotkeys[item.command];
    hotkeyBtn.textContent = currentHotkey
      ? `快捷键: ${currentHotkey}`
      : "设置快捷键";
    if (pendingHotkeyCommand === item.command) {
      hotkeyBtn.classList.add("active");
      hotkeyBtn.textContent = "按任意键设置…";
    }
    hotkeyBtn.addEventListener("click", () => {
      pendingHotkeyCommand = item.command;
      renderCards();
      showToast("按下快捷键（Esc 取消，` 清除）");
    });
    footer.append(favoriteBtn, hotkeyBtn);

    const hasParams = (item.params || []).length > 0;
    if (hasParams) {
      card.append(header, description, paramWrap, commandBox, tags, footer);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "params params-placeholder";
      const field = document.createElement("label");
      field.className = "param-field";
      const label = document.createElement("span");
      label.textContent = "占位";
      const input = document.createElement("input");
      input.type = "number";
      field.append(label, input);
      placeholder.appendChild(field);
      card.append(header, description, placeholder, commandBox, tags, footer);
    }
    cardsEl.appendChild(card);
  });
  updateSelectedSummary();
};

const shareSelected = () => {
  if (selected.size === 0 && Object.keys(hotkeys).length === 0) {
    showToast("请先选择指令或设置快捷键");
    return;
  }
  const selectedCommands = commands
    .filter((item) => selected.has(item.command))
    .map((item) => buildCommandText(item));
  const bindCommands = commands
    .filter((item) => hotkeys[item.command])
    .map((item) => `bind ${hotkeys[item.command]} "${buildCommandText(item)}"`);
  const text = [...selectedCommands, ...bindCommands].join("; ");
  shareCodeInput.value = text;
  copyText(text);
};

const applySharedSelection = () => {
  const input = shareCodeInput.value.trim();
  if (!input) {
    showToast("请输入分享指令");
    return;
  }
  const lines = parseSharedCommands(input);
  if (lines.length === 0) {
    showToast("分享指令无效");
    return;
  }
  selected.clear();
  const nextParams = { ...paramValues };
  lines.forEach((line) => {
    const cleaned = line.replace(/^bind\s+\S+\s+"?/, "").replace(/"$/, "");
    const parts = cleaned.split(/\s+/);
    const commandName = parts.shift();
    if (!commandName) return;
    const item = commands.find((entry) => entry.command === commandName);
    if (!item) return;
    selected.add(item.command);
    if (item.params && item.params.length) {
      const valueMap = {};
      item.params.forEach((param, index) => {
        const value = parts[index];
        if (value !== undefined) {
          valueMap[param.key] = value;
        }
      });
      if (Object.keys(valueMap).length) {
        nextParams[item.command] = {
          ...(nextParams[item.command] || {}),
          ...valueMap
        };
      }
    }
  });
  paramValues = nextParams;
  saveParams(paramValues);
  renderCards();
  showToast("分享指令已应用");
};

const clearSelected = () => {
  selected.clear();
  renderCards();
};

const clearHotkeys = () => {
  hotkeys = {};
  saveHotkeys(hotkeys);
  selected.clear();
  renderCards();
  showToast("快捷键已清空");
};

const resetFilters = () => {
  searchInput.value = "";
  tagSelect.value = "全部";
  favoriteSelect.value = "all";
  renderCards();
};

searchInput.addEventListener("input", renderCards);
tagSelect.addEventListener("change", renderCards);
favoriteSelect.addEventListener("change", renderCards);
resetBtn.addEventListener("click", resetFilters);
clearHotkeysBtn.addEventListener("click", clearHotkeys);
shareCodeBtn.addEventListener("click", shareSelected);
applyShareCodeBtn.addEventListener("click", applySharedSelection);
clearSelectedBtn.addEventListener("click", clearSelected);

buildTagOptions();
renderCards();

document.addEventListener("keydown", (event) => {
  if (pendingHotkeyCommand) {
    if (event.key === "Escape") {
      pendingHotkeyCommand = null;
      renderCards();
      return;
    }
    if (
      event.key === "Backspace" ||
      event.key === "Delete" ||
      event.key === "`"
    ) {
      delete hotkeys[pendingHotkeyCommand];
      saveHotkeys(hotkeys);
      selected.delete(pendingHotkeyCommand);
      pendingHotkeyCommand = null;
      renderCards();
      showToast("快捷键已清除");
      return;
    }
    const key = normalizeBindKey(event);
    if (!key) return;
    const conflict = findHotkeyConflict(key, pendingHotkeyCommand);
    if (conflict) {
      const [conflictCommand] = conflict;
      const conflictItem = commands.find(
        (item) => item.command === conflictCommand
      );
      showToast(
        `快捷键已被占用：${conflictItem?.name || conflictCommand}`
      );
      return;
    }
    hotkeys[pendingHotkeyCommand] = key;
    saveHotkeys(hotkeys);
    selected.add(pendingHotkeyCommand);
    pendingHotkeyCommand = null;
    renderCards();
    showToast(`快捷键已设置：${key}`);
  }
});
