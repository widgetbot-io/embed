import * as React from 'react'
import GET_CHANNEL_NAME from './ChannelName.graphql'
import { useRouter, useSendMessage } from '@hooks'
import { useQuery } from 'react-apollo-hooks'
import Input from './Input'
import { Field, Root } from './elements'
import i18n from '@lib/i18n'
import { useState, useRef, FunctionComponent } from 'react'
import ErrorAhoy from "@ui/Overlays/ErrorAhoy";
import { formatError } from "@views/Messages/utils";
import { Loading } from "@ui/Overlays";
import { addNotification } from "notify";


export interface ChatProps {}

export const Chat: FunctionComponent<ChatProps> = (props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sendMessage = useSendMessage();
  const [rows, setRows] = useState(1);
  const { channel } = useRouter();
  const { data, error, errors, networkStatus, loading } = useQuery(GET_CHANNEL_NAME, { variables: { channel } });

  if (loading) return <Loading />;
  if (!data || !data.channel) {
    addNotification({
      level: 'error',
      title: 'Channel unavailable',
      message: 'This channel is not available.',
      autoDismiss: 0,

    });
    return null;
  }
  if (error) return <ErrorAhoy message={formatError(error)} />;


  const channelName = data.channel && data.channel.name;

  return (
    <Root className="chat">
      <Field rows={rows} className="field">
        <Input
          channel={data.channel}
          onChange={(value: string) => {
            const rows = value.split(/\r\n|\r|\n/).length;
            setRows(rows)
          }}
          onSubmit={async (content: string) => {
            if (content.length === 0) return

            // TODO: Clear the input field only when the user is signed in, otherwise they lose their message
            inputRef.current.value = ''

            await sendMessage(content)
          }}
          innerRef={ref => (inputRef.current = ref)}
          innerProps={{
            placeholder: channelName ? `Message #${channelName}` : null
          }}
        />

        {/* <Emoji /> */}
      </Field>
    </Root>
  )
}
