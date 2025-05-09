<template>
    <div class="page">
      <h1 class="page-title">工作台</h1>
      <p>工作台展示了数据统计区域、最近使用记录、常用模块添加区域以及资金申报请款分析数据。</p>
      <h2 class="section-title">数据统计区域</h2>
      <p>包含待办、已办、待阅、已阅、发起、已发起等数据统计。</p>
      <h2 class="section-title">最近使用</h2>
      <p>记录最近浏览的内容，方便快捷操作。</p>
      <h2 class="section-title">我的常用</h2>
      <p>可将常用模块或节点添加到此处，便于快速访问。</p>
      <h2 class="section-title">资金申报请款分析</h2>
      <p>展示项目信息、合同信息、申报信息等资金相关统计分析数据。</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WorkbenchPage'
  };
  </script>
  
  <style scoped>
  .page {
    padding: 20px;
  }
  .page-title {
    font-size: 2em;
    margin-bottom: 20px;
  }
  .section-title {
    font-size: 1.5em;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  </style>    