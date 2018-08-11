const DEFAULT = 'Discord user#0000'

export interface Username extends String {
  name: string
  discriminator: string
}

const parseUsername = (userName: string): Username => {
  if (!userName) userName = DEFAULT

  let name = userName
  let discriminator = '0000'
  if (userName.includes('#')) {
    const split = userName.split('#')
    name = split.slice(0, -1).join('#')
    discriminator = split.slice(-1)[0]
  }

  const result = new String(`${name}#${discriminator}`) as Username
  result.name = name
  result.discriminator = discriminator

  return result
}

export default parseUsername
