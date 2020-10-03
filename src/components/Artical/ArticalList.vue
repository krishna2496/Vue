<template>
<b-card :title="artical.title" img-src="" img-alt="Image" img-top tag="article" style="max-width: 20rem;float:left;margin: 10px;clear:both" class="mb-2">
    <b-card-text>
        {{artical.intro}}
    </b-card-text>
    <b-link :to="`/artical-detail/${artical.id}`" variant="primary">
        View detail
    </b-link>
</b-card>
</template>

<script>
export default {
    name: 'ArticalList',
    props: {
        artical: Object
    },
    data() {
        return {

        }
    }
}
</script>
