"use client"

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { useUser } from "@/app/context/userContext";
import { useEffect,useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, X } from "lucide-react";
import { redirect } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

const DeleteProductPage = () => {

    const {user,logout} = useUser();  

   

    const AdminMe = () => {

        const [data,setData] = useState(undefined);

        const fetchData = () => fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
        .then(r=>r.json())
        .then(d=>setData(d))

        useEffect(()=>{
            fetchData()
        },[])

        

        

        const ProductCard = (props) => {
            return (
                <div className="group h-[360px] lg:w-[30%] bg-red-50 relative">
                    <img
                        className="w-full h-full object-cover group-hover:blur-[1px] transition-all"
                        src={props.src}
                    />
                    <div className="absolute bottom-0 h-[40%] w-full p-4 bg-black/40 flex flex-col justify-between">
                        <h3 className="text-2xl font-light uppercase">{props.prodName}</h3>
                        <h4 className="text-2xl ">{new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 3 }).format(props.price)} ₽</h4>
                    </div>
                    <X
                        className="absolute top-2 right-2 bg-black/50 cursor-pointer"
                        role="button"
                        onClick={props.delete}
                    />
                </div>
            )
        }

        const CatalogIn = () => {

            const token = localStorage.getItem("user");

            const handleDelete = (id) => {
                fetch(`${process.env.NEXT_PUBLIC_API_URL}/delete-product/${id}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    }
                ).then(r=>r.json())
                .then(d=>console.log(d))
                .then(()=>{fetchData()})
                .catch(e=>console.log(e))
            }

            return (
                <div className="w-full h-full flex flex-wrap gap-x-4 gap-y-[3%] overflow-scroll hideyscroll">
                    {data&&data.map((e)=>{
                        return (
                            <ProductCard key={e.id} className="border m-5"
                            src={`${process.env.NEXT_PUBLIC_API_URL}/`+e.img}
                            prodName={e.name}
                            price={e.price}
                            id={e.id}
                            delete={()=>{handleDelete(e.id)}}
                            />
                        )
                    })}
                    {data===undefined&&
                    <>
                    <Skeleton className={"h-[360px] w-[30%] rounded-none"}/>
                    <Skeleton className={"h-[360px] w-[30%] rounded-none"}/>
                    <Skeleton className={"h-[360px] w-[30%] rounded-none"}/>
                    <Skeleton className={"h-[360px] w-[30%] rounded-none"}/>
                    <Skeleton className={"h-[360px] w-[30%] rounded-none"}/>
                    <Skeleton className={"h-[360px] w-[30%] rounded-none"}/>
                    <Skeleton className={"h-[360px] w-[30%] rounded-none"}/>
                    <Skeleton className={"h-[360px] w-[30%] rounded-none"}/>

                    </>
                    }
                </div>
            )
        }

        return (
            <div className="w-[100vw] h-[100vh] flex items-center justify-between text-white pt-[120px] pb-6 px-4 lg:px-24">
                <div className="w-1/3 h-full  border-r border-[#fff]/25 pr-4 flex flex-col justify-between">
                        <div className="flex flex-col gap-y-6">
                            <ul className="flex flex-col gap-y-6">
                                <li
                                className={cn("cursor-pointer px-4 py-2 rounded-sm hover:bg-white hover transition-all hover:text-black")}
                                onClick={()=>redirect("/me/admin/add-product")}
                                >Добавить товар</li>
                                <li
                                className={cn("cursor-pointer px-4 py-2 rounded-sm bg-[#ccc] hover transition-all text-black")}
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
                    <CatalogIn/>
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
 
export default DeleteProductPage;