"use client"
import { useUser } from "@/app/context/userContext";
import { useState,useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, pfFont } from "@/lib/utils";
import { X } from "lucide-react";

const BasketPage = () => {

    const {user} = useUser();
    const [sum,setSum] = useState("-");
    let [data,setData] = useState(undefined);

    function fetchProducts () {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/getbasket/${user.basketId}`)
        .then(r=>r.json())
        .then(d=>{
            console.log(d);
            setData(d.map((e)=>{
                return {
                    id: e.id,
                    img: e.product.img,
                    name: e.product.name,
                    price: e.product.price
                }
            }))
        })
    }

    const handleDelete = (id) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/delete-basket-product/${id}`)
        .then(r=>r.json)
        .then(d=>console.log(d)).then(()=>fetchProducts())
        .catch(e=>console.log(e))           
    }

    useEffect(()=>{
        fetchProducts()
    },[]);

    useEffect(()=>{
        if (data&&data.length>0) {
            let prices = data.map((e)=>{return e.price})

            const sum = prices.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0);

            setSum(sum)
        }
    },[data])

    const BasketProduct = (props) => {
        return (
            <div className="w-full h-[150px] flex justify-between">
                <img className="w-1/2 lg:w-[20%] h-full object-cover rounded" src={props.src?process.env.NEXT_PUBLIC_API_URL+"/"+props.src:"/orchid.jpg"}/>
                <div className="lg:w-[60%] hidden lg:flex justify-between px-1 lg:pl-12">
                    <div className="w-[20%] h-full  flex flex-col gap-y-6">
                        <h3 className="uppercase text-center">Наименование</h3>
                        <p className={cn(pfFont.className,"text-center text-xl")}>{props.name?props.name:"lksf"}</p>
                    </div>
                    <div className="w-[20%] h-full flex flex-col gap-y-6">
                        <h3 className="uppercase text-center">Цена</h3>
                        <p className={cn("text-center")}>{props.price?
                        new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 6 }).format(props.price) + " ₽":
                         "- ₽"
                    }</p>
                    </div>
                </div>
                <div className="w-1/2 lg:w-[20%] h-full flex flex-col gap-y-2 items-end">
                    <X strokeWidth={1.5} onClick={props.delete} role="button" className="hover:text-[#ccc] cursor-pointer transition-all"/>
                    <p className={cn(pfFont.className,"block lg:hidden text-end text-sm")}>{props.name?props.name:"lksf"}</p>
                    <p className={cn("text-center lg:hidden")}>{props.price?
                        new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 6 }).format(props.price) + " ₽":
                         "- ₽"
                    }</p>

                </div>
            </div>
        )
    }

    const SumCont = () => {
        return (
            <div className="w-full h-[100px] flex flex-col gap-y-4 items-end justify-start pt-4  border-t border-white/25">
                <h4 className="uppercase font-medium">Итого</h4>
                <p>{typeof sum == "number"&&new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 6 }).format(sum) + " ₽"}</p>
            </div>
        )
    }

    return ( 
        <div className="w-full h-full flex flex-col gap-y-4">
            {data==undefined&&
                <Skeleton className={"w-full h-[120px]"}/>
                }
                {data&&data.map((e,i)=>{
                    return (
                        <BasketProduct
                            key={e.id}
                            id={e.id}
                            src={e.img}
                            name={e.name}
                            price={e.price}
                            delete={()=>handleDelete(e.id)}
                        />
                    )
                })}
                {(data&&data.length>0)&&<SumCont/>}
        </div>
     );
}
 
export default BasketPage;