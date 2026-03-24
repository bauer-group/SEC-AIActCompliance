# 准确性、鲁棒性、网络安全——第15条

## 要求

高风险AI系统必须展现**适当水平的准确性、鲁棒性和网络安全性**。

## 准确性

- 准确性水平必须在**使用说明中声明**
- 针对各自预期用途定义并测量适当的**指标**
- 准确性水平必须**适合**预期用途

## 鲁棒性

- 对运行环境中**错误、故障和不一致性**的抵御能力
- 技术冗余（备份系统、故障安全机制）
- 对**对抗性攻击**（Adversarial ML）的鲁棒性

## 网络安全

- 防止未经授权的访问和篡改
- 应对**Model Poisoning**、**Data Poisoning**和**Adversarial Examples**
- 保护**机密性、完整性和可用性**的措施

::: tip CRA协同效应
第15条的网络安全要求与CRA要求（Annex I第二部分）存在大量重叠。现有的CRA安全架构和漏洞管理已覆盖大部分要求。此外，还需应对AI特有的威胁（Adversarial ML、Prompt Injection、Model Extraction）。
:::

::: tip NIS2协同效应
NIS2下的组织风险管理框架（BSIG §30）为AI系统网络安全提供了基础。事件响应、访问控制和加密要求在[NIS2合规文档](https://nis2.docs.bauer-group.com)中描述。
:::

## BAUER GROUP 实施方案

| 第15条要求 | CRA覆盖情况 | AI Act补充 |
|---|---|---|
| 网络安全 | ✅ CRA第10–14条 | + Adversarial ML、Prompt Injection |
| 准确性 | ❌ CRA未涵盖 | CI/CD中的模型指标 + 文档 |
| 鲁棒性 | 部分覆盖（CRA Annex I） | + ML特定压力测试 |
