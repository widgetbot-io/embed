import autobind from 'autobind-decorator'
import { cx } from 'emotion'
import memoize from 'memoizee'
import * as React from 'react'
import emoji from 'react-easy-emoji'
import { Base, Emote } from '@ui/shared/Emoji/elements'
import { emojis } from '@services/Emoji'
import Tooltip from 'rc-tooltip'

interface Props {
  [key: string]: any
  children?: any
  text?: string
  className?: string
  resolveNames?: boolean
  onlyEmojiClassName?: string
  src?: string
}

class Emoji extends React.PureComponent<Props> {
  static withComponent = Component => ({ children, ...props }) => (
    <Component {...props}>
      <Emoji>{children}</Emoji>
    </Component>
  )

  render() {
    let text = this.getText()
    let { className, resolveNames, src } = this.props

    // Return a custom emoji
    if (src) return <Emote src={src} className={cx('emoji', className)} />

    // Validate props
    if (typeof text !== 'string') {
      if (typeof text === 'undefined' || text === null) return null

      return React.cloneElement(text, {
        className: cx('emoji', Base, className)
      })
    }

    // Resolve all text representations of emojis
    if (resolveNames) text = this.resolve(text)

    const resolved = emoji(text, (code, string, key) => {
      const emoji = emojis.get(string)

      const emote = (
        <Emote
          innerRef={this.handleErrors}
          src={`https://twitter.github.io/twemoji/2/svg/${code + '.svg'}`}
          alt={string}
          className={cx('emoji', className)}
          key={key}
        />
      )

      return emoji ? (
        <Tooltip
          key={key}
          placement="top"
          overlay={`:${emoji.keywords[0]}:`}
          mouseEnterDelay={0.6}
          mouseLeaveDelay={0}
        >
          <span>{emote}</span>
        </Tooltip>
      ) : (
        emote
      )
    })

    return this.jumbofy(resolved)
  }

  getText() {
    let { children, text } = this.props
    return children && !text ? children : text
  }

  resolve = memoize((text: string) => {
    const parsed = text.replace(/:([^\s:]+?):/g, (match, name) => {
      const result = emojis.get(name)
      return result ? result.emoji : match
    })

    return parsed
  })

  /**
   * Resolves emojis as text embedded inside SVG if the CDN fails to load
   */
  @autobind
  handleErrors(img: HTMLImageElement) {
    if (!img) return

    img.onerror = () => {
      const alt = img.getAttribute('alt')
      if (alt === null) return

      const escape = document.createElement('span')
      escape.innerText = alt

      img.setAttribute(
        'src',
        `data:image/svg+xml;charset=UTF-8, ${encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet"><text font-size="80" dy=".35em" dx="-0.7em">${
            escape.innerHTML
          }</text></svg>`
        )}`
      )
    }
  }

  jumbofy(fragment: any[]) {
    const { onlyEmojiClassName } = this.props

    if (onlyEmojiClassName) {
      // Iterate through all fragment elements
      // until a either the fragment is not an object
      // and it's string contains characters other than
      // a space (or line break)
      const onlyEmoji = !fragment.find(
        fragment => !(fragment instanceof Object || !/\S/.test(fragment))
      )

      if (onlyEmoji) {
        return fragment.map(
          piece =>
            piece instanceof Object
              ? React.cloneElement(piece, {
                  className: cx(onlyEmojiClassName, piece.props.className)
                })
              : piece
        )
      }
    }

    return fragment
  }
}

export default Emoji
