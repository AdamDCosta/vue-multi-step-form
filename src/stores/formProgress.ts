import { ref } from "vue";
import { defineStore } from "pinia";
import {
  useFormValidator,
  type FormErrors,
  type InputSchema,
} from "@/composables/useFormValidator";

export const useFormProgressStore = defineStore("formProgress", () => {
  const currentStep = ref(1);
  const userInput = ref<Record<string, string>>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const validationErrors = ref<FormErrors>();

  const handleValidation = () => {
    const inputsToValidate = userInput.value as InputSchema;
    const { isValid, errors } = useFormValidator(inputsToValidate);
    return { isValid, errors };
  };

  const completeStep = (): void => {
    const { isValid, errors } = handleValidation();
    if (errors.value) {
      validationErrors.value = errors.value;
    }

    if (isValid.value && currentStep.value < 4) {
      currentStep.value += 1;
      validationErrors.value = undefined
    }
  };

  const previousStep = (): void => {
    if (currentStep.value > 1) {
      currentStep.value -= 1;
    }
  };

  return { currentStep, userInput, validationErrors, completeStep, previousStep };
});
