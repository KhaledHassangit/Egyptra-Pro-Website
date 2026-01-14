import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const UIButton = (
    {children, className, style}:
    {children:React.ReactNode, className?:string, style?:React.CSSProperties}
) => {
  return (
    <Button 
      className={cn(
        "bg-primary hover:bg-primary/90 transition-colors text-white flex items-center justify-center px-6 py-2 md:px-8 md:py-3", 
        className
      )} 
      style={{ 
        borderRadius: "4px", 
        fontWeight: "500", 
        fontSize: "clamp(0.875rem, 2vw, 1rem)",
        minHeight: "44px",
        ...style
      }}
    >
      {children}
    </Button>  
  )
}

export default UIButton