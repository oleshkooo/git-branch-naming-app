type GetSystemTheme = () => 'light' | 'dark'
export const getSystemTheme: GetSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
