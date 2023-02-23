<script setup lang="ts">
import { useFormProgressStore } from "@/stores/formProgress";

const progressStore = useFormProgressStore();

const props = defineProps<{ steps: number }>();
</script>

<template>
  <div>
    <form>
      <div>
        <div
          v-for="(step, index) in steps"
          :key="index"
          :id="'step' + (index + 1)"
          v-show="progressStore.currentStep === index"
        >
          <slot :name="'step' + (index + 1)"></slot>
        </div>
      </div>
    </form>
  </div>
</template>
