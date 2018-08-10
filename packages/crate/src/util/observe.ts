const observe = <T>(
  value: T,
  store,
  callback: <Key extends keyof T>(key: Key, value: T[Key]) => void
): T & { get: () => T; set: (value: T) => T } => {
  let observed = {} as any

  Object.keys(value).forEach(key => {
    store[key] = value[key]

    Object.defineProperty(observed, key, {
      get: () => store[key],
      set(value) {
        callback(key as keyof T, value)
        store[key] = value
      }
    })
  })

  observed.get = () => store
  observed.set = value => {
    Object.keys(value).forEach(key => (store[key] = value[key]))
    return store
  }

  return observed
}

export default observe
