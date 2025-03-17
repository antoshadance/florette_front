"use client"

import { useUser } from "@/app/context/userContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const UserMe = () => {

    const {user,login,logout} = useUser();

    useEffect(()=>{


        if (!user) {
            redirect("/auth")
        }

        if (user&&user.role!=="user") {
            redirect("/me/admin")
        }

    },[])



    const Cabinet = () => {
        return(
            <main className="w-full h-full flex ">
                <h2 className="text-4xl">Добро пожаловать{user&&user.username?", "+user.username+"!":"!"}</h2>
            </main>
        )
    }
 
    return ( 
        <>
            <Cabinet/>
        </>
     );
}
 
export default UserMe;