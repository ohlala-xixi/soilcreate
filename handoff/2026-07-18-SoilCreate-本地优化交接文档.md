# SoilCreate 本地优化交接文档

日期：2026-07-18  
项目目录：`/Users/xbfile/Documents/04 code/soilcreate/soilcreate`  
本地预览：`http://127.0.0.1:5174/`  
线上网站：`https://soilcreate.com`  
GitHub 仓库：`https://github.com/ohlala-xixi/soilcreate`  
当前原则：本地修改优先，只有用户明确说“同步到 GitHub”时才推送。

## 一、今天完成了什么

### 1. Case 主页面与 Case 详情页持续优化

本轮重点围绕 `/case`、`/case/deep-foundation-pit` 以及其他 case 页面进行视觉统一。

已完成内容：

- 删除了 `/case` 主页面 6 个行业卡片中的橙色标签文字，例如 `IPI · VW SENSOR`、`SAA · LASER RANGEFINDER` 等。
- 将 `/case` 主页面 6 个 case 卡片改成图片背景卡片。
- 给图片卡片增加深色渐层遮罩，保证标题、说明、`View cases` 在图片上可读。
- 优化 case 页面中的应用模块标题：
  - 橙色 `APPLICATION 01 · ...` 标题放大。
  - 下方黑色标题缩小。
  - 桌面端尽量单行显示。
  - 移动端允许换行，避免溢出屏幕。
- 删除了 case 主页面底部不需要的深色 CTA。
- 优化 case 页面底部相关产品和询盘模块的位置逻辑：
  - `Related Products` 应放在 CTA / 询盘模块上方。
  - 询盘模块应作为页面最后的转化区域。

涉及文件：

- `docs/.vitepress/theme/data/importedCases.js`
- `docs/.vitepress/theme/components/ImportedCasePage.vue`
- `docs/.vitepress/theme/style.css`
- `docs/case.md`
- `docs/case/deep-foundation-pit.md`
- `docs/case/rail-transit.md`
- `docs/case/slope-landslide.md`
- `docs/case/tunnel-convergence.md`
- `docs/case/water-dam.md`
- `docs/case/bridge-structure.md`

### 2. Products 页面宽度与模块顺序优化

已完成内容：

- Products 页面中的列表区、Trust 区、Why Clients 区、询盘区做了宽度统一处理。
- 将 Products 页面的 `Make an enquiry` 表单移动到页脚上方，作为最后一个主要转化模块。
- Products 页面底部也加入了与首页一致的技术/数据模块逻辑。
- 修复了部分产品页面相关产品图片不显示的问题。
- 产品目录左侧导航做过一次样式优化：
  - 去掉大量硬边框。
  - 一级分类更像折叠菜单。
  - 当前项使用左侧品牌色细条提示。
  - 下载按钮改为更克制的样式。

涉及文件：

- `docs/products/index.md`
- `docs/.vitepress/theme/components/ProductsList.vue`
- `docs/.vitepress/theme/components/ProductLayout.vue`
- `docs/.vitepress/theme/data/products.json`
- `docs/.vitepress/theme/style.css`

### 3. 产品页面 Rasber 风格迁移

已完成内容：

- 从 Rasber 项目中引入产品详情页的部分结构和样式逻辑。
- 目标不是完全复制蓝色 Rasber 品牌，而是保留 Rasber 的信息架构，同时改为 SoilCreate 主题：
  - 主题橙：`#D96B3A`
  - 深灰标题色
  - 浅灰 / 白色模块背景
- 新增了一套不同于 `soilcreate-product-uploader` 的产品导入规则，保留 Rasber 样式产品页上传路径。

相关文件：

- `docs/.vitepress/theme/components/ImportedProductPage.vue`
- `docs/.vitepress/theme/data/importedProducts.js`
- `docs/.vitepress/theme/data/rasberProductPages.js`
- `docs/public/tools/soilcreate-product-import-rule.md`

### 4. 首页、About、Products 的模块统一

已完成内容：

- 首页新增并优化了：
  - Market Data
  - Core Technology
  - Open Source Engineering
  - Proven at Scale
  - Why Clients Trust SoilCreate
- 统一这些模块的标题样式：
  - 标题居中。
  - 删除标题前的横线。
  - 数字缩小，避免过度突兀。
  - 卡片 hover 时出现柔和橙色边框。
- 调整首页背景分区逻辑：
  - 白色与浅灰色交替。
  - 避免背景颜色过杂。
- About 页面新增/调整：
  - Who We Are
  - What We Do
  - More Than a Sensor Manufacturer
  - Cloud-Edge-Device, Fully Self-Developed
  - Full-Lifecycle Technical Support
- About 页 hero 背景图、中间图做过替换。

涉及文件：

- `docs/.vitepress/theme/components/HomePage.vue`
- `docs/.vitepress/theme/components/AboutPage.vue`
- `docs/.vitepress/theme/components/CompanyCapabilities.vue`
- `docs/.vitepress/theme/components/HomeDataSections.vue`
- `docs/.vitepress/theme/components/TrustSection.vue`
- `docs/.vitepress/theme/style.css`

### 5. 图片整理与 SEO 图片目录

已开始按页面逻辑重新整理图片：

- 首页图片：`docs/public/images/home/`
- About 图片：`docs/public/images/about/`
- Case 图片：`docs/public/images/case/`
- 产品图片：`docs/public/images/products/`
- Solution 图片：`docs/public/images/solution/`
- Logo / favicon：`docs/public/images/logo/`
- 通用 hero / placeholder：`docs/public/images/shared/`

当前已经存在的关键图片路径：

- `docs/public/images/home/home-hero.svg`
- `docs/public/images/home/monitoring-cloud-city.jpg`
- `docs/public/images/home/monitoring-consultation-cta.jpg`
- `docs/public/images/about/bridge-monitoring-hero.jpg`
- `docs/public/images/case/deep-foundation-pit/deep-foundation-pit-hero.jpg`
- `docs/public/images/case/rail-transit/rail-transit-hero.jpg`
- `docs/public/images/case/slope-landslide/geohazard-pipeline-monitoring.jpg`
- `docs/public/images/case/water-dam/water-dam-hero.jpg`
- `docs/public/images/case/bridge-structure/bridge-structure-hero.jpg`
- `docs/public/images/products/sliding-inclinometer/`
- `docs/public/images/products/in-place-inclinometer/`
- `docs/public/images/products/flexible-inclinometer/`
- `docs/public/images/products/gnss-monitoring-system/`
- `docs/public/images/products/hydrostatic-level-gauge/`
- `docs/public/images/products/vibrating-wire-sensors/`

### 6. SEO 与技术基础

已完成或已有基础：

- `config.mjs` 中已经做过 SEO、GA4、GTM、schema、sitemap 相关配置。
- 已有 sitemap 生成脚本：`scripts/generate-sitemap.mjs`
- 每次 `npm run build` 会自动：
  - 生成规格 PDF。
  - 构建 VitePress。
  - 生成 sitemap。
- 已添加 favicon。
- 已添加 Schema.org 基础结构。
- 已整理过 SEO 日常流程文档：
  - `seo/SEO_DAILY_WORKFLOW.md`
  - `seo/SEO_DAILY_WORKFLOW_ZH.md`
  - `seo/SOILCREATE_SKILLS_GUIDE.md`

## 二、当前卡在哪一步

当前没有技术阻塞，但有一个明确的“未收尾状态”：

### 1. 本地修改很多，还没有同步 GitHub

`git status --short` 显示当前有大量本地改动，包括：

- 主题组件修改。
- case 页面新增与重构。
- 产品目录结构新增。
- 图片目录重排。
- 旧图片删除、新图片新增。
- sitemap/config/生成器更新。

这说明当前网站处于“本地优化完成一部分，但尚未发布”的状态。

下次继续前，必须先确认用户目标：

- 如果继续本地优化：不要 push。
- 如果用户明确说“同步到 GitHub”：先 `npm run build`，再检查 diff，再 commit/push。

### 2. `/case` 主页面图片卡片还需要人工视觉确认

刚刚完成的最后一步是：

- 删除 6 个 case 卡片里的橙色标签。
- 每个卡片改成项目图片背景。

但是还没有做截图复核。下一次打开本地预览时，应优先检查：

- `/case` 页面 6 个图片卡片是否高度一致。
- 图片是否被裁切得合理。
- 白色文字是否清楚。
- `View cases` 是否放在合适位置。
- 隧道收敛卡片目前使用的是 `saa-convergence-monitoring.svg`，不是实景图，后续最好替换成真实隧道项目图。

### 3. Products 页面宽度问题曾反复出现

Products 页面之前多次出现：

- 列表区宽度正常。
- Trust / Why / Enquiry 区宽度不一致。
- 背景区域 full-width 与内容容器 1200px 混乱。

当前已经做过修正，但下次继续仍然要重点检查：

- `/products/`
- `/products/deformation-monitoring/sliding-inclinometer`
- `/products/deformation-monitoring/in-place-inclinometer`
- `/products/deformation-monitoring/flexible-inclinometer`

## 三、下一步建议做什么

### 第一步：视觉复核

先不要继续大改。打开本地预览逐页检查：

- `http://127.0.0.1:5174/`
- `http://127.0.0.1:5174/about`
- `http://127.0.0.1:5174/products/`
- `http://127.0.0.1:5174/case`
- `http://127.0.0.1:5174/case/deep-foundation-pit`
- `http://127.0.0.1:5174/solution`

重点看：

- 模块宽度是否统一。
- 背景色是否只有白色 / 浅灰交替。
- 标题是否过大或溢出。
- CTA 是否在正确位置。
- 图片是否真实、清楚、没有 SVG 临时感。

### 第二步：修复 `/case` 主页面图片卡片细节

建议下一步技术动作：

1. 为 6 个 case 卡片补齐真实项目图。
2. 隧道收敛卡片替换为真实隧道图。
3. 给图片卡片加统一高度与响应式规则。
4. 移动端改成单列，文字不要压在复杂图片区域上。

主要修改位置：

- `docs/.vitepress/theme/data/importedCases.js`
- `docs/.vitepress/theme/style.css`
- `docs/public/images/case/`

### 第三步：产品页面统一收尾

需要继续按当前样板页规则，把所有产品页面统一：

- Hero。
- 参数表。
- 产品图片。
- 下载资料。
- Related Products。
- Related Case。
- Related Solutions。
- Make an enquiry。

注意：

- 原有询盘表单不能删。
- 下载产品资料、相关产品、相关 case、相关 solution 要保留。
- Rasber 的 CTA 部分不要直接复制。
- Rasber 的蓝色必须改成 SoilCreate 的主题色。

主要修改位置：

- `docs/.vitepress/theme/components/ImportedProductPage.vue`
- `docs/.vitepress/theme/data/importedProducts.js`
- `docs/.vitepress/theme/data/products.json`
- `docs/.vitepress/theme/style.css`
- `docs/products/`

### 第四步：构建与发布

如果只是本地继续修改：

```bash
npm run build
```

如果用户明确说“同步到 GitHub”，再执行：

```bash
git status --short
npm run build
git add .
git commit -m "Update SoilCreate site design and case pages"
git push
```

发布后检查：

- GitHub Actions 是否成功。
- `https://soilcreate.com`
- `https://soilcreate.com/sitemap.xml`
- Google Search Console 是否提交 sitemap / 请求索引。

## 四、绝对不要再踩的坑

### 1. 不要在用户没说“同步到 GitHub”时 push

这是最高优先级规则。

用户已经明确说过：

- 平时只做本地修改。
- 只有用户说“同步到 GitHub”才发布。

### 2. 不要误改 Home，而用户其实要改 About

之前出现过一次：

- 用户截图说“把这个模块放到图中红框位置”。
- 实际是 About 页面。
- 曾经误放到了 Home。

下次遇到截图类需求，必须先看当前 URL 或用户文字：

- `/` 是 Home。
- `/about` 是 About。
- `/products` 是 Products。
- `/case` 是 Case。
- `/solution` 是 Solution。

### 3. 不要把 Rasber 的蓝色照搬进 SoilCreate

Rasber 是参考结构，不是参考品牌色。

SoilCreate 当前主题：

- 主橙：`#D96B3A`
- 深灰：`#26323D` / `#3A474E`
- 浅灰：`#f8f9fa`
- 边框灰：`#eaedf0` / `#E5E7EB`

禁止：

- 大面积蓝色。
- 棕色数字。
- 过强的橙色块。
- 和网站字体不一致的数字字体。

### 4. 不要让背景 section 和内容 container 混在一起

Products 页面宽度问题就是这个坑。

正确结构：

- 背景色模块可以 full-width。
- 里面的内容必须统一进入 `--sc-content-width`，也就是约 1200px。

不要把整个 section 强行设成 1200px，否则背景断裂。
不要让内部卡片自己随意设置 max-width，否则模块宽度会不一致。

### 5. 不要把询盘表单放在页面中间

用户已经明确：

- Products 页面的 `Make an enquiry` 应该在页脚上方，作为最后转化模块。
- Case 详情页最终 CTA 也要靠近底部。
- Related Products / Related Case 应该在询盘或 CTA 之前。

### 6. 不要删除原有业务闭环

产品页新增 Rasber 样式时，必须保留：

- 原有询盘表单。
- Catalog / 下载资料按钮。
- Related Products。
- Related Case。
- Related Solutions。
- Formspree 提交流程。
- WhatsApp / 邮箱入口。

### 7. 不要把“标签”样式用得太重

用户已经多次反馈：

- 橙色标签过抢眼。
- 小标题不要总是橙色。
- 有些标签需要删除。

原则：

- 真正需要强调的 CTA 用橙色。
- 信息标签尽量用黑灰色、浅底、低边框。
- 图片卡片里不需要再放橙色标签。

### 8. 不要让标题超出内容框

特别是 case 页面应用模块：

- 橙色应用标题可以更大。
- 黑色标题要更小。
- 桌面端尽量一行。
- 移动端允许换行。
- 如果标题过长，优先减小字号，不要撑破布局。

### 9. 不要使用旧图片路径

旧路径中已有很多被删除或迁移：

- `docs/public/images/hero/`
- `docs/public/images/products/*.jpg`
- `docs/public/images/product-placeholder.svg`
- `docs/public/images/factory-bridge-placeholder.svg`

现在应优先使用新结构：

- `docs/public/images/home/`
- `docs/public/images/about/`
- `docs/public/images/case/`
- `docs/public/images/products/{product-slug}/`
- `docs/public/images/shared/`

### 10. 不要忘记每次改完跑构建

每次前端/页面/数据修改后必须跑：

```bash
npm run build
```

构建成功后才可以告诉用户“完成”。

## 五、下次接手的推荐开场动作

建议下次一开始执行：

```bash
cd "/Users/xbfile/Documents/04 code/soilcreate/soilcreate"
git status --short
npm run build
```

然后打开：

```text
http://127.0.0.1:5174/case
```

优先检查：

1. 6 个 case 图片卡片是否符合预期。
2. 橙色标签是否已经删除。
3. 图片背景是否每个项目不同。
4. 字体是否清晰。
5. 移动端是否正常。

## 六、常用入口与工具

产品 MD 生成器：

- 本地：`http://127.0.0.1:5174/tools/product-md-generator.html`
- 文件：`docs/public/tools/product-md-generator.html`

Case Study MD 生成器：

- 本地：`http://127.0.0.1:5174/tools/case-study-md-generator.html`
- 文件：`docs/public/tools/case-study-md-generator.html`

Rasber 产品导入规则：

- 文件：`docs/public/tools/soilcreate-product-import-rule.md`

产品数据：

- `docs/.vitepress/theme/data/products.json`

导入式产品页数据：

- `docs/.vitepress/theme/data/importedProducts.js`
- `docs/.vitepress/theme/data/rasberProductPages.js`

导入式 Case 页数据：

- `docs/.vitepress/theme/data/importedCases.js`

全局样式：

- `docs/.vitepress/theme/style.css`

VitePress 配置：

- `docs/.vitepress/config.mjs`

## 七、当前判断

当前网站不是“坏掉”，而是处于一次比较大的本地视觉升级中。

最重要的下一步不是继续大范围新增功能，而是：

1. 逐页视觉复核。
2. 修正宽度、标题、图片、CTA 这些细节。
3. 再统一构建。
4. 用户确认后再同步 GitHub。

