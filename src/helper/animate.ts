/**
 * ~ No need to install animation library
 *   for simple slide in/out or fade in/out animations
 *
 * ~ Save yourself some `kilobytes` bro
 */

import { css } from "@emotion/react";

const animate = (type: string, style: string, from: number, to: number) => {
  const __from__ = { [style]: from };
  const __to__ = { [style]: to };
  return css`
    @keyframes ${type} {
      0% {
        ${(() => __from__)()}
      }
      100% {
        ${(() => __to__)()}
      }
    }
  `;
};

export const ANIMATION_TYPES = Object.freeze({
  FADE_IN: "fadeIn",
  FADE_OUT: "fadeOut",
  SLIDE_IN: "slideIn",
  SLIDE_OUT: "slideOut",
});

export const ANIMATION_STYLES = new Map([
  [
    ANIMATION_TYPES.FADE_IN,
    { animation: `${ANIMATION_TYPES.FADE_IN} 150ms linear 1 forwards` },
  ],
  [
    ANIMATION_TYPES.FADE_OUT,
    { animation: `${ANIMATION_TYPES.FADE_OUT} 150ms linear 1 forwards` },
  ],
  [
    ANIMATION_TYPES.SLIDE_IN,
    { animation: `${ANIMATION_TYPES.SLIDE_IN} 150ms ease-in` },
  ],
  [
    ANIMATION_TYPES.SLIDE_OUT,
    { animation: `${ANIMATION_TYPES.SLIDE_OUT} 150ms ease-out forwards` },
  ],
]);

export default animate;
