<template>
  <div class="bg-blue-200 flex justify-center">
    <div class="p-32 max-w-3xl">
      <h1 class="mb-24">Wie viele Menschen?</h1>
      <p>
        Schätze, wie viele Menschen in Deutschland eine Behinderung,
        Beeinträchtigung oder andere Merkmale haben, die sich auf die Nutzung
        Ihrer Dienstleistung auswirken könnten.
      </p>
      <form class="mt-16">
        <label for="number-of-users" class="font-bold"
          >Erwartete Anzahl der Nutzenden:</label
        >
        <input
          id="number-of-users"
          v-model="numberOfUsers"
          name="number-of-users"
          class="ds-input mt-6"
          type="number"
          placeholder="Anzahl der Nutzenden"
        />
      </form>
    </div>
  </div>
  <div class="bg-yellow-300 flex justify-center">
    <div class="px-32 p-16 max-w-3xl text-left w-full">
      <p>
        Diese Seite befindet sich im Aufbau und die angezeigten Daten können
        unvollständig sein.
      </p>
    </div>
  </div>
  <div
    v-if="numberOfUsers !== 0 && numberOfUsers != null && numberOfUsers != ''"
    class="flex justify-center"
    aria-live="polite"
  >
    <div class="p-32 max-w-3xl">
      <h2 class="mb-24">Ergebnis für {{ numberOfUsers }} Nutzende</h2>
      <table class="w-full text-left mt-10">
        <thead>
          <tr>
            <th>Art der Behinderung</th>
            <th>Erwartete Anzahl</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(value, key) in data"
            :key="key"
            class="border-t border-black odd:bg-gray-200"
          >
            <td>{{ key }}</td>
            <td>{{ ((value * numberOfUsers) / 100000).toFixed(0) }}</td>
            <td>
              <a
                class="text-blue-800 underline hover:text-blue-700"
                href="https://2a5.de/LR2RO"
                target="_blank"
                >Quelle</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import data from "public/data/type_of_disabilities_per_100k_citizens_2021.json";

export default {
  data() {
    return {
      numberOfUsers: 10000,
      data,
    };
  },
};
</script>
