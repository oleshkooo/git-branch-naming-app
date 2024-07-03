export const slugify = (str: string): string => {
    return (
        str
            .trim()
            // replace all non-alphanumeric characters with a space
            .replace(/[^a-zA-Z0-9]+/g, ' ')
            // insert space before each uppercase letter (excluding the first character)
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            // remove special characters
            .replace(/[^\w-]+/g, ' ')
            // remove spaces
            .replace(/ /g, '_')
            // remove leading and trailing underscores
            .replace(/^_+|_+$/g, '')
    )
}
