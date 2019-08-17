import styled from 'react-emotion'

interface IRoot {
  selected: boolean
}
export const Root = styled('button')<IRoot>`
  position: relative;
  text-decoration: none;
  user-select: none;
  cursor: ${({ selected }) => (selected ? 'default' : 'pointer')};
  display: flex;
  border-radius: 3px;
  flex-direction: row;
  font-size: 16px;
  font-weight: 500;
  height: 32px;
  line-height: 32px;
  width: calc(100% - 16px);
  margin: 2px 8px;
  padding: 0 8px;
  color: ${({ selected, theme }) =>
    selected
      ? `${theme.colors._primary.fade(0.1).string()} !important`
      : theme.colors._primary.fade(0.7).string()};

  @media (max-width: 400px), (max-height: 340px) {
    height: 28px;
    line-height: 28px;
    font-size: 14px;
  }
`

interface ISelectorRoot {
  offset: number
}
export const SelectorRoot = styled(Root)<ISelectorRoot>`
  position: absolute;
  pointer-events: none;
  top: 0;

  transition: transform 0.3s ease;
  transform: ${({ offset }) => `translateY(${offset}px)`};
  z-index: -1;

  background-color: ${({ theme }) =>
    theme.colors._primary.fade(0.9).string()} !important;

  margin-top: 0 !important;
`
