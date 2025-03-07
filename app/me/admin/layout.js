"use client"

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { useUser } from "@/app/context/userContext";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { redirect } from "next/navigation";

const AdminLayout = ({children}) => {

    const {user,login,logout} = useUser();

    let path = usePathname().split("/");
    path = path[path.length-1]
    
    useEffect(()=>{
        if (!user) {
            redirect("/auth")
        }

        if (user&&user.role!=="admin") {
            redirect("/me/user")
        }
    },[])

    return ( 
        <>
            <Navbar/>
            <div className="w-[100vw] h-[100vh] flex items-center justify-between text-white pt-[120px] pb-6 px-4 lg:px-24">
                <div className="w-1/3 h-full  border-r border-[#fff]/25 pr-4 flex flex-col justify-between">
                    <div className="flex flex-col gap-y-6">
                        <ul className="flex flex-col gap-y-6">
                            <li
                            className={cn("cursor-pointer px-4 py-2 rounded-sm transition-all hover:bg-white hover:text-black",path=="add-product"&&"bg-[#ccc] text-black")}
                            onClick={()=>redirect("/me/admin/add-product")}
                            >Добавить товар</li>
                            <li
                            className={cn("cursor-pointer px-4 py-2 rounded-sm transition-all hover:bg-white hover:text-black",path=="delete-product"&&"bg-[#ccc] text-black")}
                            onClick={()=>redirect("/me/admin/delete-product")}
                            >Удалить товар</li>
                        </ul>
                    </div>
                    <div className="hover:text-[#ccc] transition-all flex gap-x-4 mb-6 cursor-pointer" role="button" onClick={logout}>
                        <p>Выйти из аккаунта</p>
                        <ArrowRight strokeWidth={1.5} className="shrink-0"/>
                    </div>
                </div>
                <div className="w-2/3 h-full pl-4  hideyscroll overflow-scroll">
                    {children}
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default AdminLayout;