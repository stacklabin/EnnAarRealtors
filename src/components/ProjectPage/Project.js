import { Button } from '@chakra-ui/button'
import Link from 'next/link'
import Head from 'next/head'
import { Image } from 'cloudinary-react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Iframe from 'react-iframe'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Input,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'

import TrendingProjectsSection from '../TrendingProjectsSection'
export default function Project() {
  const toast = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [rememberdata, setRememberData] = useState('')
  const [devs, setdevs] = useState([])
  useEffect(async () => {
    await axios
      .get('/api/admin/developer')
      .then((res) => {
        console.log('res is ', res.data)
        setdevs(res.data)
      })
      .catch((err) => {
        console.log('error is ', err.response.data)
      })
  }, [])
  let count = 0
  const handleSubmit = async () => {
    const data = {
      name,
      email,
      contact,
      message,
    }
    await axios
      .post('/api/enquiry', data)
      .then((res) => {
        toast({
          title: 'Thank You',
          description: res.data.message,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        localStorage.setItem('rememberMe', setRememberData)
        localStorage.setItem('user', setRememberData ? name : '')
        localStorage.setItem('email', setRememberData ? email : '')
        localStorage.setItem('contact', setRememberData ? contact : '')
        setName('')
        setContact('')
        setMessage('')
        setEmail('')
      })
      .catch((err) => {
        toast({
          title: 'Some error occured',
          description: err.response.data,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      })
  }
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Projects</title>
        <meta name='description' content='Description here'></meta>
        <meta property='og:title' content='Title here' key='ogtitle' />
        <meta
          property='og:description'
          content='Description here'
          key='ogdesc'
        />
        <link
          rel='preload'
          href='/fonts/fontRegular.otf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/fontBold.otf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/fontItalic.otf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <section className='halfBackground text-white'>
        <img
          className='background-image lighter'
          src='/images/img6.jpg'
          alt='enn arr realtors'
        />
      </section>
      <section className='flex justify-center -mt-10 mb-6'>
        <div className='bg-white p-4 rounded-md shadow-xl'>
          <h1 className='uppercase text-center text-4xl font-extrabold'>
            Best Projects in New Chandigarh
          </h1>
        </div>
      </section>
      <section className='p-4 flex justify-center'>
        <div>
    
    
         <div
                key={dev._id[0]}
                className='scale-on-hover-parent card w-full mb-12 flex flex-wrap justify-evenly'
              >
                <div
                  className={
                    'w-full md:w-6/12 lg:w-5/12 overflow-hidden h-full order-1 ' +
                    (count % 2 === 0 ? 'md:order-1' : 'md:order-3')
                  }
                >
                  <Image
                    cloudName='enn-aar-group'
                    className='scale-on-hover-image overflow-hidden object-cover w-full h-full'
                    width='100%'
                    height='100%'
                    crop='scale'
                    publicId={devs.imageUrl[0]}
                  />
                </div>
                <div className='w-full md:w-6/12 lg:w-5/12 px-4 order-2'>
                  <h1 className='text-3xl font-normal -mb-4 pt-4'>
                    {devs.title[0]}
                  </h1>
                  <div>
                    <span
                      style={{ minWidth: '100px' }}
                      className='bg-black pb-1 inline-block'
                    ></span>
                    <span
                      style={{ minWidth: '100px' }}
                      className='bg-gray-300 pb-1 inline-block'
                    ></span>
                  </div>
                  <p className='text-xs md:text-sm font-light pt-2'>
                    {devs.description[0]}
                  </p>

                  <div className='bg-black text-white inline-block px-4 py-1 my-4 hover:bg-gray-700'>
                    <Link
                      as={`/developers/${devs.title[0]}`}
                      href='/developers/+[title]'
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
    {/*  {devs.map((item) => {
            count =  1
            return (
              <div
                key={item._id}
                className='scale-on-hover-parent card w-full mb-12 flex flex-wrap justify-evenly'
              >
                <div
                  className={
                    'w-full md:w-6/12 lg:w-5/12 overflow-hidden h-full order-1 ' +
                    (count % 2 === 0 ? 'md:order-1' : 'md:order-3')
                  }
                >
                  <Image
                    cloudName='enn-aar-group'
                    className='scale-on-hover-image overflow-hidden object-cover w-full h-full'
                    width='100%'
                    height='100%'
                    crop='scale'
                    publicId={item.imageUrl}
                  />
                </div>
                <div className='w-full md:w-6/12 lg:w-5/12 px-4 order-2'>
                  <h1 className='text-3xl font-normal -mb-4 pt-4'>
                    {item.title}
                  </h1>
                  <div>
                    <span
                      style={{ minWidth: '100px' }}
                      className='bg-black pb-1 inline-block'
                    ></span>
                    <span
                      style={{ minWidth: '100px' }}
                      className='bg-gray-300 pb-1 inline-block'
                    ></span>
                  </div>
                  <p className='text-xs md:text-sm font-light pt-2'>
                    {item.description}
                  </p>

                  <div className='bg-black text-white inline-block px-4 py-1 my-4 hover:bg-gray-700'>
                    <Link
                      as={`/developers/${item.title}`}
                      href='/developers/+[title]'
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            
            )
        
          })}  */}
          
       <TrendingProjectsSection
        heading='Trending Residential Listings'
        limit={4}
        type='residential'
      />
        </div>
      </section>

      <TrendingProjectsSection
        heading='Trending Residential Listings'
        limit={4}
        type='residential'
      />
      <TrendingProjectsSection
        heading='Trending Commercial Listings'
        limit={4}
        type='commercial'
      />
      <section className='p-4 padding-section project-enquiry-form-new'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>Enquiry Form</h1>
        </div>
        <div className='p-2 mb-2 base-form-ab-sec text-center'>
        
         {/* <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            variant='flushed'
            required
          />
        </div>
        <div className='p-2 mb-2 base-form-ab-sec text-center'>
          <Input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            variant='flushed'
          />
        </div>
        <div className='p-2 mb-2 base-form-ab-sec text-center'>
          <Input
            required
            type='number'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder='Contact Number'
            variant='flushed'
          />
        </div>
        <div className='p-2 mb-2 base-form-ab-sec '>
          <Textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant='flushed'
            placeholder='Message'
          ></Textarea>
          <p>
            By contacting us you agree to our{' '}
            <Link href='/terms-condition' passHref>
              <span className='pointer-on-hover text-blue-500'>
                Terms and Conditions
              </span>
            </Link>
          </p>
        </div>
        <div className='text-center base-form-ab-sec'>
          <Button colorScheme='teal' onClick={handleSubmit} variant='solid'>
            Send
          </Button> */}
          
           <Iframe url="https://account.solidperformers.com/captureleads/MTg5"
                  id="leadTracking"
                  width="450px"
                  height="450px"
                  display="initial"
                  position="relative" />
          
        </div>
      </section>
    </div>
  )
}
