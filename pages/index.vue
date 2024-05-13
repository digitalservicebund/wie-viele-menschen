<template>
  <div class="bg-blue-200 flex justify-center">
    <div class="p-32 max-w-3xl">
      <h1 class="mb-24">Wie viele Menschen?</h1>
      <p class="text-lg leading-8">
        Menschen mit einer Behinderung stellen oftmals andere Anforderungen an
        Dienstleistungen und Services. Geben Sie die (erwartete) Gesamtzahl der
        Nutzenden ein und erfahren Sie, wie viele Menschen mit einer Behinderung
        Ihren Service nutzen.
      </p>
      <form class="mt-16" @submit.prevent="setNumberOfUsers">
        <label for="number-of-users" class="font-bold">
          Anzahl der Menschen, die den Service nutzen:
        </label>
        <div class="mt-6 flex">
          <input
            id="number-of-users"
            v-model="numberOfUsersInput"
            name="number-of-users"
            class="ds-input"
            type="number"
          />
          <button type="submit" class="ml-6 ds-button">Berechnen</button>
        </div>
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
  <div v-if="numberOfUsersCurrent === 0" class="flex justify-center">
    <div class="p-32 max-w-3xl">
      <p>
        Wenn Sie oben eine Zahl eingeben, erhalten Sie Informationen über die
        geschätzte Anteil der Personen, die eine Behinderung haben könnten.
      </p>
    </div>
  </div>
  <div v-if="numberOfUsersCurrent !== 0" class="flex justify-center">
    <div class="p-32 max-w-3xl">
      <h2 class="mb-24">
        Ergebnis für <b>{{ numberOfUsersCurrent }}</b> Nutzende
      </h2>
      <table class="w-full text-left mt-10">
        <thead>
          <tr>
            <th>Art der Behinderung</th>
            <th>Anzahl</th>
            <th>Quelle</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(value, key) in data"
            :key="key"
            class="border-t border-black odd:bg-gray-200"
          >
            <td>{{ key }}</td>
            <td>{{ ((value * numberOfUsersCurrent) / 100000).toFixed(0) }}</td>
            <td>
              <a
                class="text-blue-800 underline hover:text-blue-700"
                href="https://2a5.de/e0P"
                target="_blank"
              >
                Quelle
              </a>
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
      numberOfUsersInput: "",
      numberOfUsersCurrent: 0,
      data,
    };
  },
  methods: {
    setNumberOfUsers() {
      this.numberOfUsersCurrent = this.numberOfUsersInput;
    },
  },
};
</script>
