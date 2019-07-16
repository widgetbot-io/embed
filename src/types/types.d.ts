declare module '*.graphql' {
  import { DocumentNode } from 'graphql'

  const value: DocumentNode
  export = value
}

declare module '*.svg' {
  const content: any
  export default content

  const ReactComponent: any
  export { ReactComponent }
}
