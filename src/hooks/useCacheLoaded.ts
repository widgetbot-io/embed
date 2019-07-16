import { cacheLoaded } from '@lib/apollo/cache'
import { useState, useEffect } from 'react'

export const useCacheLoaded = () => {
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    cacheLoaded.then(() => setHasLoaded(true)).catch(() => setHasLoaded(false))
  }, [])

  return hasLoaded
}
