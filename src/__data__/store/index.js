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
        seasonId: API_URLS.DEFAULT_SEASON_ID,
        teams: [],
        search_teams: [],
        standing: []
    },
    actions: {
        async getTeamSeason({commit}, params) {
            console.log('start load getTeamSeason')
            try {

                const url = sportmonks._composeUrl('v2.0/teams/season/{id}', { id: this.state.seasonId })
                console.log(url)

                const res = await axios.get(url, {});
                if(res){
                    const { data } = res.data;
                    console.log('getTeamSeason', data)
                    commit(types.TEAMS_SEASON, data)
                }

            } catch (e) {
                console.log(e)
            }

        },
        async searchTeam({commit}, text) {
            console.log('search team')
            try {
                console.log('search word ' + text)
                const url = sportmonks._composeUrl('v2.0/teams/search/{text}', { text: text })
                console.log(url)

                const res = await axios.get(url, {});
                if(res){
                    const { data } = res.data;
                    console.log('searchTeam result', data)
                    commit(types.SEARCH_TEAM, data)
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
        [types.SEARCH_TEAM](state, results) {
            state.search_teams = results;
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
        getTeamSeason: (state) => state.teams,
        searchTeam: (state) => state.search_teams,
        getSeasonStanding: (state) => state.standing,
        getSeasonId: (state) => state.seasonId
    }
})


