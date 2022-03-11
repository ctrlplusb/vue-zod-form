<script setup lang="ts">
import * as z from "zod";

import { DebugForm, NumberInput, RolePicker, TextInput } from "~/components";
import { UserRole } from "~/model";
import { useZodForm } from "~/use-zod-form";

const formSchema = z
  .object({
    name: z.string().nonempty(),
    age: z.number().min(18).max(100),
    email: z.string().nonempty().email(),
    password: z.string().nonempty().min(8),
    confirm: z.string().nonempty(),
    roles: z
      .array(z.nativeEnum(UserRole))
      .min(1, { message: "You must select at least 1 role" }),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "Passwords do not match",
  });

const form = useZodForm(formSchema);

const name = form.field("name");
const email = form.field("email");
const age = form.field("age");
const password = form.field("password");
const confirm = form.field("confirm");
const roles = form.field("roles");

const onSubmit = form.handleSubmit(async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  alert(JSON.stringify(data, null, 2));
});

const { isSubmitting } = form;
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
      @blur="roles.onBlur"
    />
    <TextInput
      label="Password"
      type="password"
      :error="password.error"
      :value="password.value"
      @change="password.onChange"
      @blur="password.onBlur"
    />
    <TextInput
      label="Confirm Password"
      type="password"
      :error="confirm.error"
      :value="confirm.value"
      @change="confirm.onChange"
      @blur="confirm.onBlur"
    />
    <button :aria-busy="isSubmitting">Submit</button>
  </form>
  <DebugForm :form="form" />
</template>
