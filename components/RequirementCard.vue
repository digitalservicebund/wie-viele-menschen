<template>
  <div>
    <NuxtLink :to="`/requirements/${requirement.id}`">{{ requirement.title }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const { requirement } = defineProps(['requirement'])
</script>

<style scoped>

</style>