<script setup lang="ts">
import FormProgress from "@/components/FormProgress.vue";
import MultStepForm from "@/components/MultStepForm.vue";
import { useFormProgressStore } from "@/stores/formProgress";

</script>
<template>
  <main class="w-screen h-screen bg-neutral-magnolia">
    <div class="h-full flex flex-col border-r-2 bg-neutral-alabaster">
      <FormProgress />
      <MultStepForm :steps="4"/>
    </div>
  </main>
</template>
