import Head from 'next/head'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import TrendingProjectsSectionOmex from '../TrendingProjectsSectionOmex'
import EnquiryFormProperty from '../EnquiryFormProperty'
import axios from 'axios'
import ContactUs from "../ContactUs"
import Link from "next/link"
import {Image} from "cloudinary-react"
export default function Developer() {
    const router = useRouter()
    const [result, setResult] = useState([])
    const [residential, setresidential] = useState([])
    const [commercial, setcommercial] = useState([])
    const [id,setId] = useState('')
    // console.log("Developer's Residential project is ",residential)
    // console.log("Residential array length is ", residential.length)

    useEffect(async() => {
        if(!router.isReady) return;
        
        setId(router.query.title)
        if(id)
        {
            await axios.get('/api/admin/developer/'+id)
            .then(res => {
                setResult(res.data)
            })
            .catch(err =>{  
                console.log("error here is ",err.response.data)
            })
        }
        
    }, [router.isReady,id, router.query])

    useEffect(async() => {        
        await axios.get('/api/admin/developer/'+id+'/residential')
        .then(res => {
            setresidential(res.data)
        })
        .catch(err =>{  
            console.log("error here is ",err.response.data)
        })

        await axios.get('/api/admin/developer/'+id+'/commercial')
        .then(res => {
            setcommercial(res.data)
        })
        .catch(err =>{  
            console.log("error here is ",err.response.data)
        })
        
    }, [result])
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title> {result.title} </title>
                <meta name="description" content={result.description}></meta> 
                <meta property="og:title" content={result.title} key="ogtitle" />
                <meta property="og:description" content={result.description} key="ogdesc" />
                <link
                    rel="preload"
                    href="/fonts/fontRegular.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/fontBold.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/fontItalic.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <section className="halfBackground text-white">
                <img className="background-image lighter" src="https://res.cloudinary.com/enn-aar-group/image/upload/v1629091670/developers/WhatsApp_Image_2021-08-15_at_8.54.58_PM_we7unl.jpg" alt="enn arr realtors"/>
            </section>
            <section className="flex justify-center -mt-10 mb-6">
                <div className="bg-white w-full md:w-8/12 lg:w-6/12 p-4 py-6 rounded-md shadow-xl">
                    <h1 className="uppercase text-center text-2xl font-extrabold">{result.developer} {result.title}</h1>
                </div>
            </section>
            {/* <section className="-my-10 mb-8 flex justify-center">
                <ContactUs/>
            </section> */}
            <section className="p-4">
            <div className="scale-on-hover-parent card w-full md:w-10/12 mb-12 flex flex-wrap justify-evenly">                            
                <div className="w-full md:w-6/12 lg:w-5/12 overflow-hidden h-full">
                    <Image cloudName="ak99" className="scale-on-hover-image overflow-hidden object-cover w-full h-full" width="100%" height="100%" crop="scale" publicId={result.imageUrl}/>
                </div>
                <div className="w-full md:w-6/12 lg:w-5/12 px-4 order-2">
                    <h1 className="text-3xl font-normal">{result.title}</h1>
                    <div>
                        <span style={{minWidth:"100px"}} className="bg-black pb-1 inline-block"></span>
                        <span style={{minWidth:"100px"}} className="bg-gray-300 pb-1 inline-block"></span>
                    </div>
                    <p className="text-xs md:text-sm font-light pt-2">{result.description}</p>
                    
                </div>
            </div>
            </section>
            {
                residential.length>0?(
                    <section className="p-4">
                        <div style={{height: "70px"}} className="py-6 flex justify-center my-4 item-center">
                            <div style={{height: "100%", width:"150px",}} className="flex justify-center flex-col">
                                <span style={{width:"100%", height: "2px"}} className="bg-black block"></span>
                            </div>
                            <div style={{height: "100%",}} className="md:uppercase flex justify-center flex-col">                        
                                <span className="text-sm md:text-lg lg:text-2xl text-center font-bold px-2">Residential Projects</span>
                            </div>
                            <div style={{height: "100%", width:"150px",}} className="flex justify-center flex-col">
                                <span style={{width:"100%", height: "2px"}} className="bg-black block"></span>
                            </div>
                        </div>
                        <div>
                        { 
                            residential.map((item) => {
                                return (
                                    <div key={item.id} className="scale-on-hover-parent card w-full md:w-10/12 mb-12 flex flex-wrap justify-evenly">                            
                                        <div className="w-full md:w-6/12 lg:w-5/12 overflow-hidden h-full">
                                            <Image cloudName="enn-aar-group" className="scale-on-hover-image overflow-hidden object-cover w-full h-full" width="100%" height="100%" crop="scale" publicId={item.imagesArray[0]}/>
                                        </div>
                                        <div className="w-full md:w-6/12 lg:w-5/12 px-4 order-2">
                                            <h1 className="text-3xl font-normal">{item.name}</h1>
                                            <div>
                                                <span style={{minWidth:"100px"}} className="bg-black pb-1 inline-block"></span>
                                                <span style={{minWidth:"100px"}} className="bg-gray-300 pb-1 inline-block"></span>
                                            </div>
                                            <p className="text-xs md:text-sm font-light pt-2">
                                            {(item.description).length < 650 ? `${item.description}`: `${item.description.substring(0, 650)}...`}</p>
                                            <div className="bg-black text-white inline-block px-4 py-1 my-4 hover:bg-gray-700">
                                                <Link as={`/property/${item.name}`} href="/property/+[name]">Know More</Link>
                                            </div>                                      
                                        </div>
                                    </div>
                                );
                            })
                        }
                        </div>
                    </section>
                ):(<></>)
            }
            
            
            {result.name === 'Omaxe New Chandigarh' ? (
                  <>
                   <TrendingProjectsSectionOmex
                    heading='Trending Residential Listings'
                    limit='15'
                    type='residential'
                  />
                  </>
                ) : (
                  <></>
                )}
            
       
            <section className="halfBackground text-white">
                <img  className="background-image darker" src="/images/img4.jpg" alt="enn arr realtors"/>
                <div className="text-left md:text-center p-4">
                    <h1 className="text-4xl text-gray-200">For Brochure, Contact Us At <br/> <a className="text-white" href="tel:+919888044333">+91-98880-44333</a></h1>
                </div>
            </section>
            
            <EnquiryFormProperty />
            {
                commercial.length>0?(
                    <section className="p-4">
                        <div style={{height: "70px"}} className="py-6 flex justify-center my-4 item-center">
                            <div style={{height: "100%", width:"150px",}} className="flex justify-center flex-col">
                                <span style={{width:"100%", height: "2px"}} className="bg-black block"></span>
                            </div>
                            <div style={{height: "100%",}} className="md:uppercase flex justify-center flex-col">                        
                                <span className="text-sm md:text-lg lg:text-2xl text-center font-bold px-2">Commercial Projects</span>
                            </div>
                            <div style={{height: "100%", width:"150px",}} className="flex justify-center flex-col">
                                <span style={{width:"100%", height: "2px"}} className="bg-black block"></span>
                            </div>
                        </div>
                        <div>
                        { 
                            commercial.map((item) => {
                                return (
                                    <div key={item.id} className="scale-on-hover-parent card w-full md:w-10/12 mb-12 flex flex-wrap justify-evenly">                            
                                        <div className="w-full md:w-6/12 lg:w-5/12 overflow-hidden h-full">
                                            <Image cloudName="ak99" className="scale-on-hover-image overflow-hidden object-cover w-full h-full" width="100%" height="100%" crop="scale" publicId={item.imagesArray[0]}/>
                                        </div>
                                        <div className="w-full md:w-6/12 lg:w-5/12 px-4 order-2">
                                            <h1 className="text-3xl font-normal">{item.name}</h1>
                                            <div>
                                                <span style={{minWidth:"100px"}} className="bg-black pb-1 inline-block"></span>
                                                <span style={{minWidth:"100px"}} className="bg-gray-300 pb-1 inline-block"></span>
                                            </div>
                                            <p className="text-xs md:text-sm font-light pt-2">
                                            {(item.description).length < 650 ? `${item.description}`: `${item.description.substring(0, 650)}...`}</p>
                                            
                                            <div className="bg-black text-white inline-block px-4 py-1 my-4 hover:bg-gray-700">
                                                <Link as={`/property/${item.name}`} href="/property/+[name]">Know More</Link>
                                            </div>                                   
                                        </div>
                                    </div>
                                );
                            })
                        }
                        </div>
                    </section>
                ):(<></>)
            }
        </>
    );
}
