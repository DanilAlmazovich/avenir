import type { Directive, DirectiveBinding } from 'vue'

interface ScrollAnimateOptions {
    threshold?: number
    onIntersect?: () => void
}

const scrollAnimateDirective: Directive<HTMLElement, ScrollAnimateOptions | undefined> = {
    mounted(el: HTMLElement, binding: DirectiveBinding<ScrollAnimateOptions | undefined>) {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: binding.value?.threshold ?? 0.2
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add('opacity-100', 'translate-y-0')
                    el.classList.remove('opacity-0', 'translate-y-10')

                    observer.unobserve(el)

                    binding.value?.onIntersect?.()
                }
            })
        }, options)

        // Начальное состояние
        el.classList.add(
            'opacity-0',
            'translate-y-10',
            'transition-all',
            'duration-1000',
            'ease-in-out'
        )

        observer.observe(el)
    },

    // Для SSR
    getSSRProps() {
        return {
            class: 'opacity-100 translate-y-0'
        }
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('scroll-animate', scrollAnimateDirective)
})