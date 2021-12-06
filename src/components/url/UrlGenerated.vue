<template>
  <h2>This is your shortened url</h2>
  <form @submit.prevent="copyUrl">
    <input type="text" ref="url" :value="url" readonly>
    <base-button title="Copy to clipboard">Copy</base-button>
  </form>
</template>

<script>
export default {
  props: ['url'],
  methods: {
    copyUrl() {
      navigator.clipboard.writeText(this.url)
      alert('URL copied')
    }
  },
}
</script>

<style scoped>

</style>
