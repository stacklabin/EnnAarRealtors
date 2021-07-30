import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import {
    Tag,
    IconButton
  } from "@chakra-ui/react"
  import {FaHome} from 'react-icons/fa'
export default function AllProperty() {
    const [result,setResult] = useState([])
    const [stateFilter, setStateFilter] = useState("")
    const [loading, setLoading] = useState(true)
    var count =0;
    console.log(result)
    useEffect(() => { 
    axios.get('/api/admin/property')
        .then(res => {
                setResult(res.data)
                setLoading(false)
                console.log(stateFilter)
            })
        .catch(err =>console.log(err))
    }, [])

    // useEffect(async() => {

    // const mongodata = {
    //     search: stateFilter
    // };

    // await axios.post('/api/admin/property', mongodata)
    // .then(res => {
    //     console.log("res is ",res.data)
    // setResult(res.data)
    //     // setResponse(res.data.message)
    // })
    // .catch(err=>{  
    //     console.log("error is ",err.response.data)
    // })

    // }, [])
    return (
        <div style={{minHeight: '100vh', background: ''}} className="PropertyList">
             {/* <div className="flex flex-wrap justify-center">
            {
                stateFilter==="All"?(
                    <Tag className="m-2" colorScheme="blue" variant="solid">All</Tag>
                ):(
                    <Tag onClick={()=>setStateFilter('All')} className="m-2 pointer-on-hover" colorScheme="gray" variant="outline">All</Tag>
                )
            }
                {
                    states.map((state)=>{
                        if(state===stateFilter)
                        {
                            return (
                                <Tag className="m-2" colorScheme="blue" variant="solid">{state}</Tag>
                            )
                        }
                        else
                        {
                            return (
                                <Tag key={state} onClick={()=>{
                                    setStateFilter(state)
                                    setLoading(true)
                                }} className="m-2 pointer-on-hover" colorScheme="gray" variant="outline">{state}</Tag>
                            )
                        }
                    })
                }
            </div> */}
            <h2 className="text-3xl text-center p-4">
                {/* <Link href="/" passHref>
                    <IconButton colorScheme="blue" className="text-white mx-4" aria-label="Home Button" icon={<FaHome/>}/>
                </Link> */}
                Property List</h2>
                {
                   result.length>0?(
                    result.map((item) => {
                        return (
                            <div key={item._id} className="text-xs p-4 bg-white rounded flex flex-wrap justify-evenly m-2">
                            <div className="w-full md:w-3/12">
                                <h3 className="font-bold uppercase text-lg">{item.title}</h3>
                            </div>
                            </div>
                        );
                    })
                   ):(<div className="loader"></div>)
                }
        </div>
    );
}