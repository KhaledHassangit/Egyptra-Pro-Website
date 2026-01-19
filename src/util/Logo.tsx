import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ width, height }: { width: number, height: number }) => {
    return (
        <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
                <div className={`relative  w-${width} h-${height}`}>
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