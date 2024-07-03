import { FormFieldProps } from '@/components/form/form-field-props.type'
import { Show } from '@/components/show-when'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldPath, FieldValues } from 'react-hook-form'

export const FormTextField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    label,
    description,
    inputProps,
    ...props
}: FormFieldProps<TFieldValues, TName> & {
    label: string
    description?: string
    inputProps?: React.ComponentProps<typeof Input>
}) => {
    return (
        <FormField
            {...props}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input {...field} type="text" {...inputProps} />
                    </FormControl>
                    <Show>
                        <Show.When isTrue={description != null}>
                            <FormDescription className="text-wrap break-words">{description}</FormDescription>
                        </Show.When>
                    </Show>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
FormTextField.displayName = 'FormTextField'
