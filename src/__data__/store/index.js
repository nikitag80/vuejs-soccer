import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import * as types from '../constants/mutation-types'
import { API_URLS } from '../constants/api-urls'
import {SportmonksApi} from "sportmonks";
const sportmonks = new SportmonksApi(API_URLS.TOKEN);

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        standing: [],
        seasonId: "16222",
        teams: []
    },
    actions: {
        async getUsers({commit}, params) {
            console.log('params', params)
            try {
                const res = await axios.get(API_URLS.RANDOM_USERS, {
                    params: {
                        gender: params.gender,
                        results: params.searchParams
                    }
                });

                if(res){
                    const { results } = res.data;
                    // console.log('results', results)
                    commit(types.GET_USER, results);
                }
            } catch (e) {
                console.log(e)
            }

        },
        async getTeamSeason({commit}, params) {
            console.log('start load getTeamSeason')
            try {

                const url = sportmonks._composeUrl('v2.0/teams/season/{id}', { id: "16222" })
                console.log(url)

                const res = await axios.get(url, {});
                if(res){
                    const { results } = res.data;
                    console.log('getTeamSeason', results)
                    commit(types.TEAMS_SEASON, results)
                }

            } catch (e) {
                console.log(e)
            }

        },
    },
    mutations: {
        [types.GET_USER](state, results) {
            state.users = results;
        },
        [types.TEAMS_SEASON](state, results) {
            state.teams = results;
        },
        [types.SEASON_STANDING](state, results) {
            state.standing = results;
        },
        [types.SEASON_ID](state, results) {
            state.standing = results;
        }
    },
    getters: {
        getUsers: (state) => state.users,
        getTeamsSeason: (state) => state.teams,
        getSeasonStanding: (state) => state.standing,
        getSeasonId: (state) => state.seasonId
    }
})


