<template>
    <div class="personal">
        <h1>Season standing</h1>
        <div v-for="item in items" :key="item.id">
            <md-card class="md-primary block">
                <md-season-standing>
                    <md-card-header-text>
                        <div class="md-subhead">{{ item.position }}</div>
                        <div class="md-title">{{ item.team_name }}</div>
                        <div class="">points: {{ item.points }}</div>
                    </md-card-header-text>
                    <md-card-media>
                        <img :src="item.team_logo" :alt="item.team_name" />
                    </md-card-media>
                </md-season-standing>
            </md-card>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { API_URLS } from "../__data__/constants/api-urls";

    export default {
        name: "SeasonStanding",
        data() {
            return {
            };
        },
        computed: {
            items() {
                return this.$store.getters.getSeasonStanding
            }
        },
        created: async function () {
            await this.$store.dispatch('getSeasonStanding', {gender, searchParams})
        }
    };
</script>

<style scoped>
    @import url("./style.css");
</style>