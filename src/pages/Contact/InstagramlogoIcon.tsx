import { memo, SVGProps } from 'react';

const InstagramlogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20 26.25C23.4518 26.25 26.25 23.4518 26.25 20C26.25 16.5482 23.4518 13.75 20 13.75C16.5482 13.75 13.75 16.5482 13.75 20C13.75 23.4518 16.5482 26.25 20 26.25Z'
      stroke='#19EFFD'
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      d='M26.875 5.625H13.125C8.98286 5.625 5.625 8.98286 5.625 13.125V26.875C5.625 31.0171 8.98286 34.375 13.125 34.375H26.875C31.0171 34.375 34.375 31.0171 34.375 26.875V13.125C34.375 8.98286 31.0171 5.625 26.875 5.625Z'
      stroke='#19EFFD'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M28.125 13.75C29.1605 13.75 30 12.9105 30 11.875C30 10.8395 29.1605 10 28.125 10C27.0895 10 26.25 10.8395 26.25 11.875C26.25 12.9105 27.0895 13.75 28.125 13.75Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(InstagramlogoIcon);
export { Memo as InstagramlogoIcon };
