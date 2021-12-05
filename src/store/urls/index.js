import getters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      urls: [
        {
          longUrl: 'https://www.google.es',
          shortUrl: 'http://localhost/87xCr58N',
        },
        {
          longUrl: 'https://start.duckduckgo.com',
          shortUrl: 'http://localhost/Jn28eW6t',
        },
        {
          longUrl: 'https://www.github.com',
          shortUrl: 'http://localhost/4jf0zP31',
        },
      ],
    }
  },
  getters,
}
