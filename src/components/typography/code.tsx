import { cn } from '@/utils/cn'
import { forwardRef } from 'react'

type CodeProps = React.ComponentProps<'code'>
export const Code: React.FC<CodeProps> = forwardRef<HTMLElement, CodeProps>(({ className, ...props }, ref) => {
    return (
        <code
            className={cn('block relative rounded bg-muted px-3 py-2 border-muted-foreground font-mono text-sm', className)}
            ref={ref}
            {...props}
        />
    )
})
Code.displayName = 'Code'
