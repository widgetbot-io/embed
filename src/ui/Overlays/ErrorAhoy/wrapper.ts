import styled, { css } from '@lib/emotion'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  transition: margin 0.3s ease, width 0.3s ease;

  &::after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 8;
    pointer-events: none;
    transition: opacity 0.5s ease;
    will-change: opacity;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
  }
`

export default Wrapper
