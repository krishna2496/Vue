<template>
<div class="container">
    <div>
        <b-link :to="'/articals'" variant="primary">
            <b-button variant="danger">Go to Article listing</b-button>
        </b-link>
        <h1 class="header-tag">Home</h1>

    </div>
    <template v-if="dataLoaded">
        <template v-if="filteredOptions.length > 0">
            <div v-for="(artical, key) in filteredOptions" :key="key">
                <ArticalList :artical="artical"></ArticalList>
            </div>
        </template>
        <template v-else>
            <h1>No data </h1>
        </template>
    </template>
</div>
</template>

<script>
import ArticalList from "../components/Artical/ArticalList";
import filterArtical from "../mixins/filterArtical"
import articalList from "../mixins/articalList"
import store from '../store';

export default {
    components: {
        ArticalList
    },
    data() {
        return {
            articals: [],
            dataLoaded: false
        };
    },
    created() {
        if (store.state.isApiCalled === null) {
            this.getArticalList();
        }
        this.articals = JSON.parse(localStorage.getItem('setArticalList'));
        this.dataLoaded = true
    },
    mixins: [filterArtical, articalList]
};
</script>
