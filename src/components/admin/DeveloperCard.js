
import {IconButton,
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
    useToast,} from "@chakra-ui/react"
import axios from "axios"
import {FaPen, FaTrash} from "react-icons/fa"
import {useState} from 'react'
export default function DeveloperCard({item}) {
    const [del, setDel] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState(item.title||"")
    const [description, setDescription] = useState(item.description||"")
    const [priority, setPriority] = useState(item.priority||0)
    const toast = useToast()
    const handleDelete=async (e)=>{
        e.preventDefault()
        console.log(item._id)
        const mongodata = {
            id: item._id,
       };
        await axios.delete('/api/admin/developer/'+item._id+"/delete", mongodata)
            .then(res => {
                console.log("message is ",res.data.message)
                toast({
                    title: "Delete Successful",
                    description: res.data.message,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })
                  setDel(true)
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
    const handleSubmit=async (e)=>{
        e.preventDefault()
        if(image)
        {
            const formData = new FormData();
            const config={
                headers: {'content-type':'multipart/form-data'},
                onUploadProgress: (e)=>{
                    console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
                },
            }
            formData.append('file', image);
            formData.append('api_key','491118498872778');
            formData.append('folder','developers');
            formData.append('upload_preset', 'unsigned');
            var response;
            await axios.post('https://api.Cloudinary.com/v1_1/:ak99/image/upload',formData,config) //Put this inside a loop
            .then(res => {
                console.log(res)
                response=res;
                })
            .catch(err => console.log('cloudinary error',err));
        }

            var image_url = item.imageUrl;
            if(response)
            {
                const data = response.data;
                image_url = data.secure_url;
            }
            
            console.log("image url is ",image_url)
            const mongodata = {
                id: item._id,
                title,
                description,
                priority,
                imageUrl: image_url
           };
           await axios.post('/api/admin/developer/update', mongodata)
            .then(res => {
                toast({
                title: "Update Data Successful",
                description: res.data.message,
                status: "success",
                duration: 3000,
                isClosable: true,
              })
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
    return (
        <div className={"bg-gray-100 rounded-xl mb-4 p-4 w-full lg:w-5/12 justify-between "+(del?'hidden':'flex')}>
            <p>{item.title}</p>
            <div className="flex">
                <div className="mx-1">
                    <IconButton
                    onClick={onOpen}
                    colorScheme="blue"
                    size="xs"
                    aria-label="Edit"
                    icon={<FaPen/>}
                    />
                </div>
                <div className="mx-1">
                    <IconButton
                    onClick={handleDelete}
                    colorScheme="red"
                    size="xs"
                    aria-label="Delete"
                    icon={<FaTrash/>}
                    />
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <form>
                        <ModalHeader >Update {item.title} Info</ModalHeader>
                        <ModalBody >
                            <div >
                                <p>Current Image</p>
                                <img className="pb-4" src={item.imageUrl}/>
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
                                        readOnly
                                    />
                                    <p>Set Priority</p>
                                    <Input
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
        </div>
    );
}