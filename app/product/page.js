"use client"

import { redirect } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Navbar";


const ProductPage = () => {

    useEffect(()=>{
        redirect("/catalog")
    },[])

    return ( 
        <>
        <Navbar/>
        <main>
        <h1 className="text-white">redirecting to /catalog ...</h1>
        </main>
        <Footer/>
        </>
     );
}
 
export default ProductPage;