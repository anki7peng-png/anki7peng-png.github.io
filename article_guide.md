# 文章编辑操作指南

## 基本步骤

### 修改现有文章

1. 打开 `index.html` 文件
2. 找到 `id="projects"` 的部分，这是"读的"页面
3. 在 `article-content` 区域内找到您想修改的文章（如 `id="article1"`）
4. 直接修改文章内容，保留HTML标签格式

### 添加新文章

1. 打开 `index.html` 文件
2. 找到 `id="projects"` 的部分
3. 在左侧文章列表添加新标题：
   ```html
   <div class="article-title" data-article="article6">新文章标题</div>
   ```
4. 在右侧 `article-content` 区域添加新文章内容：
   ```html
   <div id="article6" class="article">
       <h3>新文章标题</h3>
       <!-- 文章内容 -->
   </div>
   ```
5. 可以复制 `article_template.html` 中的模板，修改后粘贴到上面的位置

## HTML标签使用指南

### 文本格式化
- **加粗文本**: `<strong>加粗文本</strong>`
- **换行**: `<br>`

### 段落结构
```html
<p><strong>一、主标题</strong><br>
    正文内容
</p>
```

### 列表项
```html
<p>
    - <strong>项目名称</strong>：项目描述<br>
    - <strong>另一项</strong>：更多描述<br>
</p>
```

### 链接
```html
<a href="https://example.com" target="_blank">链接文本</a>
```

### 转载声明区域
```html
<div class="article-source">
    <p><strong>转载声明</strong><br>
        内容来源：本文内容来源说明<br>  
        版权说明：原文版权归原作者及发布平台所有<br>  
        转载用途：仅用于个人主页学习交流，不涉及商业用途<br>  
        原文链接：<a href="https://example.com/article" target="_blank">https://example.com/article</a></p>
</div>
```

### 标签
```html
<div class="article-tags">
    <span class="article-tag">标签1</span>
    <span class="article-tag">标签2</span>
</div>
```

## 注意事项

1. 确保每个文章的 `id` 属性唯一（如 `article1`, `article2` 等）
2. 左侧标题的 `data-article` 属性必须与右侧文章的 `id` 属性一致
3. 保存文件后刷新网页查看效果
4. 如果文章内容较长，可以分成多个段落，每个段落用 `<p>...</p>` 包裹 