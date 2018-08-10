import { expectValue } from '.'
import Options from '../../types/options'

export const options = (options: Options) => {
  const expect = expectValue(options)

  expect('', 'object', value => value instanceof Object, false)
  expect('.server', 'string')
  expect('.channel', 'string')

  expect(
    '.location',
    `['top' | 'bottom' | number, 'left' | 'right' | number]`,
    value =>
      value instanceof Array &&
      (typeof value[0] === 'number' ||
        value[0] === 'top' ||
        value[0] === 'bottom') &&
      (typeof value[1] === 'number' ||
        value[1] === 'left' ||
        value[1] === 'right')
  )

  expect('.color', 'string')
  expect(
    '.glyph',
    '[url, size]',
    value =>
      value instanceof Array &&
      typeof value[0] === 'string' &&
      typeof value[1] === 'string'
  )
  expect('.css', 'string')

  expect('.notifications', 'boolean')
  expect('.indicator', 'boolean')
  expect('.timeout', 'number')

  expect('.defer', 'boolean')
  expect('.shard', 'string')

  return options
}
