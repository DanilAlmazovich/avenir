<script setup lang="ts">

</script>

<template>
  <section class="pt-36 pb-10">
    <div class="container">
      <h2 class="text-5xl font-bold text-green-500 uppercase text-center mb-20">{{ $t('news') }}</h2>
      <div class="grid grid-cols-2 gap-16 mb-4">
        <div v-for="n in 4" class="mb-6">
          <div class="mb-4 overflow-hidden rounded-lg">
            <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_4/v1723208055/summitcdsorg/usqnxynfgmkpf6blbk01/EXTENDEDDAY1440x620.jpg">
          </div>
          <h5 class="text-2xl font-semibold text-green-500">Main title</h5>
          <p class="text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sequi. adipisicing elit. Eveniet, sequi adipisicing elit. Eveniet, sequi..</p>
        </div>
      </div>
      <ElementsMore/>
    </div>
  </section>
</template>