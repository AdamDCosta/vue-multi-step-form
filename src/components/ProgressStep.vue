<script setup lang="ts">
import type { StepProgress } from "@/types/formSteps";

const props = defineProps<{ step: StepProgress, isActiveStep: boolean }>();
</script>

<template>
  <div
    class="rounded-full border border-primary-white w-10 aspect-square flex justify-center items-center"
    :class="{ [`border-pastel-blue bg-pastel-blue text-purplish-blue`]: isActiveStep }"
  >
    <p class="font-bold">
      {{ props.step.number }}
    </p>
  </div>
  <p class="hidden sm:visible">{{ props.step.step }}</p>
  <p class="hidden sm:visible">{{ props.step.title }}</p>
</template>
