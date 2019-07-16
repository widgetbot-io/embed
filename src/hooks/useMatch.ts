import { useContext } from 'react'
// @ts-ignore
import { __RouterContext, matchPath, match } from 'react-router-dom'
import { Location } from 'history'
import { history } from '@lib/history'

export const useLocation = () => {
  let context = useContext<any>(__RouterContext)
  return context.location
}

interface useMatchProps {
  exact?: boolean
  sensitive?: boolean
  strict?: boolean
  relative?: boolean
  location?: Location
}

export const useMatch = <T = any>(
  path: string,
  options: useMatchProps = {}
) => {
  const location = !options.relative
    ? history.location
    : options.location || useLocation()

  const match: match<T> = matchPath<T>(location.pathname, { ...options, path });

  return match ? match.params : null;
}
