<template>
  <section class="section">
    {{dogName}}
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
