<template>
  <div class="bg-blue-200 flex justify-center">
    <div class="p-32 max-w-3xl">
      <h1 class="mb-24">Wie viele Menschen?</h1>
      <p class="leading-8">
        Jeder Mensch ist einzigartig und stellt spezielle Anforderungen an die
        Nutzung eines Services. Um diese Services allen Menschen zugänglich zu
        machen, müssen Barrieren abgebaut werden.
        <br /><br />
        Hier können Sie erfahren, wie viele Menschen mit bestimmten
        Eigenschaften Ihren Service nutzen. Daraus können Sie Maßnahmen
        ableiten, um Ihren Dienst für alle Menschen zu öffnen. Geben Sie dazu
        die erwartete Gesamtzahl der Nutzenden ein.
      </p>
      <form class="mt-40" @submit.prevent="setNumberOfUsers">
        <label for="number-of-users" class="font-bold">
          Anzahl der Menschen, die den Service nutzen:
        </label>
        <div class="mt-6 flex">
          <input
            id="number-of-users"
            v-model="numberOfUsersInput"
            name="number-of-users"
            class="ds-input w-full sm:w-2/6"
            type="number"
            max="90000000"
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
        geschätzte Anteil der Personen, die eine bestimmte Eigenschaft
        aufweisen.
      </p>
    </div>
  </div>
  <div v-if="numberOfUsersCurrent !== 0" class="flex justify-center">
    <div class="p-32 max-w-3xl">
      <h2 class="mb-24">
        Ergebnis für <b>{{ formatNumber(numberOfUsersCurrent) }}</b> Nutzende
      </h2>
      <p>
        Diese Zahlen beruhen auf Daten aus unterschiedlichen Quellen. Eine
        Person kann dabei mehrere Eigenschaften aufweisen, sodass sich die
        Anzahl nicht auf
        {{ formatNumber(numberOfUsersCurrent) }} summiert.
      </p>
      <div v-for="(group, groupIndex) in data" :key="groupIndex">
        <h3>
          {{ group.name }}
        </h3>
        <table
          class="w-full text-left mt-10 table-fixed break-words hyphens-auto"
        >
          <thead>
            <tr>
              <th class="w-6/12 sm:w-4/6">Eigenschaft</th>
              <th class="w-4/12 sm:w-1/6 text-right">Anzahl</th>
              <th class="w-3/12 sm:w-1/6">Quelle</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, itemIndex) in group.data"
              :key="itemIndex"
              class="border-t border-black odd:bg-gray-200"
            >
              <td>{{ item.characteristic }}</td>
              <td class="text-right">
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
                  rel="noreferrer noopener"
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
      sortKey: "", // Current key used for sorting
      sortOrders: {
        columnName: 1, // Initial sort order for each column
        // Add more columns as needed
      },
    };
  },
  computed: {
    sortedItems() {
      return this.items.slice().sort((a, b) => {
        return (
          this.sortOrders[this.sortKey] * (a[this.sortKey] - b[this.sortKey])
        );
      });
    },
  },
  methods: {
    setNumberOfUsers() {
      this.numberOfUsersCurrent = this.numberOfUsersInput;
    },
    formatNumber(value: number) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    sortBy(key: string) {
      this.sortKey = key;
      this.sortOrders[key] *= -1;
    },
  },
};
</script>
