<template>
  <div class="out">
    <div class="in">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: "niceText"
}
</script>

<style scoped>
.out {
  margin: auto;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
}
.in {
  border-radius: 4px;
  color: #3b8070;
  text-decoration: none;

  border: 1px solid #3b8070;
  padding: 10px 30px;
  display: block;
}
</style>