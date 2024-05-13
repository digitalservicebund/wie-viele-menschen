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
        Ergebnis für <b>{{ formatNumber(numberOfUsersCurrent) }}</b> Nutzende
      </h2>
      <p>
        Diese Ergebnisse beruhen auf Daten aus verschiedenen Quellen. Es kann
        vorkommen, dass Personen unter ein oder mehrere Kriterien fallen, so
        dass sich die Zahlen nicht auf
        {{ formatNumber(numberOfUsersCurrent) }} addieren.
      </p>
      <div v-for="(group, groupIndex) in data" :key="groupIndex">
        <h3>
          {{ group.name }}
        </h3>
        <table class="w-full text-left mt-10 table-fixed">
          <thead>
            <tr>
              <th class="w-4/6">Eigenschaft</th>
              <th class="w-1/6">Anzahl</th>
              <th class="w-1/6">Quelle</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, itemIndex) in group.data"
              :key="itemIndex"
              class="border-t border-black odd:bg-gray-200"
            >
              <td>{{ item.characteristic }}</td>
              <td>
                {{
                  formatNumber(
                    (item.percentage * numberOfUsersCurrent).toFixed(0),
                  )
                }}
              </td>
              <td>
                <a
                  class="text-blue-800 underline hover:text-blue-700"
                  :href="item.link"
                  target="_blank"
                  :aria-label="'Quelle für ' + item.characteristic"
                >
                  Quelle
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import data from "public/data.json";

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
    formatNumber(value: number) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
