<script setup lang="ts">
  const props = defineProps<{ buttonText: string }>();
</script>

<template>
  <button
    type="submit"
    class="bg-marine-blue rounded-md text-primary-white text-center px-6 py-4 h-16 hover:bg-purplish-blue transition-colors duration-500"
  >
    {{ props.buttonText }}
  </button>
</template>
