import { useEffect, useState } from "react";

/*
useEfffect hook is used to perform side effect on the component i.e basically any work outside the component
It takes 2 argumemts 1) callback function 2) dependency array
Cases of dependency array
1) if we dont pass dependency array the useEffect will run on each render
2) if we pass dependency array as empty it will only runs on initial render
3) if we pass value to dependency array it will run useEffect when the value is changed.

*/

const UseEffectBasic = ()=>{

    const [value,setValue] = useState(0);

    const hello = ()=>{
        console.log("hello..")
    }
    hello();

    useEffect(()=>{
        console.log("This useEffct and hello() will run on each render on click of the button...")
    })

    const increment = ()=>{
        setValue(value+1);
    }

    return(
        <>
            <h1>Value : {value}</h1>
            <button onClick={increment}>Click me</button>
        </>
    )
}

export default UseEffectBasic;