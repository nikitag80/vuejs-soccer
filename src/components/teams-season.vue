<template>
    <div class="personal">
        <h1>teams</h1>

        <div v-for="item in items" :key="item.id">
            <md-card class="md-primary block">
                <md-card-header>
                    <md-card-header-text>
                        <div class="md-title">{{ item.name }}</div>
                        <div class="md-subhead">Founded: {{ item.founded }}</div>
                    </md-card-header-text>
                    <md-card-media>
                        <img :src="item.logo_path" :alt="item.name" />
                    </md-card-media>
                </md-card-header>

            </md-card>
        </div>

        <md-button @click="loadTeams">load teams</md-button>
    </div>
</template>

<script>
    import axios from "axios";
    import { API_URLS } from "../__data__/constants/api-urls";

    export default {
        name: "TeamSeason",
        data() {
            return []
            // return this.$store.getters.getTeamSeason
            // return {
            //     // searchParams: 1,
            //     // gender: 'male',
            // };
        },
        computed: {
            items() {
                return this.$store.getters.getTeamSeason
            }
        },
        created: async function () {
            // const { gender, searchParams } = this
            await this.$store.dispatch('getTeamSeason', [])
        },

        methods: {
            /*
            setSearchVal: function(event) {
                this.searchParams = event.target.value;
            },
            */
            loadTeams: async function() {
                const { gender, searchParams } = this
                await this.$store.dispatch('getTeamSeason', [])
            }

        }
    };
</script>

<style scoped>
    @import url("./style.css");
</style>