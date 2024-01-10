<script lang="ts">

</script>
<template>
  <section>
    <article>
      <h1>{{ position }}</h1>
      <h3>{{ title }} | {{ year }}</h3>
    </article>
  </section>
</template>
<script lang="ts">

export default {
  components: {
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
    }
  }
}
</script>
<style scoped lang="scss">
  
</style>