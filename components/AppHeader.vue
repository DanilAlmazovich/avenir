<script setup lang="ts">

</script>

<template>
  <header class="bg-green-500/99 fixed w-full shadow-lg">
    <div class="container">
    <div class="grid grid-cols-3">
      <div class="flex items-center gap-8 py-4">
        <nuxt-link class="text-xl font-semibold text-white hover:text-green-200 transition-colors uppercase"
            to="#">{{ $t('main') }}</nuxt-link>
        <nuxt-link class="text-xl font-semibold text-white hover:text-green-200 transition-colors uppercase"
            to="#">{{ $t('programs') }}</nuxt-link>
        <nuxt-link class="text-xl font-semibold text-white hover:text-green-200 transition-colors uppercase"
            to="#">{{ $t('info') }}</nuxt-link>
      </div>
      <div class="relative">
        <div class="absolute top-0 left-0 right-0 m-auto bg-white w-[250px] flex justify-center items-center py-6 px-2 shadow-lg">
          <img class="bg-white" src="@/assets/svg/logo.svg" alt="">
        </div>
      </div>
      <div class="flex items-center gap-8 justify-end py-4">
        <nuxt-link class="text-xl font-semibold text-white hover:text-green-200 transition-colors uppercase"
            to="#">{{ $t('news') }}</nuxt-link>
        <nuxt-link class="text-xl font-semibold text-white hover:text-green-200 transition-colors uppercase"
            to="#">{{ $t('about') }}</nuxt-link>
        <nuxt-link class="text-xl font-semibold text-white hover:text-green-200 transition-colors uppercase"
            to="#">{{ $t('contacts') }}</nuxt-link>
      </div>
    </div>
    </div>
  </header>
</template>