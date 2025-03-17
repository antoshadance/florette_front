import ProductCard from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

const ProductList = ({data}) => {

    return (
            <>
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
            </>
    )
}

export default ProductList