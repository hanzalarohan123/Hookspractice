import React, { useState } from 'react'

export default function HookCounter3() {
    const [name,setName]=useState({fname:'',lname:''})
  return (
    <div>
        <input type='text' value={name.fname} onChange={e=>setName({...name,fname:e.target.value})}></input>
        <input type='text' value={name.lname} onChange={e=>setName({...name,lname:e.target.value})}></input>
        {/* the ...name will tak care of the previous value passed */}
        <h3>{name.fname}</h3>
        <h3>{name.lname}</h3>
    </div>
  )
}

