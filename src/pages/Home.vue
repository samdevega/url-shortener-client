<template>
  <h1>Let's shrink that URL!</h1>
  <url-form></url-form>
  <h2 v-if="haveUrls">Latest Short URLs</h2>
  <url-list :urls="urls"></url-list>
</template>

<script>
import { mapGetters } from 'vuex'

import UrlList from '../components/url/UrlList.vue'
import UrlForm from '../components/url/UrlForm.vue'

export default {
  components: {
    UrlList,
    UrlForm,
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
