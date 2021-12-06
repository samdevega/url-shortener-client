export default {
  generateUrl(state, payload) {
    state.urls.unshift(payload)
    if (state.urls.length > 10) state.urls.splice(-1)
    state.lastUrl = payload.shortUrl
  },
  setUrls(state, payload) {
    state.urls = payload
  },
}
