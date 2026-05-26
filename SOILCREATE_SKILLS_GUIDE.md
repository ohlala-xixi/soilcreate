# SoilCreate Codex Skills 使用说明

今天为 SoilCreate 网站创建了 3 个 Codex 专属 Skill，用于后续标准化上传产品、上传 Case Study 和检查 SEO。

## 1. 已创建的 Skills

### 1.1 soilcreate-product-uploader

用途：上传或修改产品页面。

Skill 文件：

```text
/Users/xbfile/.codex/skills/soilcreate-product-uploader/SKILL.md
```

适合这些请求：

```text
使用 soilcreate-product-uploader，帮我上传这个产品
```

```text
使用 soilcreate-product-uploader，帮我检查这个产品页 SEO 是否完整
```

它会处理：

- 产品 Markdown
- 产品图片路径
- Datasheet PDF 路径
- title / description / keywords / imageAlt
- features / applications / specs
- related products
- related case studies
- products.json 产品目录数据
- npm run build 检查
- GitHub Actions 发布提醒
- Search Console 索引提醒

### 1.2 soilcreate-case-study-uploader

用途：上传或修改 Case Study 页面。

Skill 文件：

```text
/Users/xbfile/.codex/skills/soilcreate-case-study-uploader/SKILL.md
```

适合这些请求：

```text
使用 soilcreate-case-study-uploader，帮我上传这个 case study
```

```text
使用 soilcreate-case-study-uploader，把这个案例关联到相关产品页
```

它会处理：

- Case Study Markdown
- challenge / solution / result 结构
- metrics 数据
- 项目图片和 imageAlt
- Case Study 列表页
- 产品页 relatedCaseStudies 关联
- 构建检查
- 发布和索引提醒

### 1.3 soilcreate-seo-reviewer

用途：检查页面 SEO 质量和收录准备度。

Skill 文件：

```text
/Users/xbfile/.codex/skills/soilcreate-seo-reviewer/SKILL.md
```

适合这些请求：

```text
使用 soilcreate-seo-reviewer，检查这个产品页是否适合提交 Google 索引
```

```text
使用 soilcreate-seo-reviewer，帮我检查首页和产品页 SEO 问题
```

它会检查：

- title 是否唯一、具体
- description 是否完整
- imageAlt 是否真实有意义
- 是否还有 placeholder
- 是否有产品参数、应用场景、PDF
- 是否有 related products
- 是否有 related case studies
- 是否有询盘路径
- sitemap 和构建是否正常

## 2. 后续怎么使用

### 2.1 上传产品时

你可以这样说：

```text
使用 soilcreate-product-uploader，帮我上传 4 个产品
```

然后提供：

```text
产品名
型号
分类
描述
参数
应用场景
图片路径
PDF 路径
相关产品
相关案例
```

### 2.2 上传 Case Study 时

你可以这样说：

```text
使用 soilcreate-case-study-uploader，帮我上传这个案例
```

然后提供：

```text
项目名称
国家/地区
行业分类
项目类型
监测范围
Challenge
Solution
Result
图片路径
使用产品
```

### 2.3 检查 SEO 时

你可以这样说：

```text
使用 soilcreate-seo-reviewer，检查 inclinometer 产品页
```

或者：

```text
使用 soilcreate-seo-reviewer，检查新增的 4 个产品页是否可以提交索引
```

## 3. 相关网站工具

产品生成器：

- 本地：http://127.0.0.1:5174/tools/product-md-generator.html
- 线上：https://soilcreate.com/tools/product-md-generator.html

Case Study 生成器：

- 本地：http://127.0.0.1:5174/tools/case-study-md-generator.html
- 线上：https://soilcreate.com/tools/case-study-md-generator.html

Google Search Console：

- https://search.google.com/search-console

GitHub Actions：

- https://github.com/ohlala-xixi/soilcreate/actions

## 4. 注意事项

这些 Skill 是本机 Codex 的全局能力文件，不是网站页面的一部分。

它们存放在：

```text
/Users/xbfile/.codex/skills/
```

如果以后换电脑，需要把这些 Skill 文件夹同步过去。

不要把产品上传流程完全交给生成器后不检查。每次上传后仍然要确认：

- 页面能打开
- 图片能显示
- PDF 链接有效
- sitemap 生成成功
- GitHub Actions 绿色
- Search Console 请求编入索引
