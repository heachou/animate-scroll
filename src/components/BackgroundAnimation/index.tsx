import { memo, useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import { Icon } from './Icon';
import { Icon2 } from './Icon2';
import { Icon3 } from './Icon3';
import { useSize } from 'ahooks';

import './index.css';

const ratio = 1.92;

export const BackgroundAnimation: FC = memo(function() {
  const [iconRect,setIconRect] = useState<{width: number,height: number}>({width: 1152,height: 332})
  const boxRef = useRef<HTMLDivElement>(null)
  const size = useSize(boxRef);
  useEffect(() => {
    if(!size){
      return
    }
    const {width} = size 
    const iconWidth = width * 0.6
    const iconHeight = 332 * iconWidth / 1152
    setIconRect({width: iconWidth,height: iconHeight})
  },[size])

  return (
    <div className={`backgroundAnimation`}>
      <div className={'h-full'} ref={boxRef}>
        <div className={'icon1_box'}
          style={{
            width: iconRect.width,
            height: iconRect.height,
          }}
        >
          <Icon className={'icon1'} />
        </div>
        <div className={'icon2_box'}
          style={{
            width: iconRect.width / 2,
            height: iconRect.height * 3,
          }}
        >
          <Icon2 className={'icon2'} />
        </div>
        <div className={'icon3_box'}
        style={{
          width: iconRect.width / 2,
          height: iconRect.height * 3,
        }}>
          <Icon3 className={'icon3'} />
        </div>
        <div className={`wallpapersden h-full`}
          style={{
            backgroundPosition: `center ${size? size.height * 74 / 1000 : 0}px`,
            webkitMaskPosition: `center ${size? size.height * 74 / 1000 : 0}px`,
            webkitMaskSize: (826 * iconRect.width / 1152)+"px "+(826 * iconRect.width / 1152 * 0.8656)+"px",
          } as React.CSSProperties}
        ></div>
        {/* <div className={`${props.classes?.wallpapersden2 || ''} ${wallpapersden2}`}></div> */}
      </div>
    </div>
  );
});
