import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <div className={cn("max-w-full mx-auto px-8 lg:px-16 xl:px-20 2xl:px-32", className)}>
    {children}
    </div>
  )
}

export default Container