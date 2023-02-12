<script setup lang="ts">
import FormProgress from "@/components/FormProgress.vue";
import MultStepForm from "@/components/MultStepForm.vue";
</script>
<template>
  <main class="w-screen h-screen bg-neutral-magnolia">
    <div class="h-full flex flex-col border-r-2 bg-neutral-alabaster">
      <FormProgress />
      <MultStepForm />
    </div>
  </main>
</template>
