import React from 'react'
import './Button.css'
const Button = (props) => {
    
    const{btFun,btName}=props

    // const btClick = ()=>{
    //     console.log('props Value',props)
    // }
  return (
    <div className='container'>
        <button className='bt-cal' onClick={btFun}>{btName}</button>
    </div>
  )
}
export default Button;