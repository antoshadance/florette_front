"use client"

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { DualRangeSlider } from "@/components/ui/dualrangeslider";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const FilterCatalog = ({initData,apply}) => {

    const [priceBounds, setPriceBounds] = useState([0,99900]);
    const [price,setPrice] = useState([0,priceBounds[1]]);

    let path = usePathname().split("/");
    path = path[path.length-1];

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
                className={cn("cursor-pointer px-4 py-2 rounded-sm  hover:bg-white hover transition-all hover:text-black",path=="author"&&"bg-[#ccc] text-black")}
                >Авторские букеты</li>

                <li
                
                onClick={()=>{redirect("/catalog/mono")}}
                className={cn("cursor-pointer px-4 py-2 rounded-sm  hover:bg-white hover transition-all hover:text-black",path=="mono"&&"bg-[#ccc] text-black")}
                >Монокомпозиции</li>

                <li
                
                onClick={()=>{redirect("/catalog/orchids")}}
                className={cn("cursor-pointer px-4 py-2 rounded-sm  hover:bg-white hover transition-all hover:text-black",path=="orchids"&&"bg-[#ccc] text-black")}
                >Орхидеи</li>

                <li
                
                onClick={()=>{redirect("/catalog/dry")}}
                className={cn("cursor-pointer px-4 py-2 rounded-sm  hover:bg-white hover transition-all hover:text-black",path=="dry"&&"bg-[#ccc] text-black")}
                >Сухоцветы</li>

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

export default FilterCatalog;