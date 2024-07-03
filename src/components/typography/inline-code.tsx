import { cn } from '@/utils/cn'
import { forwardRef } from 'react'

type InlineCodeProps = React.ComponentProps<'code'>
export const InlineCode: React.FC<InlineCodeProps> = forwardRef<HTMLElement, InlineCodeProps>(({ className, ...props }, ref) => {
    return (
        <code
            className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}
            ref={ref}
            {...props}
        />
    )
})
InlineCode.displayName = 'InlineCode'
