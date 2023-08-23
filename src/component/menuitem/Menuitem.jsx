import React from 'react'
import "./Menuitem.css"

const Menuitem = ({title, price, bot}) => {
  return (
   <div className='app-menuitem'>
    <div className='app-menuitem-content'>
        <div className='app-menuitem-title'>
            <h1>{title}</h1>
        </div>
        <div className='menuitem-dash'></div>
       
        <div className='app-menu-item-price'>
            <h1>{price}</h1>
        </div>
    </div>
    <div className='app-menuitem-bot'>
        <p>{bot}</p>
    </div>
   </div>
  )
}

export default Menuitem