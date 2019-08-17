import * as React from 'react'
import { SelectorRoot } from './elements'
import { Item } from './Item'
import autobind from 'autobind-decorator'

export interface SelectorProps {
  itemID: string
}

export interface SelectorState {
  selectedItem: Item
}

@autobind
export class Selector extends React.Component<SelectorProps, SelectorState> {
  static Root = SelectorRoot
  static store = new Map<string, Item>()

  state = {
    selectedItem: null
  }

  componentDidMount() {
    this.recalculate()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    const { itemID } = this.props

    Selector.store.delete(itemID)
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    this.recalculate()
  }

  private handleResize() {
    this.forceUpdate()
  }

  public deselect() {
    if (!this.state.selectedItem) return

    this.setState({ selectedItem: null })
  }

  public recalculate() {
    const { itemID } = this.props

    const selectedItem = Selector.store.get(itemID)
    if (!selectedItem) return this.deselect()

    const isStillSelected = selectedItem.props.selected
    if (!isStillSelected) return this.deselect()

    if (this.state.selectedItem !== selectedItem) {
      this.setState({ selectedItem })
    }
  }

  render() {
    const { selectedItem } = this.state

    if (selectedItem) {
      const { node } = selectedItem

      return <SelectorRoot selected={true} offset={node.offsetTop} />
    }

    return null
  }
}
