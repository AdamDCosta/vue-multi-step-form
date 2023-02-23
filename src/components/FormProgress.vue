<script setup lang="ts">
import { useFormProgressStore } from "@/stores/formProgress";
import { formSteps } from "../types/formSteps";
import ProgressStep from "./ProgressStep.vue";

const progressStore = useFormProgressStore();
</script>

<template>
  <aside class="bg-progress-mobile bg-cover bg-no-repeat w-full h-1/4">
    <div class="flex justify-between w-1/2 mt-12 mx-auto">
      <div
        v-for="(step, index) in formSteps"
        class="text-primary-white text-lg"
      >
        <ProgressStep :step="step" :is-active-step="index + 1 === progressStore.currentStep" />
      </div>
    </div>
  </aside>
</template>
