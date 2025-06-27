# Google Search Console 验证文件说明

## ⚠️ 重要提醒

此目录用于放置 **GitHub Pages 专用** 的 GSC 验证文件。
**请勿放置主站的 GSC 验证文件**，避免冲突。

## 操作步骤

### GitHub Pages 验证
1. 访问 [Google Search Console](https://search.google.com/search-console/)
2. 添加属性：`https://qiuweisen.github.io/arabic-calligraphy-creator/`
3. 选择 "HTML 文件" 验证方法
4. 下载验证文件（格式：`google[随机字符].html`）
5. 将文件放置在此 `public` 目录下
6. 推送代码，等待 GitHub Actions 部署
7. 返回 GSC 点击"验证"

### 主站验证
主站的 GSC 验证文件应该在独立部署时处理，不要放在此目录。

## 部署说明

- **GitHub Pages 部署**: 设置 `GITHUB_PAGES=true` 时，此目录内容会被复制到 `./out/`
- **主站部署**: 默认情况下，此目录内容正常部署到根目录

## 当前状态

- [ ] 尚未添加 GitHub Pages GSC 验证文件
- [ ] 等待用户从 GSC 获取验证文件

获取验证文件后，请将其放置在此目录下。
