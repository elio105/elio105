## 2. 工程合同

### 2.1 工程合同

**说明**：

#### 1) 与项目流程关联
- **所属项目**：绑定"新增项目"条目
- **合同属性**：
  - 合同类型（工程/咨询/监理等）
  - 合同性质（正式/虚拟）
  - 合同名称
- **时间控制**：
  - 签约日期
  - 合同期限
- **结算规则**：
  - 结算方式（关联工程款结算列表）
  - 款项核算规范

#### 2) 与资金管理关联
- **金额要素**：
```mermaid
graph LR
    A[合同金额] --> B[资金申报]
    A --> C[资金拨款]
    D[税率] --> B
    E[自施工金额] --> C