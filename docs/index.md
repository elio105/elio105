<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>项目级 DIM 操作手册</title>
  <style>
    /* 全局样式重置 */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    /* 定义颜色变量 */
    :root {
      --accent-color: #4CAF50;
      --text-color: #333;
      --text-light-color: #666;
      --border-color: #f0f2f5;
    }
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: var(--text-color);
    }
    .custom-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top:100px;
      margin-bottom: 3rem;
    }
    .header-logo {
      width: 260px; 
      height: auto;
    }
    .header-title {
      font-size: 2.5rem;
      margin: 24px     ;
    }
    .header-subtitle {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    .button-container {
      display: flex;
      gap: 1rem;
    }
    .custom-button {
      padding: 0.8rem 1.6rem;
      border: 2px solid transparent;
      border-radius: 4px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
    }
    .custom-button.primary {
      background-color: var(--accent-color);
      color: white;
    }
    .custom-button.secondary {
      background-color: transparent;
      border-color: var(--accent-color);
      color: var(--accent-color);
    }
    .custom-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .custom-button.primary:hover {
      background-color: #43a047;
    }
    .custom-button.secondary:hover {
      background-color: var(--accent-color);
      color: white;
    }
    .features-section {
      text-align: center;
    }
    .features-container {
      max-width: 900px;
      margin: 0 auto;
      /* padding: 0 1rem; */
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem; /* 增大间距 */
    }
    .feature-card {
      display: block;
      background: #fff;
      border-radius: 10px;
      padding: 10px 20px; /* 增大内边距 */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 简化box-shadow */
      transition: all 0.3s ease;
      text-align: center;
      border: 1px solid var(--border-color);
      color: inherit;
      text-decoration: none;
    }
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    .feature-icon {
      font-size: 3rem; /* 增大图标尺寸 */
      margin-bottom: 1.5rem;
      color: var(--accent-color);
    }
    .feature-card h3 {
      color: var(--text-color);
      margin: 0 0 1rem; /* 简化margin */
      font-size: 1.3rem;
      font-weight: 600;
    }
    .feature-card p {
      color: var(--text-light-color);
      margin: 0;
      font-size: 1rem; /* 增大文字尺寸 */
      line-height: 1.5;
    }
    /* 响应式设计 */
    @media (max-width: 900px) {
     .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.8rem;
      }
    }
    @media (max-width: 600px) {
     .features-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
     .feature-card {
        padding: 1.8rem;
      }
    }
  </style>
</head>
<body>
  <section class="features-section">
    <header class="custom-header">
      <!-- 检查图片路径是否正确 -->
      <img src="./public/logo.png" alt="数管平台" class="header-logo">
      <h1 class="header-title">数管平台</h1>
      <!-- <p class="header-subtitle">建筑工程项目全生命周期数字化管理系统项目级别操作手册</p> -->
      <div class="button-container">
        <a href="/dlxt/登录系统.html" class="route-link auto-link vp-hero-action-button primary custom-button">快速上手</a>
        <a href="/introduce/index.html" class="route-link auto-link vp-hero-action-button secondary custom-button">项目简介</a>
      </div>
    </header>
    <div class="features-container">
      <div class="features-grid">
        <!-- 基础工作 -->
        <a href="/jcgz/监管账户.html" class="feature-card">
          <div class="feature-icon">🏦</div>
          <h3>基础工作</h3>
          <p>涵盖监管账户、工程合同等相关业务</p>
        </a>
        <!-- 财务管理 -->
        <a href="/cwgl/资金申报.html" class="feature-card">
          <div class="feature-icon">💰</div>
          <h3>财务管理</h3>
          <p>包含资金申报、支付申请等财务流程</p>
        </a>
        <!-- 项目前期 -->
        <a href="/xmqq/立项.html" class="feature-card">
          <div class="feature-icon">🏗️</div>
          <h3>项目前期</h3>
          <p>涉及立项、招投标等前期事务</p>
        </a>
        <!-- 项目管理 -->
        <a href="/xmgl/数据分析.html" class="feature-card">
          <div class="feature-icon">📅</div>
          <h3>项目管理</h3>
          <p>包含进度管理、施工管理等项目管控工作</p>
        </a>
        <!-- 运维管理 -->
        <a href="/ywgl/报修单.html" class="feature-card">
          <div class="feature-icon">🛠️</div>
          <h3>运维管理</h3>
          <p>负责报修单处理、维修单跟进等运维事宜</p>
        </a>
        <!-- 一码通 -->
        <a href="/ymt/反映问题.html" class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>一码通</h3>
          <p>实现问题反映与处理等相关功能</p>
        </a>
      </div>
    </div>
  </section>
</body>
</html>