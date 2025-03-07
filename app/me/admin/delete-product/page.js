"use client"

import { useState,useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { X } from "lucide-react";

const DeleteProductPage = () => {

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

        const handleDelete = (id) => {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/delete-product/${id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("user")}`
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
        <div className="w-full h-full">
            <CatalogIn/>
        </div>
     );
}
 
export default DeleteProductPage;