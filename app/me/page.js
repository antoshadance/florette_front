"use client"

import { useEffect } from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { useUser } from "../context/userContext";
import { redirect } from "next/navigation";

const MePage = () => {

    const {user} = useUser();

    useEffect(()=>{
        console.log(user.role)
        if (!user) {
           return redirect("/auth")
        }
        if (user.role=="admin") {
           return redirect("/me/admin")
        }
        return redirect("/me/user")
    },[])

    return ( 
        <>
            <Navbar/>
            <div className="h-[100vh] w-[100vw] flex items-center justify-center">
                Redirecting ...
            </div>
            <Footer/>
        </>
     );
}
 
export default MePage;