# 模板：EU 合规声明（Art. 47）

::: tip 唯一数据源
本声明由机器可读文件 `.compliance/ai-act-statement.json` 生成。请始终在 JSON 文件中进行更改——人类可读版本由此派生。参见：[机器可读格式](/zh/08-konformitaet/maschinenlesbar)
:::

---

## EU 合规声明

### 编号 [declaration_id]

### 法规 (EU) 2024/1689 — Artificial Intelligence Act

---

**1. AI 系统：**

| 字段 | 值 |
|------|------|
| 名称 | [ai_system.name] |
| 商品名称/品牌 | [ai_system.trade_name 或 "不适用"] |
| 类型 | [ai_system.type] |
| 版本 | [ai_system.version] |
| 型号/变体 | [ai_system.model 或 "不适用"] |
| 批次/序列号 | [ai_system.serial_number 或 "不适用"] |
| 系统 ID | [ai_system.identifier] |
| 预期用途 | [ai_system.intended_purpose] |

**2. 提供者及其授权代表（如适用）的名称和地址：**

| 字段 | 值 |
|------|------|
| 公司 | [provider.name] |
| 地址 | [provider.address] |
| 电子邮件 | [provider.contact_email] |
| 网站 | [provider.website] |
| **授权代表**（如适用） | [provider.authorised_representative \|\| "不适用"] |

**3. 本合规声明由提供者自行负责签发。**

**4. 风险分类：**

| 字段 | 值 |
|------|------|
| 风险等级 | [risk_classification.risk_level] |
| Annex III 类别 | [risk_classification.annex_iii_category \|\| "不适用"] |
| Annex I 产品 | [risk_classification.annex_i_product \|\| "不适用"] |
| 分类依据 | [risk_classification.classification_rationale] |

**5. 上述 AI 系统符合法规 (EU) 2024/1689 的要求：**

| 要求 | 条款 | 是否满足 |
|------|------|:--------:|
| 风险管理系统 | Art. 9 | [compliance.art_9_risk_management] |
| 数据和数据治理 | Art. 10 | [compliance.art_10_data_governance] |
| 技术文档 | Art. 11 | [compliance.art_11_technical_documentation] |
| 记录保存 | Art. 12 | [compliance.art_12_record_keeping] |
| 透明度和向部署者提供信息 | Art. 13 | [compliance.art_13_transparency] |
| 人工监督 | Art. 14 | [compliance.art_14_human_oversight] |
| 准确性、鲁棒性和网络安全 | Art. 15 | [compliance.art_15_accuracy_robustness] |
| 质量管理系统 | Art. 17 | [compliance.art_17_qms] |

**6. 引用的协调标准/技术规范：**

| 标准/规范 | 描述 |
|-----------|------|
| [harmonised_standards[].identifier] | [harmonised_standards[].description] |

**7. AI系统已投放市场或投入使用的成员国：**

[成员国列表或"全欧盟"]

**8. 合规评估程序：**

| 字段 | 值 |
|------|------|
| 程序 | [conformity_assessment.procedure] |
| 公告机构 | [conformity_assessment.notified_body 或 "不适用（Annex VI）"] |
| 证书编号 | [conformity_assessment.certificate_id 或 "不适用"] |
| 评估日期 | [conformity_assessment.assessment_date] |

**9. 透明度和注册：**

| 字段 | 值 |
|------|------|
| AI 交互已披露 | [transparency.ai_interaction_disclosed] |
| 部署者使用说明 | [transparency.deployer_instructions_provided] |
| EU 数据库注册 | [transparency.eu_database_registered] |
| 注册 ID | [transparency.eu_database_id \|\| "待定"] |

**10. 支持期限：**

| 字段 | 值 |
|------|------|
| 支持开始日期 | [support_period.start_date] |
| 支持结束日期 | [support_period.end_date] |
| 上市后监测 | [support_period.post_market_monitoring] |

---

**代表签署：**

[provider.name]

| 字段 | 值 |
|------|------|
| 地点 | [地点] |
| 日期 | [conformity_assessment.declaration_date] |
| 姓名 | [姓名] |
| 职位 | [职位/头衔] |
| 签名 | _________________________ |

---

::: warning 法律约束力
本合规声明为具有法律约束力的文件。提供者通过签署确认 AI 系统符合 AI Act 的要求。不合规可能导致Art. 99项下的处罚（最高1500万EUR / 全球年营业额的3%）。向当局提供虚假或误导性信息将单独处罚（最高750万EUR / 1%）。
:::

*本声明应在 AI 系统投放市场后保存 10 年（Art. 47(2)）。*
