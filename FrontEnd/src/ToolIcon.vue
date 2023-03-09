<template>
  <button class="toolIcon">
    <!-- <object :data="'/toolTips/' + toolName + '.svg'"></object> -->
    <div class="svg" ref="svg"> </div>
  </button>
</template>

<script>
export default {
  props: {
    toolName: String,
  },
  mounted() {
    fetch('/toolTips/' + this.toolName + '.svg')
      .then(response => response.text())
      .then(svgString => {
        console.log(this.$refs.svg);
        this.$refs.svg.innerHTML = svgString.trim();
      })
  }
};
</script>

<style scoped>
.toolIcon {
  border: solid 0 transparent;
  background-color: transparent;
  padding: 15px;
  height: 50px;
  width: 50px;
  overflow: hidden;
}

.toolIcon:hover {
  background-color: var(--text-3);
  cursor: pointer;
}

.svg {
  color: var(--foreground-2);
}
</style>
