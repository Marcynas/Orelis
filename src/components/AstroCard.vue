<script setup>
import { defineProps } from "vue";

const props = defineProps({
  astro: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="select-none  m-4 p-4 bg-white bg-opacity-20 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out justify-center items-center flex flex-col"
  >
    <div class="flex flex-row">
      <div class="flex flex-col m-4 items-center justify-center">
        <img
          :src="`./src/assets/all/sunrise.svg`"
          :alt="astro.sunrise"
          class="w-16 h-16"
        />

        <h4 class="text-xl font-bold">{{ astro.sunrise }}</h4>
      </div>

      <div class="flex flex-col items-center justify-center  m-4">
        <img
          :src="'/src/assets/all/sunset.svg'"
          :alt="astro.sunset"
          class="w-16 h-16"
        />

        <h4 class="text-xl font-bold">{{ astro.sunset }}</h4>
      </div>
    </div>

    
    <div class="flex flex-row">
        <div class="flex flex-col items-center justify-center m-4">
      <img
        :src="'/src/assets/all/moonrise.svg'"
        :alt="astro.moonrise"
        class="w-16 h-16"
      />

      <h4 class="text-xl font-bold">{{ astro.moonrise }}</h4>
    </div>
      <div class="flex flex-col items-center justify-center m-4">
        <img
          :src="'/src/assets/all/moonset.svg'"
          :alt="astro.moonset"
          class="w-16 h-16"
        />

        <h4 class="text-xl font-bold">{{ astro.moonset }}</h4>
      </div>
      
    </div>
  </div>
</template>
