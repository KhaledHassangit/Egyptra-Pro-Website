import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const UIButton = (
    {children,className,style}:
    {children:React.ReactNode,className?:string,style?:React.CSSProperties}
) => {
  return (
  <Button 
          className={cn("bg-primary  hover:bg-primary/90 transition-colors text-white hidden sm:flex",className)} 
          style={{ height: "50px", borderRadius: "4px", fontWeight: "500", fontSize: "16px" }}
        >
          {children}
        </Button>  
        )
}

export default UIButton