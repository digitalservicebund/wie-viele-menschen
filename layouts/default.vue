<template>
  <div>
    <main>
      <slot />
    </main>
    <footer>
      <div class="bg-blue-200 flex justify-center">
        <div class="p-20 w-full max-w-3xl flex justify-end">
          <a
            href="https://digitalservice.bund.de/impressum"
            class="text-blue-800 underline hover:text-blue-700 p-12"
            target="_blank"
            rel="noreferrer noopener"
          >
            Impressum
          </a>
          <a
            href="https://digitalservice.bund.de/datenschutz"
            class="text-blue-800 underline hover:text-blue-700 p-12"
            target="_blank"
            rel="noreferrer noopener"
          >
            Datenschutzhinweis
          </a>
          <a
            href="https://github.com/digitalservicebund/wie-viele-menschen"
            class="text-blue-800 underline hover:text-blue-700 p-12"
            target="_blank"
            rel="noreferrer noopener"
          >
            Quellcode
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts"></script>
