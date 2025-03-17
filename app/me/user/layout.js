"use client"

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { useUser } from "@/app/context/userContext";
import { useEffect, useState } from "react";
import { cn,formatPhoneNumber } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import Link from "next/link";

const UserLayout = ({children}) => {

    const {user,login,logout} = useUser();

    let path = usePathname().split("/");
    path = path[path.length-1];

    const [userInfo,setUserInfo] = useState(undefined)
    
    useEffect(()=>{
        
        if (!user) {
            redirect("/auth")
        }

        if (user&&user.role!=="user") {
            redirect("/me/admin")
        }

        if (user) {
            let {id} = user;
            
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-user?qId=${id}`)
            .then(r=>r.json())
            .then(d=>setUserInfo(d))
            .catch(e=>console.log(e))

        }


    },[])

    const ButtonsTop = () => {
        return (
                <ul className="flex flex-col gap-y-6">
                    <li
                    className={cn("cursor-pointer px-4 py-2 rounded-sm transition-all hover:bg-white hover:text-black",path=="basket"&&"bg-[#ccc] text-black")}
                    onClick={()=>redirect("/me/user/basket")}
                    >Корзина</li>
                    <li
                    className={cn("cursor-pointer px-4 py-2 rounded-sm transition-all hover:bg-white hover:text-black",path=="order"&&"bg-[#ccc] text-black")}
                    onClick={()=>redirect("/me/user/order")}
                    >Оформить заказ</li>
                </ul>
        )
    }

    const ExitButton = () => {
        return (
            <div className="hover:text-[#ccc] transition-all flex gap-x-4 mt-auto cursor-pointer" role="button" onClick={logout}>
                <p>Выйти из аккаунта</p>
                <ArrowRight strokeWidth={1.5} className="shrink-0"/>
            </div>
        )
    }

    const UserInfo = ({name,phone,adress}) => {
        return (
            <div className="w-full h-[45%] rounded mb-12 flex flex-col justify-between p-4 border bg-[#293230] border-white/25">
                <div className="flex justify-between">
                    <h2 className="uppercase max-w-4/5">Пользователь {user&&user.login}</h2>
                    <Link href={"/me/user/edit"} className="w-1/5 text-sm font-extralight text-[#ccc] hover:text-white transition-all">Изменить</Link>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h3 className="font-medium">Имя</h3>
                    <p>{name?name:"Не указано"}</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h3 className="font-medium">Контактный телефон</h3>
                    <p>{phone?formatPhoneNumber(phone):"Не указан"}</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h3 className="font-medium">Адрес</h3>
                    <p>{adress?adress:"Не указан"}</p>
                </div>
            </div>
        )
    }

    return ( 
        <>
            <Navbar/>
                <div className="w-[100vw] h-[100vh] flex items-center justify-between text-white pt-[120px] pb-6 px-4 lg:px-24">
                    <div className="w-1/3 h-full  border-r border-[#fff]/25 pr-4 flex flex-col ">  
                        <UserInfo name={userInfo&&userInfo.name} phone={userInfo&&userInfo.phone} adress={userInfo&&userInfo.adress}/>
                        <ButtonsTop/>
                        <ExitButton/>
                    </div>
                    <div className="w-2/3 h-full pl-4  hideyscroll overflow-scroll">
                        {children}
                    </div>
                </div>
            <Footer/>
        </>
     );
}
 
export default UserLayout;