import {useEffect, useState} from 'react'
import {FaBars, FaFacebook,FaTwitter,FaLinkedin, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import Link from 'next/link'
import ContactUs from './ContactUs'
export default function Header() {
    const [count, setCount] = useState(1)
    const [open, setOpen] = useState(false)
    const sidemenu = { true: "translateX(0%)", false: "translateX(-100%)" };
    var style = {
      transform: sidemenu[open]
    };
    useEffect(() => {
        if(count%2==0)
        {
            setOpen(true)
        }
        else
        {
            setOpen(false)
        }
    }, [count])
    return (
        <>
        <nav className="adminNavbar hidden lg:flex w-full bg-black text-white justify-between items-center p-4 px-4">
            <div className="w-4/12  lg:w-3/12 pl">
            <Link href="/"><img width="100px" className="" height="150px" src="/images/logo.png" alt="LOGO"/></Link>
                {/* <h1 className="font-bold text-4xl">ENN AAR GROUP</h1> */}
            </div>  
            <div className="w-8/12">
                <ul className="w-full flex justify-center">
                    <li className="px-4">
                        <Link href="/">HOME</Link>
                    </li>
                    <li className="px-4">
                        <Link href="/about-us">ABOUT US</Link>
                    </li>
                    <li className="px-4">
                        <Link href="/projects">PROJECTS</Link>
                    </li>
                    <li className="px-4">
                        <Link href="/residential-projects">RESIDENTIAL</Link>
                    </li>
                    <li className="px-4">
                        <Link href="/commercial-projects">COMMERCIAL</Link>
                    </li>
                    <li className="px-4">
                        <Link href="/blogs">BLOG</Link>
                    </li>
                </ul>
            </div>
            <div className="w-2/12 flex justify-center">
                <ContactUs/>
            </div>
        </nav>
        <nav className="bg-black text-white p-6 adminNavbar flex justify-between items-center w-full lg:hidden">
            <span className="pointer-on-hover">
                <FaBars  onClick={()=>setCount(count+1)}/>
            </span>
            <div className="px-4 pr-0">
                <Link href="/"><img width="80px" height="80px" src="/images/logo.png" alt="LOGO"/></Link>
                {/* <h1 className="font-bold text-4xl">ENN AAR GROUP</h1> */}
            </div>
        </nav>
        <div style={style} onClick={()=>setCount(count+1)} className="overlay">
        </div>
        <aside style={style} className="sidemenu text-sm bg-white text-black w-8/12 md:w-4/12 lg:w-2/12">
            <ul className="">
                <li className="p-4 bg-gray-200">
                    <Link href="/">HOME</Link>
                </li>
                <li className="p-4">
                    <Link href="/about-us">ABOUT US</Link>
                </li>
                <li className="p-4">
                    <Link href="/projects">PROJECTS</Link>
                </li>
                <li className="p-4">
                    <Link href="/residential-projects">RESIDENTIAL</Link>
                </li>
                <li className="p-4">
                    <Link href="/commercial-projects">COMMERCIAL</Link>
                </li>
                <li className="p-4">
                        <Link href="/blogs">BLOG</Link>
                </li>
                <li className="p-4">
                    <ContactUs/>
                </li>
                <li className="p-4">
                    <a href="https://www.facebook.com/ennaarrealtors" target="_blank">
                    <span className="pr-4 text-xl">
                        <FaFacebook/>
                    </span>
                    </a>
                    {/* <span className="pr-4 text-xl">
                        <FaInstagram/>
                    </span> */}
                    <a href="https://twitter.com/ENNAARREALTOR" target="_blank">
                    <span className="pr-4 text-xl">
                        <FaTwitter/>
                    </span>
                    </a>
                    <a href="https://www.linkedin.com/company/enn-aar-realtors/" target="_blank">
                    <span className="pr-4 text-xl">
                        <FaLinkedin/>
                    </span>
                    </a>

                </li>
            </ul>
        </aside>
        </>
    );
}
