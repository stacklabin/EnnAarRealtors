import React,{useState, useEffect} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Projects from '../Projects'
import AddBlog from './AddBlog'
import {Button} from "@chakra-ui/react"
import Link from "next/link"

import axios from 'axios'
import DeveloperCard from './DeveloperCard'
export default function  AdminDashboard() {
    const [devs, setdevs] = useState([])
    useEffect(async() => {        
        await axios.get('/api/admin/developer')
        .then(res => {
            console.log("res is ",res.data)
            setdevs(res.data)
        })
        .catch(err=>{  
            console.log("error is ",err.response.data)
        })        
        }, []
    )
    return (
        <div>
            <Header/>
            <main className="mainContent">
            <AddBlog/>
            <div className="fixed bottom-10 right-20 z-20">
                <Link href="/admin/add-property" passHref>
                    <Button variant="solid" colorScheme="blue" size="sm" >Add Property</Button>
                </Link>
            </div>
            <section className="p-4">
                <h1 className="text-3xl text-center py-4">All Developers List</h1>
                <div className="flex flex-wrap justify-between">
                {
                    devs.map((item) => {
                        return (
                            <DeveloperCard key={item._id} item={item}/>
                        );
                    })
                }
                </div>
            </section>
            <Projects heading="All Properties"/>
            </main>
            <Footer/>
        </div>
    );
}