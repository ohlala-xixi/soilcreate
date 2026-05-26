# SoilCreate 2026-05-26 工作复盘

这份文档记录今天完成的 SoilCreate 网站上线、域名、SEO、数据工具和后续运营准备工作。

## 1. 今天完成的核心事项

### 1.1 网站正式上线

已将 SoilCreate VitePress 网站推送到 GitHub，并通过 GitHub Pages + GitHub Actions 自动部署。

线上地址：

- 主站：https://soilcreate.com
- WWW：https://www.soilcreate.com
- Sitemap：https://soilcreate.com/sitemap.xml

GitHub 仓库：

- https://github.com/ohlala-xixi/soilcreate

GitHub Actions：

- https://github.com/ohlala-xixi/soilcreate/actions

当前部署方式：

- GitHub Pages Source：GitHub Actions
- Workflow：Deploy VitePress site to Pages

### 1.2 域名解析配置完成

域名：

- soilcreate.com

DNS 记录已配置：

```text
@      A       185.199.108.153
@      A       185.199.109.153
@      A       185.199.110.153
@      A       185.199.111.153
www    CNAME   ohlala-xixi.github.io
```

GitHub Pages Custom domain：

```text
soilcreate.com
```

DNS check 已成功。

### 1.3 GitHub Actions 自动部署完成

已添加部署工作流：

- `.github/workflows/deploy.yml`

功能：

- 每次 push 到 main 分支后自动安装依赖。
- 自动执行 VitePress 构建。
- 自动发布 `docs/.vitepress/dist` 到 GitHub Pages。

工作流名称：

```text
Deploy VitePress site to Pages
```

### 1.4 解决 GitHub Token 权限问题

今天遇到的问题：

```text
refusing to allow a Personal Access Token to create or update workflow without workflow scope
```

原因：

- GitHub Personal Access Token 原本只有 `repo` 权限，没有 `workflow` 权限。

处理方式：

- 进入 GitHub token 设置。
- 给 classic token 增加 `workflow` 权限。
- 重新推送 workflow 文件。

### 1.5 解决线上页面显示为空的问题

现象：

- 打开 soilcreate.com 只显示蓝色 `soilcreate` 标题。
- `sitemap.xml` 一开始是 404。

原因：

- GitHub Pages 之前仍然使用 `Deploy from a branch -> main / docs` 发布方式。
- 它直接把 `docs/index.md` 当普通页面发布，而不是发布 VitePress 构建产物。

解决方式：

- 切换 GitHub Pages Source 为 `GitHub Actions`。
- 推送空提交触发重新部署。
- 部署完成后 sitemap 正常显示 XML。

触发重新部署的提交：

```text
aef323b Trigger GitHub Pages redeploy
```

### 1.6 Google Search Console 验证成功

已完成 Google Search Console 域名资源验证。

资源：

```text
soilcreate.com
```

验证方式：

- DNS TXT 记录验证。

验证结果：

- 已完成所有权验证。

### 1.7 Sitemap 提交成功

已在 Google Search Console 提交 sitemap。

提交地址：

```text
https://soilcreate.com/sitemap.xml
```

提交结果：

- 状态：成功
- 已发现网页：12

### 1.8 SEO 日常运营文档完成

已创建英文版和中文版 SEO 工作文档。

英文版：

- `SEO_DAILY_WORKFLOW.md`

中文版：

- `SEO_DAILY_WORKFLOW_ZH.md`

中文版补充内容包括：

- 每日 SEO 工作清单
- 每周/月度工作清单
- 数据在哪里看
- Search Console、GA4、GTM、GitHub Actions 看什么指标
- 如何根据数据优化页面
- 如何判断网站是合格、好、优秀
- SEO 按时间阶段如何评判
- 阶段性评分表
- 每周数据复盘模板

### 1.9 README 增加 SEO 文档入口

已在 README 中加入：

- 英文 SEO 工作流文档入口
- 中文 SEO 工作流文档入口
- 线上站点地址
- sitemap 地址

## 2. 今天涉及的重要链接

### 2.1 网站链接

- 首页：https://soilcreate.com
- WWW：https://www.soilcreate.com
- 产品目录：https://soilcreate.com/products/
- About：https://soilcreate.com/about/
- Contact：https://soilcreate.com/contact/
- Case Study：https://soilcreate.com/case-study/
- Sitemap：https://soilcreate.com/sitemap.xml

### 2.2 GitHub 链接

- 仓库：https://github.com/ohlala-xixi/soilcreate
- Actions：https://github.com/ohlala-xixi/soilcreate/actions
- Pages 设置：https://github.com/ohlala-xixi/soilcreate/settings/pages

### 2.3 Google 工具链接

Google Search Console：

- https://search.google.com/search-console

Google Analytics GA4：

- https://analytics.google.com/

Google Tag Manager：

- https://tagmanager.google.com/

Tag Assistant：

- https://tagassistant.google.com/

### 2.4 生成器链接

产品 Markdown 生成器：

- 线上：https://soilcreate.com/tools/product-md-generator.html
- 本地源文件：`docs/public/tools/product-md-generator.html`

Case Study Markdown 生成器：

- 线上：https://soilcreate.com/tools/case-study-md-generator.html
- 本地源文件：`docs/public/tools/case-study-md-generator.html`

## 3. 今天涉及的重要文件

### 3.1 部署和域名

GitHub Actions 部署文件：

- `.github/workflows/deploy.yml`

GitHub Pages 域名文件：

- `docs/public/CNAME`
- `docs/CNAME`

当前 CNAME 内容：

```text
soilcreate.com
```

Robots 文件：

- `docs/public/robots.txt`

当前 sitemap 声明：

```text
Sitemap: https://soilcreate.com/sitemap.xml
```

Sitemap 生成脚本：

- `scripts/generate-sitemap.mjs`

VitePress SEO 配置：

- `docs/.vitepress/config.mjs`

### 3.2 SEO 文档

英文 SEO 文档：

- `SEO_DAILY_WORKFLOW.md`

中文 SEO 文档：

- `SEO_DAILY_WORKFLOW_ZH.md`

今日工作复盘文档：

- `DAILY_WORK_SUMMARY_2026-05-26.md`

README：

- `README.md`

### 3.3 产品页面

产品详情模板：

- `docs/.vitepress/theme/components/ProductLayout.vue`

产品目录数据：

- `docs/.vitepress/theme/data/products.json`

现有产品页面：

- `docs/products/geotechnical-monitoring/inclinometer-sensor.md`
- `docs/products/geotechnical-monitoring/piezometer-sensor.md`
- `docs/products/geotechnical-monitoring/vibration-monitoring-station.md`
- `docs/products/grease-pumps/electric-grease-pump.md`
- `docs/products/grease-pumps/pneumatic-grease-pump.md`

### 3.4 Case Study 页面

Case Study 详情模板：

- `docs/.vitepress/theme/components/CaseStudyLayout.vue`

Case Study 列表页：

- `docs/.vitepress/theme/components/CaseStudyPage.vue`

现有 Case Study：

- `docs/case-studies/sydney-metro-tunnel.md`
- `docs/case-studies/norway-hydro-dam.md`

### 3.5 图片和 PDF 路径

首页 Hero 图：

- `docs/public/images/hero/home-hero.svg`

About Hero 图：

- `docs/public/images/hero/about-hero.svg`

Case Study Hero 图：

- `docs/public/images/hero/case-study-hero.svg`

About 页面中间图：

- `docs/public/images/about/facility.svg`

Trust CTA 背景：

- `docs/public/images/factory-bridge-placeholder.svg`

Logo 图标：

- `docs/public/images/logo/soilcreate-icon.png`

产品占位图：

- `docs/public/images/product-placeholder.svg`

PDF 存放目录：

- `docs/public/specs/`

建议后续新增：

```text
docs/public/images/products/
docs/public/images/case-studies/
docs/public/images/factory/
docs/public/images/certificates/
```

## 4. 已配置的业务信息

联系邮箱：

```text
sophia@kstpropack.com
```

WhatsApp：

```text
+86 15356046033
```

Formspree endpoint：

```text
https://formspree.io/f/xeedroyq
```

GTM 容器：

```text
GTM-NXV7CZGC
```

GA4 衡量 ID：

```text
G-KBD5FBWBZK
```

说明：

- 网站代码中安装的是 GTM。
- GA4 建议通过 GTM 后台配置，不要同时直接写入网站，避免重复统计。

## 5. 已有转化事件

网站已加 dataLayer 事件，方便通过 GTM / GA4 跟踪。

事件包括：

```text
inquiry_modal_open
```

说明：用户打开询盘弹窗。

```text
generate_lead
```

说明：询盘表单提交成功。

```text
email_click
```

说明：用户点击邮箱。

```text
whatsapp_click
```

说明：用户点击 WhatsApp。

## 6. 后续每日应该做什么

每天建议按这个顺序执行：

```text
[ ] 打开 https://soilcreate.com，确认网站正常。
[ ] 打开 https://soilcreate.com/sitemap.xml，确认 sitemap 正常。
[ ] 查看 GitHub Actions 是否绿色。
[ ] 查看 Google Search Console 的网页索引状态。
[ ] 用 URL 检查 1 个核心页面。
[ ] 对 1-3 个重要页面请求编入索引。
[ ] 优化一个页面的 title、description、imageAlt 或内链。
[ ] 记录当天修改。
```

## 7. 当前最优先的 SEO 工作

现在网站已经上线，下一阶段重点不是技术，而是真实内容。

优先级：

1. 替换 placeholder 产品图片。
2. 替换 placeholder Case Study 图片。
3. 上传真实 datasheet PDF。
4. 优化 Inclinometer 产品页。
5. 优化 Piezometer 产品页。
6. 优化 Vibration Monitoring 产品页。
7. 增加真实 Case Study。
8. 给产品页和 Case Study 增加内链。
9. 在 Google Search Console 请求更新后的页面编入索引。

## 8. 下次工作建议

建议下一次从这里开始：

### 8.1 准备真实素材

请整理：

```text
产品白底图
产品现场图
工厂图
证书图
产品 datasheet PDF
真实项目图片
真实项目说明
```

### 8.2 优先完善两个核心产品页

优先页面：

- https://soilcreate.com/products/geotechnical-monitoring/inclinometer-sensor/
- https://soilcreate.com/products/geotechnical-monitoring/piezometer-sensor/

需要补充：

- 真实产品图
- 更具体 title
- 更具体 description
- imageAlt
- 参数表
- 应用场景
- datasheet PDF
- Related Products
- Related Case Studies

### 8.3 完成后请求索引

更新页面后，在 Google Search Console 请求编入索引。

## 9. 不要做的事情

不要修改：

- `docs/.vitepress/dist/`
- `docs/.vitepress/cache/`
- `node_modules/`

不要随便修改：

- `.github/workflows/deploy.yml`
- `docs/.vitepress/config.mjs`
- `scripts/generate-sitemap.mjs`
- `docs/public/CNAME`
- `docs/public/robots.txt`

不要提交：

- 大体积原始视频
- 私密客户文件
- 未确认的证书
- 假项目案例
- 无意义命名图片，例如 `IMG_001.jpg`

不要在产品页公开最终报价。

## 10. 今天的关键结论

今天 SoilCreate 已完成从本地网站到正式上线的关键闭环：

```text
代码推送 GitHub
GitHub Actions 自动构建
GitHub Pages 发布
soilcreate.com 域名绑定
www.soilcreate.com 解析
sitemap.xml 上线
Google Search Console 验证
sitemap 提交成功
SEO 日常工作文档建立
```

网站现在已经进入下一阶段：

```text
真实内容建设 + SEO 数据优化 + 询盘转化提升
```
