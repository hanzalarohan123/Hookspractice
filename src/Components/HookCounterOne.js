import React,{useState,useEffect} from 'react'

function HookCounterOne()
{
    
    const [count,setCount]=useState(0)
    useEffect(()=>
    {
        document.title=`${count}`
    })
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>{count} </button>
    </div>
  )
}

export default HookCounterOne