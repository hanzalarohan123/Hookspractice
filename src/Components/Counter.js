import React, { useState } from 'react'

//useState Hook usage

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}> {count}</button>
        </div>
    )
}
