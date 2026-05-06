import { useEffect, useState } from "react"

const Cleanup = ()=>{
    const [toggle,setToggle] = useState(false);

    const toggleComponent = ()=>{
        setToggle(!toggle);
    }


    return (
        <>
            <button onClick = {toggleComponent}>Click me</button>
            {
                toggle && <RandomComponent/>
            }
        </>
    )
}

const RandomComponent = ()=>{
 /*
 If we click the button it will toogle the component and display hello there if true, but will also run useEffect every time 
 and log the value in console on every click.
 Issue : If we have a functionality like subscribe which has a some logic in useEffect so it will subscribe continuously in background
 Solution: Adding a cleanup function in useEffect like setTimeOut has a value which logs and then we clwar the interval.
 
 conclusion :  if we have a parent component and on click we call a child component and it has a useEffect which will then mount unmount on every click
 so to get rid of this we should have a cleanup function like below.

 we are attaching a scroll on someFunc so if we dont clean up it will have multiple scroll events as many time u click the button
 To fix this we have to remove the event listner in useEffect and 
 IMPORTANT : to clean up function in useEffect we should add return and then add the cleanup inside that. 
 
 */
     useEffect(()=>{
        //e.g 1: 
        // console.log("hi there....")
        // const someFunc = ()=>{
        //     console.log("somefunction...");
        // }
        // window.addEventListener("scroll",someFunc) //attached an event listener.
        // return () => window.removeEventListener("scroll",someFunc);  //cleanup function

        //e.g 2:

        const interval = setInterval(()=>{
            console.log("in setInterval....")
        },1000)
        return()=>{clearInterval(interval)} 

    },[]);

   

    return(
        <>
         <div>Hello there</div>
        </>
    )
}
export default Cleanup;