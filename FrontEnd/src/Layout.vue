<template>
    <NavBar id="navbar"/>
    <div id="main-container">
        <Layer/>
        <div id="map"></div>
    </div>
</template>

<style scoped>
#navbar {
    background-color: aqua;
    height: 50px;
    display: flex;
    align-items: center;
}

#main-container {
    display: flex;
    align-items: stretch;
    flex-grow: 1;
}

#map {
    flex-grow: 1;
}
</style>

<script>
import Layer from './Layer.vue';
import NavBar from './NavBar.vue';
import L from 'leaflet';

export default {
    data() {
        return {};
    },
    methods: {

    },
    mounted() {
        let map = L.map('map');
    },
    components: {
        Layer, NavBar
    }
}
</script>