<template>
  <niceText>Custom Page : {{ id }}</niceText>
</template>

<script>
import niceText from '@/components/niceText'
export default {
  name: 'page_id',
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  components: { niceText },
}
</script>

<style></style>
