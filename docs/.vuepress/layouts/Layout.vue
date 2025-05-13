<template>
    <div class="custom-layout">
      <header class="custom-header">
        <img src="/public/logo.png" alt="Logo" />
        <h1>数字管理平台</h1>
        <a href="/introduce/" class="custom-button">项目简介</a>
      </header>
      <main>
        <slot />
      </main>
      <footer>
        <div class="features-section">
          <div class="feature-card">
            <div class="feature-icon">🏦</div>
            <h3>基础工作</h3>
            <p>涵盖监管账户、工程合同等相关业务</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>财务管理</h3>
            <p>包含资金申报、支付申请等财务流程</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏗️</div>
            <h3>项目前期</h3>
            <p>涉及立项、招投标等前期事务</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomLayout'
  }
  </script>
  
  <style scoped>
  /* Layout.vue 中的布局样式 */
  .custom-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  footer {
    margin-top: 40px;
    width: 100%;
  }
  </style>
  