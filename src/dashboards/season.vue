<template>
    <team-season :items="items"/>
</template>

<script>
    import TeamSeason from "../components/teams-season.vue";

    export default {
        name: 'rick',
        components: {
            TeamSeason
        },
        data() {
            return {
                text: 'Идет загрузка...',
                items: [],

            }
        }

    }
</script>