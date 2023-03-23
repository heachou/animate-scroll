import { memo, SVGProps } from 'react';

const Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 578 1000' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.275635 333.692V1000L577.315 0.53125L0.275635 333.692Z'
      fill='#1A1A1A'
      stroke='#1A1A1A'
      strokeWidth={10}
    />
    <path
      d='M0.275635 333.692V1000L577.315 0.53125L0.275635 333.692Z'
      stroke='#1A1A1A'
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </svg>
);
const Memo = memo(Icon2);
export { Memo as Icon2 };
