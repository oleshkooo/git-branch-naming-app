import { ThemeType } from '@/modules/theme/types/theme.type'
import { getSystemTheme } from '@/modules/theme/utils/get-system-theme'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface UseThemeStore {
    theme: ThemeType.Type
    setTheme: (theme: UseThemeStore['theme']) => void
}

export const useThemeStore = create<
    UseThemeStore,
    [['zustand/devtools', UseThemeStore], ['zustand/persist', UseThemeStore], ['zustand/immer', UseThemeStore]]
>(
    devtools(
        persist(
            immer(set => ({
                theme: getSystemTheme(),
                setTheme: theme =>
                    set(state => {
                        state.theme = theme
                    }),
            })),
            {
                name: 'theme',
            },
        ),
    ),
)
