<template>
  <div>
    <h1 v-if="error.statusCode === 404" class="home__heading">
      <center>Page not found</center>
    </h1>
    <h1 v-else class="home__heading">
      <center>An error occurred</center>
    </h1>
    <nav class="nav flex-row single-row">
      <NuxtLink to="/" class="button--green">Home page</NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default', // you can set a custom layout for the error page
}
</script>

<style scoped>
h1,
center {
  padding: 30px 0px;
  color: #3b8070;
}
</style>
