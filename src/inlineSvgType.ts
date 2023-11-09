import { defineType } from 'sanity'
import { InlineSvgInput } from './InlineSvgInput'

export const inlineSvgType = defineType({
  name: 'inlineSvg',
  title: 'Inline SVG',
  type: 'string',
  components: {
    input: InlineSvgInput,
  },
})
