<template>
  <div>
    <ul>
      <url-item
        v-for="url in urls"
        :key="url.shortUrl"
        :link="url.longUrl"
        :text="url.shortUrl"
      ></url-item>
    </ul>
  </div>
</template>

<script>
import UrlItem from './UrlItem.vue'

export default {
  props: ['urls'],
  components: {
    UrlItem,
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
