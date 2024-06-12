<template>
  <div class="bg-blue-200 flex justify-center">
    <div class="p-32 max-w-3xl">
      <NuxtLink to="/" class="text-blue-800 underline hover:text-blue-700 p-12">
        &#8592; Zurück zur Startseite
      </NuxtLink>
      <h1 class="mb-24">Erklärung zur Barrierefreiheit</h1>
      <p class="leading-8">
        Informationen über die Zugänglichkeit dieser Webseiten gemäß § 12
        Behindertengleichstellungsgesetz (BGG) sowie über diesbezügliche
        Kontaktmöglichkeiten.
      </p>
    </div>
  </div>
  <div class="flex justify-center">
    <div class="p-32 max-w-3xl">
      <p>
        Die DigitalService GmbH des Bundes ist bemüht, seine Webseite
        <a
          :href="baseURL"
          class="text-blue-800 underline hover:text-blue-700"
          target="_blank"
          rel="noreferrer noopener"
        >
          wie viele Menschen
        </a>
        so weit wie möglich barrierefrei zu gestalten. Rechtsgrundlage sind das
        Behindertengleichstellungsgesetz (BGG), die
        Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) und die
        harmonisierte europäische Norm EN 301 549 in ihrer jeweils gültigen
        Fassung. <br /><br />
        Diese Erklärung wurde am 15. Mai 2024 erstellt.
      </p>
      <h2 class="mt-32">Welche Bereiche sind nicht barrierefrei?</h2>
      <p>Teilbereiche, die z. B. nicht barrierefrei sind:</p>
      <ul class="list-disc ml-24 mt-20">
        <li>
          <b>Externe Links</b> können nicht immer barrierefrei angeboten werden,
          da sie auf Inhalte oder Ressourcen außerhalb des aktuellen Angebots
          verweisen, auf die wir keinen direkten Einfluss haben.
        </li>
      </ul>
      <h2 class="mt-32">Barriere melden! Hinweise zur Barrierefreiheit</h2>
      <p>
        Sind Ihnen weitere Mängel beim barrierefreien Zugang zu Inhalten von
        <a
          :href="baseURL"
          class="text-blue-800 underline hover:text-blue-700"
          target="_blank"
          rel="noreferrer noopener"
          >wie viele Menschen
        </a>
        aufgefallen? Dann können Sie sich gerne bei uns melden:
        <br /><br />
        DigitalService GmbH des Bundes<br />
        Prinzessinnenstraße 8-14<br />
        10969 Berlin<br />
        Deutschland<br />
        E-Mail:
        <a
          href="mailto:accessibility@digitalservice.bund.de"
          class="text-blue-800 underline hover:text-blue-700"
        >
          accessibility@digitalservice.bund.de</a
        >
      </p>
      <h2 class="mt-32">Schlichtungsverfahren</h2>
      <p>
        Wenn auch nach Ihrem Hinweis an den oben genannten Kontakt keine
        zufriedenstellende Lösung gefunden wurde, können Sie sich an die
        Schlichtungsstelle nach § 16 BGG wenden. Die Schlichtungsstelle BGG hat
        die Aufgabe, bei Konflikten zum Thema Barrierefreiheit zwischen Menschen
        mit Behinderungen und öffentlichen Stellen des Bundes eine
        außergerichtliche Streitbeilegung zu unterstützen. Dabei geht es nicht
        darum, Gewinner oder Verlierer zu finden. Vielmehr ist es das Ziel, mit
        Hilfe der Schlichtungsstelle gemeinsam und außergerichtlich eine Lösung
        für ein Problem zu finden. Das Schlichtungsverfahren ist kostenlos. Es
        muss kein Rechtsbeistand eingeschaltet werden. Auf der Internetseite der
        Schlichtungsstelle finden Sie alle Informationen zum
        Schlichtungsverfahren. Dort können Sie nachlesen, wie ein
        Schlichtungsverfahren abläuft und wie Sie den Antrag auf Schlichtung
        stellen. Sie können den Antrag dort auch in Leichter Sprache oder in
        Deutscher Gebärdensprache stellen.
        <br /><br />
        Sie erreichen die Schlichtungsstelle unter folgender Adresse:
        <br /><br />
        <b>
          Schlichtungsstelle nach dem Behindertengleichstellungsgesetz bei dem
          Beauftragten der Bundesregierung für die Belange von Menschen mit
          Behinderungen
        </b>
        <br /><br />
        Mauerstraße 53<br />
        10117 Berlin
        <br /><br />
        Telefon: 030 18 527-2805<br />
        Fax: 030 18 527-2901<br />
        E-Mail:
        <a
          href="mailto:info@schlichtungsstelle-bgg.de"
          class="text-blue-800 underline hover:text-blue-700"
        >
          info@schlichtungsstelle-bgg.de </a
        ><br />
        Internet:
        <a
          href="https://www.schlichtungsstelle-bgg.de/"
          class="text-blue-800 underline hover:text-blue-700"
          target="_blank"
          rel="noreferrer noopener"
        >
          www.schlichtungsstelle-bgg.de </a
        ><br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseURL: process.env.NUXT_APP_BASE_URL ?? "/",
    };
  },
};
</script>
