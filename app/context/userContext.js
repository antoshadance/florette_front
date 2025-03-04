"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider =  ({children}) => {

    const [user,setUser] = useState(undefined);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        setUser(storedUser ? jwtDecode(storedUser) : undefined);
    }, []);


    function login (data,route)  {
        console.log(data)
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/${route}`,{
                    method: "post",
                    body: data,
                    headers: {
                        "Content-Type":"application/json"
                    }
                })
                .then(r=>r.status==200&&r.json())
                .then((d)=>{
                    let {token} = d
                    if (token) {
                        localStorage.setItem("user",token)
                    } 
                })
                .then(()=>{setUser(jwtDecode(localStorage.getItem("user")))})
                .catch((e)=>{console.log(e)})

        return redirect("/me")
        
    }

    let logout = () => {
        localStorage.removeItem("user")
        setUser();
        redirect("/")
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>
    )
}

export const useUser = () => useContext(AuthContext)