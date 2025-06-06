import { use } from 'react'
import { useState } from 'react'

const UseStateObject = () => {
  const [data, setData] = useState({
    name: 'Peter',
    age: 28,
    hobby: 'Scream at computers',
  })

  const displayPerson = () => {
    setData({
      name: 'John',
      age: 22,
      hobby: 'Reading books',
    })

    /*
    Want to change only one value fron the object do below thing

    1) ...data :  it copies all the object using spread operator
    2) override the value i.e changing name from peter to susan 
     */

    // setData({ ...data, name: 'susan' })
  }

  const { name, age, hobby } = data
  return (
    <>
      <h2>useState Object example</h2>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>Enjoys : {hobby}</h2>
      <button onClick={displayPerson}>Show John</button>
    </>
  )
}
export default UseStateObject
