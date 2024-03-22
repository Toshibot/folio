<template>
  <button 
    class="button" 
    :class="variant" 
    onclick="window.open(link,_blank)"
  >
    <span v-if="icon"><i class="fa" :class="icon"></i></span>
    {{ text }}
  </button>
</template>
<script lang="ts">

export default {
  props: {
    link: {
      type: String
    },
    text: {
      type: String
    },
    icon: {
      type: String
    },
    variant: {
      type: String
    }
  },
  data() {
  }
}
</script>
<style scoped lang="scss">

</style>