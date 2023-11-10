import { definePlugin } from 'sanity'
import { inlineSvgType } from './inlineSvgType'

interface InlineSvgInputConfig {}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {inlineSvgInput} from '@focusreactive/sanity-plugin-inline-svg-input'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [inlineSvgInput()],
 * })
 * ```
 */
export const inlineSvgInput = definePlugin<InlineSvgInputConfig | void>((config = {}) => {
  return {
    name: 'sanity-plugin-inline-svg-input',
    schema: {
      types: [inlineSvgType],
    },
  }
})
