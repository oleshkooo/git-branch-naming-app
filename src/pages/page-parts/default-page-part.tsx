import { FormTextField } from '@/components/form/form-text-field'
import { Show } from '@/components/show-when'
import { Form } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { CardWrapper } from '@/pages/components/card-wrapper'
import { CodeResult } from '@/pages/components/code-result'
import { slugify } from '@/utils/slugify'
import { zodResolver } from '@hookform/resolvers/zod'
import { memo } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
    id: z.string().optional(),
    name: z.string().optional(),
})
type FormSchemaType = z.infer<typeof formSchema>

type DefaultPagePartProps = unknown
export const DefaultPagePart: React.FC<DefaultPagePartProps> = memo(() => {
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: '',
            name: '',
        },
    })
    const id = useWatch({ control: form.control, name: 'id' }) as string
    const name = useWatch({ control: form.control, name: 'name' }) as string

    return (
        <CardWrapper title="Default">
            <Form {...form}>
                <form className="space-y-3 w-[80vw] sm:w-96">
                    <FormTextField
                        control={form.control}
                        name="id"
                        label="ID"
                        inputProps={{
                            placeholder: 'US12345...',
                            autoComplete: 'off',
                            autoCorrect: 'off',
                        }}
                    />
                    <FormTextField
                        control={form.control}
                        name="name"
                        label="Name"
                        inputProps={{
                            placeholder: 'Refactor code...',
                            autoComplete: 'off',
                            autoCorrect: 'off',
                        }}
                    />
                </form>
            </Form>

            <Separator className="my-8" />

            <Show>
                <Show.When isTrue={id?.length !== 0 && name?.length !== 0}>
                    <CodeResult>{`${slugify(id, { toUpperCase: true })}/${slugify(name, { toLowerCase: true })}`}</CodeResult>
                </Show.When>
                <Show.When isTrue={id?.length !== 0}>
                    <CodeResult>{slugify(id, { toUpperCase: true })}</CodeResult>
                </Show.When>
                <Show.When isTrue={name?.length !== 0}>
                    <CodeResult>{slugify(name, { toLowerCase: true })}</CodeResult>
                </Show.When>
                <Show.Else>
                    <CodeResult className="opacity-60 cursor-not-allowed">No data</CodeResult>
                </Show.Else>
            </Show>
        </CardWrapper>
    )
})
DefaultPagePart.displayName = 'DefaultPagePart'
