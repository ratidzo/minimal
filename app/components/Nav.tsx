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
        <div>
            {/* Logo container section */}
            <div>
                <Image alt="Ionic Logo" src={'/logo-ionic.svg'} 
                 width={'40'} height={'40'} />
            </div>

            {/* Nav links section. */}
            <div>
                <ul>
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
        </div>
    )
}