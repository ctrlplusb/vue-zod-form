<script setup lang="ts">
import * as z from "zod";

import { DebugForm, NumberInput, RolePicker, TextInput } from "~/components";
import { UserRole } from "~/model";
import { useZodForm } from "~/use-zod-form";

const formSchema = z.object({
  name: z.string().nonempty(),
  age: z.number().min(18).max(100),
  email: z.string().nonempty().email(),
  roles: z
    .array(z.nativeEnum(UserRole))
    .min(1, { message: "You must select at least 1 role" }),
});

const form = useZodForm(formSchema, {
  initialValues: {
    name: "Jane Doe",
    age: 27,
    email: "jane@doe.com",
    roles: [UserRole.Admin],
  },
});
const { field, handleSubmit, isSubmitting } = form;

const name = field("name");
const email = field("email");
const age = field("age");
const roles = field("roles");

const onSubmit = handleSubmit(async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  alert(JSON.stringify(data, null, 2));
});
</script>

<template>
  <form @submit="onSubmit">
    <TextInput
      label="Name"
      :error="name.error"
      :value="name.value"
      @change="name.onChange"
      @blur="name.onBlur"
    />
    <TextInput
      label="Email"
      type="email"
      :error="email.error"
      :value="email.value"
      @change="email.onChange"
      @blur="email.onBlur"
    />
    <NumberInput
      label="Age"
      :error="age.error"
      :value="age.value"
      @change="age.onChange"
      @blur="age.onBlur"
    />
    <RolePicker
      :error="roles.error"
      :value="roles.value"
      @change="roles.onChange"
    />
    <button :aria-busy="isSubmitting">Submit</button>
  </form>
  <DebugForm :form="form" />
</template>
