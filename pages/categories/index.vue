<script setup lang="ts">
import CategoryCard from "~/components/elements/CategoryCard.vue";
const route = useRoute();
const { data: rows } = await useFetch("/api/categories", {
  key: route.fullPath,
});
</script>

<template>
  <PatternSection>
    <div v-if="rows">
      <div
        aria-label="group of cards"
        tabindex="0"
        class="focus:outline-none py-8 w-full"
      >
        <div
          v-for="(row, index) in rows"
          :key="index"
          class="lg:flex items-center justify-center w-full"
        >
          <div
            v-for="(category, index) in row"
            :key="index"
            aria-label="card 1"
            class="focus:outline-none lg:w-4/12 lg:m-7 lg:mb-0 mb-7 dark:bg-gray-800 bg-white p-6 shadow rounded transition duration-500 hover:scale-110"
          >
            <CategoryCard :category="category" />
          </div>
        </div>
      </div>
    </div>
  </PatternSection>
</template>
