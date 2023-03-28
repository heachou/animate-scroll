import { memo, ReactNode, useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { Icon2 } from './Icon2';
import { Icon3 } from './Icon3';
import { useSize } from 'ahooks';

import './mobile-index.less';

const stepCount = 40

const MobileAnimation = memo(function ({ children,iconAnimationEnd, setIconAnimationEnd }: { children: ReactNode,iconAnimationEnd:boolean,setIconAnimationEnd:Function }) {
  const [iconRect, setIconRect] = useState<{ width: number, height: number }>({ width: 1152, height: 332 })
  const boxRef = useRef<HTMLDivElement>(null)
  const size = useSize(boxRef);
  useEffect(() => {
    if (!size) {
      return
    }
    const { width } = size
    const iconWidth = width * 0.6
    const iconHeight = 332 * iconWidth / 1152
    setIconRect({ width: iconWidth, height: iconHeight })
  }, [size])

  const onIconAnimationEnd = () => {
    setIconAnimationEnd(true)
  }

  const onbgClick = () => {
    if(iconAnimationEnd){
      return
    }
    const bg = document.querySelector('.wallpapersden')
    if (bg) {
      bg.classList.add('animation')
    }
  }

  
  const count = useRef(0)
  const onAnimationEnd = () => {
    if (count.current >= 1) {
      return
    }
    changeColors()
    count.current += 1
    const icon1 = document.querySelector('#icon1_box')
    const icon2 = document.querySelector('#icon2_box')
    const icon3 = document.querySelector('#icon3_box')
    if (icon1 && icon2 && icon3) {
      icon1.classList.add('animation')
      icon2.classList.add('animation')
      icon3.classList.add('animation')
    }
  }

  const [isSvgEnd, setIsSvgEnd] = useState(false)

  const changeColors = () => {
    let currentCount = 0
    const timer = setInterval(() => {
      if (currentCount >= stepCount) {
        clearInterval(timer)
        return
      }
      if (currentCount === 10) {
        const bg = document.querySelector('.wallpapersden')
        if (bg) {
          setIsSvgEnd(true)
          bg.classList.remove('animation')
          bg.classList.add('animation_opacity')
        }
      }
      currentCount += 1
    }, 900 / stepCount)
  }
  

  return (
    <div className={`backgroundAnimation mobile`}
    >
      <div className={'h-full'} ref={boxRef}>
        {
          iconAnimationEnd ? null :
            <>
              <div id="icon1_box" className={'icon1_box'}
                onAnimationEnd={onIconAnimationEnd}
              >
                <Icon className={'icon1'} />
              </div>
              <div id="icon2_box" className={'icon2_box'}
              >
                <Icon2 className={'icon2'} />
              </div>
              <div id="icon3_box" className={'icon3_box'}
                >
                <Icon3 className={'icon3'} />
              </div>
            </>
        }
        <div className={`wallpapersden h-full`} onClick={onbgClick}
          style={{
            backgroundPosition:  `center 0`,
            WebkitMaskPosition: `center 305px`,
            WebkitMaskSize: 'calc(60% - 40px) 204px',
          } as React.CSSProperties}
          onAnimationEnd={onAnimationEnd}
        >
          <div style={{ opacity: iconAnimationEnd ? 1 : 0 }} className={"h-full transition-opacity"}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});


export default MobileAnimation