<template>
    <team-season/>
</template>

<script>
    import TeamSeason from "../components/teams-season.vue";

    export default {
        components: {
            TeamSeason
        },
        data() {
            return {
                items: [],
            }
        }
    }
</script>