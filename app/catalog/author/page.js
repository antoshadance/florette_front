"use client"

import { useEffect,useState } from "react";
import Footer from "../../_components/Footer";
import Navbar from "../../_components/Navbar";
import { cn } from "@/lib/utils";
import { DualRangeSlider } from "@/components/ui/dualrangeslider";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { redirect } from "next/navigation"


const ProductCard = (props) => {
    return (
        <Link href={`/catalog/${props.id}`} className="group h-[360px] lg:w-[30%] bg-red-50 relative">
            <img
                className="w-full h-full object-cover group-hover:blur-[1px] transition-all"
                src={props.src}
            />
            <div className="absolute bottom-0 h-[40%] w-full p-4 bg-black/40 flex flex-col justify-between">
                <h3 className="text-2xl font-light uppercase">{props.name}</h3>
                <h4 className="text-2xl ">{new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 3 }).format(props.price)} ₽</h4>
            </div>
        </Link>
    )
}

const Filters = ({data,apply}) => {

    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(999999);

    useEffect(()=>{
        let prices;
        if (data!==undefined&&data.length>0) {
            prices = data.map((e)=>{
                return e.price
            });
            setMinPrice(Math.min(...prices))
            setMaxPrice(Math.max(...prices))
        }
    },[data])



    const [price,setPrice] = useState([0,15000]);


 return (
    <div className="w-full lg:w-1/4 h-full lg:pr-4 lg:border-r lg:border-[#fff]/25 flex flex-col gap-y-6 lg:p-y-24">
        <div className="w-full flex flex-col gap-y-4">
            <h3 className="uppercase lg:text-xl">Категории</h3>
            <ul className="flex flex-wrap text-xs lg:text-lg lg:flex-col gap-y-2">

                <li
                role="button"
                onClick={()=>{redirect("/catalog/author")}}
                className={cn("cursor-pointer px-4 py-2 rounded-sm  bg-[#ccc] hover transition-all text-black")}
                >Авторские букеты</li>

                <li
                role="button"
                onClick={()=>{redirect("/catalog/mono")}}
                className={cn("cursor-pointer px-4 py-2 rounded-sm  hover:bg-white hover transition-all hover:text-black")}
                >Монокомпозиции</li>

                <li
                role="button"
                onClick={()=>{redirect("/catalog/orchids")}}
                className={cn("cursor-pointer px-4 py-2 rounded-sm  hover:bg-white hover transition-all hover:text-black")}>                Орхидеи</li>

                <li
                role="button"
                onClick={()=>{redirect("/catalog/dry")}}
                className={cn("cursor-pointer px-4 py-2 rounded-sm  hover:bg-white hover transition-all hover:text-black")}>
                Сухоцветы</li>

            </ul>
        </div>
        <div className="w-full flex flex-col gap-y-4">
            <h3 className="uppercase lg:text-xl">Цена</h3>
            <div className="w-full flex justify-between gap-x-2">
                <p className="shrink-0">₽</p>
                <DualRangeSlider
                    onValueChange={(e)=>{apply(price);setPrice(e)}} min={0} max={15000} step={100} 
                 defaultValue={[0,15000]} value={[price[0],price[1]]} label={(val)=>{return ""+val}}/>
                <p className="shrink-0">₽₽₽</p>
            </div>
        </div>
    </div>
 )
}

const Products = ({data}) => {
    return (
        <div className="w-full lg:w-3/4 lg:pl-4 lg:h-full lg:overflow-scroll flex flex-wrap gap-x-[3.3%] gap-y-4 lg:gap-y-12 hideyscroll">
            {(data&&data.length>0)&&data.map((e,i)=>{
                return (
                    <ProductCard
                        key={i}
                        id={e.id}
                        name={e.name}
                        src={`${process.env.NEXT_PUBLIC_API_URL}/`+e.img}
                        price={e.price}
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

const CatalogMain = () => {

    const [data,setData] = useState(undefined);
    const [initData,setInitData] = useState(undefined)

    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/1`)
        .then(r=>r.json())
        .then(d=>{setData(d.products);setInitData(d.products)})
        .catch(e=>console.log(e))
    },[])

    const handleApplyFilters = (price) => {
        let tmp = [...initData];
        tmp = tmp.filter((e)=>{
            return (
                e.price>price[0]
                &&
                e.price<price[1]
            )
        })
        setData(tmp)
    }

    return (
        <div className="text-white w-[100vw] min-h-[100vh] lg:h-[100vh] pt-[calc(100px+1rem)] px-4 lg:px-24 gap-y-6  pb-4 flex flex-col lg:flex-row">
            <Filters data={data} apply={handleApplyFilters}/>
            <Products data={data}/>
        </div>
    )
}



const Catalog = () => {

    return ( 
        <>
            <Navbar/>
            <CatalogMain/>
            <Footer/>
        </>
     );
}
 
export default Catalog;