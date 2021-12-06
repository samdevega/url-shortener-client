<template>
  <li>
    <a :href="link" target="_blank">{{ text }}</a>
  </li>
</template>

<script>
export default {
  props: ['link', 'text'],
}
</script>

<style scoped>
li {
  padding: 0.5rem 0;
}
</style>
