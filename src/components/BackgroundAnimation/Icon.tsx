import { memo, SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1153 333' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.544922 0L576.658 332.617L1152.77 0H0.544922Z' fill='#333333' stroke='#333333' strokeWidth={10} />
    <path d='M0.544922 0L576.658 332.617L1152.77 0H0.544922Z' stroke='#333333' strokeWidth={2} strokeMiterlimit={10} />
  </svg>
);
const Memo = memo(Icon);
export { Memo as Icon };
