<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const emit = defineEmits<{
  (e: "change", value: string): void;
  (e: "blur", value: Event): void;
}>();

const props = defineProps<{
  error?: string;
  label: string;
  name?: string;
  type?: "text" | "email" | "password";
  value?: string;
}>();
</script>

<template>
  <label :for="name">
    {{ label }}
    <input
      :name="name"
      :type="type ?? 'text'"
      :value="props.value"
      :aria-invalid="props.error == null ? undefined : true"
      @input="emit('change', ($event?.target as HTMLInputElement)?.value)"
      @blur="emit('blur', $event)"
    />
  </label>
</template>
