import 'reflect-metadata'

import * as validators from './validators'

type Validator = [number, Function]

const validatedMetadataKey = Symbol('validated')

export function validate(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<Function>
) {
  let method = descriptor.value
  descriptor.value = function() {
    let requiredParameters: Validator[] = Reflect.getOwnMetadata(
      validatedMetadataKey,
      target,
      propertyName
    )
    if (requiredParameters) {
      for (let [parameterIndex, validator] of requiredParameters) {
        validator(arguments[parameterIndex])
      }
    }

    return method.apply(this, arguments)
  }
}

export const is = Object.keys(validators).reduce(
  (prev, validator) => ({
    ...prev,
    [validator]: (
      target: Object,
      propertyKey: string | symbol,
      parameterIndex: number
    ) => {
      let existingValidatedParameters: Validator[] =
        Reflect.getOwnMetadata(validatedMetadataKey, target, propertyKey) || []

      existingValidatedParameters.push([parameterIndex, validators[validator]])

      Reflect.defineMetadata(
        validatedMetadataKey,
        existingValidatedParameters,
        target,
        propertyKey
      )
    }
  }),
  {}
) as { [key in keyof typeof validators]: Function }

export const expectValue = options => (
  path: string,
  type: string,
  isValid?: Function,
  acceptFalsy = true
) => {
  const resolved = `options${path}`
  const value = eval(resolved)
  const valid =
    (typeof isValid === 'function' ? isValid(value) : typeof value === type) ||
    (!value && acceptFalsy)

  if (!valid) {
    console.error('Invalid options!', options)
    throw new TypeError(
      `Expected '${resolved}' to be typeof '${type}', received '${(value
        ? value.constructor.name
        : typeof value
      ).toLowerCase()}'`
    )
  }
}

export const check = validators
