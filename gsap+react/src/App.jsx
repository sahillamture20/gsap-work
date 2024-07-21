import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';

const App = () => {
  const cricleRef = useRef();
  useGSAP(()=>{
    gsap.to(".box",{
      x:500,
      rotate:360,
      duration:1,
      delay:1
    })
    
    gsap.to(cricleRef.current, {
      x: 800,
      scale: 2,
      duration:1,
      delay:1
    })
  })

  return (
    <main>
      <div className="box"></div>
      <div ref={cricleRef} className="circle"></div>
    </main>
  )
}

export default App