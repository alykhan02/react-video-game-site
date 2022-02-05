import React, {useState} from 'react';
import Navbar from '../navbar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';
import Sidebar from '../Sidebar';
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
      <HeroContainer>
          <Navbar toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <HeroContent>
              <HeroItems>
                    <HeroH1>Game Bros</HeroH1>
                    <HeroP>New Games Available</HeroP>
                    <HeroBtn>
                        <a href="#games">BUY NOW</a>
                    </HeroBtn>
              </HeroItems>
          </HeroContent>
      </HeroContainer>

  );
};

export default Hero;
