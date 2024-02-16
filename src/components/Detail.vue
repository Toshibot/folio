<template>
    <section class="detail-section detail-section-1">
        <article class="img-container">
          <img :src="detailData.eg_img_1" />
        </article>
        <article class="content-container container-1">
            <h4>{{ detailData.sub_title_1 }}</h4>
            <p>{{ detailData.content_1 }}</p>
        </article>
    </section>
    <section class="detail-section detail-section-2">
      <article class="content-container container-2">
            <h4>{{ detailData.sub_title_2 }}</h4>
            <p>{{ detailData.content_2 }}</p>
        </article>
        <article class="img-container">
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
    display: flex;

    
    @media screen and (max-width: 640px){
      flex-direction: column;

      &-2 {
        flex-direction: column-reverse;
      }
    }
  }
  .img-container {
    width: 50%;
    display: inline-block;

    img {
      max-width: 100%;
    }
    @media screen and (max-width: 640px){
      padding-top: 64px;
      width: 100%;
    }
  }
  .content-container {
    width: 50%;
    display: flex;
    line-height: 1.3;
    flex-direction: column;
    justify-content: center;

    &.container-1 {
      padding-left: 16px;
    }

    &.container-2 {
      padding-right: 16px;
    }

    @media screen and (max-width: 640px){
      width: 100%;
    }
  }

</style>