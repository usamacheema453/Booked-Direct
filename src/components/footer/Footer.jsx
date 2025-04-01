import React from "react";
import Client from "../../pages/Client";
import { FaFacebookSquare, FaTwitter,FaLinkedin  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer=()=>{
    const solutions=[
        {
            href: '/how-it-works',
            title: 'How it works'
        },
        {
            href: '/popular',
            title:'Popular'
        },
        {
            href:'/services',
            title:'Services'
        },
        {
            href: '/features',
            title: 'Features'
        },
        {
            href: '/Business',
            title:'Business'
        }
    ]

    const company =[
        {
            href: '/about-us',
            title: 'About Us'
        },
        {
            href:'/contact',
            title:'Contact'
        }
    ]

    const business=[
        {
            href:'/bookings',
            title: 'Bookings'
        },
        {
            href:'/services',
            title:'Services',
        }
        ,{
            href:'/features',
            title:'Features'
        }
    ]
    return(
        <>
            <Client />

            <div className="container px-6 mx-auto py-5">
            <div className="flex flex-row flex-wrap justify-between gap-4">
                <div>
                <img src='/images/logo.png' alt='footer-logo' className='max-w-24 max-h-8' />
        
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <p className="font-semibold pb-3">Solutions</p>
                        {solutions.map((item, index)=>(
                            <div className="" key={index}>
                                <a href={item.href} className="text-xs sm:text-sm">{item.title}</a>
                            </div>
                        ))}
                        
                    </div>
                    <div>
                        <p className="font-semibold pb-3">Company</p>
                        {company.map((item, index)=>(
                            <div className="" key={index}>
                                <a href={item.href} className="text-xs sm:text-sm">{item.title}</a>
                            </div>
                        ))}
                        
                    </div>
                    <div>
                        <p className="font-semibold pb-3">Business</p>
                        {business.map((item, index)=>(
                            <div className="" key={index}>
                                <a href={item.href} className="text-xs sm:text-sm">{item.title}</a>
                            </div>
                        ))}
                    </div>

                </div>

                <di>
                    <p className="font-semibold pb-3">Follow on Us</p>
                        <div className="flex flex-row gap-4 text-gray-700 ">
                            <FaFacebookSquare />
                            <FaLinkedin />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                </di>
            </div>
            </div>
        </>
    )
}

export default Footer;