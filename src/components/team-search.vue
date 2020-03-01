<template>
    <div class="personal">
         <md-card-actions>
            <md-field>
                <label>Input team name or part</label>
                <md-input v-model="text"
                          v-validate="{ required: true, min: 2 }"
                          type="text"
                          name="text"
                          v-on:keyup.enter="validate"
                          :class="{ 'is-invalid': submitted && errors.has('text') }"></md-input>
                <div v-if="submitted && errors.has('text')" class="invalid-feedback">{{ errors.first('text') }}</div>
            </md-field>
            <md-button @click="validate">find</md-button>
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
                submitted: false,
                text: ''
            };
        },
        computed: {
            items() {
                return this.$store.getters.searchTeam
            }
        },
        methods: {
            validate: function() {
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.searchTeam()
                    }
                });
            },
            searchTeam: async function() {
                const { text } = this
                await this.$store.dispatch('searchTeam', text)
            }
        }
    };
</script>

<style scoped>
    @import url("./style.css");
    .invalid-feedback {
        color: red;
    }
</style>