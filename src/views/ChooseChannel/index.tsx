import { Chat } from '@ui/Overlays'
import Header, { Name, Topic } from '@ui/Header'
import Wrapper from '@ui/Wrapper'

const ChooseChannel = () => (
  <Wrapper>
    <Header>
      <Name>
        Select a channel
      </Name>
      <Topic>
        Pick a channel from the left
      </Topic>
    </Header>
    <Chat />
  </Wrapper>
);

export default ChooseChannel
