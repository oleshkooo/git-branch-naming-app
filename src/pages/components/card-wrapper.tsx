import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { memo } from 'react'

type CardWrapperProps = React.ComponentProps<typeof Card>
export const CardWrapper: React.FC<CardWrapperProps> = memo(({ title, children, ...props }) => {
    return (
        <Card {...props}>
            <CardHeader className="pb-2">
                <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2">{children}</CardContent>
            <CardFooter />
        </Card>
    )
})
CardWrapper.displayName = 'CardWrapper'
