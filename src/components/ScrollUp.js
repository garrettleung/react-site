import React, {useState} from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 
import { ButtonUp } from './Styles'; 
    
const ScrollUp = () =>{ 
    
  const [visible, setVisible] = useState(false) 
    
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    const bottom = document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight
    if (bottom && scrolled != 0){ 
      setVisible(true) 
    }  
    else { 
      setVisible(false) 
    } 
  }; 
    
  const scrollToTop= () =>{ 
    window.scrollTo({ 
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
    
  window.addEventListener('scroll', toggleVisible); 
    
  return ( 
    <ButtonUp> 
     <FaArrowCircleUp onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}} /> 
    </ButtonUp> 
  ); 
} 
    
export default ScrollUp;