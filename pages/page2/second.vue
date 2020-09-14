<template>
  <niceText>
    Page 2 Second
    <div>
      <nuxt-link :to="{ name: 'page2' }">
        Open the first
        <b>page2</b> page
      </nuxt-link>
    </div>
  </niceText>
</template>

<script>
import niceText from '@/components/niceText'
export default {
  name: 'second',
  components: { niceText },
}
</script>

<style scoped>
div,
div:visited,
div * {
  color: #3b8070;
}
div a:hover {
  color: #033f31;
}
</style>
