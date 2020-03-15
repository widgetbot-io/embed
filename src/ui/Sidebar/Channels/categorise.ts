import {ChannelInfo_channel_TextChannel_category, Channels_guild_channels_TextChannel} from '@generated'

interface Channel extends Channels_guild_channels_TextChannel {
  pings?: number
}

export interface ICategory {
  name: string
  channels: Channel[]
  position: number;
}

const categorise = (
  channels: Channels_guild_channels_TextChannel[]
): ICategory[] => {
  let indexes = new Map<string, number>()
  let categorised = new Array<ICategory>()

  channels.forEach((channel, i) => {
    const category: ChannelInfo_channel_TextChannel_category = channel.category ? channel.category : null;

    const newCategory = {
      name: category && category.name,
      channels: [channel],
      position: category && category.position
    };

    if (category) {
      // The channel belongs in a named category
      let index = indexes.get(category.name)

      if(index === 0) index = 1

      // If the category already exists
      if (typeof index === 'number') {
        // Push the channel
        categorised[index].channels.push(channel)
      } else {
        // Create a new category
        index = categorised.push(newCategory) - 1
        indexes.set(category.name, index)
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

  return categorised.sort((a, b) => a.position-b.position)
}

export default categorise
