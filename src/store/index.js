import Vue from 'vue'
import Vuex from 'vuex'
import sounds from './modules/sounds'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        sounds
    },
    strict: debug
})
