"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import { redirect } from "next/navigation";

const AuthPage = () => {


    const Form = () => {

        const {user,login} = useUser();

        useEffect(()=>{
            if(user) {
                redirect(`/me/${user.role}`)
            }
        },[user])

        const [loginData,setLoginData] = useState({
            login:"",
            password:""
        })

        const [regData,setRegData] = useState({
            login:"",
            password:""
        })

        const [confirm,setConfirm] = useState("");

        const [match,setMatch] =useState(false);

        useEffect(()=>{
            if (regData.password==confirm) {
                setMatch(true)
            } else setMatch(false)
        },[regData.password,confirm])

        function handleChange (e) {
            
            if (e.target.id=="login_login") {
                return setLoginData({
                    ...loginData,
                    login:e.target.value
                })
            }
            if (e.target.id=="password_login") {
                return setLoginData({
                    ...loginData,
                    password: e.target.value
                })
            }
        
            
            if (e.target.id=="login_reg") {
                return setRegData({
                    ...regData,
                    login: e.target.value
                })
            }
            if (e.target.id=="password_reg") {
                return setRegData({
                    ...regData,
                    password: e.target.value
                })
            } 
        }

        function handleSubmit (e) {
            e.preventDefault();
            let formId = e.target.id;

            if (formId=="login") {
                const data = JSON.stringify(loginData);
                return login(data,formId);
            }

            if (formId=="registration") {
                const data = JSON.stringify(regData);
                return login(data,formId);
            }            
        }


        return (
            <div className="w-[100vw] h-[100vh] py-[100px] flex items-center justify-center">
                <Tabs defaultValue={"login"} className={" rounded-sm w-1/3 h-2/3 items-center justify-center flex gap-y-0"}>
                    <TabsList className={"h-1/6 bg-black/50 rounded-b-none rounded-t-sm flex justify-between lg:justify-center lg:gap-x-24 text-white w-full"}>
                        <TabsTrigger className={"rounded-xs"} value={"login"}>Вход</TabsTrigger>
                        <TabsTrigger className={"rounded-xs"} value={"registration"}>Регистрация</TabsTrigger>
                    </TabsList>
                    <TabsContent className={"h-5/6 w-full bg-black/25 rounded-b-sm"} value="login">
                        <form id="login" onSubmit={handleSubmit} className="h-full w-full px-24 py-12 flex flex-col justify-between text-white">
                            <div className="w-full flex flex-col gap-y-4">
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="login_login">Имя пользователя</label>
                                    <input value={loginData.login} onChange={handleChange} id="login_login" className="border border-white/25 rounded-sm p-1" />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="password_login">Пароль</label>
                                    <input type="password" value={loginData.password} onChange={handleChange} id="password_login" className="border border-white/25 rounded-sm p-1" />
                                </div>
                            </div>
                            <Button variant={"secondary"}>Войти</Button>
                        </form>
                    </TabsContent>
                    <TabsContent className={"h-5/6 w-full bg-black/25 rounded-b-sm"} value="registration">
                        <form id="registration" onSubmit={handleSubmit} className="h-full w-full px-24 py-8 flex flex-col justify-between text-white">
                            <div className="w-full flex flex-col gap-y-4">
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="login_reg">Имя пользователя</label>
                                    <input id="login_reg" value={regData.login} onChange={handleChange} className="border border-white/25 rounded-sm p-1" />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="password_reg">Пароль</label>
                                    <input id="password_reg" type="password" value={regData.password} onChange={handleChange} className="border border-white/25 rounded-sm p-1" />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="confirm">Подтвердите пароль</label>
                                    <input type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} id="confirm" className="border border-white/25 rounded-sm p-1" />
                                </div>
                            </div>
                            <Button disabled={!match} variant={"secondary"}>Регистрация и вход</Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </div>
        )
    }

    return ( 
        <>
            <Navbar/>
            <Form/>
            <Footer/>
        </>
     );
}
 
export default AuthPage;