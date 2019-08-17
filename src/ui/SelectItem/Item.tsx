import * as React from 'react'
import { Selector } from './Selector'
import { Root } from './elements'

export interface ItemProps {
  itemID: string
  selected?: boolean
  [key: string]: any
}

export class Item extends React.Component<ItemProps> {
  static Root = Root
  static defaultProps: Partial<ItemProps> = {
    root: Root
  }
  static withComponent = Component => props => (
    <Item {...props} root={Root.withComponent(Component)} />
  )

  public node: HTMLElement

  render() {
    const { root: Root, children, selected, itemID, ...rest } = this.props
    if (selected) Selector.store.set(itemID, this)

    const captureRef = ref => {
      if (ref instanceof HTMLElement) this.node = ref
    }

    return (
      <Root
        {...rest}
        innerRef={captureRef}
        $ref={captureRef}
        selected={selected}
      >
        {children}
      </Root>
    )
  }
}
