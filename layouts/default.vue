<script setup lang="ts">
import AppFooter from "~/components/AppFooter.vue";
import AppHeader from "~/components/AppHeader.vue";
</script>

<template>
  <AppHeader/>
    <main class="pt-[52px]">
      <slot/>
    </main>
  <AppFooter/>
</template>