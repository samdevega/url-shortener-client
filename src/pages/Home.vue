<template>
  <h1>Hello World!</h1>
  <h2 v-if="haveUrls">Latest Short URLs</h2>
  <url-list :urls="urls"></url-list>
</template>

<script>
import { mapGetters } from 'vuex'

import UrlList from '../components/url/UrlList.vue'

export default {
  components: {
    UrlList,
  },
  computed: {
    ...mapGetters('urls', ['urls']),
    haveUrls() {
      return this.urls.length
    }
  },
}
</script>

<style scoped>

</style>
