# Security Policy | 安全政策

## 🔒 Supported Versions | 支持的版本

We actively support and provide security updates for the following versions:
我们积极支持并为以下版本提供安全更新：

| Version | Supported | 支持状态 |
| ------- | --------- | -------- |
| 2.x.x   | ✅ Yes    | ✅ 是    |
| 1.x.x   | ⚠️ LTS    | ⚠️ 长期支持 |
| < 1.0   | ❌ No     | ❌ 否    |

## 🚨 Reporting Security Vulnerabilities | 报告安全漏洞

We take security seriously. If you discover a security vulnerability in the Arabic Calligraphy Generator, please report it responsibly.
我们认真对待安全问题。如果您在阿拉伯书法生成器中发现安全漏洞，请负责任地报告。

### 🔐 How to Report | 如何报告

**For Security Issues | 安全问题：**
- **DO NOT** create a public GitHub issue | **请勿**创建公开的GitHub问题
- Email us at: [Contact Form](https://arabic-calligraphy-generator.com/contact)
- 发送邮件至：[联系表单](https://arabic-calligraphy-generator.com/contact)

### 📋 Information to Include | 包含的信息

When reporting a security vulnerability, please include:
报告安全漏洞时，请包含：

1. **Description** | 描述
   - Clear description of the vulnerability
   - 漏洞的清晰描述

2. **Steps to Reproduce** | 重现步骤
   - Detailed steps to reproduce the issue
   - 重现问题的详细步骤

3. **Impact** | 影响
   - Potential impact and severity
   - 潜在影响和严重程度

4. **Environment** | 环境
   - Browser, device, and version information
   - 浏览器、设备和版本信息

5. **Proof of Concept** | 概念验证
   - Screenshots or code snippets (if safe to include)
   - 截图或代码片段（如果包含安全）

## ⏱️ Response Timeline | 响应时间表

We are committed to addressing security issues promptly:
我们致力于及时解决安全问题：

- **Initial Response** | 初始响应: Within 48 hours | 48小时内
- **Assessment** | 评估: Within 7 days | 7天内
- **Fix Development** | 修复开发: Based on severity | 基于严重程度
- **Public Disclosure** | 公开披露: After fix is deployed | 修复部署后

## 🛡️ Security Measures | 安全措施

### Current Security Features | 当前安全功能

- **🔒 HTTPS Enforcement**: All traffic uses secure connections
- **🛡️ Content Security Policy**: Prevents XSS attacks
- **🔍 Input Validation**: All user inputs are validated and sanitized
- **📊 Privacy Protection**: No sensitive data collection
- **🚫 No Server-Side Storage**: All processing happens client-side

### 当前安全功能
- **🔒 HTTPS强制**: 所有流量使用安全连接
- **🛡️ 内容安全策略**: 防止XSS攻击
- **🔍 输入验证**: 所有用户输入都经过验证和清理
- **📊 隐私保护**: 不收集敏感数据
- **🚫 无服务器端存储**: 所有处理都在客户端进行

## 🔧 Security Best Practices | 安全最佳实践

### For Users | 用户
- Keep your browser updated | 保持浏览器更新
- Use trusted networks when possible | 尽可能使用可信网络
- Report suspicious behavior | 报告可疑行为

### For Contributors | 贡献者
- Follow secure coding practices | 遵循安全编码实践
- Never commit sensitive information | 永不提交敏感信息
- Test for common vulnerabilities | 测试常见漏洞
- Keep dependencies updated | 保持依赖项更新

## 🔍 Known Security Considerations | 已知安全考虑

### Client-Side Processing | 客户端处理
- All text processing happens in the browser
- No data is sent to external servers during generation
- Font files are loaded from trusted CDN sources

### 客户端处理
- 所有文本处理都在浏览器中进行
- 生成过程中不会向外部服务器发送数据
- 字体文件从可信CDN源加载

### Third-Party Dependencies | 第三方依赖
- Regular dependency audits with `npm audit`
- Automated security updates via Dependabot
- Minimal external dependencies to reduce attack surface

### 第三方依赖
- 使用`npm audit`定期进行依赖审计
- 通过Dependabot自动安全更新
- 最少的外部依赖以减少攻击面

## 📚 Additional Resources | 其他资源

### Security Documentation | 安全文档
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)

### Project Resources | 项目资源
- **Website**: [arabic-calligraphy-generator.com](https://arabic-calligraphy-generator.com)
- **Privacy Policy**: [Privacy Policy](https://arabic-calligraphy-generator.com/privacy-policy)
- **Terms of Service**: [Terms](https://arabic-calligraphy-generator.com/terms-of-service)

## 🙏 Acknowledgments | 致谢

We appreciate the security research community and responsible disclosure practices. Contributors who report valid security issues will be:
我们感谢安全研究社区和负责任的披露实践。报告有效安全问题的贡献者将获得：

- Listed in our security acknowledgments (with permission)
- 在我们的安全致谢中列出（经许可）
- Credited in release notes for security fixes
- 在安全修复的发布说明中获得认可

---

**🔐 Security is a shared responsibility. Thank you for helping keep Arabic Calligraphy Generator secure for everyone.**
**安全是共同责任。感谢您帮助保持阿拉伯书法生成器对所有人的安全。** 