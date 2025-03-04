"use client"

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { useUser } from "@/app/context/userContext";
import { redirect } from "next/navigation";
import { useEffect,useState } from "react";
import { cn, pfFont } from "@/lib/utils";
import { ArrowRight, X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

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

        const [sum,setSum] = useState("-");
        let [data,setData] = useState(undefined);

        function fetchProducts () {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/getbasket/${user.basketId}`)
            .then(r=>r.json())
            .then(d=>{
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

        useEffect(()=>{
            fetchProducts()
        },[])

        const [isOrdered,setIsOrdered] = useState(false)

        const BasketProduct = (props) => {
            return (
                <div className="w-full h-[150px] flex justify-between">
                    <img className="w-1/2 lg:w-[20%] h-full object-cover" src={props.src?process.env.NEXT_PUBLIC_API_URL+"/"+props.src:"/orchid.jpg"}/>
                    <div className="lg:w-[60%] hidden lg:flex justify-between px-1">
                        <div className="w-[20%] h-full  flex flex-col gap-y-6">
                            <h3 className="uppercase text-center">Наименование</h3>
                            <p className={cn(pfFont.className,"text-center text-xl")}>{props.name?props.name:"lksf"}</p>
                        </div>
                        <div className="w-[20%] h-full flex flex-col gap-y-6">
                            <h3 className="uppercase text-center">Цена</h3>
                            <p className={cn("text-center")}>{props.price?
                            new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 3 }).format(props.price) + " ₽":
                             "- ₽"
                        }</p>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-[20%] h-full flex flex-col gap-y-2 items-end">
                        <X strokeWidth={1.5} onClick={props.delete} role="button" className="hover:text-[#ccc] cursor-pointer transition-all"/>
                        <p className={cn(pfFont.className,"block lg:hidden text-end text-sm")}>{props.name?props.name:"lksf"}</p>
                        <p className={cn("text-center")}>{props.price?
                            new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 3 }).format(props.price) + " ₽":
                             "- ₽"
                        }</p>

                    </div>
                </div>
            )
        }

        useEffect(()=>{
            if (data&&data.length>0) {
                let prices = data.map((e)=>{return e.price})

                const sum = prices.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue;
                }, 0);

                setSum(sum)
            }
        },[data])

        const SumCont = () => {
            return (
                <div className="w-full h-[100px] flex flex-col gap-y-4 items-end justify-start pt-4  border-t border-white/25">
                    <h4 className="uppercase font-medium">Итого</h4>
                    <p>{typeof sum == "number"&&new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 10 }).format(sum) + " ₽"}</p>
                </div>
            )
        }

        const handleDelete = (id) => {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/delete-basket-product/${id}`)
            .then(r=>r.json)
            .then(d=>console.log(d)).then(()=>fetchProducts())           
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(form)
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/clearbasket/${user.basketId}`)
            .then(r=>r.json)
            .then(d=>{console.log(d);setIsOrdered(true);setForm({name:"",phone:"",adress:""})}).then(()=>fetchProducts())
        }

        const [form,setForm] = useState({
            name:"",
            phone:"",
            adress:""
        })

        function handleChange(e) {
            setForm({
                ...form,
                [e.target.id]:e.target.value
            })
        }

        

        return(
            <div className="w-[100vw] h-[100vh] flex items-center justify-between text-white pt-[120px] pb-6 px-4 lg:px-24">
                <div className="w-1/3 h-full  border-r border-[#fff]/25 pr-4 flex flex-col justify-between">
                    <div className="flex flex-col gap-y-6">
                        <ul className="flex flex-col gap-y-6">
                            <li
                            className={cn("cursor-pointer px-4 py-2 rounded-sm hover:bg-white transition-all hover:text-black")}
                            onClick={()=>redirect("/me/user/basket")}
                            >Корзина</li>
                            <li
                            className={cn("cursor-pointer px-4 py-2 rounded-sm bg-[#ccc]  transition-all text-black")}
                            onClick={()=>redirect("/me/user/order")}
                            >Оформить заказ</li>
                        </ul>
                    </div>
                    <div className="hover:text-[#ccc] transition-all flex gap-x-4 mb-6 cursor-pointer" role="button" onClick={logout}>
                        <p>Выйти из аккаунта</p>
                        <ArrowRight strokeWidth={1.5} className="shrink-0"/>
                    </div>
                </div> 
                {!isOrdered?
                <div className="w-2/3 h-full pl-4 flex flex-col justify-between gap-y-6">
                    <div className="w-full h-full lg:h-1/2 flex flex-col gap-y-4 overflow-scroll hideyscroll">
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
                    <div className="w-full lg:h-2/5 flex flex-col gap-y-4 lg:gap-y-6 justify-between">
                        <h3 className="uppercase text-2xl">Оформление заказа</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-wrap h-full justify-between">
                            <div className="flex flex-col gap-y-4 lg:flex-row w-full justify-between">
                                <div className="w-2/3 lg:w-fit flex flex-col gap-y-2">
                                    <label className="font-light">Имя получателя</label>
                                    <input id="name" onChange={handleChange} value={form.name} className="bg-black/25 rounded-sm p-2 focus:outline-none"></input>
                                </div>
                                <div className="w-2/3 lg:w-fit flex flex-col gap-y-2">
                                    <label className="font-light">Телефон получателя</label>
                                    <input id="phone" onChange={handleChange} value={form.phone} className="bg-black/25 rounded-sm p-2 focus:outline-none"></input>
                                </div>
                                <div className="w-2/3 lg:w-fit flex flex-col gap-y-2">
                                    <label className="font-light">Адрес доставки</label>
                                    <input id="adress" onChange={handleChange} value={form.adress} className="bg-black/25 rounded-sm p-2 focus:outline-none"></input>
                                </div>
                            </div>
                            {(data&&data.length>0)?
                                <Button
                            className={'cursor-pointer w-2/3 mt-24 self-end'}
                            variant={"secondary"}
                            >Оформить заказ</Button>
                            :
                            <Button
                            disabled
                            className={'cursor-pointer w-2/3 mt-24 self-end'}
                            variant={"secondary"}
                            >Оформить заказ</Button>
                            }
                        </form>
                    </div>
                </div>:
                <div className="w-2/3 h-full pl-4 flex flex-col gap-y-12 justify-center">
                        <h2 className="text-4xl">Благодарим за заказ!</h2>
                        <p>Оператор свяжется с вам и уточнит остальные детали</p>
                </div>
                }
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