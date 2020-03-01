<template>
    <season-standing  :items="items"/>
</template>

<script>
    import axios from 'axios'
    import { API_URLS } from '../__data__/constants/api-urls'
    import SeasonStanding from "../components/season-standing.vue";

    export default {
        name: 'morty',
        components: {
            SeasonStanding
        },
        data() {
            return {
                text: 'Идет загрузка...',
                searchName: 'morty',
                items: []

            }
        },
        methods: {
            clicked: function() {
                alert('click')
            }
        },
        created: async function () {

            // await this.$store.getters.getSeasonStanding()
            // let res = await axios.get(API_URLS.URL_SEASON_STANDING, {params :{
            //         results: 10
            //     }});

            // let res = await axios({
            //     "method":"GET",
            //     "url":API_URLS.URL_SEASON_STANDING,
            //     "headers":{
            //         "content-type":"application/octet-stream",
            //         "x-rapidapi-host":API_URLS.X_RAPID_API_HOST,
            //         "x-rapidapi-key":API_URLS.X_RAPID_API_KEY
            //     },"params":{
            //         "id":16222,
            //         "tz":"Europe%2FMoscow"
            //     }
            // })
            //     .then((response)=>{
            //         console.log(response)
            //     })
            //     .catch((error)=>{
            //         console.log(error)
            //     })
            //


            const url = _composeUrl(API_URLS.URL_SEASON_STANDING, 16222, [])
            console.log(url)
            const res = await axios.get(url, {
                params: {
                    // gender: params.gender,
                    // results: params.searchParams
                }
            })
                .then((response)=>{
                    console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                });

            let { results } = res.data;
            this.items = results

        }

    }


    function _composeUrl(url, endpoint, params) {
        let page;
        let newEndpoint = url + endpoint;
        let wrapped = endpoint.match(/\{(.*?)\}/g);
        if (wrapped) {
            let unwrapped = (wrapped) => wrapped.replace('{', '').replace('}', '');
            for (let w in wrapped) {
                let k = unwrapped(wrapped[w]);
                newEndpoint = newEndpoint.replace(wrapped[w], params[k]);
                delete params[k];
            }
        }
        newEndpoint += "?api_token=" + API_URLS.TOKEN;
        if (params && Object.keys(params).length > 0) {
            let plist = [];
            let pkeys = Object.keys(params);
            for (let p in pkeys) {
                if (pkeys[p] != 'page' && params[pkeys[p]])
                    plist.push(pkeys[p]);
                else {
                    if (pkeys[p] == 'page')
                        page = params[pkeys[p]];
                }
            }
            if (page)
                newEndpoint += "&page=" + page;
            if (plist.length > 0)
                newEndpoint += "&include=" + plist.join(',');
        }

        alert(newEndpoint)
        return newEndpoint;
    }
</script>
