import React,{useState,useEffect} from 'react'


function CounterUsingUseEffectHook() 
{
    const [count,setCount]=useState(0)
    //Use Effect added
    useEffect(()=>{document.title=`${count}`})

  return (
    <button onClick={()=>{setCount(count+1)}}>{count}</button>
  )
}

export default CounterUsingUseEffectHook