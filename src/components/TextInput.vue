<script setup lang="ts">
import type { TextInputType } from "@/types/formSteps";

const props = defineProps<{
  type: TextInputType;
  label: string;
  placeholder: string;
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const handleChange = (event: Event): void => {
  emit(
    "update:modelValue",
    (event.target as HTMLInputElement).value
  );
};
</script>

<template>
  <div class="flex flex-col py-2">
    <label :for="`input-${props.label}`" class="text-marine-blue text-sm">{{
      props.label
    }}</label>
    <input
      :value="props.modelValue"
      :type="props.type"
      :name="props.label"
      :id="`input-${props.label}`"
      :placeholder="props.placeholder"
      @input="handleChange"
      class="rounded-sm border border-light-gray p-2 hover:border-purplish-blue focus-visible:border-purplish-blue focus:outline-none cursor-pointer"
    />
  </div>
</template>
