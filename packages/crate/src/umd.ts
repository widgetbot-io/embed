import Crate from './api'

console.log(
  `%c+%chttps://widgetbot.io\n%cPopup Discord chat widgets for your website.`,
  `font-size: 1px; margin-bottom: 5px; margin-left: 40px; padding: 10px 15px; line-height: 12px;background: url("https://i.imgur.com/S7IIIbE.png"); background-repeat: no-repeat; background-size: 30px; color: transparent;`,
  `padding-left: 2px; font-size: 14px; color: #7289DA; font-family: "Roboto", sans-serif`,
  `padding-left: 15px; font-size: 11px; font-family: "Roboto", sans-serif; `
)

// Evaluate content inside <script> tag
if (document) {
  const { currentScript: script } = document

  // Allow webpack to inject global Crate variable
  setTimeout(() => {
    if (script && !script.getAttribute('no-eval')) {
      const asyncAwait = (() => {
        try {
          eval('eval("(async function() {})")')
        } catch (e) {
          return false
        }
        return true
      })()

      eval(
        asyncAwait
          ? `(async function() {${script.innerHTML}})()`
          : script.innerHTML
      )
    }
  }, 0)
}

export default Crate
