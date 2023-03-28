<template>
  <Transition name="slide" mode="out-in">
    <div v-if="!adding">
      <Layer
        v-for="(layer, index) in layerList"
        :name="layer.name"
        :index="index"
        :key="layer.id"
        @remove="(n) => removeLayer(n)"
      />
      <hr />
      <input type="button" value="addLayer" @click.prevent="addLayer" />
    </div>
    <div v-else>
      <Heading :content="'Add Layer'"></Heading>
      add from here:
      <input
        type="button"
        value="addLayer"
        @click.prevent="() => { adding = false; }"
      />
    </div>
  </Transition>
</template>

<script>
import { useMapStore } from "./mapStore";
import { mapState } from "pinia";
import Layer from "./Layer.vue";
import Heading from "./Heading.vue";

export default {
  data() {
    return {
      adding: false,
      layerURL:
        "https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3Jrd2FyZCIsImEiOiJja3htcHF2dDExMnh3MnFwZTdjY2R1cDR2In0.Xs5zWniMRbthpxymsVQFJg",
    };
  },
  computed: {
    ...mapState(useMapStore, ["layerList"]),
  },
  methods: {
    addLayer() {
      // const map = useMapStore();
      // map.push("MapBox", "XYZ", { maxZoom: 19 }, this.layerURL);
      // console.log(this.layerURL);
      this.adding = true;
    },
    removeLayer(n) {
      this.layerList[n].layer.remove();
      this.layerList.splice(n, 1);
    },
  },
  components: { Layer, Heading },
};
</script>

<style scoped>
.slide-enter-active {
  transition: all 0.5s;
}

.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
