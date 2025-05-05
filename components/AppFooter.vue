<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="bg-green-800 py-16">
      <div class="container">
        <div class="grid grid-cols-2 items-start">
          <div class="grid grid-cols-2 items-start">
            <div class="flex flex-col gap-8">
              <div class="inline-flex">
                <div class="bg-white inline-flex py-6 px-2 shadow-lg">
                  <img src="@/assets/svg/logo.svg" alt="">
                </div>
              </div>
              <div class="pr-20">
                <p class="text-sm text-white font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam delectus hic non quae
                  quaerat tempora. Accusamus cumque error</p>
              </div>
            </div>

            <div class="flex justify-center">
              <div class="flex-col">
                <h4 class="text-white font-semibold text-xl uppercase mb-10">{{ $t('main-pages') }}</h4>
                <ul class="flex flex-col gap-6">
                  <li>
                    <nuxt-link class="text-white font-medium text-xl capitalize hover:text-green-100 transition-colors"
                               to="#">{{ $t('main') }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="text-white font-medium text-xl capitalize hover:text-green-100 transition-colors"
                               to="#">{{ $t('programs') }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="text-white font-medium text-xl capitalize hover:text-green-100 transition-colors"
                               to="#">{{ $t('info') }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="text-white font-medium text-xl capitalize hover:text-green-100 transition-colors"
                               to="#">{{ $t('news') }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-10 items-start">
            <div class="flex justify-center">
              <div class="flex-col">
                <h4 class="text-white font-semibold text-xl uppercase mb-10">{{ $t('Contacts') }}</h4>
                <ul class="flex flex-col gap-6">
                  <li>
                    <nuxt-link class="text-white font-medium text-xl capitalize hover:text-green-100 transition-colors"
                               to="#">{{ $t('about') }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="text-white font-medium text-xl capitalize hover:text-green-100 transition-colors"
                               to="#">{{ $t('gallery') }}</nuxt-link>
                  </li>
<!--                  <li>-->
<!--                    <nuxt-link class="text-white font-medium text-xl capitalize hover:text-green-100 transition-colors"-->
<!--                               to="#">{{ $t('map') }}</nuxt-link>-->
<!--                  </li>-->
                  <li>
                    <nuxt-link class="text-white font-medium text-xl capitalize hover:text-green-100 transition-colors"
                               to="#">{{ $t('contacts') }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="flex-col">
                <h4 class="text-white font-semibold text-xl uppercase mb-10">{{ $t('Contacts') }}</h4>
                <ul class="flex flex-col gap-6">
                  <li class="flex items-center gap-2">
                  <span class="text-white font-medium text-xl  flex">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"/>
                      </svg>
                    </span>
                  </span>
                    <span class="text-white font-medium text-xl  flex">
                    mail@gmail.com
                  </span>
                  </li>
                  <li class="flex items-center gap-2">
                  <span class="text-white font-medium text-xl flex">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                      </svg>
                    </span>
                  </span>
                    <span class="text-white font-medium text-xl  flex">
                    +996-707-777-777
                  </span>
                  </li>
                  <li class="flex items-center gap-2">
                  <span class="text-white font-medium text-xl  flex">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                      </svg>
                    </span>
                  </span>
                    <span class="text-white font-medium text-xl  flex">
                    Bishkek st Сhingiz Aitmatov 301
                  </span>
                  </li>
                  <li class="flex items-center gap-6">
                    <div class=" flex items-center">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2072_1026)">
                          <g clip-path="url(#clip1_2072_1026)">
                            <g clip-path="url(#clip2_2072_1026)">
                              <g clip-path="url(#clip3_2072_1026)">
                                <mask id="mask0_2072_1026" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0"
                                      y="0" width="36" height="36">
                                  <path d="M36 0H0V36H36V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_2072_1026)">
                                  <path
                                      d="M18 36C27.9412 36 36 27.9412 36 18C36 8.05887 27.9412 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9412 8.05887 36 18 36Z"
                                      fill="#2CB5E5"/>
                                  <path
                                      d="M7.68168 17.5768C7.68168 17.5768 16.6854 13.8831 19.8126 12.5764C21.0061 12.0552 25.0698 10.3934 25.0698 10.3934C25.0698 10.3934 26.9432 9.66827 26.7845 11.4357C26.7317 12.1609 26.3162 14.714 25.9007 17.471C25.2738 21.3762 24.6015 25.6439 24.6015 25.6439C24.6015 25.6439 24.4957 26.845 23.612 27.0488C22.7282 27.2603 21.2705 26.3238 21.0061 26.1123C20.7946 25.9536 17.1009 23.6121 15.7489 22.4714C15.3863 22.1617 14.9708 21.5349 15.8017 20.8022C17.675 19.0874 19.9108 16.9498 21.2705 15.5978C21.8974 14.9708 22.5167 13.5129 19.9183 15.2881C16.2247 17.8412 12.5764 20.2356 12.5764 20.2356C12.5764 20.2356 11.7454 20.7568 10.1819 20.2885C8.61831 19.8201 6.79792 19.1932 6.79792 19.1932C6.79792 19.1932 5.5516 18.4152 7.68168 17.5768Z"
                                      fill="white"/>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_2072_1026">
                            <rect width="36" height="36" rx="18" fill="white"/>
                          </clipPath>
                          <clipPath id="clip1_2072_1026">
                            <rect width="36" height="36" fill="white"/>
                          </clipPath>
                          <clipPath id="clip2_2072_1026">
                            <rect width="36" height="36" fill="white"/>
                          </clipPath>
                          <clipPath id="clip3_2072_1026">
                            <rect width="36" height="36" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class=" flex items-center">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2072_1036)">
                          <g clip-path="url(#clip1_2072_1036)">
                            <g clip-path="url(#clip2_2072_1036)">
                              <g clip-path="url(#clip3_2072_1036)">
                                <mask id="mask0_2072_1036" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0"
                                      y="0" width="36" height="36">
                                  <path d="M35.745 0H0V35.745H35.745V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_2072_1036)">
                                  <path
                                      d="M17.8725 35.745C27.7432 35.745 35.745 27.7432 35.745 17.8725C35.745 8.00183 27.7432 0 17.8725 0C8.00183 0 0 8.00183 0 17.8725C0 27.7432 8.00183 35.745 17.8725 35.745Z"
                                      fill="url(#paint0_linear_2072_1036)"/>
                                  <path
                                      d="M22.8 11.895C22.2 11.895 21.7125 12.3825 21.7125 12.9825C21.7125 13.5825 22.2 14.07 22.8 14.07C23.4 14.07 23.8875 13.5825 23.8875 12.9825C23.8875 12.3825 23.4 11.895 22.8 11.895Z"
                                      fill="white"/>
                                  <path
                                      d="M17.9475 13.29C15.42 13.29 13.365 15.345 13.365 17.8725C13.365 20.4 15.42 22.455 17.9475 22.455C20.475 22.455 22.53 20.4 22.53 17.8725C22.53 15.345 20.475 13.29 17.9475 13.29ZM17.9475 20.805C16.3275 20.805 15.015 19.485 15.015 17.8725C15.015 16.26 16.335 14.94 17.9475 14.94C19.56 14.94 20.88 16.26 20.88 17.8725C20.88 19.485 19.56 20.805 17.9475 20.805Z"
                                      fill="white"/>
                                  <path
                                      d="M21.585 27.1723H14.16C11.0775 27.1723 8.57251 24.6673 8.57251 21.5848V14.1598C8.57251 11.0773 11.0775 8.57227 14.16 8.57227H21.585C24.6675 8.57227 27.1725 11.0773 27.1725 14.1598V21.5848C27.1725 24.6673 24.6675 27.1723 21.585 27.1723ZM21.585 25.4248C23.7 25.4248 25.425 23.6998 25.425 21.5848V14.1598C25.425 12.0448 23.7 10.3198 21.585 10.3198H14.16C12.045 10.3198 10.32 12.0448 10.32 14.1598V21.5848C10.32 23.6998 12.045 25.4248 14.16 25.4248H21.585Z"
                                      fill="white"/>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_2072_1036" x1="5.235" y1="5.235" x2="30.51" y2="30.51"
                                          gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFE185"/>
                            <stop offset="0.21" stop-color="#FFBB36"/>
                            <stop offset="0.38" stop-color="#FF5176"/>
                            <stop offset="0.52" stop-color="#F63395"/>
                            <stop offset="0.74" stop-color="#A436D2"/>
                            <stop offset="1" stop-color="#5F4EED"/>
                          </linearGradient>
                          <clipPath id="clip0_2072_1036">
                            <rect width="36" height="36" rx="18" fill="white"/>
                          </clipPath>
                          <clipPath id="clip1_2072_1036">
                            <rect width="36" height="36" fill="white"/>
                          </clipPath>
                          <clipPath id="clip2_2072_1036">
                            <rect width="36" height="36" fill="white"/>
                          </clipPath>
                          <clipPath id="clip3_2072_1036">
                            <rect width="36" height="36" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class=" flex items-center">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M36 18C36 8.05781 27.9422 0 18 0C8.05781 0 0 8.05781 0 18C0 26.9859 6.58125 34.432 15.1875 35.782V23.2031H10.6172V18H15.1875V14.0344C15.1875 9.52383 17.8734 7.03125 21.9867 7.03125C23.9555 7.03125 26.0156 7.38281 26.0156 7.38281V11.8125H23.7445C21.5086 11.8125 20.8125 13.2012 20.8125 14.625V18H25.8047L25.0066 23.2031H20.8125V35.782C29.4188 34.432 36 26.9859 36 18Z"
                            fill="#1877F2"/>
                        <path
                            d="M25.0066 23.2031L25.8047 18H20.8125V14.625C20.8125 13.2012 21.5086 11.8125 23.7445 11.8125H26.0156V7.38281C26.0156 7.38281 23.9555 7.03125 21.9867 7.03125C17.8734 7.03125 15.1875 9.52383 15.1875 14.0344V18H10.6172V23.2031H15.1875V35.782C16.1051 35.9262 17.0437 36 18 36C18.9563 36 19.8949 35.9262 20.8125 35.782V23.2031H25.0066Z"
                            fill="white"/>
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black/90">
      <div class="container flex justify-center py-2">
        <span class="text-white text-sm font-medium">2025 Copyright Avenir.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>