<template>
  <section class="section">
    <article class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">저는 {{dogName.toUpperCase()}}입니다.</h1>
          <h2 class="subtitle">많이 사랑해주세요</h2>

        </div>
      </div>

    </article>

    <article class="notification is-success">
      <div class="columns">
        <div v-for="image in images" :key="image" class="column">
          <figure class="image is-square">
            <img :src="image" alt="">
          </figure>
        </div>
      </div>
    </article>

  </section>
</template>
<script>
  import axios from 'axios';
  export default {
    async asyncData({params}) { //입력을 받아야됨 , asyncData12 이런식으로 이름을 임의로 바꾸면 안됨
      let maxImg = 4;
      let images = [];

      for (let i = 0; i < maxImg; i++) {
        const image = await axios.get(`https://dog.ceo/api/breed/${params.dog}/images/random`);
        images.push(image.data.message);
      }
      
      return {
        dogName: params.dog,
        images: images
      };

    }
  };

</script>
