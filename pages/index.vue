<template>
  <div class="bg-blue-200 flex justify-center">
    <div class="p-32 max-w-3xl">
      <h1 class="mb-24">Wie viele Menschen?</h1>
      <p>Schätze, wie viele Menschen eine Behinderung, Beeinträchtigung oder andere Merkmale haben, die sich auf die Nutzung Ihrer Dienstleistung auswirken könnten.</p>
      <div class="mt-16">
        <label for="number-of-users" class="font-bold">Erwartete Anzahl der Nutzenden:</label>
        <input name="number-of-users" class="ds-input mt-6" type="text" v-model="numberOfUsers" placeholder="Anzahl der Nutzenden">
<!--        <button class="ds-button mt-16" @click="setNumberOfUsers">Berechnen</button>-->
      </div>
    </div>
  </div>
  <div class="flex justify-center" v-if="numberOfUsers !== ''">
    <div class="p-32 max-w-3xl">
      <h2 class="mb-24">Ergebnis für {{numberOfUsers}} Nutzende</h2>
      <p>Diese Ergebnisse beruhen auf Daten aus verschiedenen Quellen, und es kann sein, dass Personen unter ein oder mehrere Kriterien fallen, so dass sich die Zahlen nicht auf {{numberOfUsers}} summieren.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOfUsers: '',
    };
  },
  methods: {
  }
};
</script>