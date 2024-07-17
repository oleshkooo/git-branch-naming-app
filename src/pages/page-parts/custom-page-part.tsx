import { FormTextField } from '@/components/form/form-text-field'
import { Show } from '@/components/show-when'
import { Form } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { CardWrapper } from '@/pages/components/card-wrapper'
import { CodeResult } from '@/pages/components/code-result'
import { useGlobalStore } from '@/stores/global.store'
import { slugify } from '@/utils/slugify'
import { zodResolver } from '@hookform/resolvers/zod'
import { memo, useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
    name: z.string().optional(),
    separator: z.string().optional(),
})
type FormSchemaType = z.infer<typeof formSchema>

type CustomPagePartProps = unknown
export const CustomPagePart: React.FC<CustomPagePartProps> = memo(() => {
    const defaultSeparator = useGlobalStore(store => store.separator)
    const setSeparator = useGlobalStore(store => store.setSeparator)

    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            separator: defaultSeparator,
        },
    })
    const name = useWatch({ control: form.control, name: 'name' }) as string
    const separator = useWatch({ control: form.control, name: 'separator' }) as string

    const parts = name.split(separator, 2)
    const splitId = parts?.[0] ?? ''
    const splitName = parts?.[1] ?? ''

    useEffect(() => {
        setSeparator(separator)
    }, [separator, setSeparator])

    return (
        <CardWrapper title="Custom">
            <Form {...form}>
                <form className="space-y-3 w-[80vw] sm:w-96">
                    <FormTextField
                        control={form.control}
                        name="name"
                        label="Full name"
                        inputProps={{
                            placeholder: 'US12345: Refactor code...',
                            autoComplete: 'off',
                            autoCorrect: 'off',
                        }}
                    />
                    <FormTextField
                        control={form.control}
                        name="separator"
                        label="Separator"
                        inputProps={{
                            placeholder: ': ',
                            autoComplete: 'off',
                            autoCorrect: 'off',
                        }}
                    />
                </form>
            </Form>

            <Separator className="my-8" />

            <Show>
                <Show.When isTrue={splitId?.length !== 0 && splitName?.length !== 0}>
                    <CodeResult>{`${slugify(splitId, { toUpperCase: true })}/${slugify(splitName, { toLowerCase: true })}`}</CodeResult>
                </Show.When>
                <Show.Else>
                    <CodeResult className="opacity-60 cursor-not-allowed">No data</CodeResult>
                </Show.Else>
            </Show>
        </CardWrapper>
    )
})
CustomPagePart.displayName = 'CustomPagePart'
