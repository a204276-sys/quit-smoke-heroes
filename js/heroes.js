// 原型中的原创徽章与全部台词原样保留；image 可填写 images/doom.png 等相对路径。
export const HEROES = [
  { id:"doom", image:"", name:"DOOM", sub:"杜姆博士 · 拉特维亚君主", bg:["#06210f","#1f5c32"], accent:"#7dff9b",
    svg:`<defs>
<linearGradient id="doom-cloth" x2=".9" y2="1"><stop stop-color="#438b4c"/><stop offset=".4" stop-color="#1f6b35"/><stop offset="1" stop-color="#08291b"/></linearGradient>
<linearGradient id="doom-metal"><stop stop-color="#566574"/><stop offset=".23" stop-color="#d1dbe0"/><stop offset=".4" stop-color="#8998a3"/><stop offset=".52" stop-color="#f1f7f5"/><stop offset=".65" stop-color="#9aa9b2"/><stop offset="1" stop-color="#455363"/></linearGradient>
<linearGradient id="doom-edge" x2="0" y2="1"><stop stop-color="#e9f0ef"/><stop offset=".48" stop-color="#8e9ea9"/><stop offset="1" stop-color="#394957"/></linearGradient>
<radialGradient id="doom-aura"><stop stop-color="#7dff9b" stop-opacity=".24"/><stop offset="1" stop-color="#7dff9b" stop-opacity="0"/></radialGradient>
</defs>
<ellipse cx="100" cy="100" rx="91" ry="95" fill="url(#doom-aura)"/>
<path d="M19 200L25 164Q33 146 55 140L47 98Q44 41 100 14Q155 40 153 98L146 142Q171 149 178 168L185 200Z" fill="url(#doom-cloth)" stroke="#061b13" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M100 23Q67 43 58 81L53 139 74 157 100 148 130 158 146 139 143 79Q137 42 100 23Z" fill="#081a16"/>
<path d="M98 24Q58 49 55 94L48 120 48 81Q51 42 98 24M106 25Q144 47 147 89L152 123 151 81Q149 43 106 25" fill="#5b9b58" opacity=".55"/>
<path d="M51 104L62 145 46 155 37 184M151 104L138 146 155 161 169 193M68 157L48 197M133 158L146 200" fill="none" stroke="#0b3821" stroke-width="5" stroke-linecap="round"/>
<path d="M32 166L45 155 54 150M155 152L169 164M28 193L39 176M155 190L144 174" fill="none" stroke="#73aa68" stroke-width="1.6" stroke-linecap="round"/>
<path d="M57 65L74 46 125 46 144 65 139 117 123 141 100 153 76 140 61 117Z" fill="url(#doom-metal)" stroke="#142830" stroke-width="2.2"/>
<path d="M61 65L77 51 123 51 139 65 130 75 111 72 100 78 89 72 70 75Z" fill="url(#doom-edge)" stroke="#536571"/>
<path d="M63 81L91 87 90 96 65 93ZM109 87L138 81 136 93 110 96Z" fill="#071212" stroke="#4a5c66" stroke-width="2"/>
<path d="M68 88L87 91M114 91L132 87" stroke="#a7ffc3" stroke-width="2" stroke-linecap="round"/>
<path d="M95 78L105 78 111 112 100 118 89 112Z" fill="url(#doom-edge)" stroke="#4a5964" stroke-width="1.5"/>
<path d="M99 83L97 106 102 109" fill="none" stroke="#eef7f4" stroke-width="1.3"/>
<path d="M66 97L83 101 87 120 77 130 68 117ZM134 97L117 101 113 120 123 130 132 117Z" fill="#536573" opacity=".75"/>
<path d="M78 121L91 117 109 117 122 121 116 138 100 146 84 138Z" fill="url(#doom-edge)" stroke="#394b55" stroke-width="1.5"/>
<path d="M85 125V135M91 123V139M97 122V141M103 122V141M109 123V139M115 125V135" stroke="#233640" stroke-width="2.5"/>
<path d="M80 120L87 117M113 117L120 120M68 68L78 59M118 57L131 64M65 101L69 116" fill="none" stroke="#eff7f4" stroke-width="1.1" opacity=".7"/>
<g fill="#d9e4e5" stroke="#394d59" stroke-width="1.3"><circle cx="64" cy="76" r="2.4"/><circle cx="137" cy="76" r="2.4"/><circle cx="72" cy="118" r="2.4"/><circle cx="128" cy="118" r="2.4"/><circle cx="84" cy="54" r="2"/><circle cx="116" cy="54" r="2"/></g>
<path d="M27 167L48 151 68 156 61 178 30 186ZM173 167L152 151 132 156 139 178 170 186Z" fill="url(#doom-metal)" stroke="#132b2b" stroke-width="2"/>
<path d="M31 168L49 156 63 159M137 159L151 156 169 168" fill="none" stroke="#e3eeea" stroke-width="1.5"/>
<path d="M61 170Q99 195 138 170" fill="none" stroke="#142d22" stroke-width="6"/>
<path d="M61 169Q99 192 138 169" fill="none" stroke="#adb487" stroke-width="2" stroke-dasharray="3 3"/>
<g fill="#d6cb7e" stroke="#4c512e" stroke-width="2"><circle cx="60" cy="168" r="6"/><circle cx="139" cy="168" r="6"/></g>`,
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
    svg:`<defs>
<linearGradient id="jalapeno-fire" x2="0" y2="1"><stop stop-color="#ffdd47"/><stop offset=".45" stop-color="#ff8a14"/><stop offset="1" stop-color="#d92f0d"/></linearGradient>
<linearGradient id="jalapeno-body" x2=".85" y2=".8"><stop stop-color="#ff8970"/><stop offset=".27" stop-color="#ff392c"/><stop offset=".65" stop-color="#e81719"/><stop offset="1" stop-color="#9c0916"/></linearGradient>
<linearGradient id="jalapeno-stem" x2="1" y2="1"><stop stop-color="#c4f364"/><stop offset=".45" stop-color="#56aa32"/><stop offset="1" stop-color="#1d5a2c"/></linearGradient>
<radialGradient id="jalapeno-heat"><stop stop-color="#ffb622" stop-opacity=".5"/><stop offset="1" stop-color="#ff8c00" stop-opacity="0"/></radialGradient>
</defs>
<ellipse cx="100" cy="114" rx="97" ry="85" fill="url(#jalapeno-heat)"/>
<path d="M42 181Q13 163 23 137Q27 149 35 147Q14 111 32 83Q30 104 45 106Q32 68 57 42Q51 65 66 73Q77 59 72 36Q101 51 98 75Q114 57 122 30Q144 58 133 78Q158 65 158 48Q178 74 158 108Q177 103 178 85Q197 122 173 147Q184 147 187 133Q194 169 167 181Q112 199 42 181Z" fill="url(#jalapeno-fire)" stroke="#a63010" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M39 165Q27 141 47 119Q40 133 55 139Q43 99 61 79Q59 105 78 112L99 83 120 115Q145 95 147 81Q159 109 145 134Q163 127 170 114Q174 147 159 167Z" fill="#ffe65e"/>
<path d="M50 165Q43 145 62 126L66 153 100 107 125 143Q148 127 157 130Q162 152 148 171Z" fill="#fff2b0"/>
<path d="M81 58Q109 43 133 65Q155 87 141 126Q126 169 151 172Q133 192 102 181Q70 172 59 141Q45 105 61 77Q68 63 81 58Z" fill="url(#jalapeno-body)" stroke="#71111b" stroke-width="2.5"/>
<path d="M127 64Q149 89 132 128Q117 167 142 175Q125 184 106 177Q129 168 119 151Q135 117 133 89Z" fill="#a30c1c" opacity=".5"/>
<path d="M64 101Q56 81 76 69Q85 64 93 65" fill="none" stroke="#ffb198" stroke-width="5" stroke-linecap="round"/>
<path d="M63 124Q61 141 71 151" fill="none" stroke="#ff7561" stroke-width="2.5" stroke-linecap="round"/>
<path d="M85 61L78 54 88 49 89 38Q88 23 104 19Q124 15 129 33Q116 27 107 34Q100 39 105 49L117 54 111 63 101 57 94 64Z" fill="url(#jalapeno-stem)" stroke="#245326" stroke-width="2" stroke-linejoin="round"/>
<path d="M95 48Q90 31 105 26Q118 23 123 29M85 53L94 54" fill="none" stroke="#d6ff9b" stroke-width="2" stroke-linecap="round"/>
<path d="M68 92Q79 82 96 95L94 116Q79 128 68 113Z M105 95Q119 82 131 91L132 112Q120 127 107 116Z" fill="#fff4d7" stroke="#65101a" stroke-width="2"/>
<ellipse cx="88" cy="107" rx="5" ry="9" fill="#281624"/><ellipse cx="114" cy="106" rx="5" ry="9" fill="#281624"/>
<g fill="#fff"><circle cx="86.5" cy="103" r="1.8"/><circle cx="112.5" cy="102" r="1.8"/></g>
<path d="M66 87Q79 84 97 97L95 102Q77 92 68 94ZM104 97Q121 82 133 85L132 94Q120 92 107 103Z" fill="#39201b" stroke="#701a1b" stroke-width="1"/>
<path d="M79 135Q101 125 125 135L120 150Q101 158 81 146Z" fill="#461823" stroke="#78101b" stroke-width="2"/>
<path d="M82 135Q101 130 121 136L118 146Q101 151 84 143Z" fill="#fff6d7"/>
<path d="M92 133L92 147M103 132V149M113 133L111 148M83 140Q100 145 119 141" stroke="#b97f66" stroke-width="1.2" fill="none"/>
<path d="M70 124L76 126M128 121L133 118M91 161Q103 165 112 160" stroke="#7d1020" stroke-width="2" fill="none" stroke-linecap="round"/>
<g fill="#ffd85b"><path d="M24 67Q15 52 26 41Q24 55 30 57Z"/><path d="M172 53Q163 36 176 24Q170 40 181 44Z"/><path d="M46 32L49 24 52 33 49 38Z"/><path d="M183 174L187 165 190 175 187 182Z"/></g>`,
    quotes:["BOOM！一整排烟瘾，烧个精光！🔥","我这辈子只燃烧一次，但够用了。你也只需要扛过眼前这一次。","嘴里要冒火，也得是我这种火，别是烟。","僵尸来了不怕，烟瘾来了更不怕——轰！"] },
  { id:"madara", image:"", name:"宇智波斑", sub:"火影忍者 · 宇智波传说", bg:["#120008","#5a0a1a"], accent:"#ff3b3b",
    svg:`<defs>
<linearGradient id="madara-hair" x2=".7" y2="1"><stop stop-color="#394255"/><stop offset=".4" stop-color="#151a27"/><stop offset="1" stop-color="#050913"/></linearGradient>
<linearGradient id="madara-armor" x2=".7" y2="1"><stop stop-color="#e76060"/><stop offset=".4" stop-color="#b42c3d"/><stop offset="1" stop-color="#581627"/></linearGradient>
<linearGradient id="madara-skin" x2="1" y2=".5"><stop stop-color="#f4d8c5"/><stop offset=".6" stop-color="#d4ab9b"/><stop offset="1" stop-color="#947b83"/></linearGradient>
<radialGradient id="madara-spirit"><stop stop-color="#8695ff" stop-opacity=".22"/><stop offset="1" stop-color="#6161f4" stop-opacity="0"/></radialGradient>
</defs>
<ellipse cx="100" cy="94" rx="97" ry="91" fill="url(#madara-spirit)"/>
<g fill="#7078eb" fill-opacity=".09" stroke="#9293ff" stroke-opacity=".36" stroke-linejoin="round">
<path d="M13 167L20 89 39 72 32 47 53 54 65 24 74 41 100 10 126 41 135 24 147 54 168 47 161 72 180 89 187 167 160 144 144 95 131 66 100 46 69 66 56 95 40 144Z" stroke-width="2"/>
<path d="M50 68L78 61 92 77 74 75ZM150 68L122 61 108 77 126 75Z" fill="#c2dcff" fill-opacity=".5"/>
<path d="M44 97L63 107M35 118L55 127M31 141L48 150M156 97L137 107M165 118L145 127M169 141L152 150M89 54L100 38 111 54" fill="none" stroke-width="3"/>
</g>
<path d="M39 200L45 131 35 138 45 110 29 118 39 88 29 87 51 62 46 43 66 47 70 23 87 30 102 13 113 28 133 21 136 42 155 40 152 60 170 78 159 85 176 106 165 108 178 139 161 133 170 174 156 165 161 200Z" fill="url(#madara-hair)" stroke="#060913" stroke-width="2" stroke-linejoin="round"/>
<g fill="url(#madara-hair)" stroke="#0b101d" stroke-width="1.2" stroke-linejoin="round">
<path d="M59 70Q48 93 51 112L42 141 58 129 49 169 66 148 68 109Z"/>
<path d="M53 111Q42 134 45 152L38 181 55 167 61 143Z"/>
<path d="M141 64Q155 82 152 103L165 132 148 122 159 163 138 144 131 105Z"/>
<path d="M151 114L164 145 161 156 168 182 149 164 145 135Z"/>
</g>
<path d="M57 88Q51 108 55 123L51 143M145 87L144 107 154 136M153 135L158 157" fill="none" stroke="#546077" stroke-width="1.2" stroke-linecap="round" opacity=".6"/><path d="M31 200Q33 161 68 148L85 138 119 138 136 149Q171 158 179 200Z" fill="#172032" stroke="#080e1b" stroke-width="2"/>
<path d="M87 118L85 147 101 162 123 146 119 116Z" fill="url(#madara-skin)" stroke="#594956" stroke-width="1.5"/>
<path d="M86 134Q104 145 120 128L121 142 102 153 87 145Z" fill="#92717b"/>
<path d="M72 65Q100 45 132 66L132 101Q126 125 105 142Q87 137 72 117L65 87Z" fill="url(#madara-skin)" stroke="#302c3a" stroke-width="1.8"/>
<path d="M121 79L130 80 129 105Q121 128 105 142L117 119Z" fill="#a18083" opacity=".5"/>
<path d="M72 101L83 105 82 98M108 107L105 117 111 119M95 127Q105 125 116 126" fill="none" stroke="#75545b" stroke-width="1.5" stroke-linecap="round"/>
<path d="M89 114L94 120M91 106L98 110M119 109L124 103M88 129L94 132" stroke="#a17772" stroke-width="1"/>
<path d="M106 91Q115 84 128 91L124 98 112 99Z" fill="#f1d8ca" stroke="#2b2332" stroke-width="1.7"/>
<circle cx="117" cy="93" r="5.7" fill="#e93447" stroke="#5d1226" stroke-width="1"/>
<circle cx="117" cy="93" r="1.6" fill="#10101a"/>
<circle cx="117" cy="93" r="3.7" fill="none" stroke="#491329" stroke-width=".6"/>
<g fill="#161221"><path d="M117 88.8q3-.2 1.7 2.2q-2 1-1.7-2.2Z"/><path d="M120.6 95.2q-1.2 2.7-2.7.5q.1-2.2 2.7-.5Z"/><path d="M113.3 95.1q-1.8-2.3.8-2.5q1.9 1.1-.8 2.5Z"/></g>
<path d="M106 87Q116 81 129 87" fill="none" stroke="#202131" stroke-width="2.5"/>
<path d="M69 45Q84 29 110 30Q137 36 145 57L139 92 130 85 133 68Q122 78 104 83L113 62Q95 81 82 107L81 88Q75 104 65 119L66 94 56 108 61 79 47 90 58 60Z" fill="url(#madara-hair)" stroke="#0a0d18" stroke-width="1.6" stroke-linejoin="round"/>
<g fill="none" stroke-linecap="round">
<path d="M75 37Q100 29 116 38M66 54Q89 36 107 43M58 72Q72 53 88 49M92 67L110 48M121 63L130 49M136 64L140 54" stroke="#626b83" stroke-width="1.5" stroke-opacity=".65"/>
<path d="M50 99L58 82M44 124L53 103M48 158L56 133M152 101L163 121M148 117L160 151M144 139L152 168" stroke="#3b465f" stroke-width="2"/>
</g>
<g fill="url(#madara-armor)" stroke="#421327" stroke-width="2" stroke-linejoin="round">
<path d="M64 144L83 140 101 160 121 141 138 146 132 178 101 188 69 176Z"/>
<path d="M70 176L101 184 132 178 135 194 101 200 67 194Z"/>
<path d="M34 159L61 148 68 161 61 178 30 181Z"/>
<path d="M30 182L61 177 66 190 61 200 26 200Z"/>
<path d="M139 149L165 158 173 179 140 178 132 162Z"/>
<path d="M140 178L173 182 180 200 142 200 135 191Z"/>
</g>
<path d="M68 148L79 146 101 169 124 148 133 151M36 164L57 156M34 185L57 182M145 154L163 164M145 183L170 187M74 181L101 189 128 183" fill="none" stroke="#ff9290" stroke-width="1.5" stroke-linecap="round" opacity=".8"/>
<path d="M85 162V176M116 162V178" stroke="#3b192b" stroke-width="3"/>
<g fill="#edb8a4" stroke="#6d2839" stroke-width="1"><circle cx="77" cy="156" r="2"/><circle cx="125" cy="156" r="2"/><circle cx="42" cy="170" r="2"/><circle cx="159" cy="170" r="2"/></g>`,
    quotes:["醒醒吧，被香烟支配的世界才是真正的地狱。","想让我认真？那就让我看看，你的意志能撑多久。","须佐能乎在此，守护你的肺。","起舞吧——在没有烟的世界里。"] },
  { id:"ronaldo", image:"", name:"C罗", sub:"Cristiano Ronaldo · 致敬", bg:["#2a0006","#b3001b"], accent:"#ffd23f",
    svg:`<defs>
  <radialGradient id="ron-glow" cx=".5" cy=".42" r=".55"><stop stop-color="#ffe27a" stop-opacity=".6"/><stop offset=".55" stop-color="#ffd23f" stop-opacity=".14"/><stop offset="1" stop-color="#ffd23f" stop-opacity="0"/></radialGradient>
  <linearGradient id="ron-shirt" x1="0" x2="1"><stop stop-color="#8e0016"/><stop offset=".5" stop-color="#e3122f"/><stop offset="1" stop-color="#8e0016"/></linearGradient>
  <linearGradient id="ron-skin" x1="0" x2="1"><stop stop-color="#a7663f"/><stop offset=".5" stop-color="#d79a6e"/><stop offset="1" stop-color="#a7663f"/></linearGradient>
  <linearGradient id="ron-shorts" x1="0" x2="1"><stop stop-color="#0b4f25"/><stop offset=".5" stop-color="#17843f"/><stop offset="1" stop-color="#0b4f25"/></linearGradient>
  <linearGradient id="ron-gold" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff2a8"/><stop offset=".5" stop-color="#ffd23f"/><stop offset="1" stop-color="#c99400"/></linearGradient>
</defs>
<circle cx="100" cy="92" r="96" fill="url(#ron-glow)"/>
<g stroke="#ffd23f" stroke-width="2.5" stroke-linecap="round" opacity=".6">
  <path d="M100 4v12M44 20l8 10M156 20l-8 10M12 70l13 4M188 70l-13 4"/>
</g>
<g opacity=".9">
  <rect x="30" y="34" width="5" height="3" fill="#ffd23f" transform="rotate(30 32 35)"/>
  <rect x="166" y="44" width="5" height="3" fill="#17843f" transform="rotate(-25 168 45)"/>
  <rect x="150" y="16" width="4" height="3" fill="#e3122f" transform="rotate(50 152 17)"/>
  <rect x="52" y="8" width="4" height="3" fill="#17843f" transform="rotate(-40 54 9)"/>
  <rect x="20" y="132" width="5" height="3" fill="#e3122f" transform="rotate(15 22 133)"/>
  <rect x="176" y="128" width="5" height="3" fill="#ffd23f" transform="rotate(-60 178 129)"/>
</g>
<ellipse cx="100" cy="189" rx="66" ry="6" fill="#000" opacity=".4"/>
<g stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".5"><path d="M38 182h-14M44 176l-10-6M162 182h14M156 176l10-6"/></g>
<!-- 双腿：标志性大劈腿落地 -->
<path d="M84 131 L99 133 L82 159 L70 180 L58 178 L66 157 Z" fill="url(#ron-skin)"/>
<path d="M116 131 L101 133 L118 159 L130 180 L142 178 L134 157 Z" fill="url(#ron-skin)"/>
<path d="M65 160 L81 161 L70 181 L56 179 Z" fill="#c8102e"/>
<path d="M135 160 L119 161 L130 181 L144 179 Z" fill="#c8102e"/>
<path d="M66 163h14M134 163h-14" stroke="#fff" stroke-width="2"/>
<path d="M55 177 L71 180 L72 187 L45 187 Q46 179 55 177 Z" fill="#1c1c1c"/>
<path d="M145 177 L129 180 L128 187 L155 187 Q154 179 145 177 Z" fill="#1c1c1c"/>
<path d="M50 184h20M150 184h-20" stroke="url(#ron-gold)" stroke-width="2"/>
<!-- 短裤 -->
<path d="M77 107 L123 107 L127 134 L105 137 L100 127 L95 137 L73 134 Z" fill="url(#ron-shorts)"/>
<path d="M74 132l21 3M126 132l-21 3" stroke="#e3122f" stroke-width="2"/>
<!-- 双臂向下外展：SIU! -->
<path d="M77 56 L65 62 L34 108 L43 115 L81 73 Z" fill="url(#ron-skin)"/>
<path d="M123 56 L135 62 L166 108 L157 115 L119 73 Z" fill="url(#ron-skin)"/>
<path d="M32 108 L45 113 L45 123 L40 129 L34 128 L33 124 L29 122 L28 115 Z" fill="#c98a5f"/>
<path d="M168 108 L155 113 L155 123 L160 129 L166 128 L167 124 L171 122 L172 115 Z" fill="#c98a5f"/>
<path d="M36 120l-1 7M40 121v7M44 120l-1 6M164 120l1 7M160 121v7M156 120l1 6" stroke="#8a5534" stroke-width="1"/>
<!-- 球衣背面 -->
<path d="M73 55 Q100 47 127 55 L138 62 L142 77 L127 83 L123 109 L77 109 L73 83 L58 77 L62 62 Z" fill="url(#ron-shirt)"/>
<path d="M62 62 L58 77 L73 83" fill="none" stroke="#5e000e" stroke-width="1.5"/>
<path d="M138 62 L142 77 L127 83" fill="none" stroke="#5e000e" stroke-width="1.5"/>
<path d="M59 73l14 6M141 73l-14 6" stroke="#17843f" stroke-width="2.5"/>
<path d="M90 53 Q100 58 110 53" fill="none" stroke="#17843f" stroke-width="3"/>
<path d="M82 90 Q100 96 118 90" fill="none" stroke="#000" stroke-width="2" opacity=".15"/>
<path d="M100 62v44" stroke="#000" stroke-width="2" opacity=".12"/>
<!-- 7 号 -->
<path d="M86 63 H114 V70 L102 101 H92 L104 70 H86 Z" fill="url(#ron-gold)" stroke="#6b0010" stroke-width="1.6" stroke-linejoin="round"/>
<!-- 后脑勺 -->
<rect x="94" y="40" width="12" height="13" fill="#b67650"/>
<ellipse cx="86.5" cy="34" rx="3" ry="5" fill="#c98a5f"/>
<ellipse cx="113.5" cy="34" rx="3" ry="5" fill="#c98a5f"/>
<path d="M87 35 Q86 17 100 16 Q114 17 113 35 Q113 43 107 45 H93 Q87 43 87 35 Z" fill="#2a1a12"/>
<path d="M91 41 Q100 45 109 41" stroke="#4a3022" stroke-width="2" fill="none"/>
<path d="M92 22 Q100 18 108 22" stroke="#7a5640" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8"/>`,
    quotes:["他在发布会上把可乐挪开，举起一瓶水。今天，你把烟推开，也去喝杯水。","顶级的身体状态不是天生的，是每天的自律。今天无烟，就是你的一堂训练课。","又熬过一天——SIUUU！","射门要一次次练，戒烟也要一天天赢。"] },
  { id:"eminem", image:"", name:"Eminem", sub:"Slim Shady · 致敬", bg:["#0d0d0d","#3a3a3a"], accent:"#e8e8e8",
    svg:`<defs>
  <radialGradient id="em-spot" cx=".5" cy=".3" r=".65"><stop stop-color="#ffffff" stop-opacity=".35"/><stop offset=".6" stop-color="#bfbfbf" stop-opacity=".08"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
  <linearGradient id="em-hood" x1="0" x2="1"><stop stop-color="#3f4348"/><stop offset=".45" stop-color="#8a9097"/><stop offset="1" stop-color="#34383c"/></linearGradient>
  <linearGradient id="em-hoodtop" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#a3a9b0"/><stop offset="1" stop-color="#5b6066"/></linearGradient>
  <radialGradient id="em-shadow" cx=".5" cy=".35" r=".7"><stop stop-color="#000"/><stop offset=".8" stop-color="#151515"/><stop offset="1" stop-color="#2a2a2a"/></radialGradient>
  <linearGradient id="em-mic" x1="0" x2="1"><stop stop-color="#6d6d6d"/><stop offset=".4" stop-color="#f2f2f2"/><stop offset="1" stop-color="#555"/></linearGradient>
</defs>
<circle cx="100" cy="80" r="98" fill="url(#em-spot)"/>
<!-- 声波 -->
<g fill="none" stroke="#e8e8e8" stroke-linecap="round" opacity=".55">
  <path d="M150 96 Q160 110 150 124" stroke-width="2.5"/>
  <path d="M160 88 Q176 110 160 132" stroke-width="2"/>
  <path d="M170 80 Q192 110 170 140" stroke-width="1.5"/>
  <path d="M44 96 Q34 110 44 124" stroke-width="2.5"/>
  <path d="M34 88 Q18 110 34 132" stroke-width="2"/>
  <path d="M24 80 Q2 110 24 140" stroke-width="1.5"/>
</g>
<!-- 身体 -->
<path d="M30 200 Q34 150 68 134 L132 134 Q166 150 170 200 Z" fill="url(#em-hood)"/>
<path d="M62 200 Q62 176 74 166 H126 Q138 176 138 200" fill="none" stroke="#2c2f33" stroke-width="2" opacity=".7"/>
<!-- 兜帽 -->
<path d="M56 122 Q46 46 100 34 Q154 46 144 122 Q132 144 100 146 Q68 144 56 122 Z" fill="url(#em-hoodtop)"/>
<path d="M60 70 Q72 44 100 40" fill="none" stroke="#d4d9de" stroke-width="2.5" opacity=".6" stroke-linecap="round"/>
<path d="M100 36 V60" stroke="#55595e" stroke-width="1.5" opacity=".6"/>
<path d="M70 114 Q68 62 100 56 Q132 62 130 114 Q120 136 100 137 Q80 136 70 114 Z" fill="url(#em-shadow)"/>
<!-- 阴影中的下颌 -->
<path d="M82 112 Q86 128 100 131 Q114 128 118 112 Q110 118 100 118 Q90 118 82 112 Z" fill="#c9a48a" opacity=".5"/>
<path d="M92 122 Q100 125 108 122" stroke="#3a2a22" stroke-width="1.6" fill="none" opacity=".8"/>
<!-- 抽绳 -->
<path d="M88 138 Q86 152 87 166M112 138 Q114 152 113 162" stroke="#d9dde1" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<rect x="85" y="164" width="4" height="8" rx="1.5" fill="#1d1d1d"/>
<!-- 握麦克风的手 -->
<path d="M172 200 Q160 172 136 158 L122 170 Q138 182 146 200 Z" fill="url(#em-hood)"/>
<g transform="rotate(-22 118 140)">
  <rect x="112" y="128" width="12" height="40" rx="5" fill="#1d1d1d"/>
  <circle cx="118" cy="118" r="13" fill="url(#em-mic)"/>
  <g stroke="#3a3a3a" stroke-width=".9" opacity=".7">
    <path d="M107 112h22M106 118h24M107 124h22M112 106v24M118 105v26M124 106v24"/>
  </g>
  <rect x="109" y="128" width="18" height="5" rx="2" fill="#9a9a9a"/>
  <path d="M108 142 Q104 152 110 160 L128 160 Q132 150 128 142 Z" fill="#d2a68a"/>
  <path d="M110 147h17M110 152h17M111 157h15" stroke="#9c6f55" stroke-width="1.2"/>
</g>`,
    quotes:["You only get one shot——别把它浪费在一根烟上。","他公开讲过自己戒掉依赖、保持清醒的经历。清醒，才写得出最狠的歌。","烟瘾想抢你的麦？Lose yourself，不是 lose to it。","今天的你，是 Real 的那一个。Stand up."] },
  { id:"giannis", image:"", name:"字母哥", sub:"Giannis Antetokounmpo · 致敬", bg:["#00200f","#00471b"], accent:"#eee1c6",
    svg:`<defs>
  <radialGradient id="gia-glow" cx=".7" cy=".2" r=".7"><stop stop-color="#eee1c6" stop-opacity=".45"/><stop offset=".6" stop-color="#eee1c6" stop-opacity=".08"/><stop offset="1" stop-color="#eee1c6" stop-opacity="0"/></radialGradient>
  <linearGradient id="gia-jersey" x1="0" x2="1"><stop stop-color="#002a10"/><stop offset=".5" stop-color="#0a6b2e"/><stop offset="1" stop-color="#002a10"/></linearGradient>
  <linearGradient id="gia-skin" x1="0" x2="1"><stop stop-color="#7a4a2c"/><stop offset=".5" stop-color="#b57a52"/><stop offset="1" stop-color="#7a4a2c"/></linearGradient>
  <radialGradient id="gia-ball" cx=".35" cy=".3" r=".8"><stop stop-color="#ffb070"/><stop offset=".6" stop-color="#e5691c"/><stop offset="1" stop-color="#a5430a"/></radialGradient>
</defs>
<circle cx="130" cy="50" r="110" fill="url(#gia-glow)"/>
<!-- 篮板与篮筐 -->
<rect x="128" y="2" width="68" height="40" rx="3" fill="#fff" opacity=".12" stroke="#eee1c6" stroke-width="2"/>
<rect x="150" y="16" width="26" height="20" fill="none" stroke="#eee1c6" stroke-width="2" opacity=".8"/>
<g stroke="#f4f4f4" stroke-width="1.2" opacity=".75">
  <path d="M146 46 L150 66 M152 47 L154 67 M158 47 L158 67 M164 47 L162 67 M170 46 L166 66"/>
  <path d="M148 54 L168 56 M149 61 L167 62"/>
</g>
<ellipse cx="158" cy="45" rx="15" ry="4" fill="none" stroke="#e5691c" stroke-width="3.5"/>
<!-- 速度线 -->
<g stroke="#eee1c6" stroke-linecap="round" opacity=".45">
  <path d="M70 192 L82 160M58 186 L70 156M90 196 L98 172" stroke-width="2"/>
</g>
<!-- 左臂（平衡） -->
<path d="M96 80 L86 76 L56 104 L62 110 Z" fill="url(#gia-skin)"/>
<path d="M56 102 L48 106 L50 112 L58 112 L62 108 Z" fill="#9a6340"/>
<!-- 右臂：长臂扣篮 -->
<path d="M124 78 L134 82 L158 34 L150 30 Z" fill="url(#gia-skin)"/>
<path d="M148 32 Q148 24 156 24 Q162 26 160 34 Z" fill="#9a6340"/>
<!-- 篮球 -->
<circle cx="158" cy="26" r="11" fill="url(#gia-ball)"/>
<g fill="none" stroke="#5a2505" stroke-width="1.2">
  <path d="M147 26 H169 M158 15 V37"/><path d="M150 18 Q156 26 150 34"/><path d="M166 18 Q160 26 166 34"/>
</g>
<!-- 腿：一腿收起，一腿下垂 -->
<path d="M100 138 L114 140 L104 160 L112 176 L104 180 L92 162 Z" fill="url(#gia-skin)"/>
<path d="M116 140 L130 138 L136 168 L130 190 L122 190 L124 168 Z" fill="url(#gia-skin)"/>
<path d="M102 176 L116 174 L122 182 L106 186 Z" fill="#eee1c6"/>
<path d="M120 186 L134 186 L138 196 L116 196 Z" fill="#eee1c6"/>
<path d="M104 182l14-3M118 193h18" stroke="#0a6b2e" stroke-width="1.8"/>
<!-- 短裤 -->
<path d="M96 116 L132 114 L136 142 L116 144 L114 136 L110 144 L94 142 Z" fill="url(#gia-jersey)"/>
<path d="M95 138l17 3M135 138l-17 4" stroke="#eee1c6" stroke-width="2"/>
<!-- 背心（背面） -->
<path d="M100 76 Q112 70 124 76 L128 82 L130 116 L96 118 L96 84 Z" fill="url(#gia-jersey)"/>
<path d="M100 76 Q102 90 96 92M124 76 Q122 90 130 92" fill="none" stroke="#eee1c6" stroke-width="2.5"/>
<!-- 34 号 -->
<g fill="none" stroke="#eee1c6" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M101 88 H108 Q112 88 112 92 Q112 96 107 96 Q112 96 112 100 Q112 105 107 105 H101"/>
  <path d="M121 87 L115 99 H126 M123 92 V106"/>
</g>
<!-- 后脑勺 -->
<rect x="107" y="62" width="10" height="12" fill="#8c5634"/>
<path d="M102 60 Q102 46 112 45 Q122 46 122 60 Q121 67 116 68 H108 Q103 67 102 60 Z" fill="#1a0f08"/>
<path d="M106 50 Q112 47 118 50" stroke="#4a3020" stroke-width="1.6" fill="none" stroke-linecap="round"/>`,
    quotes:["从雅典街头摆摊的孩子，到 NBA 总冠军和 MVP，靠的是一步一步来。戒烟也一样。","不想昨天，不想明天，只赢下今天这一回合。","Greek Freak 的体能来自日复一日的坚持，你的肺也值得这份尊重。","低头运球，一步一个脚印，冲向篮筐！"] },
  { id:"bieber", image:"", name:"Justin Bieber", sub:"Biebs · 致敬", bg:["#1a0a2e","#6b2fb3"], accent:"#ff9ad5",
    svg:`<defs>
  <linearGradient id="bie-beam" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ff9ad5" stop-opacity=".55"/><stop offset="1" stop-color="#ff9ad5" stop-opacity="0"/></linearGradient>
  <linearGradient id="bie-beam2" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#b48cff" stop-opacity=".5"/><stop offset="1" stop-color="#b48cff" stop-opacity="0"/></linearGradient>
  <linearGradient id="bie-hoodie" x1="0" x2="1"><stop stop-color="#c46aa8"/><stop offset=".5" stop-color="#f4a6d2"/><stop offset="1" stop-color="#b85e9c"/></linearGradient>
  <linearGradient id="bie-beanie" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#3a3a4a"/><stop offset="1" stop-color="#1a1a24"/></linearGradient>
  <radialGradient id="bie-heart" cx=".4" cy=".35" r=".7"><stop stop-color="#ffd1ec"/><stop offset="1" stop-color="#e0559f"/></radialGradient>
</defs>
<!-- 舞台灯光 -->
<path d="M40 0 L10 160 L70 160 Z" fill="url(#bie-beam2)"/>
<path d="M100 0 L60 170 L140 170 Z" fill="url(#bie-beam)"/>
<path d="M160 0 L130 160 L190 160 Z" fill="url(#bie-beam2)"/>
<g fill="#fff"><circle cx="40" cy="3" r="3"/><circle cx="100" cy="3" r="3"/><circle cx="160" cy="3" r="3"/></g>
<!-- 漂浮的爱心和音符 -->
<path d="M34 50 c-4 -6 -12 -2 -8 5 l8 8 l8 -8 c4 -7 -4 -11 -8 -5 z" fill="url(#bie-heart)"/>
<path d="M166 40 c-3 -5 -10 -2 -7 4 l7 7 l7 -7 c3 -6 -4 -9 -7 -4 z" fill="url(#bie-heart)" opacity=".85"/>
<path d="M152 78 c-2 -4 -7 -1 -5 3 l5 5 l5 -5 c2 -4 -3 -7 -5 -3 z" fill="url(#bie-heart)" opacity=".7"/>
<g fill="#fff" opacity=".85">
  <path d="M52 86 v-14 l10 -3 v14" stroke="#fff" stroke-width="2" fill="none"/><circle cx="50" cy="86" r="3"/><circle cx="60" cy="83" r="3"/>
  <path d="M142 24 v-12" stroke="#fff" stroke-width="2"/><circle cx="140" cy="24" r="3"/><path d="M142 12 q6 2 6 8" stroke="#fff" stroke-width="2" fill="none"/>
</g>
<!-- 舞台 -->
<path d="M0 170 H200 V200 H0 Z" fill="#12061f"/>
<path d="M0 170 H200" stroke="#ff9ad5" stroke-width="2" opacity=".7"/>
<!-- 观众剪影 + 手机灯 -->
<g fill="#0a0312">
  <circle cx="12" cy="190" r="9"/><circle cx="36" cy="186" r="10"/><circle cx="160" cy="187" r="10"/><circle cx="186" cy="190" r="9"/>
  <path d="M0 200 Q12 182 24 200 Z M22 200 Q36 178 50 200 Z M146 200 Q160 178 174 200 Z M172 200 Q186 182 200 200 Z"/>
</g>
<g fill="#fff8c8"><circle cx="48" cy="172" r="2.4"/><circle cx="148" cy="171" r="2.4"/><circle cx="24" cy="176" r="2"/><circle cx="176" cy="176" r="2"/></g>
<!-- 歌手背影 -->
<ellipse cx="100" cy="170" rx="34" ry="4" fill="#000" opacity=".5"/>
<path d="M84 142 L94 142 L92 168 L82 168 Z M106 142 L116 142 L118 168 L108 168 Z" fill="#1d1d2b"/>
<path d="M80 166 H94 V172 H78 Z M106 166 H120 L122 172 H106 Z" fill="#fff"/>
<!-- 举麦克风的手 -->
<path d="M122 82 L130 86 L146 52 L138 48 Z" fill="url(#bie-hoodie)"/>
<path d="M136 50 Q136 42 142 42 Q148 44 146 52 Z" fill="#e8c2a6"/>
<rect x="140" y="30" width="5" height="16" rx="2" fill="#222" transform="rotate(20 142 38)"/>
<circle cx="146" cy="29" r="5" fill="#cfcfcf"/>
<!-- 另一只手放低 -->
<path d="M76 84 L68 88 L62 122 L70 124 Z" fill="url(#bie-hoodie)"/>
<path d="M60 120 L71 122 L70 130 L62 130 Z" fill="#e8c2a6"/>
<!-- 宽松卫衣 -->
<path d="M74 82 Q100 72 126 82 L132 120 Q130 146 100 146 Q70 146 68 120 Z" fill="url(#bie-hoodie)"/>
<path d="M82 84 Q100 96 118 84 Q118 96 100 100 Q82 96 82 84 Z" fill="#b85e9c"/>
<path d="M100 104 V140" stroke="#a24f88" stroke-width="1.5" opacity=".5"/>
<path d="M70 136 Q100 144 130 136" stroke="#a24f88" stroke-width="3" fill="none"/>
<!-- 脖子与针织帽 -->
<rect x="95" y="70" width="10" height="10" fill="#d9ad90"/>
<path d="M86 66 Q84 46 100 44 Q116 46 114 66 Q108 72 100 72 Q92 72 86 66 Z" fill="url(#bie-beanie)"/>
<path d="M85 64 Q100 72 115 64 L115 68 Q100 76 85 68 Z" fill="#454556"/>
<g stroke="#4c4c5e" stroke-width="1.2"><path d="M92 48 V64M100 46 V66M108 48 V64"/></g>`,
    quotes:["觉得自己戒不掉？Never say never.","烟瘾问你：Is it too late now to say sorry？——是的，太晚了，我们分手了。","把买烟的钱存起来，去看一场演唱会吧。","每天进步一点点，你就是自己的 superstar。"] },
  { id:"ironman", image:"", name:"钢铁侠", sub:"Tony Stark", bg:["#2a0000","#9b1111"], accent:"#ffcc33",
    svg:`<defs>
<linearGradient id="ironman-red" x2=".8" y2="1"><stop stop-color="#ff7770"/><stop offset=".23" stop-color="#cb2831"/><stop offset=".58" stop-color="#9e1726"/><stop offset="1" stop-color="#410c1c"/></linearGradient>
<linearGradient id="ironman-gold" x2="1" y2=".7"><stop stop-color="#fff3ae"/><stop offset=".27" stop-color="#edc86a"/><stop offset=".51" stop-color="#fff0a0"/><stop offset=".7" stop-color="#c3933b"/><stop offset="1" stop-color="#8a571f"/></linearGradient>
<linearGradient id="ironman-eye" x2="0" y2="1"><stop stop-color="#fff"/><stop offset=".65" stop-color="#d1fbff"/><stop offset="1" stop-color="#63dbff"/></linearGradient>
<radialGradient id="ironman-reactor"><stop stop-color="#fff"/><stop offset=".22" stop-color="#e0ffff"/><stop offset=".48" stop-color="#5bddff" stop-opacity=".85"/><stop offset="1" stop-color="#36bfff" stop-opacity="0"/></radialGradient>
</defs>
<path d="M24 200L29 165 59 143 79 142 83 126 118 126 122 142 141 143 171 165 178 200Z" fill="url(#ironman-red)" stroke="#310d1a" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M30 165L54 150 66 161 60 183 27 192ZM170 165L146 150 134 161 140 183 175 192Z" fill="url(#ironman-gold)" stroke="#532b26" stroke-width="2"/>
<path d="M66 151L80 146 100 158 121 146 135 152 128 177 100 188 73 178Z" fill="#6a1423" stroke="#310d1a" stroke-width="2"/>
<path d="M73 178L57 194 57 200M128 178L144 194 144 200M38 167L52 157M148 157L162 167M81 146L100 157 120 147" fill="none" stroke="#ff9080" stroke-width="1.5"/>
<path d="M53 53Q54 25 81 17L120 17Q146 25 147 53L148 91 135 121 116 141 84 141 65 122 52 91Z" fill="url(#ironman-red)" stroke="#310d1a" stroke-width="2.5"/>
<path d="M55 56L46 65 48 94 58 108 62 85ZM145 56L154 65 152 94 142 108 138 85Z" fill="#731522" stroke="#350d1b" stroke-width="2"/>
<path d="M60 53L68 35 86 29 90 49 110 49 114 29 133 35 140 54 132 81 136 103 118 127 82 127 64 103 68 81Z" fill="url(#ironman-gold)" stroke="#5b3626" stroke-width="2" stroke-linejoin="round"/>
<path d="M64 55L76 39 83 37 86 54 114 54 119 36 129 40 136 55" fill="none" stroke="#fff7c5" stroke-width="2" stroke-linejoin="round"/>
<path d="M100 55L98 78 88 97 87 113 100 118 113 113 112 97 102 78Z" fill="#f7d982" opacity=".52"/>
<path d="M131 59L127 80 131 101 115 122 108 125 120 105 118 92Z" fill="#92602b" opacity=".45"/>
<path d="M65 76L91 82 94 91 69 88ZM109 82L135 76 131 88 106 91Z" fill="#301f25" stroke="#754329" stroke-width="2"/>
<path d="M68 79L90 84 91 88 71 85ZM110 84L132 79 129 85 109 88Z" fill="url(#ironman-eye)" stroke="#79e7ff" stroke-width="1"/>
<path d="M69 88L91 92M109 92L130 88" stroke="#80e5ff" stroke-width="2" opacity=".5"/>
<path d="M98 83L91 99 90 109M102 83L109 99 110 109M74 99L83 114 89 119M126 99L117 114 111 119" fill="none" stroke="#a16e31" stroke-width="1.5" stroke-linecap="round"/>
<path d="M84 120L116 120 111 127 89 127Z" fill="#42252a"/>
<path d="M89 122H111" stroke="#fce6a1" stroke-width="1"/>
<path d="M68 117L83 132 117 132 132 117 125 135 113 144 87 144 75 135Z" fill="url(#ironman-red)" stroke="#421422" stroke-width="1.5"/>
<path d="M83 136H117M59 49L65 34 79 24M119 23L133 30 141 46M57 65L57 86" fill="none" stroke="#ff9990" stroke-width="1.6" stroke-linecap="round"/>
<path d="M91 20L94 41 106 41 109 20" fill="#771223" stroke="#e35155" stroke-width="1"/>
<circle cx="100" cy="176" r="24" fill="url(#ironman-reactor)"/>
<circle cx="100" cy="176" r="14" fill="#203a4c" stroke="#9eeeff" stroke-width="2"/>
<circle cx="100" cy="176" r="10" fill="url(#ironman-eye)" stroke="#48cfff" stroke-width="1.5"/>
<path d="M100 161V166M111 165L108 169M115 176H110M111 187L108 183M100 191V186M89 187L92 183M85 176H90M89 165L92 169" stroke="#d7fdff" stroke-width="1.5"/>
<circle cx="100" cy="176" r="5.5" fill="#fff"/>
<path d="M67 197L77 186M133 197L123 186" stroke="#491421" stroke-width="3"/>`,
    quotes:["连钢铁侠的心脏都要靠反应堆撑着。你的肺，可没有备用件。","天才、富豪、慈善家——还有，无烟人士。今天你也是。","Jarvis，记录：主人又赢了一天。","我是钢铁侠。而你，是不抽烟的人。"] },
  { id:"spiderman", image:"", name:"蜘蛛侠", sub:"友好邻居 Peter Parker", bg:["#00103a","#c8102e"], accent:"#ffffff",
    svg:`<defs>
<linearGradient id="spiderman-red" x2="1" y2=".65"><stop stop-color="#ff7776"/><stop offset=".28" stop-color="#ec3547"/><stop offset=".62" stop-color="#c91a36"/><stop offset="1" stop-color="#750e2c"/></linearGradient>
<linearGradient id="spiderman-blue" x2=".6" y2="1"><stop stop-color="#458bd3"/><stop offset=".45" stop-color="#205591"/><stop offset="1" stop-color="#0b214e"/></linearGradient>
<linearGradient id="spiderman-lens" x2=".4" y2="1"><stop stop-color="#fff"/><stop offset=".6" stop-color="#e5f6ff"/><stop offset="1" stop-color="#9dbdd7"/></linearGradient>
<clipPath id="spiderman-mask"><path d="M55 72Q53 22 98 20Q143 18 146 65L142 100Q139 128 116 145L119 159 137 170 145 200H54L62 171 81 158 84 145Q57 126 55 96Z"/></clipPath>
</defs>
<path d="M103 0Q101 10 101 22M98 0L101 6 105 10M99 13L102 17" fill="none" stroke="#d9ecff" stroke-width="1.5" stroke-linecap="round"/>
<path d="M23 200Q25 172 47 162L79 150 122 150 152 163Q174 175 180 200Z" fill="url(#spiderman-blue)" stroke="#0a162f" stroke-width="2.5"/>
<path d="M32 189Q39 172 58 168M141 168Q162 176 170 192" fill="none" stroke="#83bbef" stroke-width="2" stroke-linecap="round" opacity=".65"/>
<path d="M45 179L39 200M155 179L166 200" stroke="#103364" stroke-width="3"/>
<path d="M55 72Q53 22 98 20Q143 18 146 65L142 100Q139 128 116 145L119 159 137 170 145 200H54L62 171 81 158 84 145Q57 126 55 96Z" fill="url(#spiderman-red)" stroke="#340e29" stroke-width="2.3"/>
<path d="M132 38Q150 68 134 106Q128 126 109 141L111 161 129 177 131 200H145L137 170 119 159 116 145Q140 127 142 100L146 65Q144 46 132 38Z" fill="#620f2a" opacity=".3"/>
<g clip-path="url(#spiderman-mask)" fill="none" stroke="#43172e" stroke-width="1.25" stroke-opacity=".85">
<path d="M101 19Q95 53 99 82Q103 110 99 145Q97 177 100 204M75 25Q68 60 81 85Q90 111 84 145L76 166 73 200M125 25Q135 58 118 86Q109 116 116 145L126 166 128 200"/>
<path d="M58 43Q56 69 73 93Q84 109 74 132M143 42Q147 70 126 94Q117 111 128 133M52 75Q59 110 64 118M149 73Q141 110 137 119"/>
<path d="M55 47Q72 51 78 46Q94 51 99 44Q111 51 124 45Q135 50 145 43M54 64Q68 70 74 63Q89 71 98 61Q113 71 127 63Q136 68 147 61M54 81Q67 88 76 80Q91 92 99 81Q109 92 122 81Q136 87 145 78"/>
<path d="M55 101Q68 106 79 99Q91 113 100 103Q110 113 121 99Q135 104 144 97M60 117Q72 121 82 115Q93 128 100 120Q110 128 117 115Q129 120 139 113M70 133Q78 136 85 130Q95 141 100 135Q109 142 113 131Q121 135 130 128M82 149Q90 158 99 151Q109 158 118 148"/>
<path d="M69 166Q77 175 85 169Q99 180 114 169Q122 176 131 166M59 182Q70 190 76 180Q99 194 125 180Q133 188 141 179M51 200Q66 208 73 194Q99 208 128 194Q141 205 148 197"/>
<path d="M84 145Q92 156 87 177L89 200M116 145Q107 156 112 177L111 200M62 171L55 200M136 171L144 200"/>
</g>
<path d="M61 70Q72 73 94 94Q88 111 75 114Q60 109 60 88Z" fill="#121522" stroke="#2b0e26" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M139 68Q127 73 106 94Q111 111 125 113Q140 108 140 86Z" fill="#121522" stroke="#2b0e26" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M65 77Q76 80 89 95Q82 108 75 108Q65 104 65 88Z" fill="url(#spiderman-lens)"/>
<path d="M135 75Q123 81 111 95Q118 108 125 107Q135 103 135 87Z" fill="url(#spiderman-lens)"/>
<path d="M68 82Q76 87 83 96M130 81Q122 87 116 95" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
<path d="M65 51Q69 35 83 30M63 59L62 64" fill="none" stroke="#ffb9a9" stroke-width="2.4" stroke-linecap="round"/>
<path d="M86 139Q99 145 112 136" fill="none" stroke="#68142f" stroke-width="2"/>
<g fill="#111627" stroke="#111627" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="100" cy="182" rx="4" ry="8"/><ellipse cx="100" cy="171" rx="3" ry="3.5"/>
<path d="M97 175L89 171 86 163M103 175L111 171 114 163M96 179L85 177 80 171M104 179L115 177 120 171M96 184L86 188 80 195M104 184L114 188 120 195M98 188L91 193 89 200M102 188L109 193 111 200" fill="none" stroke-width="2.3"/>
</g>`,
    quotes:["能力越大，责任越大——第一份责任，是对自己的肺。","烟瘾来了？用蛛丝把它绑在路灯上，等警察来收。","蜘蛛感应提醒你：前方有烟瘾，绕道走！","你的友好邻居为你骄傲。"] },
  { id:"thor", image:"", name:"雷神", sub:"Thor Odinson", bg:["#05122b","#1b3f8b"], accent:"#9fd1ff",
    svg:`<defs>
  <radialGradient id="thor-storm" cx=".5" cy=".4" r=".6"><stop stop-color="#9fd1ff" stop-opacity=".45"/><stop offset=".6" stop-color="#3a6fd8" stop-opacity=".12"/><stop offset="1" stop-color="#3a6fd8" stop-opacity="0"/></radialGradient>
  <linearGradient id="thor-metal" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#eef3f8"/><stop offset=".35" stop-color="#aab6c2"/><stop offset=".55" stop-color="#7b8794"/><stop offset="1" stop-color="#4c5560"/></linearGradient>
  <linearGradient id="thor-side" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#5d6772"/><stop offset="1" stop-color="#3a414a"/></linearGradient>
  <linearGradient id="thor-leather" x1="0" x2="1"><stop stop-color="#4a2a14"/><stop offset=".5" stop-color="#8b5a32"/><stop offset="1" stop-color="#4a2a14"/></linearGradient>
  <filter id="thor-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<circle cx="100" cy="90" r="95" fill="url(#thor-storm)"/>
<!-- 乌云 -->
<g fill="#2a3a5c" opacity=".85">
  <circle cx="40" cy="30" r="18"/><circle cx="62" cy="22" r="20"/><circle cx="86" cy="30" r="15"/>
  <circle cx="122" cy="24" r="14"/><circle cx="146" cy="18" r="20"/><circle cx="170" cy="30" r="16"/>
</g>
<g fill="#3d5280" opacity=".7"><circle cx="58" cy="30" r="12"/><circle cx="150" cy="28" r="12"/></g>
<!-- 闪电 -->
<g filter="url(#thor-glow)" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M60 36 L72 62 L62 66 L82 96" stroke="#e8f6ff" stroke-width="3"/>
  <path d="M148 34 L134 60 L146 64 L122 92" stroke="#e8f6ff" stroke-width="3"/>
  <path d="M30 120 Q50 100 66 112 T96 104" stroke="#9fd1ff" stroke-width="2"/>
  <path d="M172 126 Q152 108 138 118 T106 112" stroke="#9fd1ff" stroke-width="2"/>
  <path d="M72 62 L54 74" stroke="#cfeaff" stroke-width="1.5"/>
  <path d="M134 60 L152 70" stroke="#cfeaff" stroke-width="1.5"/>
</g>
<!-- 锤柄（皮革缠绕） -->
<g transform="rotate(-14 100 120)">
  <rect x="93" y="104" width="14" height="70" rx="3" fill="url(#thor-leather)"/>
  <g stroke="#2e1708" stroke-width="1.5" opacity=".8">
    <path d="M93 112l14 5M93 121l14 5M93 130l14 5M93 139l14 5M93 148l14 5M93 157l14 5M93 166l14 5"/>
  </g>
  <rect x="91" y="170" width="18" height="8" rx="2" fill="url(#thor-metal)"/>
  <path d="M100 178 Q86 192 100 196 Q114 192 100 178" fill="none" stroke="#6b4022" stroke-width="3"/>
  <!-- 锤头 -->
  <path d="M52 62 H148 L152 68 V100 L148 106 H52 L48 100 V68 Z" fill="url(#thor-metal)" stroke="#2c333b" stroke-width="2"/>
  <path d="M48 68 L52 62 V106 L48 100 Z" fill="url(#thor-side)"/>
  <path d="M152 68 L148 62 V106 L152 100 Z" fill="url(#thor-side)"/>
  <path d="M56 66 H144" stroke="#fff" stroke-width="2" opacity=".75"/>
  <!-- 凯尔特纹饰 -->
  <g fill="none" stroke="#3a434d" stroke-width="2" opacity=".75">
    <rect x="74" y="72" width="52" height="24" rx="5"/>
    <path d="M82 84 Q90 74 100 84 T118 84"/>
    <path d="M82 84 Q90 94 100 84 T118 84"/>
    <circle cx="62" cy="84" r="6"/><circle cx="138" cy="84" r="6"/>
  </g>
  <path d="M52 104 H148" stroke="#22282e" stroke-width="2" opacity=".6"/>
  <rect x="91" y="104" width="18" height="6" fill="#3a414a"/>
</g>
<!-- 电光火花 -->
<g fill="#e8f6ff" filter="url(#thor-glow)">
  <circle cx="44" cy="70" r="2.5"/><circle cx="160" cy="58" r="2.5"/><circle cx="36" cy="96" r="1.8"/><circle cx="166" cy="100" r="1.8"/>
</g>`,
    quotes:["配得上举起雷神之锤的人，也配得上一副干净的肺。","我的雷电能劈开天空，你的意志能劈开烟瘾。","为阿斯加德而战！为你的肺而战！","烟瘾？Another!——不，这次说不。"] },
];
