export const slugify = (
    str: string,
    options: {
        toLowerCase?: boolean
        toUpperCase?: boolean
    } = {
        toLowerCase: false,
        toUpperCase: false,
    },
): string => {
    let slug = str
        // remove square brackets with content
        .replace(/\[.*?\]/g, '')
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

    // to lower case
    if (options?.toLowerCase) {
        slug = slug.toLowerCase()
    }
    // to upper case
    if (options.toUpperCase) {
        slug = slug.toUpperCase()
    }

    return slug
}
