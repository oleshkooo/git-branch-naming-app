import { Toaster } from '@/components/ui/sonner'
import { ThemeUpdater } from '@/modules/theme/components/theme-updater'
import { MainPage } from '@/pages/main-page'
import { memo } from 'react'

type AppProps = unknown
export const App: React.FC<AppProps> = memo(() => {
    return (
        <>
            <MainPage />
            <ThemeUpdater />
            <Toaster />
        </>
    )
})
App.displayName = 'App'
