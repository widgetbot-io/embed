export interface Root extends HTMLDivElement {
  createInstance(): HTMLDivElement
}

export type Node = HTMLDivElement

const root = document.createElement('widgetbot-crate') as Root

root.setAttribute('src', 'https://widgetbot.io')
root.setAttribute('docs', 'docs.widgetbot.io')

if (document.body) {
  document.body.appendChild(root)
} else {
  document.addEventListener('DOMContentLoaded', () =>
    document.body.appendChild(root)
  )
}

root.createInstance = () => {
  const crate = document.createElement('crate') as Node
  root.appendChild(crate)

  return crate
}

export default root
