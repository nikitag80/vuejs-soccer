import Vue from 'vue'
import VueRouter from 'vue-router'

import One from '../dashboards/one.vue'
import SeasonStanding from '../dashboards/season-standing.vue'
import TeamSeason from '../dashboards/season.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'one',
    component: One
  },/*
  {
    path: '/season',
    name: 'season',
    component: SeasonStanding
  },*/
  {
    path: '/season',
    name: 'season',
    component: TeamSeason
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
})

export default router

