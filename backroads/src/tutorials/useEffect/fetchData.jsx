import { useState,useEffect } from "react";

const FetchUsers = ()=>{
    const[user,setUser] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const url = "https://api.github.com/users";

    const getData = async()=>{
        try {
            setIsLoading(true);
            const result = await fetch(url);
            const response = await result.json();
            setUser(response);
            setIsLoading(false)
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
        {isLoading ? <div>Loading....</div> : 
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
        }
        </>
    )
}
export default FetchUsers;