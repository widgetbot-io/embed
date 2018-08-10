type Options = { width: number; height: number }

export const Root = ({ width, height }: Options) => ({
  ...(height && { height: +height ? `${height}px` : height }),
  ...(width && { width: +width ? `${width}px` : width }),
  display: 'inline-block',
  overflow: 'hidden',
  backgroundColor: 'rgb(54, 57, 62)',
  borderRadius: 7,
  verticalAlign: 'top'
})

export const Embed = {
  width: '100%',
  height: '100%',
  border: 'none'
}
