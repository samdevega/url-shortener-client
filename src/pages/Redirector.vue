<template>
  <section>
    <h1>Redirecting...</h1>
  </section>
</template>

<script>
export default {
  async beforeMount() {
    const url = window.location.href
    
    const response = await fetch(`http://localhost:8000/resolve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: url
      })
    })
    if (!response.ok)
      window.location.replace('http://localhost:8080')
    const responseData = await response.json()
    window.location.replace(responseData['long_url'])
  }
}
</script>

<style scoped>
section {
  padding: 2rem;
}
</style>