# 机器可读格式 – AI Act 合规声明

## 目的

机器可读的合规数据可实现：

- **自动发布**至合规门户
- **程序化验证**在 CI/CD 管道中
- **聚合**所有 AI 系统的数据至中央仪表板
- **监管机构访问**通过 API 供市场监督机构使用
- **生成**人类可读的 EU 合规声明（Annex V）

::: tip 格式
**JSON** 是主要格式。文件名为 `ai-act-statement.json`，存储位置为产品仓库中的 `.compliance/` 目录。
:::

## JSON 模式

AI Act 合规声明遵循已定义的 JSON 模式：

```json
{
  "$schema": "https://ai-act.app.bauer-group.com/schemas/ai-act-statement/v1.json",
  "schema_version": "1.0.0",

  "provider": {
    "name": "BAUER GROUP",
    "address": "[完整通信地址]",
    "contact_email": "compliance@bauer-group.com",
    "website": "[URL]",
    "authorised_representative": null
  },

  "ai_system": {
    "name": "[AI 系统名称]",
    "version": "[X.Y.Z]",
    "type": "[standalone|embedded|gpai_based]",
    "description": "[用途简要描述]",
    "identifier": "AI-BGI-XXXX",
    "intended_purpose": "[根据 Art. 13 的预期用途]",
    "deployer_type": "[internal|b2b|b2c|public_authority]"
  },

  "risk_classification": {
    "risk_level": "[minimal|limited|high_risk]",
    "annex_iii_category": "[1-8 或 null]",
    "annex_i_product": "[Annex I 引用或 null]",
    "classification_rationale": "[分类依据]"
  },

  "conformity_assessment": {
    "procedure": "[annex_vi|annex_vii]",
    "notified_body": null,
    "assessment_date": "[YYYY-MM-DD]",
    "declaration_url": "[完整 DoC 的 URL]",
    "declaration_date": "[YYYY-MM-DD]",
    "ce_marking": true,
    "ce_marking_placement": "[product|packaging|documentation|digital]"
  },

  "compliance": {
    "art_9_risk_management": true,
    "art_10_data_governance": true,
    "art_11_technical_documentation": true,
    "art_12_record_keeping": true,
    "art_13_transparency": true,
    "art_14_human_oversight": true,
    "art_15_accuracy_robustness": true,
    "art_17_qms": true
  },

  "transparency": {
    "ai_interaction_disclosed": true,
    "synthetic_content_labelled": false,
    "deployer_instructions_provided": true,
    "eu_database_registered": true,
    "eu_database_id": "[注册编号或 null]"
  },

  "support_period": {
    "start_date": "[YYYY-MM-DD]",
    "end_date": "[YYYY-MM-DD]",
    "phase": "[active|monitoring|eol]",
    "post_market_monitoring": true
  },

  "harmonised_standards": [
    {
      "identifier": "[例如 EN XXXXX:YYYY]",
      "description": "[描述]"
    }
  ],

  "metadata": {
    "generated_at": "[ISO 8601 时间戳]",
    "generator": "[工具或手动]",
    "statement_version": "[声明版本]",
    "regulation": "(EU) 2024/1689"
  }
}
```

## 字段概览

### 必填字段

| 字段 | 类型 | 描述 |
|------|------|------|
| `schema_version` | string | 模式版本（SemVer） |
| `provider.name` | string | 提供者公司名称 |
| `provider.contact_email` | string | 合规联系人 |
| `ai_system.name` | string | AI 系统名称 |
| `ai_system.version` | string | 当前版本（SemVer） |
| `ai_system.type` | enum | `standalone`、`embedded`、`gpai_based` |
| `ai_system.identifier` | string | 唯一系统 ID |
| `ai_system.intended_purpose` | string | 预期用途 |
| `risk_classification.risk_level` | enum | `minimal`、`limited`、`high_risk` |
| `conformity_assessment.procedure` | enum | `annex_vi`、`annex_vii` |
| `conformity_assessment.assessment_date` | string（日期） | 合规评估日期 |
| `conformity_assessment.declaration_date` | string（日期） | DoC 日期 |
| `conformity_assessment.ce_marking` | boolean | 是否已加贴 CE 标志？ |
| `compliance.art_9_risk_management` | boolean | Art. 9 是否满足？ |
| `compliance.art_10_data_governance` | boolean | Art. 10 是否满足？ |
| `compliance.art_11_technical_documentation` | boolean | Art. 11 是否满足？ |
| `compliance.art_12_record_keeping` | boolean | Art. 12 是否满足？ |
| `compliance.art_13_transparency` | boolean | Art. 13 是否满足？ |
| `compliance.art_14_human_oversight` | boolean | Art. 14 是否满足？ |
| `compliance.art_15_accuracy_robustness` | boolean | Art. 15 是否满足？ |
| `compliance.art_17_qms` | boolean | Art. 17 QMS 是否到位？ |
| `support_period.start_date` | string（日期） | 支持开始日期 |
| `support_period.end_date` | string（日期） | 支持结束日期 |

### 可选字段

| 字段 | 类型 | 描述 |
|------|------|------|
| `provider.address` | string | 通信地址 |
| `provider.website` | string (URL) | 企业网站 |
| `provider.authorised_representative` | string | 授权代表（如适用） |
| `ai_system.description` | string | 简要描述 |
| `ai_system.deployer_type` | enum | `internal`、`b2b`、`b2c`、`public_authority` |
| `risk_classification.annex_iii_category` | integer | Annex III 类别（1–8） |
| `risk_classification.annex_i_product` | string | Annex I 产品引用 |
| `risk_classification.classification_rationale` | string | 分类依据 |
| `conformity_assessment.notified_body` | string | 公告机构（适用于 Annex VII） |
| `conformity_assessment.declaration_url` | string (URL) | DoC 链接 |
| `transparency.eu_database_id` | string | EU 数据库注册编号 |
| `support_period.phase` | enum | `active`、`monitoring`、`eol` |
| `harmonised_standards[]` | array | 适用的标准 |
| `metadata.*` | object | 生成信息 |

## 生成流程

```
.compliance/ai-act-statement.json（唯一数据源）
    ↓
    ├─→ EU 合规声明（PDF/HTML — Annex V）
    ├─→ CE 标志（产品、包装、文档）
    ├─→ EU 数据库注册（Art. 49）
    ├─→ 合规仪表板（集中聚合）
    └─→ 部署者信息（使用说明 Art. 13）
```

## 验证

### CI/CD 管道

```yaml
# 示例：GitHub Actions 步骤
- name: Validate AI Act Statement
  run: |
    npx ajv validate \
      -s schemas/ai-act-statement-v1.schema.json \
      -d .compliance/ai-act-statement.json
```

### 验证规则

| 检查项 | 严重程度 | 描述 |
|--------|:--------:|------|
| 模式符合性 | 🔴 阻断 | JSON 必须通过模式验证 |
| 必填字段存在 | 🔴 阻断 | 所有必填字段必须已填写 |
| 风险等级 ↔ 合规字段 | 🔴 阻断 | `high_risk` 时，所有 Art. 8–15 字段必须为 `true` |
| Annex VI ↔ 公告机构 | 🔴 阻断 | `annex_vi` 时，不得设置 `notified_body` |
| 日期一致性 | 🟡 警告 | `end_date` 必须晚于 `start_date` |
| 支持未过期 | 🟡 警告 | `end_date` 应在未来 |
| EU 数据库 ID | 🟡 警告 | `high_risk` 时应设置 `eu_database_id` |

## 完整示例

```json
{
  "$schema": "https://ai-act.app.bauer-group.com/schemas/ai-act-statement/v1.json",
  "schema_version": "1.0.0",

  "provider": {
    "name": "BAUER GROUP",
    "address": "Musterstraße 1, 12345 Musterstadt, Deutschland",
    "contact_email": "compliance@bauer-group.com",
    "website": "https://bauer-group.com",
    "authorised_representative": null
  },

  "ai_system": {
    "name": "BAUER Predictive Maintenance Engine",
    "version": "1.2.0",
    "type": "embedded",
    "description": "基于 AI 的建筑机械液压系统预测性维护",
    "identifier": "AI-BGI-0042",
    "intended_purpose": "基于传感器数据（振动、温度、压力）预测维护需求，以避免非计划停机",
    "deployer_type": "b2b"
  },

  "risk_classification": {
    "risk_level": "high_risk",
    "annex_iii_category": 2,
    "annex_i_product": "机械法规 (EU) 2023/1230",
    "classification_rationale": "Annex I 产品（建筑机械）中的安全组件 — Art. 6(1)"
  },

  "conformity_assessment": {
    "procedure": "annex_vi",
    "notified_body": null,
    "assessment_date": "2026-07-15",
    "declaration_url": "https://ai-act.app.bauer-group.com/systems/AI-BGI-0042/doc",
    "declaration_date": "2026-07-15",
    "ce_marking": true,
    "ce_marking_placement": "documentation"
  },

  "compliance": {
    "art_9_risk_management": true,
    "art_10_data_governance": true,
    "art_11_technical_documentation": true,
    "art_12_record_keeping": true,
    "art_13_transparency": true,
    "art_14_human_oversight": true,
    "art_15_accuracy_robustness": true,
    "art_17_qms": true
  },

  "transparency": {
    "ai_interaction_disclosed": false,
    "synthetic_content_labelled": false,
    "deployer_instructions_provided": true,
    "eu_database_registered": true,
    "eu_database_id": "EU-AI-DB-2026-004217"
  },

  "support_period": {
    "start_date": "2026-07-15",
    "end_date": "2031-07-15",
    "phase": "active",
    "post_market_monitoring": true
  },

  "harmonised_standards": [
    {
      "identifier": "ISO/IEC 42001:2023",
      "description": "AI Management System"
    },
    {
      "identifier": "ISO/IEC 23894:2023",
      "description": "AI Risk Management"
    }
  ],

  "metadata": {
    "generated_at": "2026-07-15T09:00:00Z",
    "generator": "manual",
    "statement_version": "1.0.0",
    "regulation": "(EU) 2024/1689"
  }
}
```

## 模式版本管理

| 字段 | 规则 |
|------|------|
| `schema_version` | 遵循 SemVer（MAJOR.MINOR.PATCH） |
| MAJOR | 不兼容的变更（新必填字段、结构变更） |
| MINOR | 向后兼容的扩展（新可选字段） |
| PATCH | 描述或验证规则的更正 |

::: warning 兼容性
当模式发生 MAJOR 更新时，所有现有的 `ai-act-statement.json` 文件必须进行迁移。迁移指南记录在本手册中。
:::

## 交叉引用

| 主题 | 链接 |
|------|------|
| EU 合规声明（内容） | [Art. 47 说明](/zh/conformity/declaration-of-conformity) |
| EU 合规声明（模板） | [模板](/zh/templates/declaration-of-conformity) |
| EU 数据库注册 | [Art. 49](/zh/conformity/registration) |
| CE 标志 | [Art. 48](/zh/conformity/ce-marking) |
| 风险分类 | [第 2 章](/zh/risk-classification/) |
