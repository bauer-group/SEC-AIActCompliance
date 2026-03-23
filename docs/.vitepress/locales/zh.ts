import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zh: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: [
      { text: '概述', link: '/zh/01-ueberblick/' },
      { text: '风险分类', link: '/zh/02-risikoklassifizierung/' },
      { text: '高风险AI', link: '/zh/04-hochrisiko-ki/' },
      { text: 'GPAI', link: '/zh/05-gpai/' },
      { text: '合规矩阵', link: '/zh/10-compliance-matrix/' },
    ],
    sidebar: {
      '/zh/': [
        {
          text: '1. 概述',
          collapsed: false,
          items: [
            { text: '引言', link: '/zh/01-ueberblick/' },
            { text: '时间表和截止日期', link: '/zh/01-ueberblick/zeitplan' },
            { text: '适用范围', link: '/zh/01-ueberblick/geltungsbereich' },
            { text: '经济运营者和角色', link: '/zh/01-ueberblick/wirtschaftsakteure' },
            { text: 'BAUER GROUP 定位', link: '/zh/01-ueberblick/bauer-group' },
            { text: 'Go/No-Go 决策框架', link: '/zh/01-ueberblick/go-no-go' },
          ],
        },
        {
          text: '2. 风险分类',
          collapsed: false,
          items: [
            { text: '风险等级概述', link: '/zh/02-risikoklassifizierung/' },
            { text: '分类决策', link: '/zh/02-risikoklassifizierung/entscheidung' },
            { text: '附录 I – 协调法规', link: '/zh/02-risikoklassifizierung/annex-i' },
            { text: '附录 III – 高风险类别', link: '/zh/02-risikoklassifizierung/annex-iii' },
            { text: '非高风险文档', link: '/zh/02-risikoklassifizierung/nicht-hochrisiko' },
          ],
        },
        {
          text: '3. 禁止做法',
          collapsed: true,
          items: [
            { text: '第5条概述', link: '/zh/03-verbotene-praktiken/' },
            { text: '禁止目录', link: '/zh/03-verbotene-praktiken/katalog' },
            { text: 'BAUER 产品审查方案', link: '/zh/03-verbotene-praktiken/pruefschema' },
          ],
        },
        {
          text: '4. 高风险AI系统',
          collapsed: true,
          items: [
            { text: '要求 第8-15条', link: '/zh/04-hochrisiko-ki/' },
            { text: '风险管理 (第9条)', link: '/zh/04-hochrisiko-ki/risikomanagement' },
            { text: '数据治理 (第10条)', link: '/zh/04-hochrisiko-ki/data-governance' },
            { text: '技术文档 (第11条)', link: '/zh/04-hochrisiko-ki/technische-doku' },
            { text: '记录保存 (第12条)', link: '/zh/04-hochrisiko-ki/protokollierung' },
            { text: '透明度 (第13条)', link: '/zh/04-hochrisiko-ki/transparenz' },
            { text: '人类监督 (第14条)', link: '/zh/04-hochrisiko-ki/menschliche-aufsicht' },
            { text: '准确性与稳健性 (第15条)', link: '/zh/04-hochrisiko-ki/genauigkeit-robustheit' },
            { text: '提供者义务 (第16-21条)', link: '/zh/04-hochrisiko-ki/provider-pflichten' },
            { text: '质量管理体系 (第17条)', link: '/zh/04-hochrisiko-ki/qms' },
          ],
        },
        {
          text: '5. 通用人工智能 (GPAI)',
          collapsed: true,
          items: [
            { text: 'GPAI模型 (第51-56条)', link: '/zh/05-gpai/' },
            { text: 'GPAI提供者义务 (第53条)', link: '/zh/05-gpai/pflichten' },
            { text: '系统性风险 (第55条)', link: '/zh/05-gpai/systemisches-risiko' },
            { text: 'BAUER GROUP 作为 GPAI 部署者', link: '/zh/05-gpai/deployer-perspektive' },
          ],
        },
        {
          text: '6. 透明度义务',
          collapsed: true,
          items: [
            { text: '概述 (第50条)', link: '/zh/06-transparenz/' },
            { text: 'AI交互披露', link: '/zh/06-transparenz/ki-interaktion' },
            { text: '深度伪造与合成内容', link: '/zh/06-transparenz/deepfakes' },
            { text: '标注要求', link: '/zh/06-transparenz/kennzeichnung' },
          ],
        },
        {
          text: '7. 治理与AI素养',
          collapsed: true,
          items: [
            { text: 'AI素养 (第4条)', link: '/zh/07-governance/' },
            { text: 'AI治理框架', link: '/zh/07-governance/framework' },
            { text: '角色与职责', link: '/zh/07-governance/rollen' },
            { text: 'AI清单与注册', link: '/zh/07-governance/inventar' },
          ],
        },
        {
          text: '8. 合格评定',
          collapsed: true,
          items: [
            { text: '概述 (第43条)', link: '/zh/08-konformitaet/' },
            { text: '自我评估 (附录VI)', link: '/zh/08-konformitaet/selbstbewertung' },
            { text: 'QMS + 技术文档 (附录VII)', link: '/zh/08-konformitaet/annex-vii' },
            { text: 'CE标识 (第48条)', link: '/zh/08-konformitaet/ce-kennzeichnung' },
            { text: 'EU合格声明 (第47条)', link: '/zh/08-konformitaet/konformitaetserklaerung' },
            { text: 'EU数据库注册 (第49条)', link: '/zh/08-konformitaet/registrierung' },
          ],
        },
        {
          text: '9. 执法与处罚',
          collapsed: true,
          items: [
            { text: '处罚制度 (第99条)', link: '/zh/09-durchsetzung/' },
            { text: '市场监管', link: '/zh/09-durchsetzung/marktueberwachung' },
            { text: 'AI办公室与AI委员会', link: '/zh/09-durchsetzung/ai-office' },
          ],
        },
        {
          text: '10. 合规矩阵',
          collapsed: false,
          items: [
            { text: '要求映射', link: '/zh/10-compliance-matrix/' },
            { text: '工作量评估与Go/No-Go', link: '/zh/10-compliance-matrix/aufwand' },
          ],
        },
        {
          text: 'A. 模板',
          collapsed: true,
          items: [
            { text: 'AI系统清单', link: '/zh/templates/ki-inventar' },
            { text: '风险分类表', link: '/zh/templates/risikoklassifizierung' },
            { text: '非高风险评估', link: '/zh/templates/nicht-hochrisiko' },
            { text: 'EU合格声明', link: '/zh/templates/konformitaetserklaerung' },
            { text: '透明度通知', link: '/zh/templates/transparenz-hinweis' },
            { text: 'AI素养培训记录', link: '/zh/templates/ai-literacy' },
            { text: 'Go/No-Go 决策协议', link: '/zh/templates/go-no-go' },
          ],
        },
      ],
    },
    outline: { label: '本页内容' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新于' },
    editLink: { text: '在 GitHub 上编辑此页' },
  },
}
