import { InlineSvgPreviewComponent } from './InlineSvgPreviewComponent'
import styled, { css } from 'styled-components'
import { PreviewLayoutKey, PreviewProps } from 'sanity'

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`

const IconStyle = css`
  width: 35px;
  height: 35px;
  margin-right: 8px;
  flex-shrink: 0;
`

const Icon = styled(InlineSvgPreviewComponent)`
  ${IconStyle}
`

const IconStub = styled.div`
  ${IconStyle}
`

const Title = styled.span<{ empty?: boolean }>`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
  font-size: 1rem;
  line-height: calc(21 / 16);
  color: ${({ empty }) => (empty ? '#6e7683' : 'inherit')}};
`

const Subtitle = styled.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
  font-size: 0.8125rem;
  line-height: calc(17 / 13);
  color: #6e7683;
`

const TextContainer = styled.div`
  overflow: hidden;
`

export const InlineSvgPreviewItem = ({
  icon,
  title,
  subtitle,
}: {
  icon?: string | null
} & Pick<PreviewProps<PreviewLayoutKey>, 'title' | 'subtitle'>) => {
  if ((title && typeof title !== 'string') || (subtitle && typeof subtitle !== 'string')) {
    return (
      <Container>
        `InlineSvgPreviewItem` supports only string values for `title` and `subtitle` props.
      </Container>
    )
  }

  return (
    <Container>
      {icon ? <Icon value={icon} /> : <IconStub />}

      <TextContainer>
        {title ? <Title>{title}</Title> : <Title empty>Untitled</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TextContainer>
    </Container>
  )
}
