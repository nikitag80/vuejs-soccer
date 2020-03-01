<template>
    <div class="personal">
        <h1>Teams</h1>

        <div v-for="item in items" :key="item.id">
            <team-list :item="item" />
        </div>

    </div>
</template>

<script>
    import TeamList from "./team-list.vue";

    export default {
        name: "TeamSeason",
        components: {TeamList},

        computed: {
            items() {
                return this.$store.getters.getTeamSeason
            }
        },
        created: async function () {
            await this.$store.dispatch('getTeamSeason', [])
            console.log(this.items)
        },
        methods: {
            loadTeams: async function() {
                await this.$store.dispatch('getTeamSeason', [])
            }

        }
    };
</script>
