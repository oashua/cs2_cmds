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
    name: "投掷物轨迹持续时间",
    command: "sv_grenade_trajectory_prac_trailtime",
    description: "设为0不显示轨迹。",
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
    name: "回合准备时间",
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
          { label: "阿努比斯", value: "de_anubis" },
          { label: "死亡游乐园", value: "de_overpass" },
          { label: "炼狱小镇", value: "de_inferno" },
          { label: "荒漠迷城", value: "de_mirage" },
          { label: "炙热沙城II", value: "de_dust2" },
          { label: "核子危机", value: "de_nuke" },
          { label: "远古遗迹", value: "de_ancient" }
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
          { label: "阿努比斯", value: "de_anubis" },
          { label: "死亡游乐园", value: "de_overpass" },
          { label: "炼狱小镇", value: "de_inferno" },
          { label: "荒漠迷城", value: "de_mirage" },
          { label: "炙热沙城II", value: "de_dust2" },
          { label: "核子危机", value: "de_nuke" },
          { label: "远古遗迹", value: "de_ancient" },
          { label: "远古遗迹(夜间)", value: "de_ancient_night" },
          {label: "列车停放站", value: "de_train" },
          { label: "殒命大厦", value: "de_vertigo" },
          { label: "死城之谜", value: "de_cache" },
          { label: "波塞冬", value: "de_poseidon" },
          { label: "圣堂", value: "de_sanctum" },
          { label: "钢铁要塞", value: "de_stronghold" },
          { label: "恶魔岛", value: "de_warden" },
          {label:"阿尔卑斯", value: "cs_alpine" },
          {label:"意大利小镇", value: "cs_italy" },
          {label:"办公室", value: "cs_office" }

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

];

const mapSpawns = {
  de_dust2: {
    label: "炙热沙城II",
    ct: [
      {  x: 351.392, y: 2352.942, z: -110.000 },
      {  x: 334.369, y: 2433.734, z: -110.000 },
      {   x: 258.16,  y: 2480.55,  z: -57.92  },
      {  x: 182.250, y: 2439.012, z: -110.000 },
      {  x: 140.123, y: 2369.676, z: -110.000 }
    ],
    t: [
      {  x: -332.000,  y: -754.000, z: 134.709 },
      {  x: -367.000,  y: -808.000, z: 134.709 },
      {  x: -428.000,  y: -843.000, z: 134.709 },
      {  x: -493.000,  y: -808.000, z: 134.709 },
      {  x: -533.000,  y: -754.000, z: 134.709 },
      {  x: -657.271,  y: -755.880, z: 150.709 },
      {  x: -696.845,  y: -806.624, z: 150.709 },
      {  x: -760.663,  y: -836.174, z: 150.709 },
      {  x: -822.865,  y: -795.642, z: 150.709 },
      {  x: -857.507,  y: -738.861, z: 150.709 },
      {  x: -980.000,  y: -754.000, z: 150.709 },
      {  x: -1015.000, y: -808.000, z: 150.709 },
      {  x: -1076.000, y: -843.000, z: 150.709 },
      {  x: -1141.000, y: -808.000, z: 150.709 },
      {  x: -1181.000, y: -754.000, z: 150.709 }
    ]
  },
  de_inferno: {
    label: "炼狱小镇",
    ct: [
      {  x: 2436.000, y: 2355.000, z: 140.843 },
      {  x: 2493.560, y: 2299.900, z: 140.843 },
      {  x: 2479.320, y: 2243.470, z: 140.843 },
      {  x: 2456.830, y: 2153.160, z: 140.843 },
      {  x: 2498.000, y: 2090.000, z: 140.843 },
      {  x: 2374.470, y: 2171.850, z: 140.843 },
      {  x: 2236.680, y: 2199.540, z: 140.843 },
      {  x: 2422.350, y: 2205.970, z: 140.843 },
      {  x: 2397.000, y: 2079.000, z: 155.000 },
      {  x: 2292.060, y: 2027.690, z: 140.843 },
      {  x: 2353.000, y: 1977.000, z: 140.843 },
      {  x: 2420.090, y: 1965.770, z: 140.843 },
      {  x: 2438.000, y: 1900.000, z: 140.843 },
      {  x: 2417.000, y: 1824.000, z: 140.843 },
      {  x: 2342.890, y: 1732.110, z: 140.843 },
      {  x: 2270.000, y: 1831.000, z: 140.843 }
    ],
    t: [
      {  x: -1520.060, y: 430.891, z: -46.000 },
      {  x: -1586.520, y: 440.790, z: -46.000 },
      {  x: -1657.230, y: 419.577, z: -46.000 },
      {  x: -1675.620, y: 351.695, z: -46.000 },
      {  x: -1662.180, y: 288.762, z: -46.000 }
    ]
  },
  de_anubis: {
    label: "阿努比斯",
    ct: [
          {x:  -608.000000,y: 2120.000000,z: 20.000000},
          {x:  -560.000000,y: 2192.000000,z: 20.000000},
          {x:  -476.000244,y: 2216.000244,z: 20.000000},
          {x: -400.000000,y: 2192.000000,z: 20.000000},
          {x:  -360.000183,y: 2120.000488,z: 20.000000}
],

t:[

{x:  -416.000305,y: -1696.000610,z: 0.000000},

{x:  -234.000000,y: -1503.079956,z: -10.000000},

{x:  -154.000000,y: -1503.079956,z: -10.000000},

{x:  -384.000000,y: -1552.000000,z: -10.000000},

{x:  -328.000000,y: -1528.000000,z: -10.000000},

{x:  -264.000366,y: -1560.000366,z: -10.000000},

{x:  -144.000000,y: -1568.000000,z: -10.000000},

{x:  -128.004028,y: -1632.000000,z: 0.000000},

{x:  -416.000000,y: -1608.000000,z: 0.000000},

{x:  -304.000244,y: -1608.000488,z: -10.000000},

{x:  -192.000244,y: -1608.000244,z: -10.000000}]
  },
  de_ancient: {
    label: "远古遗迹",
    ct: [
      { x: -192.000000, y: 1696.000000, z: 25.000000 },
      { x: -256.000000, y: 1728.000000, z: 25.000000 },
      { x: -352.000000, y: 1728.000000, z: 25.000000 },
      { x: -448.000000, y: 1728.000000, z: 30.000000 },
      { x: -512.000000, y: 1696.000000, z: 25.000000 }
    ],
    t: [
      { x: -328.000000, y: -2288.000000, z: -162.000000 },
      { x: -456.000732, y: -2288.000732, z: -162.000000 },
      { x: -584.000000, y: -2288.000000, z: -162.000000 },
      { x: -392.000000, y: -2224.000000, z: -162.000000 },
      { x: -520.000244, y: -2224.000244, z: -162.000000 }
    ]
  },
  de_mirage: {
    label: "荒漠迷城",
    ct: [
      { x: -1776.000000, y: -1976.000000, z: -265.000000 },
      { x: -1776.000000, y: -1799.999634, z: -265.000000 },
      { x: -1720.000000, y: -1896.000000, z: -270.000000 },
      { x: -1656.000610, y: -1799.999878, z: -270.000000 },
      { x: -1656.000000, y: -1976.000000, z: -270.000000 }
    ],
    t: [
      { x: 1296.000000, y: -352.000000, z: -170.000000 },
      { x: 1296.000000, y: 32.000000, z: -170.000000 },
      { x: 1215.322388, y: -15.946228, z: -165.000000 },
      { x: 1216.000000, y: -115.000000, z: -165.000000 },
      { x: 1216.000000, y: -211.000000, z: -165.000000 },
      { x: 1216.000244, y: -306.999756, z: -165.000000 },
      { x: 1136.000000, y: -256.000000, z: -165.000000 },
      { x: 1136.000122, y: -159.999878, z: -165.000000 },
      { x: 1136.000122, y: -64.000122, z: -165.000000 },
      { x: 1136.000122, y: 31.999878, z: -165.000000 }
    ]
  },
  de_overpass: {
    label: "死亡游乐园",
    ct: [
      { x: -2199.000000, y: 740.000000, z: 480.000000 },
      { x: -2273.000000, y: 770.000000, z: 480.000000 },
      { x: -2343.000000, y: 797.000000, z: 480.000000 },
      { x: -2190.000244, y: 817.000488, z: 480.000000 },
      { x: -2275.000488, y: 842.000549, z: 480.000000 }
    ],
    t: [
      { x: -1331.000000, y: -3190.000000, z: 270.000000 },
      { x: -1448.000000, y: -3076.000000, z: 272.000000 },
      { x: -1270.999878, y: -3262.000000, z: 270.000000 },
      { x: -1499.000000, y: -3126.000000, z: 274.000000 },
      { x: -1510.397949, y: -3053.881836, z: 278.000000 },
      { x: -1326.999878, y: -3261.999756, z: 272.000000 },
      { x: -1395.000000, y: -3190.000000, z: 272.000000 },
      { x: -1391.000000, y: -3262.000000, z: 274.000000 },
      { x: -1363.000000, y: -3122.000000, z: 270.000000 },
      { x: -1462.999878, y: -3189.999756, z: 274.000000 },
      { x: -1422.387329, y: -3129.729004, z: 272.000000 }
    ]
  },
  de_nuke: {
    label: "核子危机",
    ct: [
      { x: 2504.000000, y: -344.000000, z: -350.000000 },
      { x: 2552.000977, y: -423.999756, z: -350.000000 },
      { x: 2512.000000, y: -504.000000, z: -350.000000 },
      { x: 2585.000488, y: -343.999939, z: -350.000000 },
      { x: 2584.000000, y: -504.000000, z: -350.000000 }
    ],
    t: [
      { x: -1808.000000, y: -1025.000000, z: -415.000000 },
      { x: -1947.010010, y: -965.109985, z: -415.000000 },
      { x: -1947.010498, y: -1102.109863, z: -415.000000 },
      { x: -1878.000000, y: -980.000488, z: -415.000000 },
      { x: -1832.000000, y: -1160.000000, z: -415.000000 },
      { x: -1929.000000, y: -1025.000000, z: -415.000000 },
      { x: -1873.999878, y: -1076.000000, z: -415.000000 },
      { x: -1808.000000, y: -1089.000122, z: -415.000000 }
    ]
  }
};

