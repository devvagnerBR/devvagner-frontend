import { ContainerSection } from '@/Components'
import { languageData } from '@/Data'
export { languageData } from "@/Data"

export const Languages = () => {



    return (
        <ContainerSection>
            <h1 className='text-xl'>Idiomas</h1>
            <main className='mt-8 max-md:mt-4 max-mobile:flex-col max-mobile:gap-4 flex gap-16'>
                {languageData?.map( ( language ) => (
                    <div key={language.id} className='flex flex-col gap-2'>
                        <h1 className='text-primary-500'>{language.language}</h1>
                        <p className='text-base'>{language.level}</p>
                    </div>
                ) )}
            </main>
        </ContainerSection>

    )
} 
