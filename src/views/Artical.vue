<template>
<div class="container">
    <div>
        <b-link to="/" variant="primary">
            <b-button variant="danger">Go to Home</b-button>
        </b-link>
        <h1 class="header-tag">Artical Listing</h1>
    </div>
    <template v-if="dataLoaded">
        <template v-if="articals.length > 0">
            <div v-for="(artical, key) in articals" :key="key">
                <ArticalList :artical="artical"></ArticalList>
            </div>
        </template>
        <template v-else>
            <h1>No data</h1>
        </template>
    </template>
</div>
</template>

<script>
import ArticalList from "../components/Artical/ArticalList";
import store from "../store";
import articalList from "../mixins/articalList";

export default {
    components: {
        ArticalList,
    },
    data() {
        return {
            articals: [],
            dataLoaded: false,
        };
    },
    created() {
        if (store.state.isApiCalled === null) {
            this.getArticalList();
        }
        this.articals = JSON.parse(localStorage.getItem("setArticalList"));
        this.dataLoaded = true;
    },
    mixins: [articalList],
};
</script>
