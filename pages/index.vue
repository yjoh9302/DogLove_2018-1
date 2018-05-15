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
    <article class ="message">
      <div class="message-header">개란 무엇인가?</div>
      <div class="message-body">개는 인간의 반려 동물이다.</div>
    </article>
    
    <div class="columns">
      <div class="column">
        <div class="container">
            <figure class="image is-squre">
                <img src="https://png.pngtree.com/element_origin_min_pic/17/03/15/4c1ae80f774b774ffa95cf0888f64103.jpg" alt="">
                </figure>

        </div>
      </div>
      <div class="column">
        <figure class="image is-squre">
          <img v-bind:src="image" alt="">
        </figure>
      </div>
    </div>




  </section>
</template>


<script>

import axios from 'axios';
export default {
data() {
  return {}
},
async asyncData(){
  const myImage = await axios.get('https://dog.ceo/api/breeds/image/random')

  return{image: myImage.data.message};
}
};
</script>
