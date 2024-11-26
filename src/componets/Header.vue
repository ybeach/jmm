<!-- client/components/Header.vue -->
<template>
    <header class="header wrapper">
      <div>
        <nuxt-link :to='`/`'>
          <h1 class="title">
            <div class="subtitle">JSPS科研費基盤研究（S）(24H00011)</div>
            「史料データセンシングに基づく日本列島記憶継承モデルの確立」
          </h1>
        </nuxt-link>
      <div>
        <nav>
          <NuxtLink to="/" class="nav">トップ</NuxtLink>
          <NuxtLink to="/summary" class="nav">概要</NuxtLink>
          <NuxtLink to="/member" class="nav">メンバー</NuxtLink>
          <NuxtLink to="/result" class="nav">研究成果</NuxtLink>
          <NuxtLink to="/event" class="nav">イベント</NuxtLink>
          <NuxtLink to="/link" class="nav">リンク</NuxtLink>
        </nav>
      </div></div>
    </header>
  </template>
  
  <style scoped>
  .header {
    padding: 20px 4% 20px;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #5ba9f7;
    display: flex;
    align-items: center;
    z-index: 10;
  }
  
  .wrapper {
    max-width: 100%;
    margin: 0 auto;
  }
  
  .title {
    font-size: 1.5rem;
    color: #fff;
    margin: 0;
    padding: 0;
    padding-bottom: 3px;
    line-height: 1.4em;
    justify-content: center;
    letter-spacing: 1px;
  }

  .subtitle {
    font-size: small;
    padding: 0;
    margin: 0;
    padding-bottom: 0px;
    justify-content: center;
    letter-spacing: 0px;
  }
  
  .nav {
    margin: 4rem 4rem 4rem;
    text-align: center;
  }

a:link,
a:visited,
a:hover,
a:active {
    color: #ffffffee;
    text-decoration: none;
}
  </style>