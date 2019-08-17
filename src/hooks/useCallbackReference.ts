import { useEffect, useRef } from 'react'

export const useCallbackReference = <T extends Function>(callback: T): T => {
  const callbackRef = useRef(callback)

  useEffect(
    () => {
      callbackRef.current = callback
    },
    [callback]
  )

  return ((...args) => callbackRef.current(...args)) as any
}
