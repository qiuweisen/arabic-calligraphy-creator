# Contributing to Arabic Calligraphy Generator | 贡献指南

Thank you for your interest in contributing to the Arabic Calligraphy Generator! This project aims to make Arabic calligraphy accessible to everyone through modern web technology.

感谢您对阿拉伯书法生成器项目的关注！我们致力于通过现代网络技术让阿拉伯书法艺术为所有人所用。

## 🌟 How to Contribute | 如何贡献

### 1. 🐛 Bug Reports | 错误报告

If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable

### 2. 💡 Feature Requests | 功能请求

For new features, please:
- Check existing issues first
- Describe the feature and its benefits
- Explain the use case
- Consider the technical complexity

### 3. 🔧 Code Contributions | 代码贡献

#### Getting Started | 开始开发

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/arabic-calligraphy-creator.git
   cd arabic-calligraphy-creator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

#### Development Guidelines | 开发指南

##### Code Style | 代码风格
- Use TypeScript for all new files
- Follow existing naming conventions
- Use meaningful variable and function names
- Add comments for complex logic

##### Component Structure | 组件结构
```
components/
├── ui/           # Reusable UI components
├── calligraphy/  # Calligraphy-specific components
└── layout/       # Layout components
```

##### Commit Messages | 提交信息
Use conventional commits:
```
feat: add new Arabic font support
fix: resolve SVG export issue
docs: update README with new examples
style: improve mobile responsiveness
```

#### Testing | 测试

Before submitting:
```bash
# Run type checking
npm run type-check

# Build the project
npm run build

# Test in different browsers
# Test on mobile devices
```

#### Pull Request Process | 拉取请求流程

1. **Update documentation** if needed
2. **Test thoroughly** on different devices
3. **Write clear PR description**:
   - What changes were made
   - Why the changes were necessary
   - How to test the changes

4. **Link related issues** if applicable

### 4. 📖 Documentation | 文档

Help improve documentation:
- Fix typos or unclear explanations
- Add examples or tutorials
- Translate content to other languages
- Update technical documentation

### 5. 🌐 Translations | 翻译

We welcome translations to make the tool accessible globally:
- Arabic interface improvements
- Other language support
- Cultural adaptation suggestions

## 🛠 Technical Details | 技术细节

### Project Structure | 项目结构

```
arabic-calligraphy-creator/
├── app/                 # Next.js 13+ app directory
│   ├── components/      # React components
│   ├── lib/            # Utility functions
│   └── styles/         # CSS styles
├── public/             # Static assets
├── docs/               # Documentation
└── types/              # TypeScript type definitions
```

### Key Technologies | 关键技术

- **Next.js 15.2.4**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Radix UI**: Component library
- **html2canvas**: Image generation

### Performance Considerations | 性能考虑

- Optimize image loading
- Minimize bundle size
- Use lazy loading where appropriate
- Consider Core Web Vitals

## 🎯 Areas for Contribution | 贡献领域

### High Priority | 高优先级
- [ ] Font loading optimization
- [ ] Mobile UX improvements
- [ ] Accessibility enhancements
- [ ] Performance optimizations

### Medium Priority | 中优先级
- [ ] Additional Arabic fonts
- [ ] Export format options
- [ ] Template system
- [ ] Social sharing features

### Low Priority | 低优先级
- [ ] Advanced text effects
- [ ] Animation features
- [ ] Collaborative editing
- [ ] Plugin system

## 🤝 Community Guidelines | 社区准则

### Be Respectful | 尊重他人
- Use inclusive language
- Respect different perspectives
- Provide constructive feedback
- Help newcomers feel welcome

### Quality Standards | 质量标准
- Test your code thoroughly
- Follow existing patterns
- Document your changes
- Consider maintainability

## 🆘 Getting Help | 获取帮助

### Resources | 资源
- **Documentation**: [arabic-calligraphy-generator.com](https://arabic-calligraphy-generator.com)
- **Issues**: [GitHub Issues](https://github.com/your-username/arabic-calligraphy-creator/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/arabic-calligraphy-creator/discussions)

### Contact | 联系方式
- **Website**: [arabic-calligraphy-generator.com/contact](https://arabic-calligraphy-generator.com/contact)
- **Issues**: For technical problems
- **Discussions**: For general questions

## 📋 Contributor Checklist | 贡献者清单

Before submitting a contribution:

- [ ] ✅ Read and understand the contribution guidelines
- [ ] ✅ Check existing issues and PRs to avoid duplicates
- [ ] ✅ Test your changes thoroughly
- [ ] ✅ Update documentation if necessary
- [ ] ✅ Follow code style guidelines
- [ ] ✅ Write clear commit messages
- [ ] ✅ Include tests if applicable

## 🎉 Recognition | 致谢

Contributors will be:
- Listed in project documentation
- Mentioned in release notes
- Given credit in the application

Thank you for helping make Arabic calligraphy accessible to everyone! 🎨

---

**🔗 Live Project**: [arabic-calligraphy-generator.com](https://arabic-calligraphy-generator.com)  
**📚 Learn More**: [Project Documentation](https://arabic-calligraphy-generator.com/features)  
**🌟 Star the Project**: Help others discover this tool! 