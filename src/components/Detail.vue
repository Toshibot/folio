<template>
    <section class="detail-section u-flex">
        <article class="img-container u-1/2">
          <img :src="detailData.eg_img_1" />
        </article>
        <article class="content-container u-1/2">
            <h4>{{ detailData.sub_title_1 }}</h4>
            <p>{{ detailData.content_1 }}</p>
        </article>
    </section>
    <section class="detail-section u-flex">
      <article class="content-container u-1/2">
            <h4>{{ detailData.sub_title_2 }}</h4>
            <p>{{ detailData.content_2 }}</p>
        </article>
        <article class="img-container u-1/2">
          <img :src="detailData.eg_img_2" />
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
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  section.detail-section {
    padding: 0 0;
  }
  .img-container {
    img {
      max-width: 100%;
    }
  }
  .content-container {
    padding-top: 64px;
    line-height: 1.3;
  }

</style>