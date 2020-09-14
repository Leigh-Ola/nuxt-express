<template>
  <niceText>
    <h1 class="directory__name">{{ directory.name }}</h1>
    <p class="directory__info">{{ directory.info }}</p>
  </niceText>
</template>
<script>
import niceText from "@/components/niceText";
export default {
  name: "directory-info",
  data() {
    return {
      directory: this.$route.params.dir
    };
  },
  components: {niceText}
};
</script>
<style>
</style>