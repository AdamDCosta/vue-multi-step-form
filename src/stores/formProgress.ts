import { ref } from "vue";
import { defineStore } from "pinia";

export const useFormProgressStore = defineStore("formProgress", () => {
  const currentStep = ref(1);

  const completeStep = (): void => {
    console.log("Current Step", currentStep.value + 1)
    if (currentStep.value < 4) {
      currentStep.value +=1
    }
  } 

  const previousStep = (): void => {
    if (currentStep.value > 1) {
      currentStep.value -=1
    }
  }

  return { currentStep, completeStep, previousStep }
});
