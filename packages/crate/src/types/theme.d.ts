import Options from './options'

interface Theme {
  options: Options
  open: boolean
  visible: boolean
  coords: {
    x: {
      axis: 'left' | 'right'
      offset: number
      margin: number
    }
    y: {
      axis: 'top' | 'bottom'
      offset: number
      margin: number
    }
  }
}

export default Theme
