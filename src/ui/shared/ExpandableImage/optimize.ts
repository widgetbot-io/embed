import memoize from 'memoizee'

const DISCORD_CDN = /https:\/\/cdn.discordapp.com\/attachments\/(\d+)\/(\d+)\/(.+)\.(png|gif)/

const canUseWebP = memoize(() => {
  return false // Discord WebP compression is terrible

  const elem = document.createElement('canvas')
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
  }
  return false
})

const optimize = ({ width, height, url }) => {
  const match = url.match(DISCORD_CDN)

  if (match) {
    const [, id1, id2, file, type] = match
    const params = new URLSearchParams()

    params.set('height', `${Math.round(height * devicePixelRatio)}`)
    params.set('width', `${Math.round(width * devicePixelRatio)}`)
    if (type === 'png' && canUseWebP()) params.set('format', 'webp')

    return `https://media.discordapp.net/attachments/${id1}/${id2}/${file}.${type}?${params}`
  }

  return url
}

export default optimize
