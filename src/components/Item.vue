<template>
  <section class="item-section" :style="{'background-color': bg_color, 'color': color}">
    <article>
      <h1>{{ position }}</h1>
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
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 32px;
    padding: 32px 0 8px;
  }
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    padding: 0 0 24px;
  }
  section.item-section {
    width: 100%;
    padding: 128px 0;
    color: #333;
  }
  article {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }
</style>