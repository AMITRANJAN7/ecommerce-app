import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
   const {removeFromCart, increaseAmount,decreaseAmount } = useContext(CartContext);

  // destructure of items
  const { id, title, image, price, amount } = item ;
    return (
   <div className='flex gap-x-4 py-2 lg:px-6 border-b border-black w-full font-light text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      {/* image */ }
      <Link to={`/product/${id}`}>
        <img className='max-w-[80px]' src={image} alt="" />
      </Link>
      <div className='w-full flex flex-col'>
        {/* title & remove icon */}
      <div className='flex justify-between mb-2'>
        {/*title*/}
        <Link to= {`/product/${id}`}
         className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline' >
         {title}
         </Link>
          {/*remove icon */}
          <div onClick={()=> removeFromCart(id)} className='text-xl cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-800 transition'/>
          </div>
      </div>
      <div className='bg-pink-200 flex gap-x-2 h-[36px] text-sm`'>
        {/* quantity */}
        <div className='flex flex-1 max-w-[100px] bg-blue-400 items-center h-full border text-primary font-medium'>
          {/* minus icon */}
          <div onClick={() => decreaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer bg-red-500 h-full'>
          <IoMdRemove />
          </div>
         {/* amount */}
         <div className='h-full flex justify-center items-center px-2'>{amount}</div>
         {/* plus icon */}
         <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer bg-emerald-500 '>
          <IoMdAdd />
         </div>
          </div>
        {/*items price*/}

        <div className='flex-1 flex items-center justify-around'>$ {price}</div>

        {/*final price*/}
        {/*final price upto 2 decimal places*/}

        <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price*amount).toFixed(2)}`}</div>

      </div>

    </div>
   </div>
   </div>
  )
}

export default CartItem
