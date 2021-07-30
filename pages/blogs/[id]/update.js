import { useSession } from 'next-auth/client'
import Header from '../../../src/components/Header'
import UpdateBlog from '../../../src/components/admin/UpdateBlog'
import Footer from '../../../src/components/Footer'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
export default function BlogPage() {
    const [session, loading] = useSession()
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

    
    const router = useRouter()
    const [result, setResult] = useState([])
    const [id,setId] = useState('')
    console.log("Blog is",result)

    useEffect(async() => {
        if(!router.isReady) return;
        
        setId(router.query.id)
        
        if(id)
        {
            await axios.get('/api/admin/blogs/'+id)
            .then(res => {
                setResult(res.data)
            })
            .catch(err =>{  
                console.log("error here is ",err.response.data)
            })
        }
        
    }, [router.isReady,id, router.query])

    return (
        <div>
           {
               session.user.email==="ankitpathak143192@gmail.com"?(
                   <>
                    <Header/>
                    <UpdateBlog item={result}/>
                    <Footer/>
                   </>
               ):(<>
               <div id="fullpagebackground"  className="">
                    <img id="background-image" src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=800" alt="background"/> 
                    <div className="text-white  sign-in-button-container">
                        <Link href="/" className="hover:text-blue-400 sign-in-button outline-none focus:outline-none" >Access Denied. You Are Not The Admin.</Link>
                    </div>
                </div>
               </>)
           }
        </div>
    );
}
