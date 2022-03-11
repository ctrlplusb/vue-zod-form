<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

import { UserRole } from "~/model";

const emit = defineEmits<{
  (e: "change", value: UserRole[]): void;
}>();

const props = defineProps<{
  error?: string;
  value?: UserRole[];
}>();

const options = Object.entries(UserRole).map(([label, value]) => ({
  label,
  value,
}));

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.checked) {
    emit("change", [...(props.value ?? []), target.value as UserRole]);
  } else {
    emit(
      "change",
      (props.value ?? []).filter((x) => x !== target.value),
    );
  }
};
</script>

<template>
  <fieldset @change="onChange">
    <legend>Roles</legend>
    <template v-for="option of options" :key="option.value">
      <label>
        <input
          :aria-invalid="props.error == null ? undefined : true"
          type="checkbox"
          name="role"
          :checked="props.value?.includes(option.value)"
          :value="option.value"
        />
        {{ option.label }}
      </label>
    </template>
  </fieldset>
</template>
