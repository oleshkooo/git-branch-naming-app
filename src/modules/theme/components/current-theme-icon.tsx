import { ThemesIcons } from '@/modules/theme/constants/theme.constant'
import { useThemeStore } from '@/modules/theme/store/theme.store'
import { memo, useMemo } from 'react'

interface CurrentThemeIconProps extends React.ComponentProps<typeof ThemesIcons.light | typeof ThemesIcons.dark> {}
export const CurrentThemeIcon: React.FC<CurrentThemeIconProps> = memo(({ ...props }) => {
    const theme = useThemeStore(state => state.theme)

    const Icon = useMemo(() => ThemesIcons[theme], [theme])

    return Icon ? <Icon {...props} /> : null
})
CurrentThemeIcon.displayName = CurrentThemeIcon.name
