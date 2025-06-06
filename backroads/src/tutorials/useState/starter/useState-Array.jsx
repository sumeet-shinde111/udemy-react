import { useState } from 'react'
import { Data } from './data'
import React from 'react'

const useStateArray = () => {
  const [data, setData] = useState(Data)

  const removeItem = (idToRemove) => {
    const removedId = data.filter((item) => {
      return item.id !== idToRemove
    })
    setData(removedId)
  }

  const clearAll = () => {
    setData([])
  }

  return (
    <>
      <h2>useState Array example</h2>
      <ul>
        {data.map((value) => {
          return (
            <li key={value.id}>
              {value.name}
              <button
                type="button"
                onClick={() => {
                  removeItem(value.id)
                }}
              >
                Remove
              </button>
            </li>
          )
        })}
      </ul>
      <button type="button" onClick={clearAll}>
        Clear All
      </button>
    </>
  )
}

export default useStateArray
