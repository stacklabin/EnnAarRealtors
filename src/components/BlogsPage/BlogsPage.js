import {useState,useEffect} from 'react'
import axios from 'axios'
import Link from "next/link"
// import TrendingCard from './TrendingCard'
import {Skeleton} from '@chakra-ui/react'
import {FaShareAlt } from 'react-icons/fa'

import { RWebShare } from "react-web-share";
export default function BlogsPage() {
    
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(async() => {
        await axios.get('/api/admin/blogs')
        .then(res => {
            console.log("res is ",res.data)
            setResult(res.data)
            setLoading(false)
            // setResponse(res.data.message)
        })
        .catch(err=>{  
            console.log("error is ",err.response.data)
        })

        
    }, [])
    return (
        <section className="mainContent bg-gray-200 p-4" style={{minHeight: "100vh"}}>
            <h2 className="text-center font-bold text-2xl p-4">Blogs</h2>
            <div className="cardContainers flex justify-evenly flex-wrap">
            {
                !loading?(
                    result.map((item) => {
                        const temp = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
                        const origin = temp+"/blogs/"+item.slug
                        return (
                            <div key={item._id} className="shadow-xl bg-white h-32 w-full mb-4 md:w-5/12 p-4 rounded-xl flex flex-col justify-between">
                                <div className="">
                                    <div className="flex justify-between">
                                    <span className="font-bold text-xl">{item.title}</span>
                                    <span className="lg:hidden">
                                        <RWebShare
                                            data={{
                                            text: item.description,
                                            url: origin,
                                            title: item.title,
                                            }}
                                            onClick={() => console.log("shared successfully!")}
                                        >
                                            <FaShareAlt/>
                                        </RWebShare>
                                    </span>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                                <div className="flex justify-end ">
                                    <div className="text-white bg-blue-500 rounded-xl px-4 py-1">
                                    <Link href={"/blogs/"+item.slug} passHref>
                                        view
                                    </Link>
                                    </div>
                                </div>
                            </div>
                            // <TrendingCard key={item._id} item={item}/>
                        );
                    })
                ):(
                <div className="flex justify-evenly flex-wrap">
                    <div className="card rounded-xl overflow-hidden w-full md:w-5/12 m-1 flex justify-center">
                        <Skeleton isLoaded={!loading} width="40vw" height="130px">asdfghj</Skeleton>
                    </div>
                    <div className="card rounded-xl overflow-hidden w-full md:w-5/12 m-1 flex justify-center">
                        <Skeleton isLoaded={!loading} width="40vw" height="130px">asdfghj</Skeleton>
                    </div>
                    <div className="card rounded-xl overflow-hidden w-full md:w-5/12 m-1 flex justify-center">
                        <Skeleton isLoaded={!loading} width="40vw" height="130px">asdfghj</Skeleton>
                    </div>
                    <div className="card rounded-xl overflow-hidden w-full md:w-5/12 m-1 flex justify-center">
                        <Skeleton isLoaded={!loading} width="40vw" height="130px">asdfghj</Skeleton>
                    </div>
                </div> )
            }
            </div>
        </section>
    );
}