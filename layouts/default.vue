<template>
  <div class="grand_parent">
    <Nav />
    <nuxt />
  </div>
</template>

<style>
v-cloak,
v-cloak * {
  visibility: hidden;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  color: black;
  margin: 0px;
  padding: 0px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.grand_parent {
  display: flex;
  flex-flow: column nowrap;
}

.flex-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
.flex-row.single-row {
  flex-flow: row nowrap;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: auto;
  margin-right: auto;
}
.flex-row:not(.single-row) .button--green {
  margin: 30px auto;
  padding: 20px 40px;
}
.button--green * {
  color: inherit;
  text-decoration: inherit;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
  text-decoration: underline;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<script>
import Nav from '~/components/navBar.vue'
export default {
  name: 'default',
  components: {
    Nav,
  },
}
</script>
