<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="grid">
    <aside>
      <nav>
        <ul>
          <li>
            <RouterLink :to="{ name: 'home' }">Introduction</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'explicit-fields-create' }">
              Explicit Fields - "Create" form
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'explicit-fields-update' }">
              Explicit Fields - "Update" form
            </RouterLink>
          </li>
        </ul>
      </nav>
    </aside>
    <RouterView />
  </div>
</template>

<style>
#app {
  --grid-spacing-horizontal: 60px;
  padding: 30px;
}

aside {
  /* max-width: 200px; */
  /* border: solid 2px red; */
}

code {
  padding: 20px;
  width: 100%;
}
</style>
