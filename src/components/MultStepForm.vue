<script setup lang="ts">
import { useFormProgressStore } from "@/stores/formProgress";
import { computed } from "vue";
import FormButton from "./FormButton.vue";

const props = defineProps<{ steps: number }>();

const progressStore = useFormProgressStore();

const buttonText = computed(() => {
  return progressStore.currentStep === 4 ? "Confirm" : "Next Step";
});
</script>

<template>
  <div class="h-3/4 bg-transparent">
    <form @submit.prevent="progressStore.completeStep" class="h-full">
      <div class="h-5/6">
        <div
          v-for="(step, index) in props.steps"
          :key="index"
          :id="'step' + (index + 1)"
          v-show="progressStore.currentStep === index + 1"
        >
          <slot :name="'step' + (index + 1)"></slot>
        </div>
      </div>
      <div class="h-1/6 bg-primary-white flex items-center justify-between">
        <div class="basis-1/2 p-4">
          <button
            v-if="progressStore.currentStep > 1"
            type="button"
            @click="progressStore.previousStep"
          >
            Go Back
          </button>
        </div>
        <div class="basis-1/2 flex justify-end p-4">
          <FormButton :button-text="buttonText" />
        </div>
      </div>
    </form>
  </div>
</template>
