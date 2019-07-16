import { Channels_guild_channels_TextChannel } from '@generated'

export interface ICategory {
  name: string
  channels: Channels_guild_channels_TextChannel[]
}

const categorise = (
  channels: Channels_guild_channels_TextChannel[]
): ICategory[] => {
  let indexes = new Map<string, number>()
  let categorised = new Array<ICategory>()

  channels.forEach((channel, i) => {
    const category = channel.parent ? channel.parent.name : null

    const newCategory = {
      name: category,
      channels: [channel]
    }

    if (category) {
      // The channel belongs in a named category
      let index = indexes.get(category)

      // If the category already exists
      if (typeof index === 'number') {
        // Push the channel
        categorised[index].channels.push(channel)
      } else {
        // Create a new category
        index = categorised.push(newCategory) - 1
        indexes.set(category, index)
      }
    } else {
      // The channel doesn't belong in a named category
      const [firstCategory] = categorised

      // If the first category is unnamed, then insert
      // this channel into it
      if (firstCategory && !firstCategory.name) {
        firstCategory.channels.push(channel)
      } else {
        categorised.unshift(newCategory)
      }
    }
  })

  return categorised
}

export default categorise
