export default {
  generateUrl(state, payload) {
    state.urls.unshift(payload)
    state.urls.splice(-1)
    state.lastUrl = payload.shortUrl
  },
  setUrls(state, payload) {
    state.urls = payload
  },
}
