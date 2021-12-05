import { createStore } from 'vuex'

import urlsModule from './urls/'

const store = createStore({
  modules: {
    urls: urlsModule,
  }
})

export default store
