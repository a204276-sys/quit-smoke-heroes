// 原型中的原创徽章与全部台词原样保留；image 可填写 images/doom.png 等相对路径。
export const HEROES = [
  { id:"doom", image:"", name:"DOOM", sub:"杜姆博士 · 拉特维亚君主", bg:["#06210f","#1f5c32"], accent:"#7dff9b",
    svg:`<path d="M30 170 Q20 60 100 20 Q180 60 170 170 Z" fill="#1f6b35"/><rect x="55" y="55" width="90" height="110" rx="30" fill="#9aa3ab"/><rect x="68" y="88" width="24" height="8" fill="#111"/><rect x="108" y="88" width="24" height="8" fill="#111"/><rect x="96" y="100" width="8" height="40" fill="#6c757d"/><rect x="75" y="140" width="50" height="6" fill="#111"/>`,
    quotes:["DOOM 从不向任何东西低头——尤其是一根小小的香烟。","这世上只有一个人有资格统治你：你自己。DOOM 批准你今天不抽。","弱者才需要尼古丁。DOOM 需要的只有意志。","今天的胜利，DOOM 记下了。明天，继续征服。"] },
  { id:"gojo", image:"", name:"五条悟", sub:"最强咒术师", bg:["#0a0f2a","#2b4bd8"], accent:"#7fd4ff",
    svg:`<defs>
      <radialGradient id="gojo-infinity"><stop stop-color="#7fd4ff" stop-opacity=".38"/><stop offset=".7" stop-color="#438dff" stop-opacity=".14"/><stop offset="1" stop-color="#438dff" stop-opacity="0"/></radialGradient>
      <linearGradient id="gojo-hair" x1="0" y1="0" x2=".5" y2="1"><stop stop-color="#fff"/><stop offset=".55" stop-color="#eef5ff"/><stop offset="1" stop-color="#9aafcd"/></linearGradient>
      <linearGradient id="gojo-skin" x1="0" y1="0" x2="1" y2=".6"><stop stop-color="#ffecdf"/><stop offset=".65" stop-color="#f0cbb9"/><stop offset="1" stop-color="#b98d87"/></linearGradient>
      <linearGradient id="gojo-uniform" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#26354e"/><stop offset=".45" stop-color="#10192c"/><stop offset="1" stop-color="#050917"/></linearGradient>
      <linearGradient id="gojo-blindfold" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#293248"/><stop offset=".45" stop-color="#090f1d"/><stop offset="1" stop-color="#02050c"/></linearGradient>
    </defs>
    <circle cx="103" cy="96" r="94" fill="url(#gojo-infinity)"/>
    <g fill="none" stroke="#7fd4ff">
      <ellipse cx="102" cy="97" rx="79" ry="75" stroke-opacity=".22"/>
      <path d="M25 112 C13 58 49 22 93 20 M122 24 C166 33 186 75 175 113 M168 134 C153 158 130 168 108 170" stroke-width="2" stroke-linecap="round" stroke-opacity=".6"/>
      <path d="M18 127 C46 148 155 140 185 73" stroke-opacity=".25"/>
    </g>
    <g fill="#b9ecff"><path d="M27 69 L29 62 31 69 38 71 31 73 29 80 27 73 20 71Z"/><circle cx="173" cy="124" r="2"/><circle cx="151" cy="29" r="1.5"/></g>
    <path d="M30 200 C31 175 50 169 73 160 L85 141 122 139 140 159 C167 169 179 181 184 200Z" fill="url(#gojo-uniform)" stroke="#080d1a" stroke-width="2"/>
    <path d="M88 127 L87 154 Q104 166 124 149 L120 119Z" fill="url(#gojo-skin)"/>
    <path d="M88 133 Q105 152 122 132 L121 145 Q104 160 88 149Z" fill="#8c6f78" opacity=".5"/>
    <path d="M64 85 C53 78 52 91 58 102 L68 109 M137 79 C148 73 149 90 141 99 L134 102" fill="#d8ad9f" stroke="#483e50" stroke-width="1.5"/>
    <path d="M64 69 C66 46 132 44 141 69 L137 107 C132 123 117 139 103 147 C89 143 72 128 67 112Z" fill="url(#gojo-skin)" stroke="#453c50" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M128 99 Q131 120 103 147 Q124 137 137 107 L139 94Z" fill="#a77f81" opacity=".45"/>
    <path d="M103 103 L99 116 106 118" fill="none" stroke="#ac7e78" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M90 127 Q102 132 115 124 Q105 136 95 131Z" fill="#fff1e5"/>
    <path d="M90 127 Q102 131 115 124" fill="none" stroke="#795762" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M99 137 L105 138" stroke="#c49891" stroke-linecap="round"/>
    <path d="M59 80 Q96 85 143 72 L143 95 Q104 113 63 103 Q59 92 59 80Z" fill="url(#gojo-blindfold)" stroke="#060b16" stroke-width="2"/>
    <path d="M63 83 Q95 91 137 78 M66 99 Q98 107 136 93" fill="none" stroke="#5f7396" stroke-opacity=".45" stroke-width="1.2"/>
    <path d="M124 83 L140 78 137 92Z" fill="#3a4963" opacity=".35"/>
    <path d="M56 93 C49 82 46 72 42 65 Q51 68 57 67 C48 57 46 48 45 41 Q55 47 66 47 C58 37 59 26 58 22 Q71 34 81 35 C77 24 82 12 86 7 Q89 23 99 29 C103 18 114 9 124 6 Q117 22 121 32 C132 22 142 20 153 20 Q141 33 140 44 Q151 36 166 38 C157 46 155 55 154 60 Q166 56 175 60 C163 66 158 73 151 85 L140 92 139 73 Q129 79 120 78 L125 62 Q114 76 99 83 Q103 72 101 63 Q87 83 76 89 L77 71 Q68 84 56 93Z" fill="url(#gojo-hair)" stroke="#33455f" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M58 22 Q68 46 83 52 Q72 49 66 47 M86 7 Q82 35 99 46 Q90 37 81 35 M124 6 Q103 34 108 55 Q112 42 121 32 M153 20 Q126 42 125 62 M166 38 Q144 55 139 73 M45 41 Q57 60 77 61 Q68 56 57 67" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <path d="M61 78 Q71 67 80 56 Q81 72 76 89 M87 73 Q98 60 101 48 Q110 63 99 83 M117 70 Q130 55 136 45 Q135 65 120 78 M147 64 Q156 59 161 58" fill="none" stroke="#8ba2c3" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M72 142 L86 139 Q91 159 104 168 Q115 157 126 136 L141 141 139 172 112 193 81 174Z" fill="url(#gojo-uniform)" stroke="#070c19" stroke-width="2" stroke-linejoin="round"/>
    <path d="M73 143 L83 146 Q89 163 104 174 M128 140 L136 144 134 166 112 185" fill="none" stroke="#7fd4ff" stroke-opacity=".45" stroke-width="1.5"/>
    <path d="M104 174 L112 193 112 200 M52 181 L73 171 M145 176 L165 186" fill="none" stroke="#384762" stroke-width="1.5"/>
    <circle cx="117" cy="184" r="2.2" fill="#879cb9"/><circle cx="117" cy="184" r=".8" fill="#d8efff"/>`,
    quotes:["放心吧，我是最强的。而你——今天也比香烟强。","无下限术式展开：烟瘾，一根手指都碰不到你。","烟瘾不过是只低级咒灵，祓除它。","比起抽烟，不如去吃甜点？我请客～"] },
  { id:"jalapeno", image:"", name:"火爆辣椒", sub:"植物大战僵尸 · 一次性大招", bg:["#2a0500","#c42b00"], accent:"#ffb02e",
    svg:`<path d="M100 20 Q115 10 120 30" stroke="#2e8b2e" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M80 40 Q140 30 135 100 Q130 170 95 185 Q60 170 65 100 Q60 50 80 40 Z" fill="#e01b1b"/><path d="M78 85 L95 95 M122 85 L105 95" stroke="#000" stroke-width="5"/><circle cx="88" cy="100" r="5"/><circle cx="112" cy="100" r="5"/><path d="M85 130 Q100 120 115 130" stroke="#000" stroke-width="5" fill="none"/>`,
    quotes:["BOOM！一整排烟瘾，烧个精光！🔥","我这辈子只燃烧一次，但够用了。你也只需要扛过眼前这一次。","嘴里要冒火，也得是我这种火，别是烟。","僵尸来了不怕，烟瘾来了更不怕——轰！"] },
  { id:"madara", image:"", name:"宇智波斑", sub:"火影忍者 · 宇智波传说", bg:["#120008","#5a0a1a"], accent:"#ff3b3b",
    svg:`<circle cx="100" cy="100" r="80" fill="#c80000"/><circle cx="100" cy="100" r="50" fill="none" stroke="#000" stroke-width="5"/><circle cx="100" cy="100" r="16" fill="#000"/><g fill="#000"><circle cx="100" cy="50" r="10"/><circle cx="143" cy="125" r="10"/><circle cx="57" cy="125" r="10"/></g>`,
    quotes:["醒醒吧，被香烟支配的世界才是真正的地狱。","想让我认真？那就让我看看，你的意志能撑多久。","须佐能乎在此，守护你的肺。","起舞吧——在没有烟的世界里。"] },
  { id:"ronaldo", image:"", name:"C罗", sub:"Cristiano Ronaldo · 致敬", bg:["#2a0006","#b3001b"], accent:"#ffd23f",
    svg:`<path d="M50 40 L80 25 Q100 40 120 25 L150 40 L180 75 L155 95 L150 180 L50 180 L45 95 L20 75 Z" fill="#d0021b"/><text x="100" y="140" text-anchor="middle" font-size="78" font-weight="900" fill="#ffd23f" font-family="Arial">7</text>`,
    quotes:["他在发布会上把可乐挪开，举起一瓶水。今天，你把烟推开，也去喝杯水。","顶级的身体状态不是天生的，是每天的自律。今天无烟，就是你的一堂训练课。","又熬过一天——SIUUU！","射门要一次次练，戒烟也要一天天赢。"] },
  { id:"eminem", image:"", name:"Eminem", sub:"Slim Shady · 致敬", bg:["#0d0d0d","#3a3a3a"], accent:"#e8e8e8",
    svg:`<rect x="82" y="20" width="36" height="70" rx="18" fill="#cfcfcf"/><g stroke="#888" stroke-width="2"><line x1="84" y1="40" x2="116" y2="40"/><line x1="84" y1="55" x2="116" y2="55"/><line x1="84" y1="70" x2="116" y2="70"/></g><path d="M65 70 Q65 120 100 120 Q135 120 135 70" stroke="#e8e8e8" stroke-width="6" fill="none"/><rect x="96" y="120" width="8" height="45" fill="#e8e8e8"/><rect x="70" y="165" width="60" height="8" rx="4" fill="#e8e8e8"/>`,
    quotes:["You only get one shot——别把它浪费在一根烟上。","他公开讲过自己戒掉依赖、保持清醒的经历。清醒，才写得出最狠的歌。","烟瘾想抢你的麦？Lose yourself，不是 lose to it。","今天的你，是 Real 的那一个。Stand up."] },
  { id:"giannis", image:"", name:"字母哥", sub:"Giannis Antetokounmpo · 致敬", bg:["#00200f","#00471b"], accent:"#eee1c6",
    svg:`<circle cx="100" cy="100" r="78" fill="#e56b1f"/><path d="M22 100 H178 M100 22 V178" stroke="#222" stroke-width="5"/><path d="M45 40 Q100 100 45 160 M155 40 Q100 100 155 160" stroke="#222" stroke-width="5" fill="none"/><text x="100" y="118" text-anchor="middle" font-size="52" font-weight="900" fill="#00471b" font-family="Arial">34</text>`,
    quotes:["从雅典街头摆摊的孩子，到 NBA 总冠军和 MVP，靠的是一步一步来。戒烟也一样。","不想昨天，不想明天，只赢下今天这一回合。","Greek Freak 的体能来自日复一日的坚持，你的肺也值得这份尊重。","低头运球，一步一个脚印，冲向篮筐！"] },
  { id:"bieber", image:"", name:"Justin Bieber", sub:"Biebs · 致敬", bg:["#1a0a2e","#6b2fb3"], accent:"#ff9ad5",
    svg:`<path d="M100 170 L40 110 Q15 80 40 55 Q70 30 100 65 Q130 30 160 55 Q185 80 160 110 Z" fill="#c84bd8"/><path d="M90 70 V130 M90 70 L125 62 V120" stroke="#fff" stroke-width="7" fill="none"/><circle cx="80" cy="132" r="11" fill="#fff"/><circle cx="115" cy="122" r="11" fill="#fff"/>`,
    quotes:["觉得自己戒不掉？Never say never.","烟瘾问你：Is it too late now to say sorry？——是的，太晚了，我们分手了。","把买烟的钱存起来，去看一场演唱会吧。","每天进步一点点，你就是自己的 superstar。"] },
  { id:"ironman", image:"", name:"钢铁侠", sub:"Tony Stark", bg:["#2a0000","#9b1111"], accent:"#ffcc33",
    svg:`<circle cx="100" cy="100" r="80" fill="#8a0d0d"/><circle cx="100" cy="100" r="58" fill="#ffcc33"/><circle cx="100" cy="100" r="40" fill="#1a1a1a"/><circle cx="100" cy="100" r="28" fill="#9ff3ff"/><circle cx="100" cy="100" r="12" fill="#fff"/>`,
    quotes:["连钢铁侠的心脏都要靠反应堆撑着。你的肺，可没有备用件。","天才、富豪、慈善家——还有，无烟人士。今天你也是。","Jarvis，记录：主人又赢了一天。","我是钢铁侠。而你，是不抽烟的人。"] },
  { id:"spiderman", image:"", name:"蜘蛛侠", sub:"友好邻居 Peter Parker", bg:["#00103a","#c8102e"], accent:"#ffffff",
    svg:`<circle cx="100" cy="100" r="80" fill="#c8102e"/><g stroke="#000" stroke-width="2" fill="none"><circle cx="100" cy="100" r="25"/><circle cx="100" cy="100" r="50"/><circle cx="100" cy="100" r="75"/><line x1="100" y1="20" x2="100" y2="180"/><line x1="20" y1="100" x2="180" y2="100"/><line x1="43" y1="43" x2="157" y2="157"/><line x1="157" y1="43" x2="43" y2="157"/></g><path d="M50 85 Q60 60 88 90 Q65 100 50 85 Z M150 85 Q140 60 112 90 Q135 100 150 85 Z" fill="#fff" stroke="#000" stroke-width="4"/>`,
    quotes:["能力越大，责任越大——第一份责任，是对自己的肺。","烟瘾来了？用蛛丝把它绑在路灯上，等警察来收。","蜘蛛感应提醒你：前方有烟瘾，绕道走！","你的友好邻居为你骄傲。"] },
  { id:"thor", image:"", name:"雷神", sub:"Thor Odinson", bg:["#05122b","#1b3f8b"], accent:"#9fd1ff",
    svg:`<polygon points="115,10 75,95 100,95 80,190 140,80 112,80 135,10" fill="#ffe14d"/><rect x="40" y="40" width="70" height="45" rx="6" fill="#8e9aa6"/><rect x="68" y="85" width="14" height="80" rx="5" fill="#6b3e1f"/>`,
    quotes:["配得上举起雷神之锤的人，也配得上一副干净的肺。","我的雷电能劈开天空，你的意志能劈开烟瘾。","为阿斯加德而战！为你的肺而战！","烟瘾？Another!——不，这次说不。"] },
];
