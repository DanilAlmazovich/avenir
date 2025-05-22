<script setup lang="ts">

</script>

<template>
  <section class="pt-36 pb-10">
    <div class="container">
      <h2 v-scroll-animate
          class="text-5xl font-bold text-green-500 uppercase text-center mb-20">{{ $t('information') }}</h2>
      <div class="grid grid-cols-4 gap-16 pt-4">
        <div class="flex flex-col items-center" >
          <div class="mb-6 pb-2 px-10">
            <img src="@/assets/images/001-successful.png" alt="">
          </div>
          <h6 class="text-xl font-semibold mb-2">Cusom label text</h6>
          <p class="text-center text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam, aut blanditiis dolorum error
            fuga laboriosam omnis pariatur vel vitae! Ad architecto at atque autem deserunt iusto pariatur quo, vel?</p>
        </div>

        <div class="flex flex-col items-center" >
          <div class="mb-6 pb-2 px-10">
            <img src="@/assets/images/002-expert.png" alt="">
          </div>
          <h6 class="text-xl font-semibold mb-2">Cusom label text</h6>
          <p class="text-center text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam, aut blanditiis dolorum error
            fuga laboriosam omnis pariatur vel vitae! Ad architecto at atque autem deserunt iusto pariatur quo, vel?</p>
        </div>

        <div class="flex flex-col items-center" >
          <div class="mb-6 pb-2 px-10">
            <img src="@/assets/images/003-checked.png" alt="">
          </div>
          <h6 class="text-xl font-semibold mb-2">Cusom label text</h6>
          <p class="text-center text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam, aut blanditiis dolorum error
            fuga laboriosam omnis pariatur vel vitae! Ad architecto at atque autem deserunt iusto pariatur quo, vel?</p>
        </div>

        <div class="flex flex-col items-center" >
          <div class="mb-6 pb-2 px-10">
            <img src="@/assets/images/004-completed-task.png" alt="">
          </div>
          <h6 class="text-xl font-semibold mb-2">Cusom label text</h6>
          <p class="text-center text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam, aut blanditiis dolorum error
            fuga laboriosam omnis pariatur vel vitae! Ad architecto at atque autem deserunt iusto pariatur quo, vel?</p>
        </div>
      </div>
<!--      <ElementsMore/>-->
    </div>
  </section>
</template>