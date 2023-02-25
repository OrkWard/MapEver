<template>
    <button class="toolIcon">{{ toolName }}</button>
</template>

<script>
export default {
    props: {
        toolName: String
    }
}
</script>

<style scoped>
.toolIcon {
    padding: 0.2em;
    height: 3em;
    width: 3em;
    overflow: hidden;
}
.toolIcon:hover {
    background-color: aqua;
}
</style>