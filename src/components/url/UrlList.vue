<template>
  <section>
    <ul>
      <url-item
        v-for="url in urls"
        :key="url.shortUrl"
        :link="url.longUrl"
        :text="url.shortUrl"
      ></url-item>
    </ul>
  </section>
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

</style>
