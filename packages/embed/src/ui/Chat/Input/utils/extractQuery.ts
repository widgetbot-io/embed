const extractQuery = (input: HTMLInputElement | HTMLTextAreaElement) => {
  const caretPosition = input.selectionStart
  const value = input.value

  let leftIndex = caretPosition
  while (leftIndex > 0) {
    leftIndex -= 1
    if (/\s/.test(value[leftIndex])) {
      leftIndex += 1
      break
    }
  }

  return {
    caretPosition,
    leftIndex,
    query: value.substring(leftIndex, caretPosition)
  }
}

export default extractQuery
