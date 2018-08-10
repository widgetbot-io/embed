import Crate from '../api'

const CDN_URL = `https://cdn.jsdelivr.net/npm/@widgetbot/crate@3`

const loadFromCDN = () =>
  new Promise<typeof Crate>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = CDN_URL
    document.head.appendChild(script)

    script.onload = () => resolve((window as any).Crate)
    script.onerror = () => reject('Failed to load Crate!')
  })

export default loadFromCDN
