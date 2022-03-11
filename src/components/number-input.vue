<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const emit = defineEmits<{
  (e: "change", value?: number): void;
  (e: "blur", value: Event): void;
}>();

const props = defineProps<{
  error?: string;
  label: string;
  name?: string;
  value?: number;
}>();

const onInput = (event: Event) => {
  const el = event.target as HTMLInputElement;
  const value = el.value;
  if (value != null && value !== "") {
    emit("change", parseInt(value, 10));
  } else {
    emit("change", undefined);
  }
};
</script>

<template>
  <label :for="name">
    {{ label }}
    <input
      type="number"
      :name="name"
      :value="props.value?.toString()"
      :aria-invalid="props.error == null ? undefined : true"
      @input="onInput"
      @blur="emit('blur', $event)"
    />
  </label>
</template>
