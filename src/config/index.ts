import { keyframes } from "@emotion/react";

export const bottomLeftSlide = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-300px, 100px, 0) scale(0.2);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const bottomrRightSlide = keyframes`
0% {
  opacity: 0;
  transform: translate3d(300px, 100px, 0) scale(0.2);
}
100% {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

