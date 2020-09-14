<template>
  <header class="header flex-row single-row">
    <div class="logo">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>
    <nav class="nav flex-row single-row">
      <nuxt-link to="/" class="nav__link button--green">
        <span>Home</span>
      </nuxt-link>
      <nuxt-link to="/About" class="nav__link button--green">
        <span>About</span>
      </nuxt-link>
      <nuxt-link to="/page2" class="nav__link button--green">
        <span>Page2</span>
      </nuxt-link>
      <nuxt-link to="/contact" class="nav__link button--green">
        <span>Contact</span>
      </nuxt-link>
    </nav>
  </header>
</template>
<script>
import Logo from '@/components/Logo'
export default {
  name: 'Nav',
  components: {
    Logo,
  },
}
</script>
<style>
.header {
  display: flex;
  width: 100%;
  min-width: 100vw;
  left: 0px;
  box-sizing: border-box;
  padding: 30px 0px;
  position: relative;
  border-bottom: 1px solid rgb(30, 120, 120);
}
.logo {
  height: 50px;
  width: 50px;
  margin: auto;
  flex-shrink: 0;
}
.logo * {
  max-width: 50px;
  max-height: 50px;
}
.nav {
  max-width: 500px;
  flex-grow: 1;
  height: 50px;
  padding: 0px;
  margin: auto;
}
</style>
