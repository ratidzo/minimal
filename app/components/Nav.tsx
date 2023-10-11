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
            name: 'Markeplace',
            url: '/'
        },
        {
            name: 'Company',
            url: '/'
        }
    ]

    return (
        <div className="md:flex md:flex-row md:justify-between md:px-8 md:py-4
                        py-4 px-8
                        md:items-center  text-gray-700 
                        flex flex-col gap-4">
            {/* Logo container section */}
            <div className="flex items-center gap-1">
                <Image alt="Ionic Logo" src={'/logo-ionic.svg'} 
                 width={'48'} height={'48'} />
                 <h1 className="text-xl font-semibold">
                    Minimal
                 </h1>
            </div>
            {/* Nav links section. */}
            <div className="">
                <ul className="md:flex flex flex-col gap-4 md:gap-12 font-semibold">
                   {
                    links.map(link => (
                        <li className=" px-2 py-2 hover:bg-indigo-50/50
                        hover:rounded">
                            <Link href={link.url}>
                                {link.name}
                            </Link>
                        </li>
                    ))
                   }
                </ul>
            </div>

            {/* Divider */}
            

            {/* Login button */}
            <div>
                <Button>
                    Log in <span>&rarr;</span>
                </Button>
            </div>
        </div>
    )
}