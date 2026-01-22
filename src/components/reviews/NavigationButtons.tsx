import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationButtonsProps } from "@/constants/types";



export function NavigationButtons({ 
  canScrollPrev, 
  canScrollNext, 
  onPrevClick, 
  onNextClick 
}: NavigationButtonsProps) {
  return (
    <div className="hidden sm:flex gap-2 me-0 sm:me-4">
      <Button
        variant="outline"
        size="icon"
        className={`w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded text-white transition-colors ${
          canScrollPrev 
            ? 'bg-primary hover:bg-primary/90 border-primary' 
            : 'bg-gray-300 border-gray-300 cursor-not-allowed'
        }`}
        onClick={onPrevClick}
        disabled={!canScrollPrev}
      >
        <ChevronLeft size={16} />
        <span className="sr-only">Previous testimonial</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={`w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded text-white transition-colors ${
          canScrollNext 
            ? 'bg-[#D0A87D] hover:bg-[#D0A87D]/90 border-[#D0A87D]' 
            : 'bg-gray-300 border-gray-300 cursor-not-allowed'
        }`}
        onClick={onNextClick}
        disabled={!canScrollNext}
      >
        <ChevronRight size={16} />
        <span className="sr-only">Next testimonial</span>
      </Button>
    </div>
  );
}