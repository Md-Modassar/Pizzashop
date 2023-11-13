import React from 'react'
import {MenuList} from "../../helper/item"
import "./menu.css"
const Menu = () => {
  return (
    <div className='menu-cart'>
     <h1 className='tit'>MENU ITEMS </h1>
    <div className='cart'>
      
    
        {MenuList.map((ele)=>{
            return(
                <div className='item'>
                    
                        <img src={ele.image} alt='' className='img'/>
                   
                    <h1 className='name'>{ele.name}</h1>
                    <p className='price'>{`$ ${ele.price}`}</p>
                    <button className='bt'>order</button>
                </div>
            )
        })}
    </div>
    </div>

  )
}

export default Menu