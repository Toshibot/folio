<template>
  <section class="footer-section">
    <article>
      <div class="footer-logo-container">
        <img src="/img/avatar.png"/>
        <h2>Toshi Stewart</h2>
      </div>
      <div class="social-link-container">
        <a href="https://www.linkedin.com/in/toshistewart/" target="_blank"><i class="fab fa-linkedin"></i> Linkedin</a>
        <a href="https://github.com/Toshibot" target="_blank"><i class="fab fa-github"></i> Github</a>
        <a href="https://codepen.io/toshibot" target="_blank"><i class="fab fa-codepen"></i> Codepen</a>
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
    display: flex;
    flex-direction: row;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;

    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
  .footer-logo-container {
    display: flex;
    width: 50%;

    img {
      height: 48px;
      width: 48px;
      margin-right: 16px;
    }

    h2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 3rem;
      font-weight: 700;
      line-height: 1;
      color: #fff;
    }

    @media screen and (max-width: 900px) {
      width: 100%;
      padding-bottom: 24px;
    }

    @media screen and (max-width: 640px) {
      img {
        width: 32px;
        height: 32px;
      }
      h2 {
        font-size: 2rem;
      }
    }
  }
  
  .social-link-container {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    line-height: 48px;

    a {
      display: inline-block;
      padding-left: 32px;
      color: #fff;
      text-decoration: none;

      &:hover,
      &:focus,
      &:active {
        color: #fff;
      }
    }

    @media screen and (max-width: 900px) {
      width: 100%;
      flex-direction: column;

      a {
        padding-left: 0;
      }
    }
  }
</style>