"use client"

import { useEffect, useState } from "react";
import {useUser} from "@/app/context/userContext";
import { Button } from "@/components/ui/button";
import {cn} from "@/lib/utils"

const EditCredentials = () => {

    const {user} = useUser();


    const [form,setForm] = useState({
        id:"",
        name:"",
        phone:"",
        adress:""
    });

    const numRegEx = /^7\d{10}$/;
    const [numberValid,setNumberValid] = useState(numRegEx.test(form.phone));

    const [changesMade,setChangesMade] = useState(false);

    useEffect(()=>{
        setNumberValid(numRegEx.test(form.phone))
    },[form.phone])


    useEffect(()=>{
        if (user) {
            let {id} = user;

            fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-user?qId=${id}`)
            .then(r=>r.json())
            .then(d=>{
                for (var key in d) {
                    if (d[key]==null) {
                        d[key]=""
                    }
                }
                setForm({...d})
                
            })
            .catch(e=>console.log(e))            
        }
    },[])


    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    };

    function handleSubmit (e) {

        let {id} = user;
        let token = localStorage.getItem("user");
        e.preventDefault();

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/edit-creds/${id}`,
            {
                method:"post",
                headers: {
                    "content-type":"application/json",
                    "Authorization":`Bearer ${token}`
                },
                body:JSON.stringify(form)
            }
        )
        .then(r=>r.json())
        .then(d=>console.log(d))
        .catch(e=>console.log(e))

        setChangesMade(true)
        console.log(form)
    }

    return ( 
        <div className="w-full h-full flex flex-col">
            <form className="w-full h-2/3 flex flex-col gap-y-6" onSubmit={handleSubmit}>
                <div className="lg:w-1/2 flex flex-col gap-y-2">
                    <label htmlFor="user_name" className="uppercase font-semibold">Имя</label>
                    <input id="user_name" name="name" className="border border-white/25 p-2 rounded-md focus:outline-none focus:border-white/100 transition-all" value={form.name} onChange={handleChange}/>
                </div>
                <div className="lg:w-1/2 flex flex-col gap-y-2">
                    <label htmlFor="user_phone" className="uppercase font-semibold">Телефон</label>
                    <input id="user_phone" name="phone" className="border border-white/25 p-2 rounded-md focus:outline-none focus:border-white/100 transition-all" value={form.phone} onChange={handleChange}/>
                    <p className="text-xs text-white/50">Введите телефон в формате 79991234567</p>
                </div>
                <div className="lg:w-1/2 flex flex-col gap-y-2">
                    <label htmlFor="user_adress" className="uppercase font-semibold">Адрес доставки по умолчанию</label>
                    <input id="user_adress" name="adress" className="border border-white/25 p-2 rounded-md focus:outline-none focus:border-white/100 transition-all" value={form.adress} onChange={handleChange}/>
                </div>
                <Button disabled={!numberValid} variant="secondary" className="cursor-pointer mt-16 py-6 uppercase w-1/2 transition-all">Сохранить изменения</Button>
            </form>
            <div className={cn("w-0 h-1/8 overflow-clip mt-auto rounded-md transition-all flex items-center justify-center bg-[#293230]/15",[changesMade&&"w-full h-1/8 border border-white/25"])}>
                <h4 className="uppercase">Данные сохранены!</h4>
            </div>
        </div>
     );
}
 
export default EditCredentials;