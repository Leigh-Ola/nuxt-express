<template>
  <niceText>
    Page 2 first
    <div>
      <nuxt-link :to="{ name: 'page2-second' }">
        Second
        <b>page2</b> page
      </nuxt-link>
      <br />
      <nuxt-link
        :to="{
          name: 'page2-id',
          params: { id: id },
        }"
      >
        Random <b>Page2</b> page
      </nuxt-link>
    </div>
  </niceText>
</template>

<script>
import niceText from '@/components/niceText'
export default {
  data: () => {
    return { id: Math.floor(Math.random() * 100) }
  },
  middleware: [
    'forpage2',
    ({ route }) => {
      // anonymous middleware only used for this page
      console.log(`Page 2 anonymous middleware : ${Object.keys(route)}`)
    },
  ],
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
