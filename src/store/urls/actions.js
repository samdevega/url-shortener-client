export default {
  async generateUrl(context, data) {
    const response = await fetch(`http://localhost:8000/new_url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!response.ok)
      return
    const responseData = await response.json()
    context.commit('generateUrl', {
      longUrl: responseData['long_url'],
      shortUrl: responseData['short_url'],
    })
  },
  async loadUrls(context) {
    const response = await fetch(`http://localhost:8000/history`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok)
      return
    const responseData = await response.json()
    context.commit('setUrls', responseData.map(url => {
      return {
        longUrl: url['long_url'],
        shortUrl: url['short_url'],
      }
    }))
  }
}
