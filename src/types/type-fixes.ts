import { IObserverOptions } from 'mobx-react-lite'

// TODO remove https://github.com/mobxjs/mobx-react-lite/pull/68
declare module 'mobx-react-lite' {
  function observer<P extends object>(
    baseComponent: React.FunctionComponent<P>,
    options?: IObserverOptions
  ): React.FunctionComponent<P>
}
