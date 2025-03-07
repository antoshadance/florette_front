"use client"

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { useUser } from "@/app/context/userContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

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
            <div className="w-full h-full">
                
            </div>
        )
    }
 
    return ( 
        <>
            <Cabinet/>
        </>
     );
}
 
export default UserMe;