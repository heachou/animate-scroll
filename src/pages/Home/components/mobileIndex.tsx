import { memo, ReactNode, useEffect, useRef, useState } from 'react';
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
      if(currentCount === stepCount - 1){
        setIconAnimationEnd(true)
      }
      currentCount += 1
    }, 900 / stepCount)
  }
  
  return (
    <div className={`backgroundAnimation mobile`}
    >
      <div className={'h-full bg-black'} ref={boxRef}>
        <div className={`wallpapersden h-full pb-16`} onClick={onbgClick}
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