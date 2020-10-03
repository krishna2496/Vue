import {
    articalListing
} from '../services/service';
import store from '../store';

export default {
    methods: {
        getArticalList() {
            articalListing().then(response => {
                store.commit('setArticalList', response.data);
                store.commit('isApiCalled', 1);
            })
        }
    },
}
