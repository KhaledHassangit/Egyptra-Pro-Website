import { Tour } from '@/constants/tourData';
import Image from 'next/image';

interface ImageGalleryProps {
    tour: Tour;
    onImageClick: (index: number) => void;
}

export function ImageGallery({ tour, onImageClick }: ImageGalleryProps) {
    return (
        <div className="flex gap-2 w-full">
            <div className="flex flex-col gap-2 flex-1">
                <div
                    className="relative cursor-pointer group rounded-[10px] overflow-hidden"
                    style={{ height: '330px' }}
                    onClick={() => onImageClick(0)}
                >
                    <Image
                        src={tour.galleryImages[0]}
                        alt={tour.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                </div>
                <div
                    className="relative cursor-pointer group rounded-[10px] overflow-hidden"
                    style={{ height: '240px' }}
                    onClick={() => onImageClick(1)}
                >
                    <Image
                        src={tour.galleryImages[1]}
                        alt={`${tour.title} 2`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
                <div
                    className="relative cursor-pointer group rounded-[10px] overflow-hidden"
                    style={{ height: '260px' }}
                    onClick={() => onImageClick(2)}
                >
                    <Image
                        src={tour.galleryImages[2]}
                        alt={`${tour.title} 3`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div
                    className="relative cursor-pointer group rounded-[10px] overflow-hidden"
                    style={{ height: '307px' }}
                    onClick={() => onImageClick(3)}
                >
                    <Image
                        src={tour.galleryImages[3]}
                        alt={`${tour.title} 4`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
                <div
                    className="relative cursor-pointer group rounded-[10px] overflow-hidden"
                    style={{ height: '218px' }}
                    onClick={() => onImageClick(4)}
                >
                    <Image
                        src={tour.galleryImages[4]}
                        alt={`${tour.title} 5`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div
                    className="relative cursor-pointer group rounded-[10px] overflow-hidden"
                    style={{ height: '356px' }}
                    onClick={() => onImageClick(5)}
                >
                    <Image
                        src={tour.galleryImages[5]}
                        alt={`${tour.title} 6`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div 
                        className="absolute bottom-4 right-4 flex items-center justify-center rounded-full text-white"
                        style={{ 
                            width: '60px', 
                            height: '36px', 
                            fontSize: '14px',
                            backgroundColor: '#000000B2'
                        }}
                    >
                        6 / 15
                    </div>
                </div>
            </div>
        </div>
    );
}