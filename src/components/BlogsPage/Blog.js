import Head from 'next/head'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Button} from '@chakra-ui/react'
export default function Blog() {
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
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>Enn Arr Realtors - {result.title} </title>
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
                <img className="background-image lighter" src="/images/img3.jpg" alt="enn arr realtors"/>
            </section>
            <section className="flex justify-center -mt-10 mb-6">
                <div className="bg-white w-full md:w-8/12 lg:w-6/12 p-4 py-6 rounded-md shadow-xl">
                    <h1 className="uppercase text-center text-2xl font-extrabold">{result.title}</h1>
                </div>
            </section>
            <section className="-my-10 mb-8 flex justify-center">
                <Button size="sm" colorScheme="brandDeepBlue">Call Now</Button>
            </section>
            <section className="w-full">
                <div className="text-sm overflow-hidden">
                    {/* <div className="mx-3 my-2">
                    <span className="capitalize bg-green-300 rounded-xl py-1 px-3 mr-1">Featured</span>  || 
                    <span className="Capitalize ml-1"><i>{result.location} Category</i></span>
                    </div> */}
                    <p id="blog-post" className="p-4 overflow-hidden "><td dangerouslySetInnerHTML={{__html: result.content}} /></p>
                </div>
            </section>
        </>
    );
}