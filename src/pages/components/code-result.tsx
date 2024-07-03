import { Code } from '@/components/typography/code'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/utils/cn'
import { Maybe } from '@/utils/type-helpers'
import { memo, useCallback } from 'react'
import { toast } from 'sonner'

type CodeResultProps = Omit<React.ComponentProps<typeof Code>, 'children'> & {
    children?: Maybe<string>
}
export const CodeResult: React.FC<CodeResultProps> = memo(({ className, children, ...props }) => {
    const onCopy = useCallback(async () => {
        if (children == null) {
            return null
        }
        try {
            const prevClipboardText = await navigator.clipboard.readText()
            console.log('🚀 ~ onCopy ~ prevClipboardText:', prevClipboardText)
            await navigator.clipboard.writeText(children)

            console.log('🚀 ~ onCopy ~ children:', children)
            toast.success('Copied to clipboard!', {
                description: `Text: ${children}`,
                action: {
                    label: 'Undo',
                    onClick: async () => {
                        await navigator.clipboard.writeText(prevClipboardText)
                    },
                },
            })
        } catch (error) {
            toast.error('Failed to copy to clipboard...')
        }
    }, [children])

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Code
                        className={cn(
                            'break-words text-wrap w-[80vw] sm:w-96 cursor-pointer duration-300 transition-all',
                            className,
                        )}
                        {...props}
                        onClick={onCopy}
                    >
                        {children}
                    </Code>
                </TooltipTrigger>
                <TooltipContent>Click to copy!</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
})
CodeResult.displayName = 'CodeResult'
