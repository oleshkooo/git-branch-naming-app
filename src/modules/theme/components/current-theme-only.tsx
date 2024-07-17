import { useThemeStore } from '@/modules/theme/store/theme.store'
import { memo } from 'react'

interface CurrentThemeOnlyProps {
    theme: string
    children?: React.ReactNode
}
export const CurrentThemeOnly: React.FC<CurrentThemeOnlyProps> = memo(({ theme, children }) => {
    const currentTheme = useThemeStore(state => state.theme)

    return currentTheme === theme ? children : null
})
CurrentThemeOnly.displayName = CurrentThemeOnly.name
