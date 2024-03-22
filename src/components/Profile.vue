<template>
  <section class="profile-section">
    <article>
      <img src="/img/lego-avatar.jpg" class="avatar" />
      <h1>Toshi Stewart</h1>
      <h2>Hello There</h2>
      <p>You seem to have stumbled upon my humble little website. I am Toshi Stewart; I'm a UX/UI designer and developer. Take a look around and let me know if you like what you see.</p>
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
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    font-weight: 700;
    padding: 32px 0;
  }
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 16px 0;
  }
  .profile-section {
    padding: 64px 0;
    margin: 0;
    background-color: #fff;
    color: #333;
  }
  img.avatar {
    width: 400px;
    height: 250px;
    -moz-border-radius: 125px;
    -webkit-border-radius: 125px;
    border-radius: 125px;
    
    @media screen and (max-width: 400px) {
      width: 100%;
      height: auto;
    }
  }
  article {
    text-align: center;
    padding: 0 16px;

    p {
      max-width: 600px;
      text-align: left;
      display: block;
      margin: 0 auto;
      line-height: 1.6;
    }
  }
</style>