import React, { Component } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { List, ListProps } from 'react-virtualized'

const listStyle = {
  overflowX: null,
  overflowY: null
}

const noop = () => {}

class SmartList extends Component<
  ListProps & {
    className?: string
    listRef?: (list: List) => void
    scrollRef?: (scroller: Scrollbars) => void
  }
> {
  static defaultProps = {
    scroller: Scrollbars,
    listRef: noop,
    scrollRef: noop
  }
  list: List
  scroller: Scrollbars

  toList = ({ target }) => {
    const { scrollTop, scrollLeft } = target
    const { Grid: grid } = this.list

    grid.handleScrollEvent({ scrollTop, scrollLeft })
  }

  toScroller = ({ scrollTop }) => {
    if (this.scroller) {
      this.scroller.scrollTop(scrollTop)
    }
  }

  render() {
    const { className, ...props } = this.props
    const { width, height } = props

    return (
      <Scrollbars
        style={{ width, height }}
        onScroll={this.toList}
        className={className}
        ref={instance => {
          this.scroller = instance
          this.props.scrollRef(instance)
        }}
      >
        <List
          {...props}
          ref={instance => {
            this.list = instance
            this.props.listRef(instance)
          }}
          onScroll={this.toScroller}
          style={listStyle}
        />
      </Scrollbars>
    )
  }
}

export default SmartList
