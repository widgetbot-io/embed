import Color from 'color'

import Options from '../types/options'

export const getCoords = (
  [y, x]: Options['location'],
  [xMargin, yMargin] = [20, 20]
) => ({
  x: {
    axis: typeof x === 'string' ? x : x > -1 ? 'left' : 'right',
    offset: typeof x === 'string' ? xMargin : Math.abs(x),
    margin: typeof x === 'string' ? xMargin : 0
  },
  y: {
    axis: typeof y === 'string' ? y : y > -1 ? 'top' : 'bottom',
    offset: typeof y === 'string' ? yMargin : Math.abs(y),
    margin: typeof y === 'string' ? yMargin : 0
  }
})

export const getAccent = (color: string): string =>
  (color => (color.luminosity() > 0.6 ? color.darken(0.7) : '#fff'))(
    Color(color)
  ).toString()
