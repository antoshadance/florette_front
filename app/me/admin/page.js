"use client"

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { useUser } from "@/app/context/userContext";
import { useEffect,useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const AdminMePage = () => {

    const {user,logout} = useUser();

    useEffect(()=>{
        console.log(user)
    },[])

    

    const AddProduct = ({form,handleChange}) => {
        return (
            <form className="w-full h-full flex flex-wrap gap-y-12 justify-between">
                <div className="flex flex-col gap-y-12 w-1/3">
                    <div className="w-full flex flex-col gap-y-2">
                        <label htmlFor="name">Наименование</label>
                        <input
                            value={form.name}
                            onChange={handleChange}
                            className="rounded-sm bg-black/10 p-1"
                            id="name"/>
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                        <label htmlFor="description">Описание</label>
                        <input
                            value={form.description}
                            onChange={handleChange}
                            className="rounded-sm bg-black/10 p-1"
                            id="description"/>
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                        <label htmlFor="price">Цена, руб.</label>
                        <input
                            value={form.price}
                            onChange={handleChange}
                            className="rounded-sm bg-black/10 p-1"
                            id="price"/>
                    </div>
                    
                </div>
                <div className="w-[64%] h-1/2 bg-black/10">
                    <input id="src" type="file" className="hidden" />
                    <label htmlFor="src" className="w-full h-full flex flex-col items-center justify-center cursor-pointer gap-y-6">
                        <Image size={48} strokeWidth={1.5}/>
                        <h3 className="uppercase font-light">Добавить фото</h3>
                    </label>
                </div>
                <Button variant={"secondary"}>Опубликовать</Button>
            </form>
        )
    }

    const AdminMe = () => {

        const [form,setForm] = useState({
            name:"",
            price:"",
            description:""
        })
    
        const handleChange = (e) => {
            setForm({
                ...form,
                [e.target.id]:e.target.value
            })
        }

        return (
            <div className="w-[100vw] h-[100vh] flex items-center justify-between text-white pt-[120px] pb-6 px-4 lg:px-24">
                <div className="w-1/3 h-full  border-r border-[#fff]/25 pr-4 flex flex-col justify-between">
                    <div className="flex flex-col gap-y-6">
                        <ul className="flex flex-col gap-y-6">
                            <li
                            className={cn("cursor-pointer px-4 py-2 rounded-sm hover:bg-[#ccc] hover transition-all hover:text-black")}
                            onClick={()=>redirect("/me/admin/add-product")}
                            >Добавить товар</li>
                            <li
                            className={cn("cursor-pointer px-4 py-2 rounded-sm hover:bg-[#ccc] hover transition-all hover:text-black")}
                            onClick={()=>redirect("/me/admin/delete-product")}
                            >Удалить товар</li>
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
            <AdminMe/>
            <Footer/>
        </>
     );
}
 
export default AdminMePage;