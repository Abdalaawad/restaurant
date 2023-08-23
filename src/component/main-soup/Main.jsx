import React from 'react'
import "./Main.css"
import suboon from "../../assets/Frame 17.png"
const Main = ({title}) => {
  return (
   <div className='main-heading'>
<h3>{title}</h3>
<div className='main-images'>
    <img src={suboon} alt="images" />
    </div>
   </div>
  )
}

export default Main