"use client"

import Link from "next/link";
import {cn, pfFont} from "@/lib/utils"
import Navbar from "./_components/Navbar";
import "./globals.css";
import Footer from "./_components/Footer";

const Hero = () => {
  return (
      <div className="h-[100vh] w-[100vw] hero">
        <div className="w-full h-full onhero px-4 lg:px-24 pt-[150px] text-white ">
          <section className="w-full lg:w-2/3 flex flex-col gap-y-20 lg:gap-y-12">
            <h2 className="text-2xl lg:text-6xl uppercase font-medium">Вдохновение в каждом букете</h2>
            <p className="text-lg lg:text-3xl font-light">
              Дарите эмоции вместе с нашими уникальными композициями. Мы создаём букеты, которые расскажут о ваших чувствах лучше слов.
              <br/>
              <br/>
              Доставка по городу и индивидуальный подход к каждому заказу.
            </p>
            {/* <Link href={"/catalog"}>
              <Button variant={"secondary"} className={cn("px-12 cursor-pointer bg-white/25 transition-all text-white hover:text-black w-2/3 lg:w-fit text-lg font-light py-5")}>В каталог</Button>
            </Link> */}
            <Link href={"/catalog"} className={cn("text-center rounded-md px-12 cursor-pointer bg-white/25 transition-all text-white hover:bg-white hover:text-black w-2/3 lg:w-fit text-lg font-light py-2")}>
              В каталог
            </Link>
          </section>
        </div>
      </div>
  )
}

const About = () => {
  return (
    <section id="about_us" className=" w-full h-fit flex flex-col gap-y-12 lg:flex-row justify-between px-4 lg:px-24 py-6 lg:pt-[100px] text-white">

      <div className="w-full lg:w-1/2 flex flex-col gap-y-6 lg:gap-y-24">
        <h2 className={cn(pfFont.className,"uppercase text-xl lg:text-4xl")}>О нас</h2>
        <p className="lg:text-2xl">
          Добро пожаловать в  <span className={cn(pfFont.className,"uppercase text-lg lg:text-3xl")}>Florette</span> — цветочный онлайн-магазин, где каждая деталь создана с любовью и вниманием к вашим эмоциям.
          <br/>
          <br/>
          Мы  уже несколько лет дарим нашим клиентам радость, вдохновение и красоту в каждом букете.
        </p>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col items-center gap-y-6">
        <h2 className="uppercase text-lg lg:text-2xl">Почему выбирают нас?</h2>

        <ul className="flex flex-col gap-y-8 w-full">
          <li className="flex flex-col gap-y-2 border border-white/50 rounded-md p-4">
            <h3 className="uppercase w-full text-center font-medium">Качество и свежесть</h3>
            <p>
            Мы работаем только с проверенными поставщиками и следим за тем, чтобы каждый цветок в нашем магазине был идеальным.
            </p>
          </li>
          <li className="flex flex-col gap-y-2 border border-white/50 rounded-md p-4">
            <h3 className="uppercase w-full text-center font-medium">Индивидуальный подход</h3>
            <p>
            Мы создаём букеты, которые отражают вашу уникальность. Хотите романтичный пион или элегантную розу? Мы воплотим ваши пожелания.
            </p>
          </li>
          <li className="flex flex-col gap-y-2 border border-white/50 rounded-md p-4">
            <h3 className="uppercase w-full text-center font-medium">Удобство</h3>
            <p>
            Быстрая доставка по Красноярску и возможность заказать букет онлайн делают процесс покупки максимально комфортным
            </p>
          </li>
        </ul>

      </div>

    </section>
  )
}

const CatalogPreview = () => {
  return (
    <div className="flex flex-col gap-y-12 w-full px-4 lg:px-24 py-6 lg:py-[100px] text-white">
      <h2 className={cn(pfFont.className,"text-right uppercase text-4xl")}>Каталог</h2>

      <div className="w-full flex flex-col gap-y-2 gap-x-1 lg:flex-row lg:h-[600px] justify-between">

        <Link href={"/catalog/author"} className="w-full lg:w-[54.5%] lg:h-full h-[120px]">
        <div className="relative h-full w-full ">
          <img
            alt="Авторские букеты"
            className="w-full h-full object-cover authorb"
            src="/author.jpg"
          />
          <div className="hover:backdrop-blur-[2px] transition-all absolute top-0 flex items-center justify-center left-0 w-full h-full bg-black/60">
            <h3 className={cn(pfFont.className,"uppercase lg:text-4xl")}>Авторские букеты</h3>
          </div>
        </div>
        </Link>

        <div className="flex flex-col gap-y-3 w-full lg:w-[44.5%] lg:h-full ">
          <Link href={"/catalog/mono"} className="w-full h-[120px] lg:h-[59%]">
            <div className="w-full h-full relative">
              <img alt="Монобукеты" src="/mono.jpg" className="h-full w-full object-cover"/>
              <div className="hover:backdrop-blur-[2px] transition-all absolute top-0 flex items-center justify-center left-0 w-full h-full bg-black/60">
                <h3 className={cn(pfFont.className,"uppercase lg:text-4xl")}>Монокомпозиции</h3>
              </div>
            </div>
          </Link>

          <div className="w-full lg:h-[39%] flex gap-x-3">
            <Link href={"/catalog/orchids"} className="w-1/2 h-[120px] lg:h-full relative">
              <img alt="Орхидеи" src="/orchid.jpg" className="w-full h-full object-cover"/>
              <div className="hover:backdrop-blur-[2px] transition-all absolute top-0 flex items-center justify-center left-0 w-full h-full bg-black/60">
                <h3 className={cn(pfFont.className,"uppercase lg:text-4xl text-center")}>Орхидеи</h3>
              </div>
            </Link>
            <Link href={"/catalog/dry"} className="w-1/2 h-[120px] lg:h-full relative">
            <img alt="Сухоцветы" src="/sukh.jpg" className="w-full h-full object-cover"/>
            <div className="hover:backdrop-blur-[2px] transition-all absolute top-0 flex items-center justify-center left-0 w-full h-full bg-black/60">
                <h3 className={cn(pfFont.className,"uppercase lg:text-4xl text-center")}>Сухоцветы</h3>
              </div>

            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}


const Home = () => {
  return ( 
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <CatalogPreview/>
      </main>
      <Footer/>
    </>
   );
}
 
export default Home;