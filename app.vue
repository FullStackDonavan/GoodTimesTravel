<script setup lang="ts">
import { useUser } from "~/composables/useAuth";

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});

useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" }],
});

await useUser();
useSchemaOrg([
  defineLocalBusiness({
    name: "test",
    logo: "/logo.png",
    address: {
      addressCountry: "Australia",
      postalCode: "2000",
      streetAddress: "123 st",
    },
    openingHoursSpecification: [
      {
        dayOfWeek: "Saturday",
        opens: "09:30",
        closes: "13:30",
      },
      {
        dayOfWeek: ["Monday", "Tuesday"],
        opens: "10:30",
        closes: "15:30",
      },
    ],
  }),
]);
</script>
<template>
  <NuxtLayout>
    <div class="dark:bg-indigo-950 dark:text-slate-300">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>