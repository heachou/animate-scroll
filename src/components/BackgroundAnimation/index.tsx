import { memo, useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import { Icon } from './Icon';
import { Icon2 } from './Icon2';
import { Icon3 } from './Icon3';
import { useSize } from 'ahooks';

import './index.css';

const colors = {
  a: [25, 239, 253, 0.6],
  b: [73, 175, 254, 0.24],
  c: [151, 71, 255, 0.32],
  d: [0, 0, 0, 0.26],
  e: [0, 0, 0, 0.760321],
}

const stepCount = 40

export const BackgroundAnimation: FC = memo(function () {
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
    const bg = document.querySelector('.wallpapersden')
    if (bg) {
      bg.classList.add('animation')
    }
  }

  const [color, setColor] = useState(colors)
  const colorAll = useRef<any>({
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
  })

  useEffect(() => {
    const target = [0, 0, 0, 1]
    const step1 = target.map((v, i) => (v - colors.a[i]) / stepCount)
    const step2 = target.map((v, i) => (v - colors.b[i]) / stepCount)
    const step3 = target.map((v, i) => (v - colors.c[i]) / stepCount)
    const step4 = target.map((v, i) => (v - colors.d[i]) / stepCount)
    const step5 = target.map((v, i) => (v - colors.e[i]) / stepCount)
    const colorA = []
    const colorB = []
    const colorC = []
    const colorD = []
    const colorE = []
    for (let i = 1; i < stepCount + 1; i++) {
      colorA.push(colors.a.map((v, j) => v + step1[j] * i))
      colorB.push(colors.b.map((v, j) => v + step2[j] * i))
      colorC.push(colors.c.map((v, j) => v + step3[j] * i))
      colorD.push(colors.d.map((v, j) => v + step4[j] * i))
      colorE.push(colors.e.map((v, j) => v + step5[j] * i))
    }
    colorAll.current = { a: colorA, b: colorB, c: colorC, d: colorD, e: colorE }
  }, [])
  const count = useRef(0)
  const onAnimationEnd = () => {
    if(count.current >= 1) {
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
  const changeColors = () => {
    let currentCount = 0
    const timer = setInterval(() => {
      if (currentCount >= stepCount) {
        clearInterval(timer)
        return
      }
      if(currentCount === 10){
        const bg = document.querySelector('.wallpapersden')
        if (bg) {
          bg.classList.remove('animation')
          bg.classList.add('animation_opacity')
        }
      }
      const { a, b, c, d, e } = colorAll.current
      setColor({ a: a[currentCount], b: b[currentCount], c: c[currentCount], d: d[currentCount], e: e[currentCount] })
      currentCount += 1
    }, 900 / stepCount)
  }
  const [iconAnimationEnd,setIconAnimationEnd] = useState(false)
  const onIconAnimationEnd = ()=>{
    setIconAnimationEnd(true)
  }

  return (
    <div className={`backgroundAnimation`}
      style={{
        '--color1': `rgba(${color.a.join(',')})`,
        '--color2': `rgba(${color.b.join(',')})`,
        '--color3': `rgba(${color.c.join(',')})`,
        '--color4': `rgba(${color.d.join(',')})`,
        '--color5': `rgba(${color.e.join(',')})`,
      } as React.CSSProperties}
    >
      <div className={'h-full'} ref={boxRef}>
        {
          iconAnimationEnd ?  null : 
          <>
          <div id="icon1_box" className={'icon1_box'}
          style={{
            width: iconRect.width,
            height: iconRect.height,
          }}
          onAnimationEnd={onIconAnimationEnd}
        >
          <Icon className={'icon1'} />
        </div>
        <div id="icon2_box" className={'icon2_box'}
          style={{
            width: iconRect.width / 2,
            height: iconRect.height * 3,
          }}
        >
          <Icon2 className={'icon2'} />
        </div>
        <div id="icon3_box" className={'icon3_box'}
          style={{
            width: iconRect.width / 2,
            height: iconRect.height * 3,
          }}>
          <Icon3 className={'icon3'} />
        </div>
          </>
        }
        <div className={`wallpapersden h-full`} onClick={onbgClick}
          style={{
            backgroundPosition: `center ${size ? size.height * 74 / 1000 : 0}px`,
            WebkitMaskPosition: `center ${size ? size.height * 74 / 1000 : 0}px`,
            WebkitMaskSize: (826 * iconRect.width / 1152) + "px " + (826 * iconRect.width / 1152 * 0.8656) + "px",
          } as React.CSSProperties}
          onAnimationEnd={onAnimationEnd}
        >
          {
            
          }
        </div>
      </div>
    </div>
  );
});
