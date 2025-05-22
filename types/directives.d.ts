import type { ScrollAnimateOptions } from '../plugins/scrollAnimate'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        vScrollAnimate: typeof import('../plugins/scrollAnimate').scrollAnimateDirective
    }
}

export {}