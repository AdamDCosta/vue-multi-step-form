import { ref } from "vue";
import { defineStore } from "pinia";

export const useFormProgressStore = defineStore("formProgress", () => {
  const currentStep = ref(0);

  const completeStep = (): void => {
    currentStep.value = currentStep.value > 3  ? currentStep.value++ : 3;
  } 

  return { currentStep, completeStep }
});
