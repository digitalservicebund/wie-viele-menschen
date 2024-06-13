<template>
  <div class="min-h-screen flex flex-col justify-between">
    <main>
      <slot />
    </main>
    <footer>
      <div class="bg-blue-200 flex justify-center">
        <div class="p-20 w-full max-w-3xl flex flex-wrap sm:justify-end">
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
          <NuxtLink
            to="https://digitalservice.bund.de/wie-viele-menschen/barrierefreiheit"
            class="text-blue-800 underline hover:text-blue-700 p-12"
          >
            Barrierefreiheit
          </NuxtLink>
          <a
            href="https://github.com/digitalservicebund/wie-viele-menschen"
            class="text-blue-800 underline hover:text-blue-700 p-12"
            target="_blank"
            rel="noreferrer noopener"
          >
            Quellcode
          </a>
          <a
            href="https://design.education.gov.uk/tools/how-many-users/"
            class="text-blue-800 underline hover:text-blue-700 p-12"
            target="_blank"
            rel="noreferrer noopener"
          >
            Inspiration
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
