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
        <ModalOverlay />
        <ModalContent>
          <section className="halfpagebackground flex justify-end">
            <img
              className="background-image lighter"
              src="https://images.unsplash.com/photo-1601752943749-7dd8d89f407a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
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
                  Contact Us
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
                  <h1 className="text-2xl font-bold">Get in Touch !</h1>
                  <p className="text-sm pt-1">Contact us for assistance</p>
                  <div className="flex justify-between items-center py-4">
                    <div className="h-24 w-4/12">
                      <div className="text-green-600">
                        <MdLocationOn />
                      </div>
                      <div className="text-xs  p-1">
                        <p>
                          # 1105, 11th Floor,
                          <br /> Omaxe India Trade Tower,
                          <br /> New Chandigarh
                        </p>
                      </div>
                    </div>
                    <div className="h-24 w-4/12">
                      <div className="text-green-600">
                        <MdPhone />
                      </div>
                      <div className="text-xs  p-1">
                        <a href="tel:+919888044333">988-804-4333</a>
                      </div>
                    </div>
                    <div className="h-24 w-4/12">
                      <div className="text-green-600">
                        <MdEmail />
                      </div>
                      <div className="text-xs  p-1">
                        <p>ennaarrealtors@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
<div id="container"></div>

  const getAttrs = (iframeTag) => {
  var doc = document.createElement('div');
  doc.innerHTML = iframeTag;

  const iframe = doc.getElementsByTagName('iframe')[0];
  return [].slice
    .call(iframe.attributes)
    .reduce((attrs, element) => {
      attrs[element.name] = element.value;
      return attrs;
    }, {});
}

const Component = React.createClass({
  render: function() {
    return (
      <div>
        <iframe {...getAttrs(this.props.iframe) } />
      </div>
    );
  }
});

const iframe = '<iframe  id="leadTracking" src="https://account.solidperformers.com/captureleads/MTkw" border="0" style="border:0px;height:600px;width:100%"></iframe>'; 

ReactDOM.render(
  <Component iframe={iframe} />,
  document.getElementById('container')
);



                    

                {/* <div className="p-2 mb-2">
                  
                  
                    <iframe  id="leadTracking" src="https://account.solidperformers.com/captureleads/MTkw" border="0" style="border:0px;height:600px;width:100%"></iframe>
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
                */}
                <p>
                  By contacting us you agree to our{" "}
                  <Link href="/terms-condition" passHref>
                    <span className="pointer-on-hover text-blue-500">
                      Terms and Conditions
                    </span>
                  </Link>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="teal"
                  onClick={handleSubmit}
                  variant="solid"
                >
                  Send
                </Button>
              </ModalFooter>
            </div>
          </section>
        </ModalContent>
      </Modal>
    </>
  );
}
