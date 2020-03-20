import React, { useState } from "react"

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0)
  const decrease = () => setCount(count - 1)
  const increase = () => setCount(count + 1)

  return <>
    <button onClick={decrease}>-</button>
    <p>{count}</p>
    <button onClick={increase}>+</button>
  </>
}

export default Counter
