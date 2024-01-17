<template>
  <section class="footer-section">
    <article>
      <div class="footer-logo-container">
        <img src="/img/avatar.png"/>
        <h2>Toshi Stewart</h2>
      </div>
    </article>
  </section>
</template>
<script lang="ts">

export default {
  components: {
  },
  data() {
  }
}
</script>
<style scoped lang="scss">
  section.footer-section {
    padding: 64px 0;
    background: #181818;
  }
  article {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .footer-logo-container {
    display: flex;

    img {
      height: 48px;
      width: 48px;
      margin-right: 16px;
    }

    h2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 48px;
      font-weight: 700;
      line-height: 1;
      color: #fff;
    }

    @media screen and (max-width: 640px) {
      img {
        width: 32px;
        height: 32px;
      }
      h2 {
        font-size: 32px;
      }
    }
  }
</style>