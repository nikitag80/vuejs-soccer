<template>
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
 </template>

<script>
    export default {
        name: "TeamList",
        props: {
            item: {}
        }
    };
</script>

<style scoped>
    @import url("./style.css");
</style>