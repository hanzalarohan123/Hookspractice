import React,{useState,useEffect} from 'react'

function HookCounterOne()
{
    
    const [count,setCount]=useState(0)
    const [name,setName]=useState(0)
    useEffect(()=>
    {
        console.log('lg')
        document.title=`${name}`
    },[count])
    
  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>{count} </button>
    </div>
  )
}

export default HookCounterOne