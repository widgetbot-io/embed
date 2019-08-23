import styled from '@lib/emotion'
import { ScrollOverlay } from '@ui/shared/scrollable'
import Button from "@ui/shared/button";

export const Root = styled(ScrollOverlay)`
  & > div:nth-child(1) {
    & > *:last-child {
      margin-bottom: 40px;
    }
  }
`;

const RefreshLink = Button.withComponent('a');

export const Refresh = styled(RefreshLink)`
  background: ${({ theme }) => theme.colors._accent.fade(0.6).string()};
  margin-left: 20px;
  padding-top: 0px !important;
  margin-right: auto
`;
