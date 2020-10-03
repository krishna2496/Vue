import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        setArticalList: localStorage.getItem('setArticalList'),
        isApiCalled: localStorage.getItem('isApiCalled'),
    },
    mutations: {
        /* Store artical list in local storage and state management */
        setArticalList(state, data) {
            if (data != null) {
                localStorage.setItem("setArticalList", JSON.stringify(data));
                state.setArticalList = JSON.stringify(data);
            } else {
                localStorage.setItem("setArticalList", data);
                state.setArticalList = data;
            }
        },
        isApiCalled(state, data) {
            localStorage.setItem("isApiCalled", data);
            state.isApiCalled = data;
        }
    },
    getters: {},
    actions: {}
})
