<template>
  <div>
    <h1>Requirements</h1>
    <ul>
      <li v-for="r in requirements">
        <RequirementCard :requirement="r"></RequirementCard>
      </li>
    </ul>


  </div>
</template>

<script setup lang="ts">
  const { data: requirements } = useFetch("https://fakestoreapi.com/products");
</script>