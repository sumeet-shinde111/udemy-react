import { useState } from 'react'

const useStateBasics = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h2>UseState basics</h2>
      <h4>You clicked {count} times</h4>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </>
  )
}
export default useStateBasics
