import { defineType } from '@sanity-typed/types'
import { InlineSvgInput } from './InlineSvgInput'

export const inlineSvgType = defineType({
  name: 'inlineSvg',
  title: 'Inline SVG',
  type: 'string',
  components: {
    input: InlineSvgInput,
  },
})
