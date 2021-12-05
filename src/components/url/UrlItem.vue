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

</style>
