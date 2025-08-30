#!/usr/bin/env node

/**
 * 页面重构分析工具
 * 分析高曝光低点击页面的结构和问题
 * 为第二阶段优化提供数据支持
 */

const fs = require('fs');
const path = require('path');

class PageRestructureAnalyzer {
    constructor() {
        this.baseDir = process.cwd();
        this.appDir = path.join(this.baseDir, 'app');
        this.componentsDir = path.join(this.baseDir, 'components');
        this.outputFile = path.join(this.baseDir, 'docs', 'page-restructure-analysis.json');
        
        // 需要分析的高曝光低点击页面
        this.targetPages = [
            {
                path: '/blog',
                clicks: 0,
                impressions: 5021,
                priority: 'high',
                directory: 'blog'
            },
            {
                path: '/faq',
                clicks: 0,
                impressions: 5094,
                priority: 'high',
                directory: 'faq'
            },
            {
                path: '/contact',
                clicks: 0,
                impressions: 489,
                priority: 'medium',
                directory: 'contact'
            },
            {
                path: '/guides',
                clicks: 0,
                impressions: 28,
                priority: 'low',
                directory: 'guides'
            }
        ];
        
        this.analysisResults = {
            timestamp: new Date().toISOString(),
            summary: {},
            pages: {},
            recommendations: {},
            restructurePlan: {}
        };
    }

    async analyzePageStructure() {
        console.log('🔍 开始分析页面结构...');
        
        for (const page of this.targetPages) {
            console.log(`分析页面: ${page.path}`);
            
            const pageAnalysis = {
                basicInfo: page,
                structure: await this.analyzePageFiles(page),
                issues: await this.identifyIssues(page),
                opportunities: await this.identifyOpportunities(page),
                restructureRecommendations: await this.getRestructureRecommendations(page)
            };
            
            this.analysisResults.pages[page.path] = pageAnalysis;
        }
        
        this.generateSummary();
        await this.generateRestructurePlan();
    }

    async analyzePageFiles(page) {
        const pageDir = path.join(this.appDir, '[locale]', page.directory);
        const structure = {
            exists: false,
            files: [],
            components: [],
            layout: null,
            content: {},
            navigation: {}
        };

        try {
            if (fs.existsSync(pageDir)) {
                structure.exists = true;
                structure.files = fs.readdirSync(pageDir);
                
                // 分析主要文件
                for (const file of structure.files) {
                    const filePath = path.join(pageDir, file);
                    if (fs.statSync(filePath).isFile() && file.endsWith('.tsx')) {
                        const content = fs.readFileSync(filePath, 'utf8');
                        structure.content[file] = {
                            size: content.length,
                            componentCount: (content.match(/const\s+\w+\s*=/g) || []).length,
                            jsxElements: this.countJSXElements(content),
                            imports: this.extractImports(content),
                            hasMetadata: content.includes('metadata'),
                            hasGenerateMetadata: content.includes('generateMetadata'),
                            hasUseClient: content.includes('use client'),
                            hasLinks: content.includes('Link') || content.includes('href'),
                            hasCTA: this.hasCTAElements(content)
                        };
                    }
                }
            }
        } catch (error) {
            console.warn(`分析页面 ${page.path} 时出错:`, error.message);
        }

        return structure;
    }

    countJSXElements(content) {
        const elements = {};
        // 统计常见JSX元素
        const elementPatterns = [
            'div', 'section', 'article', 'header', 'footer', 'nav',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'span', 'a', 'button',
            'img', 'video', 'iframe',
            'form', 'input', 'textarea', 'select'
        ];
        
        elementPatterns.forEach(element => {
            const pattern = new RegExp(`<${element}[^>]*>`, 'gi');
            const matches = content.match(pattern) || [];
            elements[element] = matches.length;
        });
        
        return elements;
    }

    extractImports(content) {
        const imports = [];
        const importPattern = /import\s+.*?from\s+['"`]([^'"`]+)['"`]/g;
        let match;
        
        while ((match = importPattern.exec(content)) !== null) {
            imports.push(match[1]);
        }
        
        return imports;
    }

    hasCTAElements(content) {
        const ctaKeywords = [
            'button', 'btn', 'cta', 'call-to-action',
            'download', 'get-started', 'sign-up',
            'subscribe', 'contact', 'learn-more'
        ];
        
        return ctaKeywords.some(keyword => 
            content.toLowerCase().includes(keyword)
        );
    }

    async identifyIssues(page) {
        const issues = [];
        const structure = this.analysisResults.pages[page.path]?.structure;
        
        if (!structure) return issues;

        // 检查页面是否存在
        if (!structure.exists) {
            issues.push({
                type: 'critical',
                issue: 'page_not_found',
                description: `页面目录不存在: ${page.directory}`,
                impact: 'high'
            });
            return issues;
        }

        // 检查是否有主页面文件
        const hasMainFile = structure.files.some(file => 
            file === 'page.tsx' || file === 'index.tsx'
        );
        
        if (!hasMainFile) {
            issues.push({
                type: 'critical',
                issue: 'no_main_file',
                description: '缺少主页面文件 (page.tsx)',
                impact: 'high'
            });
        }

        // 检查内容质量
        Object.entries(structure.content).forEach(([file, content]) => {
            if (content.size < 500) {
                issues.push({
                    type: 'warning',
                    issue: 'low_content',
                    description: `${file} 内容过少 (${content.size} 字符)`,
                    impact: 'medium'
                });
            }

            if (!content.hasCTA) {
                issues.push({
                    type: 'warning',
                    issue: 'no_cta',
                    description: `${file} 缺少明显的CTA元素`,
                    impact: 'high'
                });
            }

            if (!content.hasLinks) {
                issues.push({
                    type: 'warning',
                    issue: 'no_internal_links',
                    description: `${file} 缺少内部链接`,
                    impact: 'medium'
                });
            }

            if (!content.hasMetadata && !content.hasGenerateMetadata) {
                issues.push({
                    type: 'warning',
                    issue: 'no_metadata',
                    description: `${file} 缺少SEO元数据`,
                    impact: 'medium'
                });
            }
        });

        return issues;
    }

    async identifyOpportunities(page) {
        const opportunities = [];
        
        // 基于曝光量和点击率分析机会
        const ctr = page.clicks / page.impressions;
        const impressions = page.impressions;
        
        if (impressions > 1000 && ctr === 0) {
            opportunities.push({
                type: 'high_impact',
                opportunity: 'massive_visibility_zero_clicks',
                description: `页面有${impressions}次展示但0点击，巨大改进潜力`,
                potential: 'very_high',
                estimatedImpact: `预期可获得${Math.floor(impressions * 0.01)}+点击/月`
            });
        }

        if (page.priority === 'high') {
            opportunities.push({
                type: 'strategic',
                opportunity: 'high_priority_redesign',
                description: '高优先级页面，适合全面重设计',
                potential: 'high',
                estimatedImpact: '显著提升整体网站转化率'
            });
        }

        // 针对特定页面类型的机会
        switch (page.directory) {
            case 'blog':
                opportunities.push({
                    type: 'content',
                    opportunity: 'content_hub_potential',
                    description: '可转换为内容中心，提供价值内容',
                    potential: 'high',
                    estimatedImpact: '提升SEO和用户留存'
                });
                break;
                
            case 'faq':
                opportunities.push({
                    type: 'support',
                    opportunity: 'support_optimization',
                    description: '优化FAQ结构，减少支持负担',
                    potential: 'medium',
                    estimatedImpact: '提升用户满意度，减少客服压力'
                });
                break;
                
            case 'contact':
                opportunities.push({
                    type: 'conversion',
                    opportunity: 'lead_generation',
                    description: '优化联系表单，增加转化机会',
                    potential: 'medium',
                    estimatedImpact: '增加潜在客户获取'
                });
                break;
        }

        return opportunities;
    }

    async getRestructureRecommendations(page) {
        const recommendations = {
            immediate: [],
            shortTerm: [],
            longTerm: []
        };

        // 立即执行的建议
        recommendations.immediate.push(
            '应用统一设计系统样式',
            '添加明显的CTA按钮',
            '优化页面标题和描述',
            '添加面包屑导航'
        );

        // 短期建议
        recommendations.shortTerm.push(
            '重写页面内容，提高价值',
            '添加相关内容推荐',
            '优化内部链接结构',
            '改进移动端体验'
        );

        // 长期建议
        recommendations.longTerm.push(
            '实施A/B测试验证改进',
            '建立内容更新机制',
            '集成用户行为分析',
            '多语言内容本地化'
        );

        // 页面特定建议
        switch (page.directory) {
            case 'blog':
                recommendations.immediate.push('创建博客文章列表');
                recommendations.shortTerm.push('添加搜索和分类功能');
                recommendations.longTerm.push('建立内容管理系统');
                break;
                
            case 'faq':
                recommendations.immediate.push('实现搜索功能');
                recommendations.shortTerm.push('添加问题分类');
                recommendations.longTerm.push('智能问答系统');
                break;
        }

        return recommendations;
    }

    generateSummary() {
        const totalPages = this.targetPages.length;
        const totalImpressions = this.targetPages.reduce((sum, page) => sum + page.impressions, 0);
        const highPriorityPages = this.targetPages.filter(page => page.priority === 'high').length;
        
        let totalIssues = 0;
        let totalOpportunities = 0;
        
        Object.values(this.analysisResults.pages).forEach(page => {
            if (page.issues) totalIssues += page.issues.length;
            if (page.opportunities) totalOpportunities += page.opportunities.length;
        });

        this.analysisResults.summary = {
            totalPages,
            totalImpressions,
            highPriorityPages,
            totalIssues,
            totalOpportunities,
            estimatedPotential: Math.floor(totalImpressions * 0.01), // 假设1%转化率
            priorityOrder: this.targetPages
                .sort((a, b) => b.impressions - a.impressions)
                .map(page => ({
                    path: page.path,
                    impressions: page.impressions,
                    priority: page.priority
                }))
        };
    }

    async generateRestructurePlan() {
        this.analysisResults.restructurePlan = {
            phase1: {
                duration: '1周',
                focus: '高优先级页面快速修复',
                tasks: [
                    '修复/blog和/faq页面的关键问题',
                    '应用统一设计系统',
                    '添加基本CTA元素',
                    '优化页面元数据'
                ],
                expectedOutcome: '快速提升点击率到0.5%+'
            },
            phase2: {
                duration: '2周',
                focus: '全面页面重构',
                tasks: [
                    '重新设计页面布局',
                    '重写页面内容',
                    '实现内容推荐系统',
                    '优化用户流程'
                ],
                expectedOutcome: '点击率提升到1%+，用户留存提升'
            },
            phase3: {
                duration: '1周',
                focus: '测试和优化',
                tasks: [
                    '实施A/B测试',
                    '收集用户反馈',
                    '数据分析和调优',
                    '制定长期维护计划'
                ],
                expectedOutcome: '确保持续改进和稳定收益'
            }
        };
    }

    async saveResults() {
        try {
            // 确保目录存在
            const docsDir = path.dirname(this.outputFile);
            if (!fs.existsSync(docsDir)) {
                fs.mkdirSync(docsDir, { recursive: true });
            }
            
            // 保存分析结果
            fs.writeFileSync(
                this.outputFile,
                JSON.stringify(this.analysisResults, null, 2)
            );
            
            console.log(`✅ 分析结果已保存到: ${this.outputFile}`);
            
            // 生成可读性报告
            await this.generateReadableReport();
            
        } catch (error) {
            console.error('❌ 保存结果时出错:', error);
            throw error;
        }
    }

    async generateReadableReport() {
        const reportFile = path.join(this.baseDir, 'docs', 'page-restructure-report.md');
        
        let report = `# 页面重构分析报告

## 📊 分析概要

**分析时间**: ${new Date(this.analysisResults.timestamp).toLocaleString()}
**分析页面数**: ${this.analysisResults.summary.totalPages}
**总展示次数**: ${this.analysisResults.summary.totalImpressions.toLocaleString()}
**高优先级页面**: ${this.analysisResults.summary.highPriorityPages}
**发现问题**: ${this.analysisResults.summary.totalIssues}
**优化机会**: ${this.analysisResults.summary.totalOpportunities}
**预估潜在点击**: ${this.analysisResults.summary.estimatedPotential}/月

## 🎯 页面优化优先级

`;

        this.analysisResults.summary.priorityOrder.forEach((page, index) => {
            report += `${index + 1}. **${page.path}** - ${page.impressions.toLocaleString()}次展示 (${page.priority}优先级)\n`;
        });

        report += `\n## 📋 详细分析结果

`;

        Object.entries(this.analysisResults.pages).forEach(([pagePath, analysis]) => {
            report += `### ${pagePath}

**基本信息**:
- 展示次数: ${analysis.basicInfo.impressions.toLocaleString()}
- 当前点击: ${analysis.basicInfo.clicks}
- 优先级: ${analysis.basicInfo.priority}

**发现的问题**:
`;
            analysis.issues.forEach(issue => {
                report += `- ${issue.type}: ${issue.description}\n`;
            });

            report += `\n**优化机会**:
`;
            analysis.opportunities.forEach(opp => {
                report += `- ${opp.type}: ${opp.description}\n`;
            });

            report += `\n**立即行动建议**:
`;
            analysis.restructureRecommendations.immediate.forEach(rec => {
                report += `- ${rec}\n`;
            });

            report += `\n`;
        });

        report += `## 🚀 实施计划

### 第一阶段 (${this.analysisResults.restructurePlan.phase1.duration})
**重点**: ${this.analysisResults.restructurePlan.phase1.focus}

任务清单:
`;
        this.analysisResults.restructurePlan.phase1.tasks.forEach(task => {
            report += `- [ ] ${task}\n`;
        });

        report += `\n**预期结果**: ${this.analysisResults.restructurePlan.phase1.expectedOutcome}

### 第二阶段 (${this.analysisResults.restructurePlan.phase2.duration})
**重点**: ${this.analysisResults.restructurePlan.phase2.focus}

任务清单:
`;
        this.analysisResults.restructurePlan.phase2.tasks.forEach(task => {
            report += `- [ ] ${task}\n`;
        });

        report += `\n**预期结果**: ${this.analysisResults.restructurePlan.phase2.expectedOutcome}

### 第三阶段 (${this.analysisResults.restructurePlan.phase3.duration})
**重点**: ${this.analysisResults.restructurePlan.phase3.focus}

任务清单:
`;
        this.analysisResults.restructurePlan.phase3.tasks.forEach(task => {
            report += `- [ ] ${task}\n`;
        });

        report += `\n**预期结果**: ${this.analysisResults.restructurePlan.phase3.expectedOutcome}

## 📈 成功指标

- 页面点击率从0提升到1%+
- 用户停留时间增加20%+
- 页面跳出率降低15%+
- 内部链接点击率提升

---

*报告生成时间: ${new Date().toLocaleString()}*
`;

        fs.writeFileSync(reportFile, report);
        console.log(`📄 可读性报告已生成: ${reportFile}`);
    }

    async run() {
        try {
            console.log('🚀 启动页面重构分析...\n');
            
            await this.analyzePageStructure();
            await this.saveResults();
            
            console.log('\n✅ 页面重构分析完成！');
            console.log('\n📋 下一步行动:');
            console.log('1. 查看分析报告: docs/page-restructure-report.md');
            console.log('2. 开始实施第一阶段优化');
            console.log('3. 监控改进效果');
            
        } catch (error) {
            console.error('❌ 分析过程中出错:', error);
            process.exit(1);
        }
    }
}

// 运行分析
if (require.main === module) {
    const analyzer = new PageRestructureAnalyzer();
    analyzer.run();
}

module.exports = PageRestructureAnalyzer;
