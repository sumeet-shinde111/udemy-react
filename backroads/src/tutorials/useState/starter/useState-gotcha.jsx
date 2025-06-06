import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const increment = () => {
    /*
    1.
    Below setValue will update the UI but of we log the value it will be behind e.g: console log value 1, rendered value 2. 
    to fix this use callback function in setValue. refer 2) setValue()    */

    // setValue(value + 1)

    /*
    -------------------------------------- -------------------------------------- --------------------------------------

    2.

    To log the latest value use a callback funtion in setValue which hold the prevValue and the updated value  
    returning the new value is important in case of callback
    */
    // setValue((prevVal) => {
    //   const newValue = value + 1
    //   console.log('prev value: ' + prevVal, 'new value: ' + newValue)
    //   return newValue
    // })

    setTimeout(() => {
      console.log('clicked')
      setValue((preValue) => {
        return preValue + 1
      })
    }, 3000)
  }

  return (
    <>
    <h1>Counter will increament after a 3000ms delay</h1>
      <h2>{value}</h2>
      <button type="button" onClick={increment}>
        Incement
      </button>
    </>
  )
}

export default UseStateGotcha
