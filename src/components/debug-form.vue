<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ form: { values: object; errors: object } }>();

// eslint-disable-next-line vue/no-setup-props-destructure
const { errors, values } = props.form;
</script>

<template>
  <div>
    <section>
      <h3>State</h3>
      <code>
        <pre>{{ JSON.stringify(values, null, 2) }}</pre>
      </code>
    </section>
    <section>
      <h3>Errors</h3>
      <code>
        <pre>{{ JSON.stringify(errors, null, 2) }}</pre>
      </code>
    </section>
  </div>
</template>
