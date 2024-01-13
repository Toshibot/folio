<template>
    <section class="u-flex">
        <article class="img-container">
          <img :src="detailData.eg_img_1" />
        </article>
        <article class="content-container">
            <h4>{{ detailData.sub_title }}</h4>
            <p>{{ detailData.content_1 }}</p>
        </article>
    </section>
</template>
<script lang="ts">

export default {
  components: {
  },
  props: {
    detailData: {
      type: Object
    }
  },
  data() {
  }
}
</script>
<style scoped lang="scss">
  h4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
  }
</style>