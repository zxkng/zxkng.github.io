# zxkng.github.io

康泽煊 (Zexuan Kang) 的个人主页：简历、研究项目与学习笔记。基于 [Jekyll](https://jekyllrb.com/)，部署在 GitHub Pages，使用 KaTeX 渲染数学公式。

## 目录结构

```
_config.yml            站点配置（标题、作者、导航、collections）
index.html             首页（中英双语简介 + 入口卡片）
cv.html                简历 / CV（中英双语）
projects.html          项目展示（中英双语）
notes.html             笔记列表（自动列出 _notes/ 下的文章）
_notes/                学习笔记（每篇一个 Markdown，中文）
_layouts/              页面模板：default.html / note.html
_includes/             head.html / nav.html / footer.html
assets/css/style.css   样式（LaTeX 风格，黑白淡蓝配色）
assets/js/math.js      KaTeX 公式渲染
assets/pdf/            简历 PDF
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，名字必须是 `zxkng.github.io`。
2. 把本文件夹推送上去：
   ```bash
   git remote add origin https://github.com/zxkng/zxkng.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. 仓库 **Settings → Pages → Build and deployment**，Source 选 **Deploy from a branch**，Branch 选 `main` / `/ (root)`，保存。
4. 等一两分钟，访问 https://zxkng.github.io 。

## 本地预览（可选）

需要 Ruby + Bundler：

```bash
bundle install
bundle exec jekyll serve --livereload
# 浏览器打开 http://127.0.0.1:4000
```

Windows 上若没有 Ruby，可装 [RubyInstaller](https://rubyinstaller.org/)（带 DevKit）。
不想装环境也没关系——直接推到 GitHub，由 Pages 自动构建即可。

## 写一篇新笔记

在 `_notes/` 下新建 `YYYY-MM-DD-标题.md`，顶部写 front matter：

```markdown
---
title: 你的笔记标题
date: 2026-06-12
category: 机器学习
tags: [优化, 梯度下降]
---

正文用 Markdown。行内公式 $a^2+b^2=c^2$，块级公式：

$$
\hat{\beta} = (X^\top X)^{-1} X^\top y
$$
```

保存后会自动出现在「笔记」列表里。参考示例：`_notes/2026-06-12-katex-demo.md`。

## 自定义

- **配色 / 字体**：改 `assets/css/style.css` 顶部的 `:root` 变量。
- **个人信息 / 导航**：改 `_config.yml` 里的 `author` 与 `nav`。
- **简历内容**：改 `cv.html`；替换 `assets/pdf/` 下的 PDF。
