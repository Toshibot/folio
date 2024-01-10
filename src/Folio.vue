<script setup lang="ts">
  import Profile from './components/Profile.vue';
  import FolioItem from './components/Item.vue';
  import Detail from "./components/Detail.vue";
  import Footer from './components/Footer.vue';
</script>

<template>
  <body id="Body" class="t-dark">
    <main class="o-main u-vert-center">
      <Profile />
      <div v-for="folioItem in folioData" :key="folioItem.id">
        <FolioItem
          :position="folioItem.position"
          :title="folioItem.title"
          :year="folioItem.year"
          :img="folioItem.img"
          :detailData="folioItem.detail"
        />
      </div>
      <Footer></Footer>
    </main>
  </body>
</template>

<style scoped lang="scss">
  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }
</style>
<script lang="ts">
import axios from 'axios';

export default {
  components: {
    Profile,
    FolioItem,
    Detail,
    Footer,
  },
  data() {
    return {
      folioData: {}
    }
  },
  mounted() {
    axios.get('./data/folio-items.json')
    .then(response => {
      this.folioData = response.data;
    })
  }
}
</script>

