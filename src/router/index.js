import Vue from 'vue'
import VueRouter from 'vue-router'

//import SeasonStanding from '../dashboards/season-standing.vue'
import TeamSeason from '../dashboards/season.vue'
import TeamSearch from '../dashboards/search.vue'

Vue.use(VueRouter)


const routes = [
/*
  {
    path: '/season',
    name: 'season',
    component: SeasonStanding
  },*/
  {
    path: '/',
    name: 'season',
    component: TeamSeason
  },
  {
    path: '/search',
    name: 'search',
    component: TeamSearch
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
})

export default router

