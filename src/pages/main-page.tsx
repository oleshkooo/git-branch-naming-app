import { FormTextField } from '@/components/form/form-text-field'
import { Show } from '@/components/show-when'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
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

type MainPageProps = unknown
export const MainPage: React.FC<MainPageProps> = memo(() => {
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
        <div className="container w-full h-screen flex flex-col justify-center items-center">
            <Card>
                <CardContent className="p-6">
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
                            <CodeResult>{`${id}/${slugify(name)}`}</CodeResult>
                        </Show.When>
                        <Show.When isTrue={id?.length !== 0}>
                            <CodeResult>{id}</CodeResult>
                        </Show.When>
                        <Show.When isTrue={name?.length !== 0}>
                            <CodeResult>{slugify(name)}</CodeResult>
                        </Show.When>
                        <Show.Else>
                            <CodeResult>No data</CodeResult>
                        </Show.Else>
                    </Show>
                </CardContent>
                <CardFooter />
            </Card>
        </div>
    )
})
MainPage.displayName = 'MainPage'
