import { cn, pfFont } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="w-[100vw] lg:h-[120px] px-4 lg:px-12 py-4 text-white bg-[#293230] flex flex-col gap-y-8 lg:flex-row lg:items-center justify-between">
            <Link href={"/"}>
                <h2 className={cn(pfFont.className,"uppercase text-4xl text-left")}>Florette</h2>
            </Link>
            <div className="flex flex-col lg:flex-row gap-y-6 gap-x-24">
                <div className="flex flex-col gap-y-2">
                    <h3 className="underline">Адрес</h3>
                    <p>Красноярск, ул. Маяковского, 21</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h3 className="underline">Телефон</h3>
                    <p>+7 (123) 123 11 22</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;