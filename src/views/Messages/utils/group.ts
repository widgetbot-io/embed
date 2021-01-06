import { Messages_channel_messages } from '@generated';
import { MessageType } from '@generated/globalTypes';

/**
 * Compares whether a message should go in a group
 */
const compareGroupability = (
  a: Messages_channel_messages,
  b: Messages_channel_messages
) => {
  const nonGroupable = ![MessageType.Default, MessageType.Reply].includes(a.type) || b.type !== MessageType.Default;
  const differentAuthor = a.author.id !== b.author.id || a.author.name !== b.author.name;
  const staleGroup = (Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))) > 5 * 60;

  return nonGroupable || differentAuthor || staleGroup
};

/**
 * Groups messages into an array
 * @example
 * [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 1 }]
 * // Output
 * [[{ id: 1 }], [{ id: 2 }], [{ id: 1 }, { id: 1 }]]
 * @param messages The messages to group
 */
export const groupMessages = <
  Group extends Messages_channel_messages[]
>(
  messages: Group
): Group[] => {
  const result = new Array<Group>()
  let group = null
  let previous: Messages_channel_messages

  for (const message of messages) {
    if (group === null || compareGroupability(previous, message)) {
      group = result.push([] as Group) - 1
    }
    result[group].push(message);
    previous = message
  }

  return result
};
