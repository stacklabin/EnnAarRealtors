import React,{useState,useRef, useEffect} from 'react'
import axios from 'axios'
import {FaPlus, FaTrash} from 'react-icons/fa'
import Head from 'next/head'
import {
    Button,
    Checkbox,
    Input,
    useToast,
    Textarea,
    IconButton
} from "@chakra-ui/react"
import { Editor } from '@tinymce/tinymce-react';

import {useRouter} from 'next/router'

export default function UpdateBlog({item}) {
    const router = useRouter()
    const editorRef = useRef(null);
    const toast = useToast()
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };
   useEffect(() => {
       setTitle(item.title)
       setFeatured(item.featured)
       setDescription(item.description)
   }, [item])
   console.log(item)
    const [title, setTitle] = useState(item.title||"")
    const [description, setDescription] = useState(item.description||"")
    const [featured, setFeatured] = useState(item.featured||false)
    const handleSubmit=async ()=>{
        const mongodata = {
            title,
            description,
            content:editorRef.current.getContent(),
            featured,
       };
       await axios.patch('/api/admin/blogs/update', mongodata)
            .then(res => {
                toast({
                title: "Adding Blog Successful",
                description: res.data.message,
                status: "success",
                duration: 3000,
                isClosable: true,
              })
            })
            .catch( err => {  
                toast({
                    title: "Adding Blog Failed",
                    description: err.response.data,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  })
            });

    }
    const handleDelete=async (e)=>{
        e.preventDefault()
        console.log(item._id)
        const mongodata = {
            id: item._id,
       };
        await axios.delete('/api/admin/blogs/'+item._id+"/delete", mongodata)
            .then(res => {
                console.log("message is ",res.data.message)
                toast({
                    title: "Delete Successful",
                    description: res.data.message,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })
                  router.push('/blogs')                  
            })
            .catch( err => {  
                console.log("error is ",err.response.data)
                toast({
                    title: "Delete Failed",
                    description: err.response.data,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  })
            });
    }
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>Enn Arr Realtors - {item.title} </title>
                <meta name="description" content={item.description}></meta> 
                <meta property="og:title" content={item.title} key="ogtitle" />
                <meta property="og:description" content={item.description} key="ogdesc" />
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
                    <h1 className="uppercase text-center text-2xl font-extrabold">{item.title}</h1>
                </div>
            </section>
            <section className="-my-10 mb-8 flex justify-center">
                <h1 className="bg-blue-500 text-white px-4 py-1 text-lg rounded-xl">Update Blog</h1>
            </section>
            <section className="">
            <div className="p-4">
                    <Input 
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    variant="flushed"/>
                     <Textarea
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    variant="flushed"></Textarea>
                    <Checkbox isChecked={featured?true:false} onChange={(e)=>setFeatured(!featured)} colorScheme="green">
                        Featured
                    </Checkbox>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={item.content}
                        init={{
                        height: 500,
                        menubar: false,
                        plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                        imagetools_cors_hosts: ['picsum.photos'],
                        menubar: 'file edit view insert format tools table help',
                        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                        toolbar_sticky: true,
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <Button onClick={log} variant="solid" colorScheme="blue" size="sm" leftIcon={<FaPlus/>}>Console.log</Button>
                    <Button onClick={handleSubmit} variant="solid" colorScheme="blue" size="sm">Submit</Button>
                    <span className="my-4">
                        <IconButton
                        onClick={handleDelete}
                        colorScheme="red"
                        size="xs"
                        aria-label="Delete"
                        icon={<FaTrash/>}
                        />
                    </span>
                </div>
            </section>
        </>
    );
}