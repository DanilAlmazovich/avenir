<script setup lang="ts">

</script>

<template>
  <section class="pt-36 pb-24">
    <div class="container">
      <h2 v-scroll-animate
          class="text-5xl font-bold text-green-500 uppercase text-center mb-20">{{ $t('Faq') }}</h2>
      <div class="grid mb-4">
        <Accordion value="0">
          <AccordionPanel v-for="n in 10" :key="n" :value="n">
            <AccordionHeader>
              <div class="py-4">
                <span class="text-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur, similique!?</span>
              </div>
            </AccordionHeader>
            <AccordionContent class="text-lg font-medium">
              <div class="py-2">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Accusantium animi asperiores aspernatur aut blanditiis culpa cum
                cupiditate delectus distinctio dolorem dolores ducimus earum eos est eveniet expedita
                explicabo facilis fugit impedit ipsam modi molestiae nemo, nesciunt odit pariatur porro
                possimus, quaerat quidem quod ratione recusandae repudiandae saepe tempora! Ab accusamus
                aliquam beatae error fuga in labore laudantium, magnam nostrum odit, omnis perspiciatis
                provident reprehenderit tempore ut, vero voluptates? Architecto autem nemo omnis, quas
                recusandae repellendus tenetur vel velit! Enim, et, repudiandae? Cupiditate dolorem dolorum
                labore nihil nulla. A assumenda deleniti dolorem ducimus expedita, facilis ipsam nam, perspiciatis,
                qui repudiandae voluptatibus.
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
<!--      <ElementsMore/>-->
    </div>
  </section>
</template>