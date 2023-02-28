import { defineStore } from "pinia";

const L = {msg: 'hello'};

export const useMapStore = defineStore('mapStore', {
    state() {
        return {
            layer: []
        }
    },
    actions: {
        addLayer() {
            this.layer.push('layer' + this.layer.length);
            alert(L.msg);
        },
        removeLayer() {
            L.msg = 'world';
        }
    }
})
