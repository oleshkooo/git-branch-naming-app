import { ThemeSelector } from '@/modules/theme/components/theme-selector'
import { DefaultPagePart } from '@/pages/page-parts/default-page-part'
import { CustomPagePart } from '@/pages/page-parts/custom-page-part'
import { memo } from 'react'

type MainPageProps = unknown
export const MainPage: React.FC<MainPageProps> = memo(() => {
    return (
        <>
            <ThemeSelector variant="outline" className="absolute top-5 right-5" />
            <div className="container w-full h-screen flex flex-row justify-evenly items-center">
                <DefaultPagePart />
                <CustomPagePart />
            </div>
        </>
    )
})
MainPage.displayName = 'MainPage'
