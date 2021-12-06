<template>
  <section>
    <h1>Let's shrink that URL!</h1>
    <url-form @generate-url="generateUrl"></url-form>
    <url-generated :url="lastUrl" v-if="lastUrl"></url-generated>
    <h2 v-if="haveUrls">Latest Shortened URLs</h2>
    <url-list :urls="urls"></url-list>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import UrlList from '../components/url/UrlList.vue'
import UrlForm from '../components/url/UrlForm.vue'
import UrlGenerated from '../components/url/UrlGenerated.vue'

export default {
  components: {
    UrlList,
    UrlForm,
    UrlGenerated,
  },
  created() {
    this.loadUrls()
  },
  computed: {
    ...mapGetters('urls', ['urls', 'lastUrl']),
    haveUrls() {
      return this.urls.length
    },
  },
  methods: {
    generateUrl(data) {
      this.$store.dispatch('urls/generateUrl', data)
    },
    async loadUrls() {
      try {
        await this.$store.dispatch('urls/loadUrls')
      } catch(error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
section {
  background-color: #fefefe;
  border: 1px solid #d3edee;
  border-radius: 12px;
  box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin: 4rem auto;
  max-width: 900px;
  text-align: center;
}
</style>
