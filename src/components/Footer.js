import Image from "next/image";
import Link from "next/link";
import EnquiryForm from '../components/EnquiryForm';
import {
  FaFacebook,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
// add bootstrap css
// import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <>
    <EnquiryForm/>
    <footer className="footer-1 py-8 sm:py-12 bg-black text-gray-300">
      <div className="p-4 fixed bottom-27 text-white bg-blue-500 hover:bg-blue-800 right-5 text-xl flex justify-center items-center shadow-xl" style={{width:'50px', height:'50px', borderRadius: "50%",padding:"10px", zIndex: 1000}}>
            <a href='tel:+919888044333'>
                <FaPhoneAlt size="20px"/>
            </a>
        </div>
        <div className="p-4 fixed bottom-12 text-white bg-green-500 hover:bg-green-800 right-5 text-xl flex justify-center items-center shadow-xl" style={{width:'50px', height:'50px', borderRadius: "50%",padding:"10px", zIndex: 1000}}>
            <a href='https://api.whatsapp.com/send/?phone=%2B919815654145&text&app_absent=0&lang=eng' target='_blank'>
                <FaWhatsapp size="20px"/>
            </a>
        </div>
      <div className="container  mx-auto px-4">
        <div className=" flex flex-wrap justify-center">
          <div className="w-full  md:w-5/12 lg:w-2/12 m-2 p-4  ">
            <h5 className="text-xl font-bold mb-6">About Us</h5>
            <p className="small">ENN AAR Group have earned the badge as the prominent realtor in New Chandigarh, providing tailored real estate solutions for your dream home or the right office environment for your business.</p>
            <img width="100px" className="mb-0" height="150px" src="/images/logo.png" alt="LOGO"/>
           
            
            {/* <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Cool stuff
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Random feature
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Team feature
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Stuff for developers
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Another one
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Last time
                </a>
              </li>
            </ul> */}
          </div>
          <div className="w-full  md:w-5/12 lg:w-2/12 m-2 p-4 ">
            <h5 className="text-xl font-bold mb-6">Quick Links</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Home</Link>
              </li>
              <li className="mb-2">
              <Link href="/about-us" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">About us</Link>
              </li>
              <li className="mb-2">
              <Link href="/projects" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Projects</Link>
              </li>
              <li className="mb-2">
              <Link href="/residential-projects" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Residential</Link>
              </li>
              <li className="mb-2">
              <Link href="/commercial-projects" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Commercial</Link>
              </li>
              <li className="mb-2">
              <Link href="/blogs" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="w-full  md:w-5/12 lg:w-2/12 m-2 p-4 ">
            <h5 className="text-xl font-bold mb-6">Omaxe Projects</h5>
              <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="/property/Omaxe%20The%20Lake"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Omaxe The Lake
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/property/Omaxe%20The%20Resort"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Omaxe The Resort
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/property/Omaxe Celestia Royal Premier"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Celestia Royal Premier
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/property/Omaxe Celestia Royal"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Celestia Royal
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/property/Omaxe Ambrosia"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Omaxe Ambrosia
                </a>
              </li>
            </ul> 
          
          </div>
          <div className="w-full  md:w-5/12 lg:w-2/12 m-2 p-4 ">
            <h5 className="text-xl font-bold mb-6">Other Projects</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="/developers/Omaxe"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Omaxe
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/developers/Ambika"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Ambika
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/developers/DLF"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  DLF
                </a>
              </li>
              {/* <li className="mb-2">
                <a
                  href="/developers/Manohar"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
              Manohar
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/developers/Curo"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
              Curo
                </a>
              </li> */}
              <li className="mb-2">
                <a
                  href="/developers/The Address"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
              The Address
                </a>
              </li>
              {/* <li className="mb-2">
                <a
                  href="/developers/VRS"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
              VRS
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/developers/Altus"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
              Altus
                </a>
              </li> */}
            </ul>
          </div>
          <div className="w-full  md:w-5/12 lg:w-2/12 m-2 p-4 ">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Contact us
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
              <span className="text-green-600"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg></span>
              &nbsp;# 1105, 11th Floor, Omaxe India Trade Tower, New Chandigarh
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="tel:988-804-4333"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                 <span className="text-green-600"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg></span>
                 &nbsp;988-804-4333
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:ennaarrealtors@gmail.com"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 small"
                >
                  <span className="text-green-600"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg></span>
                  &nbsp;ennaarrealtors@gmail.com
                </a>
              </li>
              <li>
              <h5 className="mt-3 text-xl font-bold mb-2 sm:text-center xl:text-left">
                Stay connected
              </h5>
            
            <div className="flex sm:justify-center xl:justify-start">
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <FaInstagram />
              </a>
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              >
                <FaTwitter />
              </a>
            </div>
              </li>
            </ul> 
          </div>
          <div className="w-full text-center">
            <h5 className="text-xl font-bold mb-6">Terms & Conditions</h5>
            <p className="small">In the Site, We provides users with access to information primarily about Real Estate products and services.. By making use of this site, and furnishing your personal / contact details, you hereby agree that you are interested in availing and purchasing the Service(s) that you have selected. You hereby agree that We may contact you either electronically or through phone/SMS and may use any 3rd party platform (service provider) to contact you, to understand your interest in the selected products and Service(s) and to fulfill your demand. You also agree that We reserves the right to make your details available to its affiliates and partners and you may be contacted by the affiliates and partners for information and for sales through email, telephone and/or sms. You agree to receive promotional materials and/or special offers from us through email or sms.</p>
          </div>
        </div>
      </div>
    </footer></>
  );
}
