<template>
<div>
    <b-link :to="'/articals'" variant="primary">
        <b-button variant="danger">Go to Article listing</b-button>
    </b-link>
    <b-link :to="'/'" variant="primary">
        <b-button variant="danger">Go to Home</b-button>
    </b-link>
    <b-card :title="articalDetail[0].title" img-src="" img-alt="Image" img-top tag="article" style="max-width: 20rem;float:left;margin: 10px;clear:both" class="mb-2">
        <b-card-text>
            {{articalDetail[0].intro}}
        </b-card-text>
        <input type="checkbox" v-model="toggle" true-value="published" false-value="unpublished"> <label>Is published</label>
    </b-card>
</div>
</template>

<script>
import store from '../../store';

export default {
    data() {
        return {
            articalDetail: [],
            articalId: this.$route.params.articalId,
            toggle: '',
            articalList: []
        };
    },
    created() {
        this.articalList = JSON.parse(localStorage.getItem('setArticalList'));
        this.articalDetail = this.articalList.filter((data) => {
            if (data.id == this.articalId) {
                this.toggle = data.status;
                return data;
            }
        })
    },
    watch: {
        toggle: function (newValue, oldValue) {
            const index = this.articalList.findIndex(data => data.id == this.articalId);
            this.articalList[index].status = newValue;
            store.commit('setArticalList', this.articalList)
        }
    }
};
</script>
