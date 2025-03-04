"use client"
import { Button } from "@/components/ui/button";

const TestPage = () => {

    function func() {

        console.log(process.env.NEXT_PUBLIC_API_URL)
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/?origin=next`).then(r=>r.json()).then(d=>console.log(d)).catch(e=>console.log(e))
    }

    return ( 
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
            <Button onClick={func}>fslksf</Button>
        </div>
     );
}
 
export default TestPage;