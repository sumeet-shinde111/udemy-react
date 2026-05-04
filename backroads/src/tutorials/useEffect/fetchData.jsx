import { useState,useEffect } from "react";

const FetchUsers = ()=>{
    const[user,setUser] = useState([]);

    const url = "https://api.github.com/userss";

    const getData = async()=>{
        try {
            const result = await fetch(url);
            const response = await result.json();
            console.log(response);
            setUser(response);
        } catch (error) {
            console.log("Error occured...",error);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    return(
        <>
        <h1>Fetch user data</h1>
        <ul>
                {
                    user.map((value)=>{
                        return <li key={value.id}>
                            <img src={value.avatar_url} alt= {`user-${value.login}`}/>
                            <span key={value.id}>{value.login}</span>
                            
                            </li>
                    })
                }
        </ul>
        
        </>
    )
}
export default FetchUsers;