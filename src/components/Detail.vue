<template>
    <section>
        <article>
            <h1>{{ detailData.sub_title }}</h1>
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

</style>