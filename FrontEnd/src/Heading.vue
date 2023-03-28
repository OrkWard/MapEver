<template>
  <header class="header">
    <div class="heading">{{ content }}</div>
    <div class="svg" ref="svg"></div>
  </header>
</template>

<script>
import { fetchSVG } from './utils'

export default {
  props: ['content'],
  mounted() {
    fetchSVG('/close.svg', this.$refs.svg);
  }
}
</script>

<style scoped>
.header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 40px;
  border-bottom: solid 1px var(--border-input);
}

.heading {
  padding-left: 5px;
  flex-grow: 1;
}

.svg {
  flex-basis: 20px;
}
</style>