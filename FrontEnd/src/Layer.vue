<template>
    <div>
        <input type="button" value="addLayer" @click.prevent="addLayer">
        <input type="button" value="removeLayer" @click.prevent="removeLayer">
    </div>
</template>

<script>
import { useMapStore } from './global';

export default {
    methods: {
        addLayer() {
            useMapStore().addLayer();
        },
        removeLayer() {
            useMapStore().removeLayer();
        }
    }
}
</script>