import * as React from 'react'

import { Burger, Ham } from './elements'

interface Props {
  onClick?: Function
  open?: boolean
}

const Hamburger = ({ onClick, open }: Props) => (
  <Ham
    open={open || false}
    onClick={onClick ? onClick.bind(this) : null}
    className="hamburger"
  >
    <Burger />
  </Ham>
)

export default Hamburger
