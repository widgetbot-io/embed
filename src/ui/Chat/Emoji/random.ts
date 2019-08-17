let previous = null

/**
 * Returns a random emoji
 */
const randomEmoji = (): string => {
  const code = Math.floor(Math.random() * (128566 - 128513 + 1)) + 128513
  const buffer = document.createElement('textarea')
  buffer.innerHTML = `&#${code}`
  const emoji = buffer.value

  if (previous === emoji) return randomEmoji()
  previous = emoji
  return emoji
}

export default randomEmoji
