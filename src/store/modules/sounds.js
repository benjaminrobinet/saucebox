// initial state
const state = () => ({
    all: []
})

// getters
const getters = {
    getAllSounds: (state) => {
        return state.all;
    }
}

// actions
const actions = {
    fetchAllSounds({commit}) {
        this._vm.$prismic.client.query(this._vm.$prismic.Predicates.at('document.type', 'sound'), {pageSize: 100})
            .then((document) => {
                commit('setSounds', document.results || []);
            })
    }
}

// mutations
const mutations = {
    setSounds(state, payload){
        state.all = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
