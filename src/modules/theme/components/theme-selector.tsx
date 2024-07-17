import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { CurrentThemeIcon } from '@/modules/theme/components/current-theme-icon'
import { CurrentThemeOnly } from '@/modules/theme/components/current-theme-only'
import { ThemesIcons } from '@/modules/theme/constants/theme.constant'
import { useThemeStore } from '@/modules/theme/store/theme.store'
import { ThemeType } from '@/modules/theme/types/theme.type'
import { memo, useCallback } from 'react'

interface ThemeSelectorProps extends React.ComponentProps<typeof Button> {}
export const ThemeSelector: React.FC<ThemeSelectorProps> = memo(({ children, ...props }) => {
    const setTheme = useThemeStore(state => state.setTheme)

    const onThemeChange = useCallback(
        (newTheme: ThemeType.Type) => {
            return () => {
                setTheme(newTheme)
            }
        },
        [setTheme],
    )

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" {...props}>
                    <CurrentThemeIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {Object.keys(ThemesIcons).map(theme => (
                    <DropdownMenuItem
                        key={theme}
                        onClick={onThemeChange(theme as ThemeType.Type)}
                        className="flex cursor-pointer gap-2"
                    >
                        <span className="capitalize">{theme}</span>
                        <CurrentThemeOnly theme={theme}>
                            <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                        </CurrentThemeOnly>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
})
ThemeSelector.displayName = ThemeSelector.name
