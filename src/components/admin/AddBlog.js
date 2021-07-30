import React,{useState,useRef} from 'react'
import axios from 'axios'
import {FaPlus} from 'react-icons/fa'
import {
    Button,
    Checkbox,
    Input,
    useToast,
    Textarea
} from "@chakra-ui/react"
import { Editor } from '@tinymce/tinymce-react';
export default function AddBlog() {
    const editorRef = useRef(null);
    const toast = useToast()
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };
    const [temp, setTemp] = useState(false)
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [featured, setFeatured] = useState(false)
    const handleSubmit=async ()=>{
        const mongodata = {
            title,
            description,
            content:editorRef.current.getContent(),
            featured,
       };
       await axios.post('/api/admin/blogs/add', mongodata)
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
    return (
        <>
            <div className="py-4 pt-6 px-4 bg-gray-600 flex justify-end">
                <Button onClick={()=>setTemp(true)} variant="solid" colorScheme="blue" size="sm" leftIcon={<FaPlus/>}>Add Blog</Button>
            </div>
            {
                temp?(<div className="p-4">
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
                        initialValue="<p>This is the initial content of the editor.</p>"
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
                </div>):(<></>)
            }
        </>
    );
}