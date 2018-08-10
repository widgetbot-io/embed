;(function() {
  'use strict'

  var options = INSTALL_OPTIONS
  var js = {
    loaded: false
  }

  js.script = document.createElement('script')
  js.script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3'
  js.script.async = true
  js.script.defer = true

  if (document.head) {
    document.head.appendChild(js.script)
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(js.script)
    })
  }

  js.script.onload = function() {
    js.loaded = true
    renderApp()
  }

  function handlerRender() {
    if (js.loaded) renderApp()
  }

  function renderApp() {
    if (!window.Crate) return
    if (options.buttons) {
      if (options.buttons.length) {
        // Kill any previous crate instances
        var index
        if (window.crates) {
          for (index = 0, len = window.crates.length; index < len; index++) {
            try {
              console.debug(
                `%c\u2604\uFE0F cloudflare-apps [Crate] %c Removing ${index}`,
                'color: #40b8ff',
                'color: #fff816'
              )
              window.crates[index].remove()
              window.crates.splice(index, 1)
            } catch (e) {
              console.warn(
                `%c\u2604\uFE0F cloudflare-apps [Crate] %c Could not remove an existing crate instance, this *may* cause duplication issues`,
                'color: #40b8ff',
                'color: #fff816',
                e
              )
            }
          }
        }
        for (var i = 0, len = options.buttons.length; i < len; i++) {
          var button = options.buttons[i]
          var config = {
            server: button.server || '339515332702240769', // Default cloudflare discord server,
            channel: button.channel || '407710314424172544', // Default cloudflare discord channel
            color: button.colors.toggle,
            indicator: button.customization.indicator,
            timeout: button.customization.toasts.visibilityTime,
            notifications: button.customization.showToasts,
            location: button.position.split('-'),
            defer: button.advanced.delay
          }

          if (button.customization.image) {
            config.glyph = [
              button.customization.image,
              button.customization.imageSize +
                '% ' +
                button.customization.imageSize +
                '% '
            ]
          }

          if (button.advanced.beta) config.shard = 'https://beta.widgetbot.io'

          if (i === 0) {
            if (window.crate) {
              // Update the state without re-mounting
              console.debug(
                `%c\u2604\uFE0F cloudflare-apps [Crate] %c Updating window.crate options`,
                'color: #40b8ff',
                'color: #fff816'
              )
              window.crate.setOptions(config)
            } else {
              console.debug(
                `%c\u2604\uFE0F cloudflare-apps [Crate] %c Creating window.crate`,
                'color: #40b8ff',
                'color: #fff816'
              )
              window.crate = new window.Crate(config)
            }
          } else {
            if (!window.crates) {
              console.debug(
                `%c\u2604\uFE0F cloudflare-apps [Crate] %c Created the window.crates variable`,
                'color: #40b8ff',
                'color: #fff816'
              )
              window.crates = []
            }
            window.crates.push(new Crate(config))
            console.debug(
              `%c\u2604\uFE0F cloudflare-apps [Crate] %c Pushed ${index} to window.crates`,
              'color: #40b8ff',
              'color: #fff816',
              window.crates
            )
          }
        }
      } else if (window.crate && window.crate.state) {
        // TODO: Re-implement .remove()
        window.crate.hide()
        window.crate = null
      }
    }
    // window.crate = new window.Crate({
    // })
  }

  window.INSTALL_SCOPE = {
    setOptions: function setOptions(nextOptions) {
      options = nextOptions
      handlerRender()
    }
  }
})()
