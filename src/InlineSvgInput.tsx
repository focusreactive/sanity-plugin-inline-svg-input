import { ChangeEvent, useEffect, useRef } from 'react'
import { set, StringInputProps, unset } from 'sanity'
import styled, { css } from 'styled-components'
import DOMPurify from 'dompurify'

const Container = styled.div`
  background-image: linear-gradient(45deg, rgba(23, 23, 23, 0.05) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(23, 23, 23, 0.05) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(23, 23, 23, 0.05) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(23, 23, 23, 0.05) 75%);
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  border: 1px solid #c1c1c1;
  position: relative;

  input[type='file'] {
    opacity: 0;
    z-index: -1;
    position: absolute;
  }

  input[type='file']:focus + label {
    outline: 2px solid;
  }

  * {
    box-sizing: border-box;
  }
`

const SvgWrapper = styled.div`
  svg {
    max-height: 80%;
    max-width: 80%;
    display: flex;
    margin: auto;
    width: 100%;
    height: 100%;
  }
`

const ButtonStyle = css`
  border-radius: 0.1875rem;
  font: inherit;
  outline: none;
  border: 0;
  padding: 0.85rem 1.75rem;
  margin: 0;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
`

const AddButton = styled.label`
  ${ButtonStyle};
  color: #fff;
  background-color: #4285f4;

  &:hover {
    background-color: #3a6fc8;
  }
`

const RemoveButton = styled.button`
  ${ButtonStyle};
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  background-color: #db4437;

  &:hover {
    background-color: #b43b31;
  }
`

export const InlineSvgInput = ({ id, value, schemaType, onChange, focused }: StringInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (readerEvent) => {
      if (!readerEvent.target) return
      onChange(set(readerEvent.target.result))
    }
    reader.readAsText(file)
  }

  const focus = () => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }

  useEffect(() => {
    if (focused) focus()
  }, [focused])

  const clickedRemoveSvg = () => {
    // eslint-disable-next-line no-alert
    if (confirm('Are you sure you want to remove the SVG?')) {
      onChange(unset())
      if (inputRef.current) inputRef.current.value = ''
    }
    return false
  }

  return (
    <Container>
      <input
        accept=".svg"
        id={id}
        ref={inputRef}
        type="file"
        placeholder={schemaType.placeholder}
        onChange={handleChange}
        name={'inline-svg'}
      />

      {!value && <AddButton htmlFor={id}>Upload SVG</AddButton>}

      {value && (
        <SvgWrapper>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }} />

          <RemoveButton onClick={clickedRemoveSvg}>Remove SVG</RemoveButton>
        </SvgWrapper>
      )}
    </Container>
  )
}
