<template>
    <div class="personal">
         <md-card-actions>
            <md-field>
                <label>Input team name or part</label>
                <md-input v-model="text"
                          v-validate="{ required: true, min: 6 }"
                          type="text"
                          v-on:keyup.enter="searchTeam"
                          :class="{ 'is-invalid': submitted && errors.has('text') }"></md-input>
                <div v-if="submitted && errors.has('text')" class="invalid-feedback">{{ errors.first('text') }}</div>
            </md-field>
            <md-button @click="searchTeam">find</md-button>
        </md-card-actions>

        <div v-for="item in items" :key="item.id">
            <team-list :item="item" />
        </div>

    </div>
</template>

<script>
    import axios from "axios";
    import { API_URLS } from "../__data__/constants/api-urls";
    import TeamList from "./team-list.vue";

    export default {
        name: "TeamSearch",
        components: {TeamList},
        data() {
            return {
                text: ''
            };
        },
        computed: {
            items() {
                return this.$store.getters.searchTeam
            }
        },
        methods: {
            searchTeam: async function() {
                const { text } = this
                await this.$store.dispatch('searchTeam', text)
            }
        }
    };
</script>

<style scoped>
    @import url("./style.css");
</style>