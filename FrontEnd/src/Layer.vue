<template>
  <div>{{ name }}</div>
  <input type="button" value="remove" @click.prevent="$emit('remove', index)" />
</template>

<script>
export default {
  props: ["name", "index"],
  emits: ["remove"],
};
</script>
