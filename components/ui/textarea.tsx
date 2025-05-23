"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const TextareaComponent = ({ className, ...props }: React.ComponentProps<"textarea">) => {
  // 使用useState和useEffect确保组件只在客户端渲染
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  // 如果组件尚未挂载，返回一个占位符
  if (!mounted) {
    return (
      <div 
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base",
          className
        )}
      />
    )
  }
  
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

// 使用forwardRef包装组件
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>((props, ref) => <TextareaComponent {...props} ref={ref} />)

Textarea.displayName = "Textarea"

export { Textarea }
