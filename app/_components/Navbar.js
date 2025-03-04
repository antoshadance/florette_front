"use client"

import { cn, pfFont } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";

const Navbar = () => {

    const [mobileNav,setMobileNav] = useState(false);

    const {user} = useUser();

    function toggleMobileNav() {
        setMobileNav(!mobileNav)
    }

    return ( 
        <nav className="z-[99] h-[100px] w-[100vw] flex bg-transparent backdrop-blur-[2px] border-b border-black/5 justify-between items-center px-2 lg:px-12 text-white fixed top-0">
            <Link href={"/"}><h2 className={cn(pfFont.className," uppercase text-3xl lg:text-4xl hover:text-[#dadada] transition-all")}>Florette</h2></Link>
            <ul className="lg:flex items-center gap-x-12 font-light hidden">
                <li className="hover:text-[#ccc] transition-all">
                    <Link href={"/"}>Главная</Link>
                </li>
                <li className="hover:text-[#ccc] transition-all">
                    <Link href={"/#about_us"}>О нас</Link>
                </li>
                <li className="hover:text-[#ccc] transition-all">
                    <Link href={"/catalog"}>Каталог</Link>
                </li>
                {(user&&user.role=="user")&&
                    <li className="hover:text-[#ccc] transition-all">
                    <Link href={"/me/user/basket"}>Корзина</Link>
                </li>
                }
                <li className="hover:text-[#ccc] transition-all">
                    <Link href={user?"/me":"/auth"}>Личный кабинет</Link>
                </li>
            </ul>
            <div id="nav_mob_panel" className={cn("lg:hidden flex flex-col gap-y-40 py-8 pl-8 pr-4 h-[100vh] w-[80vw] absolute top-0 bg-black/90 transition-all",mobileNav?"right-0":"right-[-80vw]")}>
                <X onClick={toggleMobileNav} size={32} className="shrink-0 self-end" strokeWidth={1.5}/>
                <ul className="flex flex-col gap-y-8 font-light">
                    <li>
                        <Link onClick={toggleMobileNav} href={"/"}>Главная</Link>
                    </li>
                    <li>
                        <Link onClick={toggleMobileNav} href={"/#about_us"}>О нас</Link>
                    </li>
                    <li>
                        <Link onClick={toggleMobileNav} href={"/catalog"}>Каталог</Link>
                    </li>
                    {(user&&user.role=="user")&&
                    <li className="hover:text-[#ccc] transition-all">
                    <Link href={"/me/user/basket"}>Корзина</Link>
                    </li>
                    }
                    <li>
                        <Link onClick={toggleMobileNav} href={user?"/me":"/auth"}>Личный кабинет</Link>
                    </li>
                </ul>
            </div>
            <Menu className="lg:hidden" onClick={toggleMobileNav}/>
        </nav>
     );
}
 
export default Navbar;