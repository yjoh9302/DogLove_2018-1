<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">개사랑</nuxt-link>
      </div>
      <div class="navbar-menu is-active"><!--브라우저 창에 맞게끔 자동으로 위치조정-->
        <div class="navbar-end">
          
          <nuxt-link to ="/stat" class = "navbar-item">통계</nuxt-link>
          <nuxt-link to ="/about" class="navbar-item">소개</nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt/>
    <footer class="footer has-text-centered">
      
        <p>2018년 목원대학교 개사랑. 저작권 모든 저작권은 개사랑에 있습나다.</p>
        
      </footer>
  </div>
  
</template>

