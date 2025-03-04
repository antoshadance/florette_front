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
            <div className="w-[100vw] h-[100vh] flex items-center justify-between text-white pt-[120px] pb-6 px-4 lg:px-24">
                <div className="w-1/3 h-full  border-r border-[#fff]/25 pr-4 flex flex-col justify-between">
                    <div className="flex flex-col gap-y-6">
                        <ul className="flex flex-col gap-y-6">
                            <li
                            className={cn("cursor-pointer px-4 py-2 rounded-sm hover:bg-[#ccc] hover transition-all hover:text-black")}
                            onClick={()=>redirect("/me/user/basket")}
                            >Корзина</li>
                            <li
                            className={cn("cursor-pointer px-4 py-2 rounded-sm hover:bg-[#ccc] hover transition-all hover:text-black")}
                            onClick={()=>redirect("/me/user/order")}
                            >Оформить заказ</li>
                        </ul>
                    </div>
                    <div className="hover:text-[#ccc] transition-all flex gap-x-4 mb-6 cursor-pointer" role="button" onClick={logout}>
                        <p>Выйти из аккаунта</p>
                        <ArrowRight strokeWidth={1.5} className="shrink-0"/>
                    </div>
                </div> 
                <div className="w-2/3 h-full pl-4">
                </div>
            </div>
        )
    }
 
    return ( 
        <>
            <Navbar/>
            <Cabinet/>
            <Footer/>
        </>
     );
}
 
export default UserMe;