<template>
  <div>
    <p>{{ requirement.title }}</p>
    <p>{{ requirement.price }}</p>
    <p>{{ requirement.id }}</p>
  </div>
</template>

<script lang="ts" setup>
  const { id } = useRoute().params

  definePageMeta({
    layout: 'requirement'
  })

  const { data: requirement } = await useFetch("https://fakestoreapi.com/products/" + id);
</script>
