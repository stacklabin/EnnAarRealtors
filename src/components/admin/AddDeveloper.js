import React,{useState} from 'react'
import axios from 'axios'
import {FaPlus} from 'react-icons/fa'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Input,
    Textarea,
    useDisclosure,
    Stack,
    useToast
} from "@chakra-ui/react"

export default function AddDeveloper() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState(0)
    const toast = useToast()
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const formData = new FormData();
        const config={
            headers: {'content-type':'multipart/form-data'},
            onUploadProgress: (e)=>{
                console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
            },
        }
        formData.append('file', image);
        formData.append('api_key','757677873513439');
        formData.append('folder','developers');
        formData.append('upload_preset', 'unsigned');
        var response;
        await axios.post('https://api.Cloudinary.com/v1_1/:enn-aar-group/image/upload',formData,config) //Put this inside a loop
          .then(res => {
              console.log(res)
              response=res;
            })
          .catch(err => console.log('cloudinary error',err));

        if(response)
        {
            const data = response.data;
            const image_url = data.secure_url;
            console.log("image url is ",image_url)
            const mongodata = {
                title,
                description,
                priority,
                imageUrl: image_url
           };
           await axios.post('/api/admin/developer/add', mongodata)
            .then(res => {
                toast({
                title: "Adding Data Successful",
                description: res.data.message,
                status: "success",
                duration: 3000,
                isClosable: true,
              })
                setImage(null)
                setTitle("")
                setDescription("")
            })
            .catch( err => {  
                toast({
                    title: "Adding Data Failed",
                    description: err.response.data,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  })
            });
             
        }
    }
    return (
        <>
            <div className="">
                <Button onClick={onOpen} variant="solid" colorScheme="blue" size="sm" leftIcon={<FaPlus/>}>Add Developer</Button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <form>
                        <ModalHeader >Add Developer</ModalHeader>
                        <ModalBody >
                            <div >
                                <Stack spacing={3}>
                                    <Input
                                        onChange={(e)=>setImage(e.target.files[0])}
                                        type="file"
                                        placeholder="Image"
                                        size="sm"
                                        variant="flushed"
                                        name="theFiles"
                                    />
                                    <Input
                                        placeholder="Title"
                                        size="sm"
                                        variant="flushed"
                                        value={title}
                                        onChange={(e)=>setTitle(e.target.value)}
                                    />
                                    <p>Set Priority</p>
                                    <Input
                                        type="number"
                                        placeholder="Priority"
                                        size="sm"
                                        variant="flushed"
                                        resize="vertical"
                                        value={priority}
                                        onChange={(e)=>setPriority(e.target.value)}
                                    />  
                                    <Textarea
                                        placeholder="Description"
                                        size="sm"
                                        variant="flushed"
                                        resize="vertical"
                                        value={description}
                                        onChange={(e)=>setDescription(e.target.value)}
                                    />                               
                                </Stack>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="red" mr={3} onClick={onClose}>
                            Cancel
                            </Button>
                            <Button colorScheme="teal" onClick={handleSubmit} variant="solid">Save</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
}