import Embed from './embed'
import { API } from './types'

const { version } = require('../package.json')

class WidgetBot {
  public version = version
  public embeds = [] as API[]

  constructor() {
    this.register()

    document.addEventListener('DOMContentLoaded', this.register.bind(this))
  }

  public register() {
    const widgetbots = document.getElementsByTagName('widgetbot') as any

    for (const embed of widgetbots) {
      const { root } = new Embed(embed)
      this.embeds.push(root)
    }
  }
}

export default WidgetBot
