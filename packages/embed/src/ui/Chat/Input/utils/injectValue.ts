interface Props {
  input: HTMLInputElement | HTMLTextAreaElement
  value: string

  leftIndex: number
  caretPosition: number
}

const injectValue = ({ input, value, ...rest }: Props) => {
  const text = input.value

  const Query = {
    before: text.substring(0, rest.leftIndex),
    after: text.substring(rest.caretPosition, text.length)
  }

  const newText = `${Query.before}${value} ${Query.after}`
  input.value = newText

  input.focus()
  const newCaretPosition = rest.leftIndex + value.length + 1
  input.setSelectionRange(newCaretPosition, newCaretPosition)

  return newText
}

export default injectValue
