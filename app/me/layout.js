"use client"

import { useEffect } from "react";
import { useUser } from "../context/userContext";
import { redirect } from "next/navigation";

const MeLayout = ({children}) => {

    const {user} = useUser();

    useEffect(()=>{
        if (!user) {
            redirect("/auth")
        }
    },[user])

    return ( 
        <div className="w-[100vw] h-[100vh]">
            {children}
        </div>
     );
}
 
export default MeLayout;