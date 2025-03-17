"use client"

import { redirect } from "next/navigation";
import { useEffect } from "react";

const ProductPage = () => {

    useEffect(()=>{
        redirect("/catalog")
    },[])

    return ( 
        <></>
     );
}
 
export default ProductPage;