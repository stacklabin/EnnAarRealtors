import { useSession } from 'next-auth/client'
import {useState, useEffect} from 'react'
import Link from 'next/link'

import  AdminDashboard from '../../src/components/admin/AdminDashboard'

export default function Admin(){
    const [session, loading] = useSession()
    const [content, setContent] = useState()

    useEffect(()=>{
        const fetchdata = async() =>{
            const res = await fetch("/api/admin")
            const json = await res.json();

            if(json.content){
                setContent(json.content)
            }
        }
        fetchdata()
    },[session])
    if(typeof window !== "undefined" && loading)
    null;

    if(!session){
        return(
            <main>
                <section className="fullpagebackground text-white">
                <img className="background-image" src="/images/img5.jpg" alt="enn arr realtors"/>
                    <div className="text-white  sign-in-button-container">
                        <Link href="/" className="hover:text-blue-400 sign-in-button outline-none focus:outline-none" >Login To Access this page</Link>
                    </div>
                </section>
            </main>
        )
    }
    return (
        <main>
            {
                session.user.email==="ankitpathak143192@gmail.com"?(
                <AdminDashboard page="dashboard"/>
                ):(
                <>
                <div id="fullpagebackground"  className="">
                    <img id="background-image" src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=800" alt="background"/> 
                    <div className="text-white  sign-in-button-container">
                        <Link href="/" className="hover:text-blue-400 sign-in-button outline-none focus:outline-none" >Access Denied. You Are Not The Admin.</Link>
                    </div>
                </div>
                </>)
            }
        </main>
    )
}