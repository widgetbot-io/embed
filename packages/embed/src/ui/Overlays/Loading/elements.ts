import styled, { keyframes } from '@lib/emotion'

const cube = keyframes`
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
  } 50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
  } 50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
  } 75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  } 100% {
    transform: rotate(-360deg);
  }
`

export const Spinner = styled('div')`
  &::after,
  &::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.accent};
    width: 15px;
    height: 15px;
    position: absolute;
    top: -24px;
    left: -32px;
    animation: ${cube} 1.8s infinite ease-in-out;
  }
  &::after {
    animation-delay: -0.9s;
  }
`
