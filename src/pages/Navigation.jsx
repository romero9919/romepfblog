import React, {useState} from 'react'
import styled from 'styled-components'
import { GoArrowRight } from "react-icons/go";
import { RiGithubFill, RiInstagramFill } from "react-icons/ri";

const Div = styled.div`
   position: static;
   margin-top:10px;
   padding-bottom: 20px;
   border-bottom: 1px solid rgba(255, 255, 255, 0.5);

   @media (min-width: 576px) {
    width: 540px;
    left: calc(50% - 270px);
    top:10px;
    }    
    @media (min-width: 768px) {
    width: 720px;
    left: calc(50% - 360px);
    top:10px;
    }    
    @media (min-width: 992px) {
    width: 396px;
    left: calc(50% - 446px);
    top:120px;
    position: fixed;
    padding-bottom:20px;
    border:none;
    }    
    @media (min-width: 1200px) {
    width:456px;
    left: calc(50% - 550px);
    top:120px;
    position: fixed;
    padding-bottom:20px;
    border:none;
    }    
    @media (min-width: 1400px) {
    width: 528px;
    left: calc(50% - 650px);  
    top:120px;
    position: fixed;
    padding-bottom:20px;
    border:none;
    }
`;

const H1 = styled.h1`
   line-height:1;
   color: #E5E8F4;
   font-variant: small-caps;
   font-optical-sizing: auto;
   font-weight: 700;
   transition: all 300ms;
   &:hover{
      color:#cbd2f1;
   }
   font-size:2rem;
   @media (min-width: 992px) {
       font-size:3rem;
   }
`;

const H2 = styled.h2`
   font-size:1rem;
   color:#fff;
   line-height:1.4;
   font-weight:400;
   margin-top:10px;
   @media (min-width: 992px) {
    font-size:1.3rem;
}
`;
const MyNav = styled.div`
   margin:0;
   padding:0;
   display:flex;
   justify-content:center;
   & > a { margin-right:15px; }
   @media (min-width: 992px) {
     flex-direction:column;
     justify-content:flex-start;
   }    
`;
const IconBox = styled.div`
   margin-top:0px;
   
   text-align:center;
   & > a {
      color:rgba(255,255,255,0.6);
      margin:15px;
      font-size:2rem;
   };
   & > a:hover{
      color:rgba(255,255,255,1);
   }
`;

const Navigation = () => {
  const [ actItem, setActItem ] = useState('about');
  const handleClick = (navItem) => {
      setActItem(navItem);
  }
  return (
    <Div>
        <H1>romero lee</H1>
        <H2>Entry-Level Developer</H2>
        <p className="d-none d-md-block mt-4">
            I am a new back-end developer.
            I mainly use Java, but I am studying several languages such as React, NodeJs, and PHP.  
        </p>
        <div className="mt-md-5 pt-md-3 pb-md-5 mt-4">
            <MyNav>
                <a href="#about" className={`nav 
                                    ${actItem === 'about' ? 'action' : ''}
                                  `}
               onClick={() => handleClick('about')}      >
                    <span className="line d-none d-md-block"></span><GoArrowRight /> about me 
                </a>
                <a href="#story" className={`nav 
                                    ${actItem === 'story' ? 'action' : ''}
                                  `}
               onClick={() => handleClick('story')}      >
                    <span className="line d-none d-md-block"></span><GoArrowRight /> my story 
                </a>
                <a href="#projects" className={`nav 
                                    ${actItem === 'projects' ? 'action' : ''}
                                  `}
               onClick={() => handleClick('projects')}      >
                    <span className="line d-none d-md-block"></span><GoArrowRight /> projects 
                </a>
                <a href="#email" className={`nav 
                                    ${actItem === 'email' ? 'action' : ''}
                                  `}
               onClick={() => handleClick('email')}      >
                    <span className="line d-none d-md-block"></span><GoArrowRight /> contact 
                </a>
            </MyNav>
            <div className="imgbox d-none d-md-block">
                <img src="images/banner01.png" alt="romero lee" />
            </div>
            <IconBox>
                <a href="https://github.com/romero9919" target='_blank' rel='noopener noreferrer'><RiGithubFill /></a>
                <a href="https://www.instagram.com/ilperli_rome/"  target='_blank' rel='noopener noreferrer'><RiInstagramFill /></a>
            </IconBox>
        </div>
    </Div>
  )
}

export default Navigation