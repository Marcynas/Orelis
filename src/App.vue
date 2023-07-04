<template>
  <div v-if="isReady()">
    <div class="
      flex flex-col
      items-center
      justify-center
      min-h-screen
      bg-gradient-to-b
      text-white
      duration-500
      ease-in-out
      "
      :class="bgGradient">
      <weather-card v-if="coords" :coords="coords"/>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, watch } from "vue";
import WeatherCard from "./components/WeatherCard.vue";
import { useGeolocation } from "@vueuse/core";
import { ref, onMounted, onUnmounted } from "vue";

const { coords, locatedAt, error, resume, pause } = useGeolocation();

watch([coords, locatedAt, error], () => {
  if (error.value) {
    console.error("Error fetching location:", error.value);
  }
});

const isReady = () => {
  return (
    coords.value.latitude !== Infinity &&
    coords.value.longitude !== Infinity
  );
};

// set bgGradient based on time of day
const bgGradient = ref("bg-gradient-to-b from-blue-500 to-blue-300");
const time = new Date().getHours();
if (time >= 6 && time < 12) {
  bgGradient.value = "bg-gradient-to-b from-blue-500 to-blue-300";
} else if (time >= 12 && time < 18) {
  bgGradient.value = "bg-gradient-to-b from-blue-300 to-blue-100";
} else if (time >= 18 && time < 24) {
  bgGradient.value = "bg-gradient-to-b from-blue-900 to-blue-500";
} else {
  bgGradient.value = "bg-gradient-to-b from-blue-900 to-blue-500";
}

onMounted(() => {
  resume();
});

onUnmounted(() => {
  pause();
});


</script>

<script>
export default defineComponent({
  components: {
    WeatherCard,
  },
});
</script>