import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
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
export default function ContactUs({ calledBy }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    const data = {
      name,
      email,
      contact,
      message,
    };
    await axios
      .post("/api/contact", data)
      .then((res) => {
        toast({
          title: "Submitted Data Successfully",
          description: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
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

  useEffect(() => {
    if (calledBy === "propertyPage") {
      setTimeout(onOpen, 10000);
    }
  }, []);
  return (
    <>
      <Button onClick={onOpen} className="contact-button">
        CONTACT US
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalContent>

        <ModalOverlay />
         <section className="halfpagebackground flex justify-end">
            <img
              className="background-image lighter"
              src="/images/enquiryform.jpg"
              alt="enn arr realtors"
            />
            <div className="hidden text-white md:flex flex-col justify-between md:w-2/12 lg:w-4/12">
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
              <div className="flex p-4 justify-center">
                {/* <a href="" target="_blank" className="m-2">
                                <FaInstagram/>
                            </a> */}
                <a
                  href="https://www.facebook.com/ennaarrealtors"
                  target="_blank"
                  className="m-2"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com/ENNAARREALTOR"
                  target="_blank"
                  className="m-2"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/enn-aar-realtors/"
                  target="_blank"
                  className="m-2"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="bg-white py-4 w-full md:w-10/12 lg:w-8/12">
              <ModalBody>
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Enquiry Form</h1>
                </div>
                {/* <div className="p-2 mb-2">
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
                  ></Textarea>
                </div>
                <p>
                  By contacting us you agree to our{" "}
                  <Link href="/terms-condition" passHref>
                    <span className="pointer-on-hover text-blue-500">
                      Terms and Conditions
                    </span>
                  </Link>
                </p>*/}

                
                  <Iframe url="https://account.solidperformers.com/captureleads/MTkw"
                  id="leadTracking"
                  width="450px"
                  height="450px"
                  position="relative" />

              </ModalBody>
             
            </div>
          </section>
          </ModalContent>
      </Modal>
    </>
  );
}
