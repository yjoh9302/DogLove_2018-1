<template>
  <section class="section">
    <div class="hero is-info">
      <div calss="hero-body">
        <div class="container">
          <h1 class="title is-1">개사랑</h1>
          <h2 class="subtitle">개를 좋아하는 사람들</h2>
        </div>
      </div>
    </div>
    <br>
    <article class="message">
      <div class="message-header">개란 무엇인가?</div>
      <div class="message-body">개는 인간의 반려 동물이다.</div>
    </article>

    <div class="columns">
      <div class="column">
        <div class="notification is-info">
          <figure class="image is-squre">
            <img src="~assets/dog.png" alt="">
          </figure>

        </div>
      </div>
      <div class="column">
        <div class="message is-info">
          <div class="message-header">
            <p>오늘의 개 사진</p>
          </div>
          <div class="message-body">
            <figure class="image is-squre">
              <img v-bind:src="image" alt="">
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <h1 class="title">보고 싶은 개정보를 누르세요</h1>
      <span v-for="dog in dogs" v-bind:key="dog">
        <nuxt-link :to="'/dogs/' + dog" class="button is-info">
          {{dog}}
        </nuxt-link> &nbsp;
      </span>
    </div>
  </section>
</template>


<script>
  import axios from 'axios';
  export default {
    data() {
      return {}
    },
    async asyncData() {
      const myImage = await axios.get('https://dog.ceo/api/breeds/image/random');
      const myDogs = await axios.get('https://dog.ceo/api/breeds/list');
      return {
        image: myImage.data.message, dogs: myDogs.data.message //키 값, value(JSON)
      };
    }
  };

</script>
