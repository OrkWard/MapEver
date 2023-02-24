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
    padding: 0.5em;
}
.toolIcon:hover {
    background-color: aqua;
}
</style>