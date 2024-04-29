<template>
  <div class="container">
    <main>
      <h1>Requirement</h1>
      <div>
        <slot/>
      </div>
    </main>
    <footer>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/requirements">Requirements</NuxtLink></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>