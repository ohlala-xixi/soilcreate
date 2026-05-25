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
- `docs/products/grease-pumps/electric-grease-pump.md`
- `docs/products/grease-pumps/pneumatic-grease-pump.md`

新增产品流程：

1. 用产品生成器生成 Markdown。
2. 把 `.md` 文件保存到：
   - `docs/products/geotechnical-monitoring/`
   - 或 `docs/products/grease-pumps/`
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

- `docs/case-studies/sydney-metro-tunnel.md`
- `docs/case-studies/norway-hydro-dam.md`

新增 Case Study 流程：

1. 用 Case Study 生成器生成 Markdown。
2. 把 `.md` 文件保存到：
   - `docs/case-studies/`
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
docs/public/images/case-studies/
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
docs/public/images/case-studies/sydney-metro-tunnel-monitoring.jpg
```

Case Study Markdown 中这样填写：

```yaml
image: /images/case-studies/sydney-metro-tunnel-monitoring.jpg
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
    href: "/case-studies/sydney-metro-tunnel"
    category: "Tunnels"
    summary: "Automated deformation and pore pressure monitoring during tunnel excavation."
    image: "/images/case-studies/sydney-metro-tunnel-monitoring.jpg"
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
image: "/images/case-studies/sydney-metro-tunnel-monitoring.jpg"
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
