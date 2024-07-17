import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface UseGlobalStore {
    separator: string
    setSeparator: (separator: UseGlobalStore['separator']) => void
}

export const useGlobalStore = create<
    UseGlobalStore,
    [['zustand/devtools', UseGlobalStore], ['zustand/persist', UseGlobalStore], ['zustand/immer', UseGlobalStore]]
>(
    devtools(
        persist(
            immer(set => ({
                separator: ':',
                setSeparator: separator =>
                    set(state => {
                        state.separator = separator
                    }),
            })),
            {
                name: 'global',
            },
        ),
    ),
)
