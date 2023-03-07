<template>
  <div class="tool-icon-container">
    <ToolIcon v-for="toolName in toolSet" :toolName="toolName" />
  </div>
</template>

<script>
import ToolIcon from "./ToolIcon.vue";

export default {
  components: [ToolIcon],
  data() {
    return {
      toolSet: ["Layer", "Analysis", "Import", "Export"],
    };
  },
  components: { ToolIcon },
};
</script>

<style scoped>
.tool-icon-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
}
</style>
