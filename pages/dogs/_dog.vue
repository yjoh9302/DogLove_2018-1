<template>
  <section class="section">
      <article class = "hero is-info">
          <div class="hero-body">
              <div class="container">
                  <h1 class="title">저는 {{dogName.toUpperCase()}}입니다.</h1>
                  <h2 class="subtitle">많이 사랑해주세요</h2>

              </div>
          </div>

      </article>
    
  </section>
</template>
<script>
  export default {
    asyncData({params}) { //입력을 받아야됨 , asyncData12 이런식으로 이름을 임의로 바꾸면 안됨

      return {
        dogName: params.dog
      };

    }
  };

</script>
