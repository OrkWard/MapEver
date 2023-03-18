<template>
  <div>
    <input type="button" value="addLayer" @click.prevent="addLayer" />
    <input type="button" value="removeLayer" @click.prevent="removeLayer" />
  </div>
</template>

<script>
import { useMapStore } from "./mapStore";

export default {
  data() {
    return {
      layerURL:
        "https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3Jrd2FyZCIsImEiOiJja3htcHF2dDExMnh3MnFwZTdjY2R1cDR2In0.Xs5zWniMRbthpxymsVQFJg",
    };
  },
  methods: {
    addLayer() {
      const map = useMapStore();
      map.push("XYZ", { maxZoom: 19 }, this.layerURL);
      console.log(this.layerURL);
    },
    removeLayer() {},
  },
};
</script>
