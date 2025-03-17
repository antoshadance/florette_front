"use client"

import { useEffect,useState } from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { cn } from "@/lib/utils";
import { DualRangeSlider } from "@/components/ui/dualrangeslider";
import { Skeleton } from "@/components/ui/skeleton";
import { redirect } from "next/navigation";
import ProductCard from "../_components/ProductCard";
import ProductList from "../_components/ProductList";



const Filters = ({initData,apply}) => {

    const [priceBounds, setPriceBounds] = useState([0,99900]);
    const [price,setPrice] = useState([0,priceBounds[1]]);

    useEffect(()=>{
        if (initData) {
            let prices = initData.map(e=>e.price)
            setPriceBounds([Math.min(...prices),Math.max(...prices)])
        }
    },[initData])

    useEffect(()=>{
        setPrice([0,priceBounds[1]])
    },[priceBounds])


 return (
    <div className="w-full lg:w-1/4 h-full lg:pr-4 lg:border-r lg:border-[#fff]/25 flex flex-col gap-y-6 lg:p-y-24">
        <div className="w-full flex flex-col gap-y-4">
            <h3 className="uppercase lg:text-xl">Категории</h3>
            <ul className="flex flex-wrap text-xs lg:text-lg lg:flex-col gap-y-2">

                <li
                
                onClick={()=>{redirect("/catalog/author")}}
                className={cn("cursor-pointer px-4 py-2 rounded-sm  hover:bg-[#ccc] hover transition-all hover:text-black")}
                >Авторские букеты</li>

                <li
                
                onClick={()=>{redirect("/catalog/mono")}}
                className={cn("cursor-pointer px-4 py-2 rounded-sm  hover:bg-[#ccc] hover transition-all hover:text-black")}
                >Монокомпозиции</li>

                <li
                
                onClick={()=>{redirect("/catalog/orchids")}}
                className={cn("cursor-pointer px-4 py-2 rounded-sm  hover:bg-[#ccc] hover transition-all hover:text-black")}>Орхидеи</li>

                <li
                
                onClick={()=>{redirect("/catalog/dry")}}
                className={cn("cursor-pointer px-4 py-2 rounded-sm  hover:bg-[#ccc] hover transition-all hover:text-black")}>Сухоцветы</li>

            </ul>
        </div>
        <div className="w-full flex  flex-col gap-y-4">
            <h3 className="uppercase lg:text-xl">Цена</h3>
            <div className="w-full flex justify-between gap-x-2">
                <p className="shrink-0">₽</p>
                <DualRangeSlider
                    onValueChange={(val)=>{setPrice(val);apply(price)}}
                    min={0}
                    max={priceBounds[1]+100}
                    step={100} 
                    defaultValue={[0,100000]}
                    value={[price[0],price[1]]}
                    label={(val)=>{return ""+val}}/>
                <p className="shrink-0">₽₽₽</p>
            </div>
        </div>
    </div>
 )
}

const Products = ({data}) => {

    return (
        <div className="w-full lg:w-3/4 lg:pl-4 lg:h-full lg:overflow-scroll flex flex-wrap justify-between lg:justify-normal lg:gap-x-[3.3%] gap-y-4 lg:gap-y-12 hideyscroll">
            {data&&data.map((e,i)=>{
                return (
                    <ProductCard
                        key={i}
                        id={e.id}
                        name={e.name}
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${e.img}`}
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

    const [initData,setInitData] = useState(undefined);
    const [filteredData,setFilteredData] = useState(undefined);

    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
        .then(r=>r.json())
        .then(d=>{setInitData(d),setFilteredData(d)})
        .catch(e=>console.log(e))
    },[])

    function handleApplyFilters(val) {
        let tmp = [...initData]
        tmp = tmp.filter(e=>e.price>=val[0]&&e.price<=val[1])
        setFilteredData(tmp)
    }


    return (
        <div className="text-white w-[100vw] min-h-[100vh] lg:h-[100vh] pt-[calc(100px+1rem)] px-4 lg:px-24 gap-y-6  pb-4 flex flex-col lg:flex-row">
            <Filters initData={initData} apply={handleApplyFilters}/>
            <div className="w-full lg:w-3/4 lg:pl-4 lg:h-full lg:overflow-scroll flex flex-wrap justify-between lg:justify-normal lg:gap-x-[3.3%] gap-y-4 lg:gap-y-12 hideyscroll">
                <ProductList data={filteredData}/>
            </div>
        </div>
    )
}



const Catalog = () => {

    return ( 
        <>
            <Navbar/>
            <main>
            <CatalogMain/>
            </main>
            <Footer/>
        </>
     );
}
 
export default Catalog;