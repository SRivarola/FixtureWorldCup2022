import { useState } from "react";
import { MdDoubleArrow } from "react-icons/md";

const ScrollTop = () => {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setVisible(true)
    } 
    else if (scrolled <= 200){
      setVisible(false)
    }
  }
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div onClick={scrollToTop} className={`fixed bottom-3 right-3 bg-white rounded-[3px] p-1 rotate-[-90deg] cursor-pointer ${visible ? 'inline' : 'hidden'} `}>
      <MdDoubleArrow className='text-[20px]'/>
    </div>
  )
}
export default ScrollTop