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
        <div className="md:flex md:justify-between md:px-8 md:py-4 
                        md:items-center  text-gray-700">
            {/* Logo container section */}
            <div className="flex items-center gap-1">
                <Image alt="Ionic Logo" src={'/logo-ionic.svg'} 
                 width={'48'} height={'48'} />
                 <h1 className="text-xl font-semibold">
                    Minimal
                 </h1>
            </div>
            {/* Nav links section. */}
            <div>
                <ul className="md:flex md:gap-12 font-semibold">
                   {
                    links.map(link => (
                        <li>
                            <Link href={link.url}>
                                {link.name}
                            </Link>
                        </li>
                    ))
                   }
                </ul>
            </div>

            {/* Login button */}
            <div>
                <Button>
                    Log in <span>&rarr;</span>
                </Button>
            </div>
        </div>
    )
}