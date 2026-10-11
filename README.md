# 涵小弟的戒烟日记 🚭

纯 HTML、CSS、原生 JavaScript ES Modules 的手机优先 PWA。无框架、无 npm 依赖、无构建步骤。所有素材和代码均在本项目内。

## 本地运行

Windows 推荐双击 `start.bat`：自动进入项目目录，优先 Python 3（兼容 `py -3` 启动器），否则使用 Node，稍后打开默认浏览器。窗口保持运行，按 `Ctrl+C` 停止。脚本仅含 ASCII，不依赖中文代码页。直接打开 `index.html` 会显示“请双击 start.bat 启动”。也可在项目目录打开终端：

```powershell
cd D:\Projects\quit-smoke-heroes
python -m http.server 8000 --bind 127.0.0.1
```

访问 **http://localhost:8000**。按 `Ctrl+C` 关闭服务器。不要直接双击 HTML：ES Modules 和 Service Worker 需要 HTTP 服务。

如果已安装 Node、没有 Python，可使用附带的开发自测服务器（不需安装依赖）：

```powershell
node tests/serve.mjs
```

访问 **http://127.0.0.1:8765**，按 `Ctrl+C` 关闭。此服务器仅监听本机，不用于公网生产部署。

正式部署只需把静态文件放到 HTTPS 托管服务；支持放在网站子目录。手机通过局域网普通 HTTP 访问时，Service Worker 通常不会工作；正式手机验证请使用 HTTPS。不同协议、域名和端口拥有不同的本地数据。

## 文件说明

| 文件 | 作用 |
| --- | --- |
| `start.bat` | Windows 双击启动本机服务和默认浏览器 |
| `index.html` | 中文界面、四个 Tab、表单与 SOS/日志/重新开始对话框 |
| `css/style.css` | 最大 440px 的响应式布局、英雄主题、呼吸动画、键盘焦点和减少动画支持 |
| `js/app.js` | 入口、hash Tab 路由、渲染、事件、成就颁发、PWA 注册与安装入口 |
| `js/heroes.js` | 原型 11 位英雄、44 句台词、全部原创简化 SVG；可选头像 `image` |
| `js/storage.js` | 带 `version: 1` 的存储、旧版 `qs` 迁移、校验与异常处理 |
| `js/stats.js` | 时间、金额、少抽根数、日志统计、里程碑和成就的纯函数 |
| `js/sos.js` | 五分钟烟瘾急救、时间戳倒计时和呼吸阶段、结束后打开日志 |
| `manifest.webmanifest` | PWA 名称、启动地址、主题色和独立窗口配置 |
| `sw.js` | 静态资源预缓存、离线导航回退、可选头像缓存和旧缓存清理 |
| `icons/icon.svg` | 原创盾牌勾选应用图标及 favicon |
| `images/.gitkeep` | 保留头像目录，等待放入自己的图片 |
| `tests/core.test.mjs` | 数据保真、统计边界、时区、存储迁移、SOS 与静态引用测试 |
| `tests/app.test.mjs` | 使用轻量 DOM 替身检查入口交互逻辑 |
| `tests/offline.test.mjs` | 配合本地 HTTP 服务、缓存替身检查 SW 安装和离线逻辑 |
| `tests/serve.mjs` | 无依赖 Node 本机开发服务器 |
| `README.md` | 运行、维护、数据和自测说明 |

## 使用与设计

- 第一次打开进入设置页，默认从现在开始。手动填写的时间按设备本地时区解释；以后用毫秒时间戳保存。未修改开始时间而只修改价格时，保留原时间戳的秒和毫秒。
- 英雄按本地日历日期轮换；底部名单可串门，跨过本地午夜或后台恢复时重新检查今日英雄。徽章始终由当天值班英雄颁发，手动选的英雄不改变颁发者。
- 设置集中到 Tab 页面，替代原型设置弹窗；头部设置按钮保留。SOS、日志与重新开始使用原生 `dialog`。
- 所有计时由当前时间减去时间戳计算。SOS 到期、提前结束或按 Escape 后打开日志表单；结果由用户确认，不把倒计时到期自动视为“扛住了”。可以暂不记录。
- 日志场景多选，强度 1～5；结果为“扛住了”或“抽了”。所有历史记录参与总次数、扛住率和场景统计；并列最常见场景全部显示。暂无日志时扛住率显示 `—`。
- “记一次失误”打开结果固定为“抽了”的日志表单，保存后不会重置时间；“重新开始”需再确认，才把开始时间设为现在。
- 日志及已获得徽章在重新开始后保留。天数、金额是本轮估算，徽章为历史成就；日志不自动扣除实际抽烟对金额或健康的影响。扛住十次按全部历史日志累计。
- 金额沿用原型公式：先计算预计少抽的整根烟，再按包价折算，显示一位小数及“块”。
- 多个成就同时解锁时合并为一次提示；保存英雄、颁发时间后不再重复提示。存储失败时页面明确提示暂存状态。
- 存储键为 `quit-smoke-heroes`，结构是 `{ version, config, logs, awards }`。旧 `qs` 键迁移后仍保留，方便恢复。未知版本或损坏的新数据不会自动覆盖；可先备份原始内容，再导入有效备份恢复。无远端账户或同步，清除浏览器网站数据会丢失记录。

设置页可导出带本地日期文件名的 JSON 备份，包含当前设置、日志和徽章。导入共用本地存储校验，确认覆盖后才写入；解析、校验或写入失败时保留当前数据。日志每条可删除，确认后更新统计，已获徽章保留。局域网 HTTP 下日志 ID 使用兼容兜底，不依赖 `crypto.randomUUID`。

## 健康资料

时间线按需求采用约 20 分钟、12 小时、2 周～3 个月、1～9 个月、1 年、5 年起和 10 年节点。范围从起点算进度，点亮表示进入参考阶段，不表示已经达到范围末端或检测证实身体恢复。月按 30 天、年按 365 天估算。

来源核对日期：2026-10-11。

- [WHO：戒烟的健康益处](https://www.who.int/news-room/questions-and-answers/item/tobacco-health-benefits-of-smoking-cessation)
- [CDC：戒烟益处（当前资料）](https://www.cdc.gov/tobacco/about/benefits-of-quitting.html)
- [CDC：历史戒烟时间线，含肺癌死亡风险表述](https://archive.cdc.gov/www_cdc_gov/tobacco/sgr/2004/posters/20mins/index.htm)

CDC 当前资料的部分节点、比较基线和指标与历史时间线不同：例如肺癌“额外风险”约 10～15 年减半，不等同于旧表中的“死亡风险”约 10 年减半。页面已提示这些区别并保留来源链接。仅供参考，不构成医疗建议；戒断反应严重请就医。

## 换成自己生成的英雄头像

1. 把自己的图片放到 `images/`，例如 `images/doom.png`；建议正方形、压缩至合适大小。
2. 在 `js/heroes.js` 找到对应英雄，把 `image:""` 改为 `image:"images/doom.png"`。
3. 联网刷新即可加载新的头像配置，无需修改缓存版本号。每个头像成功访问后才可离线使用。

没有图片或图片加载失败时保留原 SVG。SW 在头像成功加载时缓存；缺失的可选图片不阻止核心资源安装。推荐相对路径，不使用外部图片服务。保留同人和真人致敬语声明，并自行确认图片的使用权。

## PWA 与更新

首次联网打开，设置页出现“离线资源已就绪”后，可以断网使用页面、日志、设置和 SOS。外部健康资料链接需联网。

支持安装的浏览器会显示添加按钮，也可从浏览器菜单安装。iPhone Safari 使用分享菜单“添加到主屏幕”。此版本按任务要求提供 SVG 图标；不同手机对 SVG 安装图标支持有差异，正式发布前建议补充 192/512px PNG 和 Apple touch icon 并做真机验证。

采用经典 Service Worker（不依赖 module SW）：项目作用域内的同源 GET 优先联网，成功则更新缓存；网络失败才读取缓存，未缓存的导航回退到项目内 `index.html`。HTTP 错误响应不缓存；网络成功但缓存写入失败仍返回网络响应。缓存按项目子路径区分，无需手动升级缓存版本。首次从旧缓存优先版本迁移时，关闭旧标签后重新打开一次，让新版 SW 接管；后续静态资源修改联网刷新即可。旧 `quit-smoke-heroes-v数字` 缓存在激活时清理。

## 自测

使用 Node 24 的内置测试工具，无需 npm：

```powershell
node --test tests/core.test.mjs tests/app.test.mjs
Get-ChildItem js/*.js,sw.js,tests/*.mjs | ForEach-Object { node --check $_.FullName }
```

要测试 HTTP 和离线缓存逻辑，在一个终端运行 `node tests/serve.mjs`，另一个终端运行：

```powershell
node --test tests/*.test.mjs
```

测完在服务器终端按 `Ctrl+C`。`core.test.mjs` 的英雄保真测试会读取 git 中的原型提交 `03bfe7b:index.html`，不随当前 HEAD 变化。

测试包含原型保真、统计和时区、存储迁移、SOS、入口交互、删除确认、无效/取消/写入失败的备份导入、导出内容、无 randomUUID 保存、file:// 提示、SW 网络更新/运行时头像缓存/离线回退和子路径作用域。

当前沙箱 PATH 仅找到 Node；这不代表用户机器未安装 Python。自动测试使用 DOM/Cache API 替身及真实本机 HTTP 资源，未完成 Windows 双击启动、真实浏览器 SW 和手机安装验收，仍需真机检查。

本次未执行 git commit，工作区留给 CC姐 review。
