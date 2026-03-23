import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const zh: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: '简体中文',
  lang: 'zh-CN',
  link: '/zh/',
  description: 'EU AI Act – 合规文档 | BAUER GROUP',

  themeConfig: {
    // -----------------------------------------------------------------
    // Announcement Banner
    // -----------------------------------------------------------------

    announcement: {
      text: '本文档正在积极开发中，尚未最终定稿。',
      type: 'warning',
      dismissible: true,
    },

    // -----------------------------------------------------------------
    // Navigation
    // -----------------------------------------------------------------

    nav: [
      { text: '概述', link: '/zh/overview/' },
      { text: '风险分类', link: '/zh/risk-classification/' },
      { text: '高风险AI', link: '/zh/high-risk-ai/' },
      { text: 'GPAI', link: '/zh/gpai/' },
      { text: '合规矩阵', link: '/zh/compliance-matrix/' },
    ],

    // -----------------------------------------------------------------
    // Sidebar
    // -----------------------------------------------------------------

    sidebar: {
      '/zh/': [
        {
          text: '1. 概述',
          collapsed: false,
          items: [
            { text: '引言', link: '/zh/overview/' },
            { text: '时间表和截止日期', link: '/zh/overview/timeline' },
            { text: '适用范围', link: '/zh/overview/scope' },
            { text: '经济运营者和角色', link: '/zh/overview/economic-operators' },
            { text: 'BAUER GROUP 定位', link: '/zh/overview/bauer-group' },
            { text: 'Go/No-Go 决策框架', link: '/zh/overview/go-no-go' },
          ],
        },
        {
          text: '2. 风险分类',
          collapsed: false,
          items: [
            { text: '风险等级概述', link: '/zh/risk-classification/' },
            { text: '分类决策', link: '/zh/risk-classification/decision' },
            { text: '附录 I – 协调法规', link: '/zh/risk-classification/annex-i' },
            { text: '附录 III – 高风险类别', link: '/zh/risk-classification/annex-iii' },
            { text: '非高风险文档', link: '/zh/risk-classification/non-high-risk' },
          ],
        },
        {
          text: '3. 禁止做法',
          collapsed: true,
          items: [
            { text: '第5条概述', link: '/zh/prohibited-practices/' },
            { text: '禁止目录', link: '/zh/prohibited-practices/catalogue' },
            { text: 'BAUER GROUP 产品审查方案', link: '/zh/prohibited-practices/screening' },
          ],
        },
        {
          text: '4. 高风险AI系统',
          collapsed: true,
          items: [
            { text: '要求 第8-15条', link: '/zh/high-risk-ai/' },
            { text: '风险管理 (第9条)', link: '/zh/high-risk-ai/risk-management' },
            { text: '数据治理 (第10条)', link: '/zh/high-risk-ai/data-governance' },
            { text: '技术文档 (第11条)', link: '/zh/high-risk-ai/technical-documentation' },
            { text: '记录保存 (第12条)', link: '/zh/high-risk-ai/logging' },
            { text: '透明度 (第13条)', link: '/zh/high-risk-ai/transparenz' },
            { text: '人类监督 (第14条)', link: '/zh/high-risk-ai/human-oversight' },
            { text: '准确性与稳健性 (第15条)', link: '/zh/high-risk-ai/accuracy-robustness' },
            { text: '提供者义务 (第16-21条)', link: '/zh/high-risk-ai/provider-obligations' },
            { text: '质量管理体系 (第17条)', link: '/zh/high-risk-ai/qms' },
          ],
        },
        {
          text: '5. 通用人工智能 (GPAI)',
          collapsed: true,
          items: [
            { text: 'GPAI模型 (第51-56条)', link: '/zh/gpai/' },
            { text: 'GPAI提供者义务 (第53条)', link: '/zh/gpai/obligations' },
            { text: '系统性风险 (Art. 51/55)', link: '/zh/gpai/systemic-risk' },
            { text: 'BAUER GROUP 作为 GPAI 部署者', link: '/zh/gpai/deployer-perspective' },
          ],
        },
        {
          text: '6. 透明度义务',
          collapsed: true,
          items: [
            { text: '概述 (第50条)', link: '/zh/transparency/' },
            { text: 'AI交互披露', link: '/zh/transparency/ai-interaction' },
            { text: '深度伪造与合成内容', link: '/zh/transparency/deepfakes' },
            { text: '标注要求', link: '/zh/transparency/labelling' },
          ],
        },
        {
          text: '7. 治理与AI素养',
          collapsed: true,
          items: [
            { text: 'AI素养 (第4条)', link: '/zh/governance/' },
            { text: 'AI治理框架', link: '/zh/governance/framework' },
            { text: '角色与职责', link: '/zh/governance/roles' },
            { text: 'AI清单与注册', link: '/zh/governance/inventory' },
          ],
        },
        {
          text: '8. 合格评定',
          collapsed: true,
          items: [
            { text: '概述 (第43条)', link: '/zh/conformity/' },
            { text: '自我评估 (附录VI)', link: '/zh/conformity/self-assessment' },
            { text: 'QMS + 技术文档 (附录VII)', link: '/zh/conformity/annex-vii' },
            { text: 'CE标识 (第48条)', link: '/zh/conformity/ce-marking' },
            { text: 'EU合格声明 (第47条)', link: '/zh/conformity/declaration-of-conformity' },
            { text: '机器可读格式 (JSON)', link: '/zh/conformity/machine-readable' },
            { text: 'EU数据库注册 (第49条)', link: '/zh/conformity/registration' },
          ],
        },
        {
          text: '9. 执法与处罚',
          collapsed: true,
          items: [
            { text: '处罚制度 (第99条)', link: '/zh/enforcement/' },
            { text: '市场监管', link: '/zh/enforcement/market-surveillance' },
            { text: 'AI办公室与AI委员会', link: '/zh/enforcement/ai-office' },
          ],
        },
        {
          text: '10. 合规矩阵',
          collapsed: false,
          items: [
            { text: '要求映射', link: '/zh/compliance-matrix/' },
            { text: '工作量评估与Go/No-Go', link: '/zh/compliance-matrix/effort-assessment' },
          ],
        },
        {
          text: 'A. 模板',
          collapsed: true,
          items: [
            { text: 'AI系统清单', link: '/zh/templates/ai-inventory' },
            { text: '风险分类表', link: '/zh/templates/risk-classification' },
            { text: '非高风险评估', link: '/zh/templates/non-high-risk' },
            { text: 'EU合格声明', link: '/zh/templates/declaration-of-conformity' },
            { text: '透明度通知', link: '/zh/templates/transparency-notice' },
            { text: 'AI素养培训记录', link: '/zh/templates/ai-literacy' },
            { text: 'Go/No-Go 决策协议', link: '/zh/templates/go-no-go' },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------
    // UI Translations
    // -----------------------------------------------------------------

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-AIActCompliance/edit/main/docs/:path',
      text: '编辑此页面'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一页', next: '下一页' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    langMenuLabel: '语言',

    footer: {
      message: '文档基于 <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> 许可 · 代码基于 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a> 许可',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP。禁止将文档用于商业用途。`
    },
  }
}
