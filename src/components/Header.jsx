import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import {BsBag} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';


const Header = () => {
  const[isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listner
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) :setIsActive(false);
    });
  });
  return (
    <header className ={`${isActive ? 'bg-red-400':'bg-blue-400'} fixed w-full z-10 transition-all`}>

      <div className='container mx-auto flex items-center justify-between h-full'>

      {/*logo */}
      <Link to={'/'}>
       <div>
        <img className='w-[80px]' src={Logo} alt='' />
       </div>
        </Link>

{/*cart */}



      <div onClick={()=>setIsOpen(!isOpen)} 
      className='cursor-pointer flex-relative  text-[12px] w-[24px] h-[24px] text-white rounded-full flex justify-center items-center'>
        <BsBag className='text-3xl'/>
        <div className=' absolute bottom-1'>{itemAmount}</div>
        </div>
        </div>
    </header>
  );
};

export default Header;
