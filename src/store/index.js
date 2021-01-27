import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: []
  },
  getters: {
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    }
  },
  actions: {
    async addSubscriber({commit}, user) {
      
      try {
        const response = await this.axios.post(`https://emprende.ipzmarketing.com/ccm/admin/api/version/2/&type=json`, {
            function: 'addSubscriber',
            apiKey: 'Xxr5pDUcydc',
            email: user.email,
            name: user.name,
            groups: [1],
            
        })
        console.log("aqui");
        console.log(response);
        commit('setUser', user)
        router.push({name: 'thankyou'})
      } catch (error) {
        console.log(error);
        error
      }
    },
  },
  modules: {
  }
})
