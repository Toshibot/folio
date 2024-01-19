<template>
  <section class="item-section" :style="{'background-color': bg_color, 'color': color}">
    <article>
      <h2>{{ position }}</h2>
      <h3>{{ title }} | {{ year }}</h3>
    </article>
    <article>
      <Detail :detailData="detailData"/>
    </article>
  </section>
</template>
<script lang="ts">
import Detail from './Detail.vue'

export default {
  components: {
    Detail
  },
  props: {
    position: {
      type: String
    },
    title: {
      type: String
    },
    year: {
      type: String
    },
    color: {
      type: String
    },
    bg_color: {
      type: String
    },
    detailData: {
      type: Object
    }
  }
}
</script>
<style scoped lang="scss">
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 32px;
    padding: 0 0 8px;
  }
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    padding: 0 0 24px;
  }
  section.item-section {
    width: 100%;
    padding: 96px 0;
    color: #333;

    @media screen and (max-width: 640px) {
      padding: 64px 0;
    }
  }
  article {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }
</style>