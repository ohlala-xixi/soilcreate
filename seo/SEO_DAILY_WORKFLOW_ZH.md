# SoilCreate SEO 每日运营工作清单

这份文档用于指导 SoilCreate 官网上线后的日常 SEO 维护、页面优化、内容更新和 Google 收录跟踪。

线上网站信息：

- 主域名：https://soilcreate.com
- WWW 域名：https://www.soilcreate.com
- 站点地图：https://soilcreate.com/sitemap.xml
- GitHub 仓库：https://github.com/ohlala-xixi/soilcreate
- Google Search Console 资源：soilcreate.com

## 1. 每日工作清单

建议每天花 15-30 分钟。新站不要一次性大改，持续小步优化更稳定。

### 1.1 检查网站是否正常

每天打开以下页面：

- https://soilcreate.com
- https://www.soilcreate.com
- https://soilcreate.com/sitemap.xml
- https://soilcreate.com/products/
- https://soilcreate.com/contact/

确认：

- 首页显示完整 SoilCreate 官网，不是 GitHub 默认空白页面。
- sitemap.xml 能正常打开，不是 404。
- 页眉导航可以点击。
- 产品页面可以打开。
- 询盘表单可以打开，必要时测试提交。

### 1.2 检查 GitHub Actions 部署状态

打开：

- https://github.com/ohlala-xixi/soilcreate/actions

确认最新 workflow 是绿色成功：

- Deploy VitePress site to Pages

如果变红：

- 点进失败的 workflow。
- 截图失败步骤。
- 不要反复 push，先确认失败原因。

### 1.3 检查 Google Search Console

打开：

- https://search.google.com/search-console

每天重点看：

- 编制索引 > 网页
- 编制索引 > 站点地图
- 效果 > 搜索结果
- 顶部 URL 检查框

新站刚提交 sitemap 后，显示“正在处理数据，请过 1 天左右再来查看”是正常的。

### 1.4 请求 Google 编入索引

在 Google Search Console 顶部 URL 检查框里输入页面地址。

优先检查这些页面：

- https://soilcreate.com/
- https://soilcreate.com/products/
- https://soilcreate.com/contact/
- https://soilcreate.com/about/
- https://soilcreate.com/case-study/
- https://soilcreate.com/products/geotechnical-monitoring/inclinometer-sensor/
- https://soilcreate.com/products/geotechnical-monitoring/piezometer-sensor/

如果 Google 显示“网址不在 Google 上”，点击：

- 请求编入索引

不要一天提交太多。新站每天提交 3-5 个核心页面即可。

### 1.5 记录当天修改

建议保留一个简单日志：

- 日期
- 修改了哪个页面
- 修改了什么
- 为什么修改
- 是否请求了 Google 编入索引

示例：

```text
2026-05-26
修改 /products/geotechnical-monitoring/inclinometer-sensor/
替换产品图，优化 title 和 imageAlt。
已在 Google Search Console 请求编入索引。
```

## 2. 每周工作清单

每周做一次。

### 2.1 查看 Search Console 搜索表现

重点看：

- 总点击次数
- 总曝光次数
- 平均点击率 CTR
- 平均排名
- 搜索查询词
- 页面

你要问自己：

- 哪些产品关键词开始有曝光？
- 哪些页面有曝光但点击率低？
- 哪些页面完全没有曝光？
- 哪些国家开始有流量？

如果一个页面有曝光但点击率低，优先优化：

- 页面 Title
- Meta Description
- 首屏文案
- 产品图片

### 2.2 查看页面收录情况

打开：

- 编制索引 > 网页

重点看：

- 已编入索引的页面
- 未编入索引的页面
- 抓取错误
- 重复网页，Google 选择了不同的规范网页
- 已发现，尚未编入索引
- 已抓取，尚未编入索引

如果重要页面未被收录：

- 增加正文内容深度。
- 增加内部链接指向该页面。
- 优化后再次请求编入索引。

### 2.3 每周至少优化一个内容资产

每周至少完成其中一项：

- 优化一个产品页面
- 优化一个 Case Study
- 替换一张产品图片
- 上传一份 datasheet PDF
- 增加一组内部链接
- 优化一个页面 Title / Description

## 3. 每月工作清单

每月做一次。

- 替换更多 placeholder 图片。
- 新增一个真实 Case Study。
- 新增或优化一份产品 datasheet。
- 检查所有产品页 title 和 description。
- 确认 sitemap.xml 仍能正常打开。
- 确认 GitHub Actions 部署正常。
- 检查 GA4 / GTM 的询盘事件。
- 根据 Search Console 查询词规划新产品内容。

## 4. 重要地址和工具

### 4.1 线上网站地址

- 首页：https://soilcreate.com
- 产品目录：https://soilcreate.com/products/
- About Us：https://soilcreate.com/about/
- Contact：https://soilcreate.com/contact/
- Case Study 列表：https://soilcreate.com/case-study/
- Sitemap：https://soilcreate.com/sitemap.xml

### 4.2 本地开发地址

本地预览：

- http://127.0.0.1:5174/

本地启动：

```bash
npm run dev -- --host 127.0.0.1
```

发布前构建检查：

```bash
npm run build
```

发布：

```bash
git add .
git commit -m "Update site content"
git push
```

`git push` 后，GitHub Actions 会自动部署网站。

### 4.3 生成器地址

产品 Markdown 生成器：

- 线上地址：https://soilcreate.com/tools/product-md-generator.html
- 源文件：`docs/public/tools/product-md-generator.html`

Case Study Markdown 生成器：

- 线上地址：https://soilcreate.com/tools/case-study-md-generator.html
- 源文件：`docs/public/tools/case-study-md-generator.html`

使用方式：

1. 打开生成器。
2. 输入产品或案例信息。
3. 复制生成的 Markdown。
4. 保存到对应文件夹。
5. 提交并 push。

## 5. 内容在哪里修改

只修改源文件，不要修改构建产物。

### 5.1 主要页面

首页：

- 页面入口：`docs/index.md`
- 主要设计组件：`docs/.vitepress/theme/components/HomePage.vue`

About Us 页面：

- 页面入口：`docs/about.md`
- 主要设计组件：`docs/.vitepress/theme/components/AboutPage.vue`

Contact 页面：

- 页面入口：`docs/contact.md`
- 主要设计组件：`docs/.vitepress/theme/components/ContactPage.vue`
- 联系表单组件：`docs/.vitepress/theme/components/ContactInquiryForm.vue`

Case Study 列表页：

- 页面入口：`docs/case-study.md`
- 主要设计组件：`docs/.vitepress/theme/components/CaseStudyPage.vue`

产品目录页：

- 页面入口：`docs/products/index.md`
- 产品列表组件：`docs/.vitepress/theme/components/ProductsList.vue`
- 产品数据库：`docs/.vitepress/theme/data/products.json`

### 5.2 产品详情页

产品详情页模板：

- `docs/.vitepress/theme/components/ProductLayout.vue`

现有产品 Markdown 文件：

- `docs/products/geotechnical-monitoring/inclinometer-sensor.md`
- `docs/products/geotechnical-monitoring/piezometer-sensor.md`
- `docs/products/geotechnical-monitoring/vibration-monitoring-station.md`

新增产品流程：

1. 用产品生成器生成 Markdown。
2. 把 `.md` 文件保存到：
   - `docs/products/geotechnical-monitoring/`
3. 更新产品列表数据库：
   - `docs/.vitepress/theme/data/products.json`
4. 产品图片放到：
   - `docs/public/images/products/`
5. PDF datasheet 放到：
   - `docs/public/specs/`

### 5.3 Case Study 页面

Case Study 详情页模板：

- `docs/.vitepress/theme/components/CaseStudyLayout.vue`

现有 Case Study Markdown 文件：

- `docs/solutions/sydney-metro-tunnel.md`
- `docs/solutions/norway-hydro-dam.md`

新增 Case Study 流程：

1. 用 Case Study 生成器生成 Markdown。
2. 把 `.md` 文件保存到：
   - `docs/solutions/`
3. 在相关产品页里用 `relatedCaseStudies` 关联这个案例。
4. 如果要显示在 Case Study 列表页，更新：
   - `docs/.vitepress/theme/components/CaseStudyPage.vue`

## 6. 图片和文件路径

### 6.1 当前关键图片路径

首页 Hero 背景图：

- 网站路径：`/images/hero/home-hero.svg`
- 源文件：`docs/public/images/hero/home-hero.svg`

About Hero 背景图：

- 网站路径：`/images/hero/about-hero.svg`
- 源文件：`docs/public/images/hero/about-hero.svg`

Case Study Hero 背景图：

- 网站路径：`/images/hero/case-study-hero.svg`
- 源文件：`docs/public/images/hero/case-study-hero.svg`

About 页面中间图：

- 网站路径：`/images/about/facility.svg`
- 源文件：`docs/public/images/about/facility.svg`

TrustSection CTA 背景图：

- 网站路径：`/images/factory-bridge-placeholder.svg`
- 源文件：`docs/public/images/factory-bridge-placeholder.svg`

页眉 logo 图标：

- 网站路径：`/images/logo/soilcreate-icon.png`
- 源文件：`docs/public/images/logo/soilcreate-icon.png`

产品占位图：

- 网站路径：`/images/product-placeholder.svg`
- 源文件：`docs/public/images/product-placeholder.svg`

### 6.2 建议新增文件夹

后续建议使用这些文件夹：

```text
docs/public/images/products/
docs/public/images/solutions/
docs/public/images/factory/
docs/public/images/certificates/
docs/public/specs/
```

产品图片示例：

```text
docs/public/images/products/mems-in-place-inclinometer-sensor.jpg
```

产品 Markdown 中这样填写：

```yaml
image: /images/products/mems-in-place-inclinometer-sensor.jpg
imageAlt: MEMS in-place inclinometer sensor for tunnel and slope monitoring
```

Case Study 图片示例：

```text
docs/public/images/solutions/sydney-metro-tunnel-monitoring.jpg
```

Case Study Markdown 中这样填写：

```yaml
image: /images/solutions/sydney-metro-tunnel-monitoring.jpg
imageAlt: Tunnel excavation monitoring with in-place inclinometers and piezometers
```

PDF 文件示例：

```text
docs/public/specs/sc-ipi-100-in-place-inclinometer-datasheet.pdf
```

产品 Markdown 中这样填写：

```yaml
specPdf: /specs/sc-ipi-100-in-place-inclinometer-datasheet.pdf
```

## 7. 产品 Markdown 字段说明

每个产品页建议包含这些字段：

```yaml
---
layout: product
title: "MEMS In-Place Inclinometer Sensor"
description: "Automated MEMS in-place inclinometer for slope, tunnel, dam, and excavation deformation monitoring."
category: "Inclinometers"
subcategory: "IPI"
model: "SC-IPI-100"
image: "/images/products/mems-in-place-inclinometer-sensor.jpg"
imageAlt: "MEMS in-place inclinometer sensor for slope and tunnel deformation monitoring"
specPdf: "/specs/sc-ipi-100-in-place-inclinometer-datasheet.pdf"
head:
  - - meta
    - name: keywords
      content: "MEMS in-place inclinometer, IPI sensor, slope monitoring inclinometer, tunnel deformation sensor"
features:
  - "Automated borehole deformation monitoring for long-term projects"
applications:
  - "Slope stability monitoring"
specs:
  - label: "Product type"
    value: "In-place inclinometer chain"
related:
  - label: "4-20mA Piezometer Sensor"
    href: "/products/geotechnical-monitoring/piezometer-sensor"
    sku: "SC-PZ-420"
relatedCaseStudies:
  - title: "Sydney Metro Underground Excavation"
    href: "/solutions/sydney-metro-tunnel"
    category: "Tunnels"
    summary: "Automated deformation and pore pressure monitoring during tunnel excavation."
    image: "/images/solutions/sydney-metro-tunnel-monitoring.jpg"
    imageAlt: "Tunnel excavation monitoring case study"
---

这里写产品正文。建议包含项目适用场景、监测目标、输出信号、安装方式、询盘所需信息等。
```

产品页 SEO 优先级：

- 具体产品名称
- 应用场景
- 输出信号或技术类型
- 采购商使用场景
- 真实 imageAlt
- 相关产品内链
- 相关 Case Study 内链

## 8. Case Study Markdown 字段说明

每个 Case Study 建议包含：

```yaml
---
layout: case-study
title: "Sydney Metro Underground Excavation"
description: "Automated inclinometer and piezometer monitoring for tunnel excavation settlement control."
category: "Tunnels"
location: "Sydney, Australia"
projectType: "Underground excavation monitoring"
monitoringScope: "Ground movement, pore water pressure, and structural stability"
image: "/images/solutions/sydney-metro-tunnel-monitoring.jpg"
imageAlt: "Tunnel excavation monitoring with SoilCreate geotechnical instruments"
challenge: "Describe the engineering risk and monitoring problem."
solution: "Describe the SoilCreate instruments and monitoring workflow."
result: "Describe the outcome in measurable or practical terms."
metrics:
  - value: "24/7"
    label: "Automated monitoring"
---
```

好的 Case Study 应该回答：

- 这是什么项目？
- 项目风险是什么？
- 使用了哪些仪器？
- 数据如何采集？
- 监测带来了什么结果？
- 应该链接到哪些产品页？

## 9. SEO 编辑规则

### 9.1 Title 标题

好的标题：

```text
MEMS In-Place Inclinometer Sensor for Slope and Tunnel Monitoring
```

弱标题：

```text
Inclinometer Sensor
```

### 9.2 Meta Description 描述

好的描述应该：

- 尽量控制在 140-160 字符。
- 包含产品类型、应用场景、买家价值。
- 避免空泛营销词。

示例：

```text
SoilCreate MEMS in-place inclinometer sensor for automated slope, tunnel, dam, and excavation deformation monitoring with telemetry integration.
```

### 9.3 Image Alt 图片说明

好的 imageAlt：

```text
MEMS in-place inclinometer sensor for slope and tunnel deformation monitoring
```

弱 imageAlt：

```text
product image
```

### 9.4 内部链接

每个产品页应链接到：

- 产品目录页
- 1-3 个相关产品
- 1-2 个相关 Case Study
- Contact 或询盘表单

每个 Case Study 应链接回：

- 相关产品页
- 产品目录页
- Contact 页面

## 10. 不能做的事情

不要修改这些生成目录：

- `docs/.vitepress/dist/`
- `docs/.vitepress/cache/`
- `node_modules/`

不要提交：

- `node_modules/`
- `docs/.vitepress/dist/`
- 大体积原始视频
- 重复图片包
- 客户隐私文件
- 未确认的证书
- 假案例冒充真实项目

不要随便改这些文件：

- `docs/.vitepress/config.mjs`
- `.github/workflows/deploy.yml`
- `scripts/generate-sitemap.mjs`
- `docs/public/CNAME`
- `docs/public/robots.txt`

不要使用：

- 产品页公开最终报价
- 关键词堆砌
- 抄竞品文案
- `IMG_001.jpg` 这类无意义图片名
- 没有 imageAlt 的图片
- 失效 PDF 链接
- 假认证
- 多个 URL 抢同一个 canonical 页面

不要删除：

- GTM 代码
- Formspree endpoint
- sitemap 生成脚本
- CNAME 文件
- 产品模板字段，除非同步改模板

## 11. 标准发布流程

修改源文件后，先构建：

```bash
npm run build
```

构建成功后：

```bash
git status --short
git add .
git commit -m "Update SEO content"
git push
```

然后检查：

- https://github.com/ohlala-xixi/soilcreate/actions

等部署 workflow 变绿色。

部署完成后：

- 打开被修改的页面。
- 强制刷新。
- 如果新增页面，检查 sitemap。
- 在 Google Search Console 请求该 URL 编入索引。

## 12. SoilCreate 当前优先级

建议按这个顺序做：

1. 替换 placeholder 产品图片。
2. 替换 placeholder Case Study 图片。
3. 上传真实 datasheet PDF。
4. 优化 inclinometer 产品页。
5. 优化 piezometer 产品页。
6. 优化 vibration monitoring 产品页。
7. 增加 2-3 个真实 Case Study。
8. 增加产品页和 Case Study 之间的内链。
9. 优化首页产品卡片，改成真实热门产品。
10. 2-4 周后，根据 Search Console 查询词继续优化。

## 13. 快速每日 SEO 清单

每天照这个执行：

```text
每日
[ ] 检查网站是否打开：https://soilcreate.com
[ ] 检查 sitemap：https://soilcreate.com/sitemap.xml
[ ] 检查 GitHub Actions 最新部署是否绿色
[ ] 检查 Search Console 索引状态
[ ] 检查 1 个重要 URL
[ ] 对 1-3 个优化过的页面请求编入索引
[ ] 优化一个 title、description、imageAlt 或内部链接
[ ] 记录当天修改

每周
[ ] 查看 Search Console 查询词
[ ] 查看有曝光但点击率低的页面
[ ] 替换一个 placeholder 素材
[ ] 优化一个产品页或 Case Study
[ ] 增加一组内部链接

每月
[ ] 新增一个真实 Case Study
[ ] 新增或更新一份 datasheet
[ ] 检查所有核心产品页
[ ] 检查 GA4 / GTM 询盘事件
```

## 14. 去哪里看数据

SEO 和网站运营不要只看一个工具。建议固定看以下 4 类数据。

### 14.1 Google Search Console：看自然搜索表现

地址：

- https://search.google.com/search-console

主要看这些模块：

1. 效果 > 搜索结果

重点指标：

- 总点击次数：用户从 Google 搜索结果点击进入网站的次数。
- 总曝光次数：你的网站在 Google 搜索结果里出现的次数。
- 平均点击率 CTR：曝光后有多少比例的人点击。
- 平均排名：关键词或页面在 Google 搜索结果中的平均位置。
- 查询词：用户搜了什么词看到你的网站。
- 网页：哪些页面获得了搜索曝光和点击。
- 国家/地区：哪些国家的人看到或点击了你的网站。
- 设备：桌面端、移动端表现是否不同。

2. 编制索引 > 网页

重点看：

- 已编入索引页面数量。
- 未编入索引原因。
- 是否有 404、重定向错误、重复页面、已发现但未编入索引。

3. 编制索引 > 站点地图

重点看：

- sitemap 是否成功读取。
- 已发现网页数量是否接近网站实际页面数量。
- 上次读取时间是否正常更新。

4. 网址检查

用于检查单个页面：

- 是否已编入索引。
- Google 是否能抓取。
- canonical 是否正确。
- 页面是否适合移动设备。
- 是否可以请求编入索引。

### 14.2 GA4：看用户进入网站后的行为

地址：

- https://analytics.google.com/

你的 GA4 衡量 ID：

- G-KBD5FBWBZK

主要看这些模块：

1. 报告 > 获取 > 流量获取

看：

- Organic Search 自然搜索流量有多少。
- Direct 直接访问有多少。
- Referral 引荐来源有多少。
- 哪些渠道带来有效访问。

2. 报告 > 互动 > 页面和屏幕

看：

- 哪些页面访问最多。
- 产品页是否有人看。
- Contact 页面是否有人进入。
- Case Study 是否有人阅读。

3. 报告 > 互动 > 事件

看这些事件是否出现：

- inquiry_modal_open：打开询盘弹窗。
- generate_lead：询盘表单提交成功。
- email_click：点击邮箱。
- whatsapp_click：点击 WhatsApp。

这些是判断网站是否能带来询盘的重要指标。

### 14.3 Google Tag Manager：看埋点是否正常

地址：

- https://tagmanager.google.com/

你的 GTM 容器：

- GTM-NXV7CZGC

主要用途：

- 检查 GTM 是否安装成功。
- 配置 GA4 标签。
- 配置转化事件。
- 后续增加广告追踪或更多行为事件。

测试工具：

- https://tagassistant.google.com/

### 14.4 GitHub Actions：看网站发布是否正常

地址：

- https://github.com/ohlala-xixi/soilcreate/actions

每次修改网站并 push 后，都要看：

- 最新 workflow 是否绿色。
- 如果失败，失败在哪一步。
- 是否成功部署到 GitHub Pages。

只要 Actions 是红色，线上网站就可能没有更新成功。

## 15. 看什么数据最重要

不同阶段重点不同。新站不要过早只看排名和询盘，因为 Google 需要时间认识网站。

### 15.1 新站前 1-2 周：重点看收录

核心指标：

- sitemap 是否成功。
- 已发现网页数量。
- 已编入索引网页数量。
- 重要页面是否能通过 URL 检查。
- 是否有抓取错误。

判断目标：

- Google 能读取 sitemap。
- 首页、产品目录、Contact、核心产品页开始被发现。
- 没有大面积 404 或 noindex 问题。

这阶段点击少、排名低很正常。

### 15.2 第 3-6 周：重点看曝光

核心指标：

- Google Search Console 总曝光次数。
- 哪些查询词开始出现。
- 哪些页面开始有曝光。
- 哪些国家有曝光。

判断目标：

- 品牌词 SoilCreate 能出现。
- 部分产品词开始有曝光。
- 产品页不只是首页有曝光。
- Google 开始理解网站主题是 geotechnical monitoring / inclinometer / piezometer / vibration monitoring。

### 15.3 第 2-3 个月：重点看点击率和页面质量

核心指标：

- CTR。
- 平均排名。
- 页面访问量。
- 用户停留和互动。
- 询盘按钮点击。
- email / WhatsApp 点击。

判断目标：

- 有曝光的页面逐渐获得点击。
- 核心产品页开始有自然搜索访问。
- 用户进入产品页后会点击询盘、邮箱或 WhatsApp。

### 15.4 第 3-6 个月：重点看询盘和转化

核心指标：

- generate_lead 表单提交次数。
- whatsapp_click 次数。
- email_click 次数。
- Organic Search 带来的询盘比例。
- 哪些产品页带来询盘。
- 哪些国家带来询盘。

判断目标：

- 自然搜索开始带来真实询盘。
- 产品页和案例页成为主要入口。
- 高意向页面有明确转化行为。

## 16. 如何根据数据进行优化

### 16.1 有曝光但没有点击

表现：

- Search Console 里某个页面曝光不少。
- CTR 很低。
- 点击很少。

可能原因：

- Title 不够具体。
- Description 不吸引买家。
- 页面标题太泛。
- 搜索词和页面内容不匹配。

优化方法：

- 改 title，让产品和应用场景更具体。
- 改 description，明确产品用途和采购价值。
- 在页面首屏加入更具体的产品参数或应用场景。

例子：

弱标题：

```text
Inclinometer Sensor
```

优化后：

```text
MEMS In-Place Inclinometer Sensor for Slope and Tunnel Monitoring
```

### 16.2 有点击但没有询盘

表现：

- GA4 显示产品页有访问。
- 但 generate_lead、email_click、whatsapp_click 很少。

可能原因：

- 页面看起来不够真实。
- 图片还是 placeholder。
- 参数不够完整。
- CTA 不够明显。
- 没有 datasheet。
- 客户不知道如何询价。

优化方法：

- 替换真实产品图。
- 增加参数表。
- 上传 datasheet PDF。
- 增加应用场景。
- 在页面上方和底部都保留询盘入口。
- 增加 related case studies。

### 16.3 页面未被索引

表现：

- Search Console 显示“已发现，尚未编入索引”。
- 或“已抓取，尚未编入索引”。

可能原因：

- 内容太薄。
- 页面和其他页面太相似。
- 没有足够内部链接。
- Google 认为页面价值不够。

优化方法：

- 增加 300-800 字有用正文。
- 增加独特参数和应用场景。
- 增加真实图片和 imageAlt。
- 从首页、产品目录、相关产品页链接过去。
- 更新后重新请求编入索引。

### 16.4 某些关键词曝光不对

表现：

- Search Console 查询词和你想要的产品词不匹配。

可能原因：

- 页面文案没有使用准确行业词。
- 产品命名不统一。
- Google 不理解页面主题。

优化方法：

- 统一产品命名。
- 在 title、description、H1、正文、imageAlt 中自然使用目标词。
- 增加相关 Case Study 支撑应用场景。

### 16.5 移动端表现差

表现：

- 移动端点击率低。
- 移动端访问多但询盘少。

优化方法：

- 检查手机端首屏是否清晰。
- 检查按钮是否容易点击。
- 检查表格是否横向滚动正常。
- 检查图片是否加载慢。
- 简化首屏文字。

## 17. 如何判断网站是好的

### 17.1 技术层面合格标准

一个合格的网站应该满足：

- HTTPS 正常。
- `soilcreate.com` 可以访问。
- `www.soilcreate.com` 可以访问。
- sitemap.xml 正常。
- robots.txt 正常。
- GitHub Actions 部署成功。
- 页面没有明显 404。
- 移动端能正常浏览。
- 表单能正常提交。
- GTM / GA4 能正常收集数据。

### 17.2 SEO 基础合格标准

一个 SEO 基础合格的网站应该满足：

- 每个重要页面有独立 title。
- 每个重要页面有独立 description。
- 产品页有 imageAlt。
- 产品页有参数、应用场景、下载资料。
- 页面之间有内部链接。
- sitemap 提交成功。
- 核心页面可以被 Google 抓取。
- 没有大量重复页面。
- 没有关键词堆砌。

### 17.3 B2B 转化合格标准

一个 B2B 网站不仅要有流量，还要能转化。

合格标准：

- 用户能在 5 秒内知道你卖什么。
- 产品目录清楚。
- 产品页能看到参数和应用场景。
- 联系方式明显。
- 表单不跳转，能顺利提交。
- WhatsApp 和邮箱可点击。
- 页面没有公开最终报价，鼓励询盘。
- 有工厂、产品、案例、证书等信任素材。

### 17.4 优秀网站标准

一个优秀的 B2B SEO 网站应该逐步达到：

- 核心产品页稳定被 Google 收录。
- 产品词开始有稳定曝光。
- Case Study 能带来长尾流量。
- 产品页有真实图片和 datasheet。
- 用户能从产品页进入询盘表单。
- Search Console 中出现越来越多相关查询词。
- GA4 中 Organic Search 带来有效访问和询盘。
- 每月都有内容更新。
- 网站不是一次性上线后就不动。

## 18. 按时间进度评判网站表现

SEO 必须按时间评判。新站上线 1 周就要求大量询盘是不现实的。

### 18.1 上线第 1 周

目标：让 Google 能发现网站。

应该完成：

- 网站上线。
- HTTPS 开启。
- sitemap 提交成功。
- 首页和核心页面请求编入索引。
- 没有部署错误。

正常表现：

- 没有流量也正常。
- 没有排名也正常。
- Search Console 数据很少也正常。

### 18.2 上线第 2-4 周

目标：开始被 Google 理解。

应该关注：

- 已编入索引页面数量。
- sitemap 已发现页面数量。
- 品牌词是否出现。
- 产品词是否开始有少量曝光。

优化重点：

- 替换 placeholder 图片。
- 完善产品页内容。
- 增加真实 Case Study。
- 提高页面差异化。

### 18.3 上线第 2-3 个月

目标：开始获得有效曝光和点击。

应该关注：

- 哪些查询词带来曝光。
- 哪些页面开始有点击。
- CTR 是否过低。
- 产品页是否有互动。

优化重点：

- 优化 title 和 description。
- 根据 Search Console 查询词扩充内容。
- 增加更多产品应用场景。
- 增加内链。

### 18.4 上线第 3-6 个月

目标：开始产生询盘线索。

应该关注：

- Organic Search 访问量。
- generate_lead 询盘提交。
- WhatsApp 点击。
- Email 点击。
- 哪些产品页转化最好。
- 哪些国家带来有效客户。

优化重点：

- 增加真实案例。
- 增加 datasheet 下载。
- 优化高曝光低点击页面。
- 优化高访问低转化页面。

### 18.5 上线 6 个月以后

目标：建立稳定内容资产。

应该关注：

- 稳定排名关键词。
- 长尾关键词数量。
- 产品页转化率。
- Case Study 带来的流量。
- 哪些内容值得继续扩展。

优化重点：

- 扩展产品子类页面。
- 增加行业应用页面。
- 增加更多真实项目案例。
- 持续更新图片、PDF、参数。

## 19. 阶段性评分表

可以每月给网站打一次分，总分 100。

### 19.1 技术健康度，20 分

- HTTPS 正常：4 分
- sitemap 正常：4 分
- GitHub Actions 正常：4 分
- 移动端正常：4 分
- 表单和联系方式正常：4 分

### 19.2 收录情况，20 分

- 首页已收录：4 分
- 产品目录已收录：4 分
- 核心产品页已收录：6 分
- Case Study 已收录：3 分
- 没有严重索引错误：3 分

### 19.3 内容质量，25 分

- 产品页有真实图片：5 分
- 产品页有完整参数：5 分
- 产品页有真实 datasheet：5 分
- Case Study 真实可信：5 分
- 页面文案专业、具体、不空泛：5 分

### 19.4 SEO 表现，20 分

- 有相关搜索曝光：5 分
- 有自然搜索点击：5 分
- CTR 持续优化：4 分
- 产品词排名有提升：3 分
- 国家/地区流量符合目标市场：3 分

### 19.5 转化表现，15 分

- 有询盘表单提交：5 分
- 有 WhatsApp 点击：3 分
- 有 Email 点击：3 分
- 产品页能带来转化行为：4 分

评分参考：

- 0-40：基础还没稳定，先修技术和收录。
- 41-60：基础可用，重点补真实内容。
- 61-80：SEO 开始有效，重点优化点击率和转化。
- 81-100：表现优秀，重点扩大内容规模和关键词覆盖。

## 20. 每周数据复盘模板

每周可以按这个格式记录：

```text
周次：2026 年第 __ 周

Search Console
- 总点击：
- 总曝光：
- 平均 CTR：
- 平均排名：
- 新出现查询词：
- 表现最好的页面：
- 需要优化的页面：

索引
- 已编入索引页面数：
- 未编入索引问题：
- 本周请求索引页面：

GA4
- Organic Search 访问：
- 最多访问页面：
- inquiry_modal_open：
- generate_lead：
- email_click：
- whatsapp_click：

本周完成优化
- 

下周计划
- 
```
