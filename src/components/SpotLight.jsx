import React, {useState, useEffect } from 'react'
import Ellipse from '../assets/ellipse01.png';
import styled from 'styled-components'

const SpotDiv = styled.div`
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    mix-blend-mode: lighten;
    width: 250px;
    height: 250px;
    transition: transform 0.1s ease-out;
    background:url(${Ellipse}) no-repeat;
    opacity:0.5;
`;
const SpotLight = () => {
  const [position, setPosition] = useState({ x: -100, y: -100});
  useEffect(()=>{
       const handleMouseMove = (event) => {
          setPosition({ x: event.pageX - 100, y: event.pageY - 100});
       } 
       window.addEventListener('mousemove', handleMouseMove);
       return ()=> {
          window.removeEventListener('mousemove', handleMouseMove);
       }
  },[]);  
  return (
    <SpotDiv style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
  )
}

export default SpotLight