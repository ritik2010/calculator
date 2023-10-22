import React, { useState } from 'react'
import CalWrapper from '../CalWrapper/CalWrapper';

const Cal = () => {
    const [inputValue1,setInputValue1] = useState(0)
    const [operationValue,setOperationValue]=useState(0)
    const [currentOpration,setCurrentOpration]=useState('')
    const allBtArr=[
        { 
          value:0,btFun:()=>{
            setInputValue1(prevValue=>parseInt(prevValue.toString() + 0))
           }
        },
        { 
          value:1,btFun:()=>{
            setInputValue1(prevValue=>parseInt(prevValue.toString() + 1))
          }},
        { 
          value:2,btFun:()=>{
            setInputValue1(prevValue=>parseInt(prevValue.toString() + 2))
          }},
        { 
          value:3,btFun:()=>{
            setInputValue1(prevValue=>parseInt(prevValue.toString() + 3))
          }},
        { 
          value:4,btFun:()=>{
            setInputValue1(prevValue=>parseInt(prevValue.toString() + 4))
          }},
        {
           value:5,btFun:()=>{
            setInputValue1(prevValue=>parseInt(prevValue.toString() + 5))
          }},
        {
           value:6,btFun:()=>{
            setInputValue1(prevValue=>parseInt(prevValue.toString() + 6))
          }},
        {
           value:7,btFun:()=>{
            setInputValue1(prevValue=>parseInt(prevValue.toString() + 7))
          }},
        {
           value:8,btFun:()=>{
            setInputValue1(prevValue=>parseInt(prevValue.toString() + 8))
          }},
        { 
          value:9,btFun:()=>{
            setInputValue1(prevValue=>parseInt(prevValue.toString() + 9))
        }}
        ];

   const operationArr = [
    { 
      value:'+',btFun:()=>{
        setInputValue1(0)
        setCurrentOpration('+')
        setOperationValue(inputValue1)
       }
    },

    { 
      value:'-',btFun:()=>{
        setInputValue1(0)
        setCurrentOpration('-')
        setOperationValue(inputValue1)
       }
    },

    { 
      value:'*',btFun:()=>{
        setInputValue1(0)
        setCurrentOpration('*')
        setOperationValue(inputValue1)
       }
    },

    { 
      value:'/',btFun:()=>{
        setInputValue1(0)
        setCurrentOpration('/')
        setOperationValue(inputValue1)
       }
    },
    //------Equal to operation----------
    { 
      value:'=',
      btFun:()=>{
        if(currentOpration==='+'){
          setInputValue1((prevValue)=>{
            console.log(prevValue)       //----------check prevValue------------
              return prevValue + operationValue
          })
          console.log(operationValue)   //-----------check operation Value----------
        }
        else if(currentOpration==='-'){
          
          setInputValue1((prevValue)=>{
            console.log(prevValue)      
            return operationValue-prevValue
        })
          console.log(operationValue)
        }
        else if(currentOpration==='*'){
          setInputValue1((prevValue)=>{
            // console.log(prevValue)
            return prevValue * operationValue
          })
       }
        else{
        setInputValue1((prevValue)=>{
          // console.log(prevValue)
          return (operationValue/prevValue)
        })
    }
  }
}
   ]
  return (
    <div>
        <h1>Calculator {inputValue1}</h1>
       
        <CalWrapper allBtArr={allBtArr} operationArr={operationArr}/>
        
    </div>
  )
}

export default Cal;