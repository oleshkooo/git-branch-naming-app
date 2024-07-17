import { useThemeStore } from '@/modules/theme/store/theme.store'
import { ThemeType } from '@/modules/theme/types/theme.type'
import { getSystemTheme } from '@/modules/theme/utils/get-system-theme'
import { memo, useEffect } from 'react'

interface ThemeUpdaterProps {}
export const ThemeUpdater: React.FC<ThemeUpdaterProps> = memo(() => {
    const theme = useThemeStore(state => state.theme)

    useEffect(() => {
        const mutatedTheme = theme === ThemeType.Enum.SYSTEM ? getSystemTheme() : theme
        if (document.body.classList.contains(ThemeType.Enum.DARK)) {
            document.body.classList.remove(ThemeType.darkClassName)
        }
        if (mutatedTheme === ThemeType.Enum.DARK) {
            document.body.classList.add(ThemeType.darkClassName)
        }
    }, [theme])

    return null
})
ThemeUpdater.displayName = ThemeUpdater.name
