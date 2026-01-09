import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({width,hight}: {width: number, hight: number}) => {
  return (
     <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="flex items-center gap-2">
                                <div className={`relative w-${width} h-${hight}`}>
                                    <Image
                                        src="/Logo.png" 
                                        alt="Egyptra Pro Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </div>
  )
}

export default Logo