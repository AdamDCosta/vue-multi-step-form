<script setup lang="ts">
import type { FormErrors } from "@/composables/useFormValidator";
import { useFormProgressStore } from "@/stores/formProgress";
import type { TextInputType } from "@/types/formSteps";
import { computed } from "vue";

const props = defineProps<{
  type: TextInputType;
  label: string;
  placeholder: string;
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const progressStore = useFormProgressStore();

const handleChange = (event: Event): void => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};

const validationError = computed(() => {
  const lowercaseLabel = props.label.split(" ")[0].toLowerCase();
  switch (lowercaseLabel) {
    case "name":
      return progressStore.validationErrors?.name?._errors[0];
    case "email":
      return progressStore.validationErrors?.email?._errors[0];
    default:
      return progressStore.validationErrors?.phoneNumber?._errors[0];
  }
});
</script>

<template>
  <div class="flex flex-col py-2">
    <div class="flex justify-between">
      <label :for="`input-${props.label}`" class="text-marine-blue text-sm">{{
        props.label
      }}</label>
      <span v-if="validationError" class="text-sm text-strawberry-red">{{
        validationError
      }}</span>
    </div>
    <input
      :value="props.modelValue"
      :type="props.type"
      :name="props.label"
      :id="`input-${props.label}`"
      :placeholder="props.placeholder"
      @input="handleChange"
      class="rounded-sm border border-light-gray p-2 hover:border-purplish-blue focus-visible:border-purplish-blue focus:outline-none cursor-pointer"
      :class="{'border-strawberry-red': validationError}"
    />
  </div>
</template>
