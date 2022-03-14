> WIP

# vue-zod-form

A composition based API forms helper for Vue 3 projects that utilise TypeScript.

```vue
<script setup lang="ts">
import * as z from "zod";
import { useZodForm } from "vue-zod-form";

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  password: z.string().nonempty().min(8),
});

const { field, handleSubmit, isSubmitting } = useZodForm(formSchema);

const name = field("name");
const email = field("email");
const password = field("password");

const onSubmit = handleSubmit(async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  alert(JSON.stringify(data, null, 2));
});
</script>

<template>
  <form @submit="onSubmit">
    <TextInput
      label="Email"
      type="email"
      :error="email.error"
      :value="email.value"
      @change="email.onChange"
      @blur="email.onBlur"
    />
    <TextInput
      label="Password"
      type="password"
      :error="password.error"
      :value="password.value"
      @change="password.onChange"
      @blur="password.onBlur"
    />
    <button :aria-busy="isSubmitting">Submit</button>
  </form>
</template>
```
