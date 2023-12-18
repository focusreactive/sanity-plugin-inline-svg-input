import { castFromTyped, definePlugin } from '@sanity-typed/types'
import { inlineSvgType } from './inlineSvgType'
import { InlineSvgPreviewComponent } from './InlineSvgPreviewComponent'
import { InlineSvgPreviewItem } from './InlineSvgPreviewItem'

export interface InlineSvgInputConfig {}

/**
 * Usage in `sanity.config.ts`
 *
 * ```ts
 * import {defineConfig} from '@sanity-typed/types'
 * import {inlineSvgInput} from '@focus-reactive/sanity-plugin-inline-svg-input'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [inlineSvgInput()],
 * })
 * ```
 */
export const inlineSvgInputTyped = definePlugin((config: InlineSvgInputConfig | void) => {
  return {
    name: 'sanity-plugin-inline-svg-input',
    schema: {
      types: [inlineSvgType],
    },
  }
})

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {inlineSvgInput} from '@focus-reactive/sanity-plugin-inline-svg-input'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [inlineSvgInput()],
 * })
 * ```
 */
export const inlineSvgInput = castFromTyped(inlineSvgInputTyped)

export { InlineSvgPreviewComponent, InlineSvgPreviewItem }
