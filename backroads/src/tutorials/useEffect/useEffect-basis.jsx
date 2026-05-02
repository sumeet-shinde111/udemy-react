import { useEffect, useState } from "react";

/*
useEfffect hook is used to perform side effect on the component i.e basically any work outside the component
It takes 2 argumemts 1) callback function 2) dependency array
Cases of dependency array
1) if we dont pass dependency array the useEffect will run on each render
2) if we pass dependency array as empty it will only runs on initial render
3) if we pass value to dependency array it will run useEffect when the value is changed.

We can have multiple useEffect but ideally we should not add more than 1.
*/

const UseEffectBasic = ()=>{

    const [value1,setValue1] = useState(0);
    const [value2,setValue2] = useState(0);



    useEffect(()=>{
        // This will run on each render as no dependecy array is passed
        console.log("This useEffct on every render...")
    })

      useEffect(()=>{
        // This will run when value 1 is incremented..
        console.log("This useEffct for first button...")
    },[value1])
    
    useEffect(()=>{
        // This will run when value 2 is incremented..
        console.log("useEffect for second button...")
    },[value2])

    const increment1 = ()=>{
        setValue1(value1+1);
    }

      const increment2 = ()=>{
        setValue2(value2+1);
    }

    return(
        <>
            <h1>Value1 : {value1}</h1>
            <h1>Value2 : {value2}</h1>

            <button onClick={increment1}>Click me 1</button>
            <button onClick={increment2}>Click me 2</button>

        </>
    )
}

export default UseEffectBasic;