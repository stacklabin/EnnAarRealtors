import React, { useState, useEffect,Component } from "react";
import axios from "axios";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Iframe from 'react-iframe'

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Input,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

function createRef(initialValue) {
  return {
      current: initialValue
  }
}
export default function EnquiryForm({ calledBy },props) {  
  const toast = useToast();
  const {isOpen,onOpen, onClose } = useDisclosure();
  const rememberMe = localStorage.getItem('rememberMe') === 'true';
  const user = rememberMe ? localStorage.getItem('user') : '';
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [rememberdata, setRememberData] = useState("");
  const [showing,setShowing] = useState(false)
  const [cshow,setcshow] = useState(false)
  const [togglehide,settogglehide] = useState(false)
  const handleSubmit = async () => {
    const data = {
      name,
      email,
      contact,
      message,
    };
    await axios
      .post("/api/enquiry", data)
      .then((res) => {
        toast({
          title: "Submitted Data Successfully",
          description: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        localStorage.setItem('rememberMe', setRememberData);
        localStorage.setItem('user', setRememberData ? name : '');
        localStorage.setItem('email', setRememberData ? email : '');
        localStorage.setItem('contact', setRememberData ? contact : '');
        setName("");
        setContact("");
        setMessage("");
        setEmail("");
      })
      .catch((err) => {
        toast({
          title: "Some error occured",
          description: err.response.data,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
    


  const handleClose = async () => {
    setShowing(false);
  };

  
    
    const handlePageLoad = async() => {  
      
          if(showing===false)
          {
            setShowing(true);          
          }                 
       else if(showing===true){
        setShowing(false);
      }
   };


  useEffect(() => {   
    if (calledBy === "propertyPage") {
      setTimeout(onOpen, 10000);
    }  
    //window.addEventListener('scroll', handlePageLoad, false);
  }, []);

 


  return (
      <>
      <div className="position-fixed-form flex flex-wrap" style={showing?{right:'0'}:{right:'-356px'}} >
      <Button className="contactbtn"onClick={handlePageLoad}>Contact Us</Button>

        <div className="position-relative md:w-10/12 lg:w-10/12">
        <section className="halfpagebackground flex justify-end md:w-12/12 lg:w-12/12 position-relative justify-items-end" >
         {/* <Button className="tbtn" onClick={hidee}>
           <FaChevronUp className={` ${cshow ? 'ahide': 'ashow'}`} />
           <FaChevronDown className={` ${cshow ? 'ashow': 'ahide'}`} />
           </Button> */}
           
{/*<img
              className="background-image lighter"
              src="/images/enquiryform.jpg"
              alt="enn arr realtors"
            /> */}

            <div className="hidden text-white md:flex flex-col justify-between md:w-2/12 lg:w-2/12">
              <div className="text-3xl font-bold p-4 pt-8">
                <p
                  style={{
                    writingMode: "vertical-lr",
                    transform: "rotate(180deg)",
                  }}
                >
                  Enquire Us
                </p>
                <div className="pt-4 pl-4">
                  <div
                    style={{ width: "2px", height: "50px" }}
                    className="bg-white"
                  ></div>
                </div>
              </div>
              
            </div>
            <div className="bg-transparent-white py-4 px-4 w-full md:w-10/12 lg:w-10/12">
              <div>
              
              
              <Iframe url="https://account.solidperformers.com/captureleads/MTg5"
                  id="leadTracking"
                  width="450px"
                  height="450px"
                  display="initial"
                  position="relative" />
                
              {/* <div className="p-2 mb-2 ">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    variant="flushed"
                    required
                  />
                </div>
                <div className="p-2 mb-2">
                  <Input
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    variant="flushed"
                  />
                </div>
                <div className="p-2 mb-2">
                  <Input
                    required
                    type="number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact Number"
                    variant="flushed"
                  />
                </div>
                <div className="p-2 mb-2">
                  <Textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    variant="flushed"
                    placeholder="Message"
                   rows="2"></Textarea>
                </div>
              
              </div>
              <div>
                <Button colorScheme="red" mr={3} onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="teal"
                  onClick={handleSubmit}
                  variant="solid"
                >
                  Submit
                </Button>
              </div>  */}
              
            </div>
            </div>
          
          </section>
        </div>
        </div>

        <div className="position-fixed-form-mobile flex flex-wrap" style={showing?{right:'0'}:{right:'-300px'}} >
      <Button className="contactbtn"onClick={handlePageLoad}>Contact Us</Button>

        <div className="position-relative md:w-10/12 lg:w-10/12">
        <section className="halfpagebackground flex justify-end md:w-12/12 lg:w-12/12 position-relative justify-items-end" >
         {/* <Button className="tbtn" onClick={hidee}>
           <FaChevronUp className={` ${cshow ? 'ahide': 'ashow'}`} />
           <FaChevronDown className={` ${cshow ? 'ashow': 'ahide'}`} />
           </Button> */}
           
{/* <img
              className="background-image lighter"
              src="/images/enquiryform.jpg"
              alt="enn arr realtors"
            />  */}

            <div className="hidden text-white md:flex flex-col justify-between md:w-2/12 lg:w-2/12">
              <div className="text-3xl font-bold p-4 pt-8">
                <p
                  style={{
                    writingMode: "vertical-lr",
                    transform: "rotate(180deg)",
                  }}
                >
                  Enquire Us
                </p>
                <div className="pt-4 pl-4">
                  <div
                    style={{ width: "2px", height: "50px" }}
                    className="bg-white"
                  ></div>
                </div>
              </div>
              
            </div>
            <div className="bg-transparent-white py-4 px-4 w-full md:w-10/12 lg:w-10/12">
              <div>
              
              <Iframe url="https://account.solidperformers.com/captureleads/MTg5"
                  id="leadTracking"
                  width="450px"
                  height="450px"
                  display="initial"
                  position="relative" />
                
              {/* <div className="p-2 mb-2 ">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    variant="flushed"
                    required
                  />
                </div>
                <div className="p-2 mb-2">
                  <Input
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    variant="flushed"
                  />
                </div>
                <div className="p-2 mb-2">
                  <Input
                    required
                    type="number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact Number"
                    variant="flushed"
                  />
                </div>
                <div className="p-2 mb-2">
                  <Textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    variant="flushed"
                    placeholder="Message"
                   rows="2"></Textarea>
                </div>
              
              </div>
              <div>
                <Button colorScheme="red" mr={3} onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="teal"
                  onClick={handleSubmit}
                  variant="solid"
                >
                  Submit
                </Button>
              </div>  */}
              
            </div>
          
          </section>
        </div>
        </div>
    </>
  );
}
