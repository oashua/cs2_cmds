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
    name: "投掷预览（CS2）",
    command: "sv_grenade_trajectory_prac_pipreview",
    description: "CS2 训练用投掷预览窗口，需要开启作弊。",
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
    name: "重新开始回合",
    command: "mp_restartgame_immediate",
    description: "立即重新开始回合（无过场动画）。",
    category: "对局设置",
    tags: ["训练", "回合"],
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
    name: "回合重开倒计时",
    command: "mp_round_restart_delay",
    description: "设置回合结束后到下一回合开始的倒计时（秒）。",
    category: "对局设置",
    tags: ["训练"],
    params: [
      {
        key: "seconds",
        label: "秒数",
        type: "number",
        default: "5",
        min: 0,
        max: 60,
        step: 1
      }
    ]
  },
  {
    name: "重置回合倒计时",
    command: "mp_round_restart_delay",
    description: "将回合重开倒计时重置为 0 秒。",
    category: "对局设置",
    tags: ["训练", "回合"],
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
    name: "开启自动平衡",
    command: "mp_autoteambalance",
    description: "开启自动平衡队伍人数。",
    category: "对局设置",
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
    name: "设置热身时间",
    command: "mp_warmuptime",
    description: "设置热身时间（秒）。",
    category: "对局设置",
    tags: ["训练", "热身"],
    params: [
      {
        key: "seconds",
        label: "秒数",
        type: "number",
        default: "300",
        min: 0,
        max: 3600,
        step: 30
      }
    ]
  },
  {
    name: "开始热身",
    command: "mp_warmup_start",
    description: "强制开始热身阶段。",
    category: "对局设置",
    tags: ["训练", "热身"]
  },
  {
    name: "结束热身",
    command: "mp_warmup_end",
    description: "立即结束热身。",
    category: "对局设置",
    tags: ["训练"]
  },
  {
    name: "停止比分记录",
    command: "mp_ignore_round_win_conditions",
    description: "忽略胜利条件，回合不结束，比分不会变化。",
    category: "对局设置",
    tags: ["训练", "比分"],
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
    name: "所有人回到出生点",
    command: "mp_restartgame",
    description: "重新开始回合，让所有人回到出生点。",
    category: "位置控制",
    tags: ["出生点", "训练"],
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
    name: "查看机器人坐标（XYZ）",
    command: "ent_text",
    description: "输出机器人实体信息，查看其中的 origin 行即可获得 XYZ。",
    category: "调试",
    tags: ["机器人", "调试"],
    params: [
      {
        key: "target",
        label: "目标",
        type: "select",
        default: "bot",
        options: [
          { label: "机器人", value: "bot" }
        ]
      }
    ]
  },
  {
    name: "设置出生点快捷键",
    command: "spawn_bind",
    description: "根据地图与阵营生成出生点快捷键（按键为 1-0、-、=、r-t-y-u-i-o-p-[ ]-\\）。",
    category: "位置控制",
    tags: ["出生点", "快捷键"],
    special: "spawn_bind",
    params: [
      {
        key: "map",
        label: "地图",
        type: "select",
        default: "de_dust2",
        options: [
          { label: "Dust2", value: "de_dust2" },
          { label: "小镇", value: "小镇" }
        ]
      },
      {
        key: "side",
        label: "阵营",
        type: "select",
        default: "t",
        options: [
          { label: "T 方", value: "t" },
          { label: "CT 方", value: "ct" }
        ]
      }
    ]
  },
  {
    name: "随机出生点",
    command: "mp_randomspawn",
    description: "开启/关闭随机出生点（用于快速模拟不同身位）。",
    category: "位置控制",
    tags: ["出生点", "站位"],
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
    name: "随机出生点（避免视线）",
    command: "mp_randomspawn_los",
    description: "随机出生点时避免与敌方直视。",
    category: "位置控制",
    tags: ["出生点", "站位"],
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
    name: "切换地图",
    command: "changelevel",
    description: "切换到指定地图（如 dust2、mirage）。",
    category: "对局设置",
    tags: ["地图", "训练"],
    params: [
      {
        key: "map",
        label: "地图名",
        type: "select",
        default: "de_dust2",
        options: [
          { label: "Dust2", value: "de_dust2" },
          { label: "Mirage", value: "de_mirage" },
          { label: "Inferno", value: "de_inferno" },
          { label: "Nuke", value: "de_nuke" },
          { label: "Ancient", value: "de_ancient" },
          { label: "Anubis", value: "de_anubis" },
          { label: "Overpass", value: "de_overpass" },
          { label: "Vertigo", value: "de_vertigo" },
          { label: "Cache", value: "de_cache" }
        ]
      }
    ]
  },
  {
    name: "连接服务器",
    command: "connect",
    description: "连接到指定服务器（IP:端口）。",
    category: "服务器",
    tags: ["服务器", "连接"],
    params: [
      {
        key: "address",
        label: "地址",
        type: "select",
        default: "127.0.0.1:27015",
        options: [
          { label: "本地服", value: "127.0.0.1:27015" }
        ]
      }
    ]
  },
  {
    name: "断开服务器",
    command: "disconnect",
    description: "断开当前服务器连接。",
    category: "服务器",
    tags: ["服务器", "连接"]
  },
  {
    name: "查看服务器状态",
    command: "status",
    description: "查看服务器状态与玩家信息。",
    category: "服务器",
    tags: ["服务器", "调试"]
  },
  {
    name: "重连上次服务器",
    command: "retry",
    description: "重新连接上次服务器。",
    category: "服务器",
    tags: ["服务器", "连接"]
  }
];

const mapSpawns = {
  de_dust2: {
    label: "Dust2",
    ct: [
      { id: 16495, x: 351.392, y: 2352.942, z: -110.000 },
      { id: 16434, x: 334.369, y: 2433.734, z: -110.000 },
      { id: null,  x: 258.16,  y: 2480.55,  z: -57.92  },
      { id: 16431, x: 182.250, y: 2439.012, z: -110.000 },
      { id: 16429, x: 140.123, y: 2369.676, z: -110.000 }
    ],
    t: [
      { id: 16450, x: -332.000,  y: -754.000, z: 134.709 },
      { id: 16449, x: -367.000,  y: -808.000, z: 134.709 },
      { id: 16448, x: -428.000,  y: -843.000, z: 134.709 },
      { id: 16446, x: -493.000,  y: -808.000, z: 134.709 },
      { id: 16447, x: -533.000,  y: -754.000, z: 134.709 },
      { id: 16440, x: -657.271,  y: -755.880, z: 150.709 },
      { id: 16439, x: -696.845,  y: -806.624, z: 150.709 },
      { id: 16438, x: -760.663,  y: -836.174, z: 150.709 },
      { id: 16436, x: -822.865,  y: -795.642, z: 150.709 },
      { id: 16437, x: -857.507,  y: -738.861, z: 150.709 },
      { id: 16445, x: -980.000,  y: -754.000, z: 150.709 },
      { id: 16444, x: -1015.000, y: -808.000, z: 150.709 },
      { id: 16443, x: -1076.000, y: -843.000, z: 150.709 },
      { id: 16441, x: -1141.000, y: -808.000, z: 150.709 },
      { id: 16442, x: -1181.000, y: -754.000, z: 150.709 }
    ]
  },
  小镇: {
    label: "小镇",
    ct: [
      { id: 16659, x: 2436.000, y: 2355.000, z: 140.843 },
      { id: 16658, x: 2493.560, y: 2299.900, z: 140.843 },
      { id: 16660, x: 2479.320, y: 2243.470, z: 140.843 },
      { id: 16664, x: 2456.830, y: 2153.160, z: 140.843 },
      { id: 16663, x: 2498.000, y: 2090.000, z: 140.843 },
      { id: 16661, x: 2374.470, y: 2171.850, z: 140.843 },
      { id: 16662, x: 2236.680, y: 2199.540, z: 140.843 },
      { id: 16666, x: 2422.350, y: 2205.970, z: 140.843 },
      { id: 16674, x: 2397.000, y: 2079.000, z: 155.000 },
      { id: 16667, x: 2292.060, y: 2027.690, z: 140.843 },
      { id: 16665, x: 2353.000, y: 1977.000, z: 140.843 },
      { id: 16669, x: 2420.090, y: 1965.770, z: 140.843 },
      { id: 16668, x: 2438.000, y: 1900.000, z: 140.843 },
      { id: 16670, x: 2417.000, y: 1824.000, z: 140.843 },
      { id: 16671, x: 2342.890, y: 1732.110, z: 140.843 },
      { id: 16672, x: 2270.000, y: 1831.000, z: 140.843 }
    ],
    t: [
      { id: 16644, x: -1520.060, y: 430.891, z: -46.000 },
      { id: 16640, x: -1586.520, y: 440.790, z: -46.000 },
      { id: 16645, x: -1657.230, y: 419.577, z: -46.000 },
      { id: 16646, x: -1675.620, y: 351.695, z: -46.000 },
      { id: 16647, x: -1662.180, y: 288.762, z: -46.000 }
    ]
  }
};
