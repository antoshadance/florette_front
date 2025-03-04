"use client"

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { useUser } from "@/app/context/userContext";
import { useEffect,useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

const AddProductPage = () => {

    const {user,logout} = useUser();
    const [token,setToken] = useState(undefined)

   

    const AddProduct = ({form,handleChange,handleFileChange,hasFile,src,handleDeleteImg,handleSubmit,handleCat}) => {
        return (
            <form onSubmit={handleSubmit} className="w-full h-full flex flex-col lg:flex-wrap gap-y-12 justify-between">
                <div className="flex flex-col gap-y-4 lg:h-1/2 lg:justify-between  lg:w-1/3">
                    <div className="w-full flex flex-col gap-y-2">
                        <label htmlFor="name">Наименование</label>
                        <input
                            value={form.name}
                            onChange={handleChange}
                            className="rounded-sm bg-black/10 p-1"
                            id="name"/>
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                        <label htmlFor="description">Описание</label>
                        <textarea
                            value={form.description}
                            onChange={handleChange}
                            className="rounded-sm bg-black/10 p-1"
                            id="description"/>
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                        <label htmlFor="price">Цена, руб.</label>
                        <input
                            value={form.price}
                            onChange={handleChange}
                            className="rounded-sm bg-black/10 p-1"
                            id="price"/>
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                        <p>Категория</p>
                        <Select onValueChange={handleCat}>
                        <SelectTrigger className="w-full focus-visible:outline-none ring-0 border-none bg-black/10">
                            <SelectValue placeholder="..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={"1"}>Авторские букеты</SelectItem>
                            <SelectItem value={"2"}>Монокомпозиции</SelectItem>
                            <SelectItem value={"3"}>Орхидеи</SelectItem>
                            <SelectItem value={"4"}>Сухоцветы</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                    
                </div>
                <div className="lg:w-[64%] h-1/6 lg:h-1/2 bg-black/10">
                    <input accept="image/png, image/jpeg" onChange={handleFileChange} id="src" type="file" className="hidden" />
                    {!hasFile&&
                    <label htmlFor="src" className="w-full h-full flex flex-col items-center justify-center cursor-pointer gap-y-6">
                        <Image size={48} strokeWidth={1.5}/>
                        <h3 className="uppercase font-light">Добавить фото</h3>
                    </label>}
                    {hasFile&&
                    <div className="w-full h-full relative p-1">
                        <img src={src} className="w-full h-full object-cover"/>
                        <X role="button" onClick={handleDeleteImg} strokeWidth={1.5} className="cursor-pointer absolute top-2 right-2 bg-black/50"/>
                    </div>
                    }
                </div>
                <Button variant={"secondary"}>Опубликовать</Button>
            </form>
        )
    }

    const AdminMe = () => {

        const [form,setForm] = useState({
            name:"",
            price:"",
            description:"",
            catId:""
        })


        //CATS

        function handleCat(val) {
            setForm({...form,catId:val})
            console.log(form)
        }
        //

        const [preview,setPreview] = useState(null);

        const [file,setFile] = useState(null);
    
        const handleChange = (e) => {
            setForm({
                ...form,
                [e.target.id]:e.target.value
            })
        }

        const hasFile = preview!==null;

        const handleFileChange = (e) => {

            let f = e.target.files[0];

            setFile(f)
            console.log(file)
            
            
            let tmp = URL.createObjectURL(f);
            setPreview(tmp)

            // let file = e.target.files;


        }

        const handleDeleteImg = () => {
            setPreview(null);
            setFile(null);
        }

        useEffect(()=>{
            setToken(localStorage.getItem("user"))
        })

        const handleSubmit = (e) => {

            e.preventDefault()
            let fData = new FormData();

            for (let key in form) {
                fData.append(key,form[key]);
            }

            fData.append("img",file)

            fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-product`,{
                method: "post",
                body: fData,
                headers: {
                    "Authorization" : `Bearer ${token}`,
                }
            })
            .then(r=>r.json())
            .then((d)=>{console.log(d)})
            .catch(e=>console.log(e))

            setForm({
                name:"",
                price:"",
                description:"",
                catId:""
            })

            setFile(null)

            setPreview(null)

        }

        return (
            <div className="w-[100vw] h-[100vh] flex items-center justify-between text-white pt-[120px] pb-6 px-4 lg:px-24">
                <div className="w-1/3 h-full  border-r border-[#fff]/25 pr-4 flex flex-col justify-between">
                    <div className="flex flex-col gap-y-6">
                        <ul className="flex flex-col gap-y-6">
                            <li
                            className={cn("cursor-pointer px-4 py-2 rounded-sm bg-[#ccc] transition-all text-black")}
                            onClick={()=>redirect("/me/admin/add-product")}
                            >Добавить товар</li>
                            <li
                            className={cn("cursor-pointer px-4 py-2 rounded-sm hover:bg-white transition-all hover:text-black")}
                            onClick={()=>redirect("/me/admin/delete-product")}
                            >Удалить товар</li>
                        </ul>
                    </div>
                    <div className="hover:text-[#ccc] transition-all flex gap-x-4 mb-6 cursor-pointer" role="button" onClick={logout}>
                        <p>Выйти из аккаунта</p>
                        <ArrowRight strokeWidth={1.5} className="shrink-0"/>
                    </div>
                </div> 
                <div className="w-2/3 h-full pl-4">
                    <AddProduct file={file} handleCat={handleCat} handleSubmit={handleSubmit} handleDeleteImg={handleDeleteImg} src={preview} hasFile={hasFile} form={form} handleChange={handleChange} handleFileChange={handleFileChange}/>
                </div>
            </div>
        )
    }

    return ( 
        <>
            <Navbar/>
            <AdminMe/>
            <Footer/>
        </>
     );
}
 
export default AddProductPage;