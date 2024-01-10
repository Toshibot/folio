<template>
  <section>
    <article>
      <h1>{{ position }}</h1>
      <h3>{{ title }} | {{ year }}</h3>
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
    detailData: {
      type: Object
    }
  }
}
</script>
<style scoped lang="scss">
  
</style>