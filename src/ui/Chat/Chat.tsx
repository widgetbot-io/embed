import * as React from 'react'
import GET_CHANNEL_NAME from './ChannelName.graphql'
import { useRouter, useSendMessage } from '@hooks'
import { useQuery } from 'react-apollo-hooks'
import Input from './Input'
import { Field, Root } from './elements'
import { useState, useRef, FunctionComponent } from 'react'
import ErrorAhoy from "@ui/Overlays/ErrorAhoy";
import { formatError } from "@views/Messages/utils";
import { Loading } from "@ui/Overlays";
import { addNotification } from "notify";
import { Locale } from '@lib/Locale'


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
      title: Locale.translate('frontend.notif.channelunavailable'),
      message: Locale.translate('frontend.notif.channelunavailable.desc'),
      autoDismiss: 0,

    });
    return null;
  }
  if (error) addNotification({
    level: 'warning',
    title: Locale.translate('frontend.notif.loaderror.chat'),
    message: formatError(error),
    autoDismiss: 0,

  });
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
            placeholder: channelName ? Locale.translate('frontend.input.message', {CHANNEL: channelName}) : null
          }}
        />

        {/* <Emoji /> */}
      </Field>
    </Root>
  )
}
