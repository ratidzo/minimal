'use client'

import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


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

    return (
        <div className="md:flex md:flex-row md:justify-between md:px-8 md:py-4
                        py-4 px-4
                        md:items-center text-gray-700 
                        flex flex-col text-lg md:text-base">
            {/* Logo container section */}
            <div className="flex items-center gap-1 px-4">
                <Image alt="Ionic Logo" src={'/logo-ionic.svg'} 
                 width={'48'} height={'48'} />
                 <h1 className="text-xl font-semibold">
                    Minimal&trade;
                 </h1>
            </div>
            {/* Nav links section. */}
            <div className="mt-8 md:mt-0">
                <ul className="flex flex-col md:flex-row md:flex gap-2  font-semibold">
                   {
                    links.map(link => (
                        <li className="px-4 py-2 hover:bg-slate-50
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
            <hr className="my-8 mx-4 md:hidden">
            </hr>

            {/* Login button */}
            <div className="px-4 py-2 hover:rounded hover:bg-slate-50">
                <Button>
                    Log in <span className="hidden md:inline">&rarr;</span>
                </Button>
            </div>
        </div>
    )
}