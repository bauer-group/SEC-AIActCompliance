# Human Oversight – Art. 14

## Requirement

High-risk AI systems must be designed in such a way that they can be **effectively overseen** by natural persons.

## Oversight Requirements

Persons to whom human oversight is assigned must be enabled to:

1. **Understand the relevant capabilities and limitations** of the system and properly monitor its operation
2. Remain aware of the possible tendency to automatically rely on the system output **(Automation Bias)**
3. **Correctly interpret the output** of the system
4. Decide **not to use** the system or to **disregard, override or reverse** the output
5. Safely interrupt the system using a **stop mechanism**

## BAUER GROUP Implementation

| Measure | Implementation |
|---|---|
| Stop mechanism | Kill switch / deactivation of the AI component |
| Automation Bias prevention | Warning notice in UI: "AI-generated result — human review required" |
| Output transparency | Display confidence scores, explainability where technically feasible |
| Training | Deployer training as part of the product documentation |
