'use client'

import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"


export default function Nav() {

    const links = [
        {
            name: 'Product',
            url: '/'
        },
        {
            name: 'Features',
            url: '/'
        },
        {
            name: 'Marketplace',
            url: '/'
        },
        {
            name: 'Company',
            url: '/'
        }
    ]

    const [open, setOpen] = useState(false);

    return (
        <div className="md:flex md:flex-row md:justify-between md:px-8 md:py-4
                        py-4 px-4
                        md:items-center text-gray-700
                        flex flex-col text-lg md:text-base 
                        ">
            {/* Logo container section */}
            <div className="flex items-center gap-1 px-4 bg-white">
                <Image alt="Ionic Logo" src={'/logo-ionic.svg'} 
                 width={48} height={48} />
                 <h1 className="text-xl font-semibold">
                    Minimal&trade;
                 </h1>
            </div>
            {/* Nav links section. */}
            <div className={`mt-8 md:mt-0 ${open? 'translate-y-0':
                            'translate-y-[-490px]'} md:translate-y-0
                            bg-white
                            `}>
                <ul className="flex flex-col md:flex-row md:flex gap-2  font-semibold">
                   {
                    links.map(link => (
                        <li className="px-4 py-2 hover:bg-slate-50
                         md:hover:bg-white
                        hover:rounded  cursor-pointer">
                            <Link href={link.url}>
                                {link.name}
                            </Link>
                        </li>
                    ))
                   }
                </ul>
            </div>

            {/* Horizontal divider */}
            <hr className={`my-8 mx-4 md:hidden 
            ${open? 'translate-y-0': 'translate-y-[-490px]'}
            `}>
            </hr>

            {/* Menu control */}
            <div className="absolute right-8 top-6 md:hidden
                            cursor-pointer"
                             >
                <Image alt="menu control" onClick={()=>{setOpen(!open)}}
                 src={`${open ? '/close-outline.svg': '/menu-outline.svg'}`}
                            width={28} height={28}
                />
            </div>

            {/* Login button */}
            <div className={`px-4 py-2 hover:rounded hover:bg-slate-50 cursor-pointer
            md:hover:bg-indigo-100
            ${open ? 'translate-y-0': 'translate-y-[-490px]'} md:translate-y-0
            `}>
                <Button>
                    Log in <span className="hidden md:inline">&rarr;</span>
                </Button>
            </div>
           
        </div>
    )
}