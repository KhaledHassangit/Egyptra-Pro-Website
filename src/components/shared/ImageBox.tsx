import Image from 'next/image'

const ImageBox = () => {
    return (
        <div className="w-[339px] h-[548px]">
            <Image
                src="/images/Group.png"
                alt="Why Choose Us"
                width={339}
                height={548}
                className="object-cover w-full h-full rounded-3xl"
            />
        </div>
    )
}

export default ImageBox