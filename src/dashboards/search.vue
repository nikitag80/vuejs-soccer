<template>
    <team-search/>
</template>

<script>
    import TeamSearch from "../components/team-search.vue";

    export default {
        name: 'rick',
        components: {
            TeamSearch
        },
        data() {
            return {
                text: 'Идет загрузка...',
                items: [],

            }
        }

    }
</script>