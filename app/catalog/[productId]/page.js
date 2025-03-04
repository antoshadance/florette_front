"use client";

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { useUser } from "@/app/context/userContext";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, pfFont } from "@/lib/utils";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";



const ProductPage = () => {

    const {productId} = useParams();

    const {user} = useUser();



     const [product,setProduct] = useState(undefined)

    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
        .then(r=>r.json())
        .then(d=>setProduct(d.product))
        .catch(e=>console.log(e))
    },[])

    const Content = ({product}) => {

        let {id,name,img,price,description} = product;


        function addToBasket() {

            console.log(product)

            const fd = new FormData();

            fd.append("productId",id);
            fd.append("basketId",user.basketId)

            fetch(`${process.env.NEXT_PUBLIC_API_URL}/addtobasket`,{
                method:"post",
                body: fd
            })
        }

    
        return (<>
            {product&&
                <div className="w-[100vw] lg:h-[100vh] lg:px-0 px-4 lg:pr-24 pt-[120px] pb-12 flex flex-col gap-y-12 lg:flex-row lg:items-center">
                <img src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`} className="lg:w-2/3 lg:h-full object-cover"/>
                <section className="flex flex-col gap-y-2 lg:gap-y-6 lg:pl-24 text-white">
                    <h2 className={cn(pfFont.className,"text-4xl uppercase lg:text-center")}>{name}</h2>
                    <p className="font-semibold text-2xl my-6 lg:my-0 text-right">{price&&
                        new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 3 }).format(price) + " ₽"
                    }</p>
                    <p className="text-lg lg:mt-24">{description}</p>
                    {(user&&user.role=="user")&&
                        <Button
                    onClick={addToBasket}
                    variant={"secondary"} className={cn("px-12 cursor-pointer bg-white/25 transition-all text-white hover:text-black w-2/3 text-lg font-light py-5")}
                    >В корзину</Button>
                    }
                    {!user&&
                        <Button
                    onClick={()=>{redirect("/auth")}}
                    variant={"secondary"} className={cn("px-12 cursor-pointer bg-white/25 transition-all text-white hover:text-black w-2/3 text-lg font-light py-5")}
                    >Войти чтобы купить</Button>
                    }

                </section>
            </div>
            }
            </>
        )
    }

    return ( 
        <>
            <Navbar/>
            {!product&&
                <div className="w-[100vw] h-[100vh] pr-4 lg:pr-24 pt-[120px] pb-12 flex justify-between items-center">
                    <Skeleton className={"w-3/4 h-full"}/>
                    <Skeleton className={"w-1/5 h-1/2"}/>
                </div>
            }
            {product&&<Content product={product}/>}
            <Footer/>
        </>
     );
}
 
export default ProductPage;