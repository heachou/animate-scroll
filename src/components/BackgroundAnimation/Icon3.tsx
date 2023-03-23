import { memo, SVGProps } from 'react';

const Icon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 578 1000' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M577.039 333.692L0 0.53125L577.039 1000V333.692Z' fill='black' stroke='black' strokeWidth={10} />
    <path d='M577.039 333.692L0 0.53125L577.039 1000V333.692Z' stroke='black' strokeWidth={2} strokeMiterlimit={10} />
  </svg>
);
const Memo = memo(Icon3);
export { Memo as Icon3 };
