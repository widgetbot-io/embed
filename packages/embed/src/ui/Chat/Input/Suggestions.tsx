import autobind from 'autobind-decorator'
import * as React from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'

import { handlers } from '.'
import { Suggestion, Suggestions } from './elements'

interface Props {
  onSelect: Function
  query: string
  handler: typeof handlers[number] | any
}

const MAX_SUGGESTIONS = 15

class EmojiSuggestions extends React.Component<Props> {
  state = {
    selected: 0,
    suggestions: []
  }
  mouseEvent = false

  static getDerivedStateFromProps(props: Props, state) {
    const { handler, query } = props

    if (handler) {
      const suggestions = handler
        .getSuggestions(query)
        .slice(0, MAX_SUGGESTIONS)

      return {
        suggestions,
        selected: state.selected > suggestions.length ? 0 : state.selected
      }
    }

    return null
  }

  traverseSuggestions(increment) {
    const { suggestions } = this.state

    this.mouseEvent = false
    const index = this.state.selected + (increment ? 1 : -1)
    this.setState({
      selected: (index + suggestions.length) % suggestions.length
    })
  }

  selectSuggestion() {
    const { suggestions, selected } = this.state

    this.props.onSelect(suggestions[selected])
  }

  @autobind
  focus(suggestion: HTMLElement) {
    if (suggestion && !this.mouseEvent) {
      scrollIntoView(suggestion, {
        behavior: 'smooth',
        scrollMode: 'if-needed'
      })
    }
  }

  render() {
    const { selected, suggestions } = this.state
    const { query, handler } = this.props

    return suggestions.length ? (
      <Suggestions length={suggestions.length}>
        {handler.description(query)}

        {suggestions.map((suggestion, index) => (
          <Suggestion
            key={handler.toString(suggestion)}
            selected={index === selected}
            innerRef={index === selected ? this.focus : null}
            onClick={() => this.props.onSelect(suggestion)}
            onMouseOver={() => {
              this.setState({ selected: index })
              this.mouseEvent = true
            }}
            children={handler.suggestion(suggestion)}
          />
        ))}
      </Suggestions>
    ) : null
  }
}

export default EmojiSuggestions
