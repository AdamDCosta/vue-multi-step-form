<script setup lang="ts">
import FormProgress from "@/components/FormProgress.vue";
import MultStepForm from "@/components/MultStepForm.vue";
import TextInput from "@/components/TextInput.vue";
import { formStepOne } from "@/types/formSteps";
import { ref } from "vue";

const userInput = ref<Record<string, string>>({
  name: "",
  email: "",
  phoneNumber: "",
})


</script>

<template>
  <main class="w-full h-screen bg-neutral-magnolia">
    <div class="w-full h-full flex flex-col border-r-2 bg-neutral-magnolia">
      <FormProgress />
      <MultStepForm :steps="4">
          <template #step1>
            <h1 class="text-marine-blue text-xl font-bold">
              {{ formStepOne.title }}
            </h1>
            <h2 class="text-cool-gray pb-4">{{ formStepOne.subtitle }}</h2>
            <div>
              <TextInput
                v-for="input in formStepOne.inputs"
                :key="input.label"
                :type="input.type"
                :label="input.label"
                :placeholder="input.information"
                v-model="userInput[`${input.vModel}`]"
              />
            </div>
          </template>
      </MultStepForm>
    </div>
  </main>
</template>
