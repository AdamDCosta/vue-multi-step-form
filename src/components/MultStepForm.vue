<script setup lang="ts">
import { useFormProgressStore } from "@/stores/formProgress";
import { computed, TransitionGroup, watch } from "vue";
import FormButton from "./FormButton.vue";

const props = defineProps<{ steps: number }>();

const progressStore = useFormProgressStore();

const buttonText = computed(() => {
  return progressStore.currentStep === props.steps ? "Confirm" : "Next Step";
});


</script>

<template>
  <div class="h-3/4 bg-transparent flex-1">
    <form @submit.prevent="progressStore.completeStep" class="h-full">
      <div class="h-5/6 relative">
        <div
          class="bg-primary-white mx-4 rounded-md p-8 absolute -top-16 w-[calc(100%-2rem)] shadow-md"
        >
          <TransitionGroup name="opacity">
            <div
              v-for="(step, index) in props.steps"
              :key="index"
              :id="'step' + (index + 1)"
              v-show="progressStore.currentStep === index + 1"
            >
              <slot :name="'step' + (index + 1)"></slot>
            </div>
          </TransitionGroup>
        </div>
      </div>
      <div
        class="bg-primary-white flex items-center justify-between h-1/6 px-4"
      >
        <div class="basis-1/2">
          <button
            v-if="progressStore.currentStep > 1"
            type="button"
            @click="progressStore.previousStep"
          >
            Go Back
          </button>
        </div>
        <div class="basis-1/2 flex justify-end">
          <FormButton :button-text="buttonText" />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.5s ease;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}
</style>