import { memo, SVGProps } from 'react';

const EnvelopesimpleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5 8.75H35V30C35 30.3315 34.8683 30.6495 34.6339 30.8839C34.3995 31.1183 34.0815 31.25 33.75 31.25H6.25C5.91848 31.25 5.60054 31.1183 5.36612 30.8839C5.1317 30.6495 5 30.3315 5 30V8.75Z'
      stroke='#19EFFD'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M35 8.75L20 22.5L5 8.75' stroke='#19EFFD' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(EnvelopesimpleIcon);
export { Memo as EnvelopesimpleIcon };
