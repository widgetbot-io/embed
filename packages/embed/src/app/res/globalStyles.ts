import { injectGlobal } from 'emotion'

injectGlobal`
  .rc-tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    pointer-events: none;

    &.rc-tooltip-zoom-enter,
    &.rc-tooltip-zoom-leave {
      display: block;
    }
  }

  .rc-tooltip-inner,
  .rc-tooltip-arrow {
    /* margin-top: -5px; */
    margin-bottom: -5px;
  }

  .rc-tooltip-inner {
    padding: 8px 12px;
    color: #dcddde;
    background-color: #000000;
    border-radius: 5px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    max-width: 190px;

    .emoji {
      width: 15px;
      margin-right: 2px;
    }

    * {
      color: inherit;
    }
  }

  .rc-tooltip-zoom-enter,
  .rc-tooltip-zoom-appear {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    animation-play-state: paused;
    &.rc-tooltip-zoom-enter-active,
    &.rc-tooltip-zoom-appear-active {
      animation-name: rcToolTipZoomIn;
      animation-play-state: running;
    }
  }

  .rc-tooltip-zoom-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);
    animation-play-state: paused;

    &.rc-tooltip-zoom-leave-active {
      animation-name: rcToolTipZoomOut;
      animation-play-state: running;
    }
  }

  @keyframes rcToolTipZoomIn {
    0% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(0, 0);
    }

    100% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
    }
  }

  @keyframes rcToolTipZoomOut {
    0% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
    }

    100% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(0, 0);
    }
  }

  .rc-tooltip-hidden {
    display: none;
  }

  .rc-tooltip-placement-top,
  .rc-tooltip-placement-topLeft,
  .rc-tooltip-placement-topRight {
    padding: 5px 0 9px 0;
    .rc-tooltip-arrow {
      bottom: 4px;
      margin-left: -5px;
      border-width: 5px 5px 0;
      border-top-color: #000000;
    }
  }

  .rc-tooltip-placement-right,
  .rc-tooltip-placement-rightTop,
  .rc-tooltip-placement-rightBottom {
    padding: 0 5px 0 9px;
    .rc-tooltip-arrow {
      left: 4px;
      margin-top: -5px;
      border-width: 5px 5px 5px 0;
      border-right-color: #000000;
    }
  }

  .rc-tooltip-placement-bottom,
  .rc-tooltip-placement-bottomLeft,
  .rc-tooltip-placement-bottomRight {
    padding: 9px 0 5px 0;
    .rc-tooltip-arrow {
      top: 4px;
      margin-left: -5px;
      border-width: 0 5px 5px;
      border-bottom-color: #000000;
    }
  }

  .rc-tooltip-placement-left,
  .rc-tooltip-placement-leftTop,
  .rc-tooltip-placement-leftBottom {
    padding: 0 9px 0 5px;
    .rc-tooltip-arrow {
      right: 4px;
      margin-top: -5px;
      border-width: 5px 0 5px 5px;
      border-left-color: #000000;
    }
  }


  .rc-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }

  .rc-tooltip-placement-top .rc-tooltip-arrow {
    left: 50%;
  }

  .rc-tooltip-placement-topLeft .rc-tooltip-arrow {
    left: 15%;
  }

  .rc-tooltip-placement-topRight .rc-tooltip-arrow {
    right: 15%;
  }

  .rc-tooltip-placement-right .rc-tooltip-arrow {
    top: 50%;
  }

  .rc-tooltip-placement-rightTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }

  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
    bottom: 15%;
  }

  .rc-tooltip-placement-left .rc-tooltip-arrow {
    top: 50%;
  }

  .rc-tooltip-placement-leftTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }

  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
    bottom: 15%;
  }

  .rc-tooltip-placement-bottom .rc-tooltip-arrow {
    left: 50%;
  }

  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {
    left: 15%;
  }

  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    right: 15%;
  }
`
