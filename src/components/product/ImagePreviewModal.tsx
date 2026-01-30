import Image from 'next/image';
import { ChevronLeft, ChevronRight, XIcon } from 'lucide-react';

interface ImagePreviewModalProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export function ImagePreviewModal({
    images,
    currentIndex,
    onClose,
    onNext,
    onPrev
}: ImagePreviewModalProps) {
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
                <XIcon size={32} />
            </button>

            <button
                onClick={onPrev}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3"
                disabled={currentIndex === 0}
            >
                <ChevronLeft size={32} />
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center px-16">
                <Image
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    width={1200}
                    height={800}
                    className="object-contain max-h-full"
                    priority
                />
            </div>

            <button
                onClick={onNext}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3"
                disabled={currentIndex === images.length - 1}
            >
                <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}