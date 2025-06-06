import { useState } from 'react'
import './App.css'
import List from './Components/List'
import {people} from "./data";
function App() {
  const [peopleData,setPeopleData] = useState(people)
  
const clearAll = ()=>{
  setPeopleData([]);
}
  return (
    <>
    <div className='container'>
      <List people = {peopleData}/>
    <button type='button' onClick={clearAll}>Clear All</button> 
    </div>
    
    </>
  )
}

export default App
