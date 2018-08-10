import Options from '../types/options'
import observe from '../util/observe'

export const enhancer =
  (process.env.NODE_ENV === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
  undefined

export const log = (method: keyof Console, ...data) =>
  console[method](
    '%c<{ crate.js }>',
    'font-weight: bold; font-style: italic',
    ...data
  )

export const observeOptions = (presets: Options, setter: Function) => {
  const store = {} as Options
  const options = observe(presets, store, (key, value) => {
    setter({ [key]: value })
  })

  return options
}
