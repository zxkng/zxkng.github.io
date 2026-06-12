---
title: 示例笔记：公式与代码渲染
date: 2026-06-12
category: 使用说明
tags: [katex, markdown]
---

这是一篇示例笔记，演示如何在笔记中书写数学公式与代码。你可以直接删除本文件，然后在 `_notes/` 目录下新建自己的 Markdown 笔记。

## 行内公式

使用单个美元符号包裹，例如 $a^2 + b^2 = c^2$，或者梯度下降更新 $\theta \leftarrow \theta - \eta \nabla_\theta J(\theta)$。

## 块级公式

使用两个美元符号：

$$
\hat{\beta} = \left( X^\top X \right)^{-1} X^\top y
$$

最密子图的目标可以写成：

$$
\rho(S) = \frac{|E(S)|}{|S|}, \qquad S^\star = \arg\max_{S \subseteq V} \rho(S).
$$

## 代码块

```python
def densest_subgraph_density(edges, nodes):
    return len(edges) / max(len(nodes), 1)
```

## 表格

| 算法 | 时间复杂度 | 备注 |
| --- | --- | --- |
| 暴力枚举 | $O(2^n)$ | 不可扩展 |
| Frank–Wolfe | 每轮 $O(m)$ | 适合大图 |

> 提示：笔记的元信息（标题、日期、分类、标签）写在文件顶部的 front matter 中。
