<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="url">URL to shrink</label>
      <input type="url" id="url" ref="url" v-model.trim="url">
    </div>
    <base-button>Generate</base-button>
  </form>  
</template>

<script>
export default {
  data() {
    return {
      url: '',
    }
  },
  mounted() {
    this.$refs.url.focus()
  },
  computed: {
    validUrl() {
      return /^ftp|http|https:\/\/[^:]+$/i.test(this.url)
    },
  },
  methods: {
    validateForm() {
      return this.validUrl
    },
    submitForm() {
      if (!this.validateForm())
        return
      
      const formData = {
        url: this.url,
      }

      console.log(formData)
    },
  },
}
</script>

<style scoped>

</style>
