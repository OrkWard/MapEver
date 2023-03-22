<template>
  <div>
    <Layer
      v-for="(layer, index) in layerList"
      :name="layer.name"
      :index="index"
      :key="layer.id"
      @remove="(n) => removeLayer(n)"
    />
    <input type="button" value="addLayer" @click.prevent="addLayer" />
  </div>
</template>

<script>
import { useMapStore } from "./mapStore";
import { mapState } from "pinia";
import Layer from "./Layer.vue";

export default {
  data() {
    return {
      layerURL:
        "https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3Jrd2FyZCIsImEiOiJja3htcHF2dDExMnh3MnFwZTdjY2R1cDR2In0.Xs5zWniMRbthpxymsVQFJg",
    };
  },
  computed: {
    ...mapState(useMapStore, ["layerList"]),
  },
  methods: {
    addLayer() {
      const map = useMapStore();
      map.push("MapBox", "XYZ", { maxZoom: 19 }, this.layerURL);
      console.log(this.layerURL);
    },
    removeLayer(n) {
      this.layerList[n].layer.remove();
      this.layerList.splice(n, 1);
    },
  },
  components: { Layer },
};
</script>
