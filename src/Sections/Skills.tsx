import { ContainerSection } from '@/Components'
import { frontEnd, backEnd, design } from '@/Data'

export const Skills = () => {

    return (
        <ContainerSection>
            <h1 className='text-xl'>Competências</h1>
            <section className='mt-6 max-md:mt-4 flex flex-col'>
                <h1 className='text-primary-500 mb-4'>Tecnologias Front-end</h1>
                <div className='flex gap-4 flex-wrap'>
                    {frontEnd?.map( ( technology ) => (
                        <p key={technology} className='max-md:text-sm font-light  w-max  p-2 rounded-sm  border uppercase tracking-wider text-secondary-400'>{technology}</p>
                    ) )}
                </div>
            </section>
            <section className='mt-8 max-md:mt-4 flex flex-col'>
                <h1 className='text-primary-500 mb-4'>Tecnologias Back-end</h1>
                <div className='flex gap-4 flex-wrap'>
                    {backEnd?.map( ( technology ) => (
                        <p key={technology} className='max-md:text-sm font-light  w-max  p-2 rounded-sm  border uppercase tracking-wider text-secondary-400'>{technology}</p>
                    ) )}
                </div>
            </section>
            <section className='mt-8 max-md:mt-4 flex flex-col'>
                <h1 className='text-primary-500 mb-4'>Design</h1>
                <div className='flex gap-4 flex-wrap'>
                    {design?.map( ( technology ) => (
                        <p key={technology} className='max-md:text-sm font-light  w-max  p-2 rounded-sm  border uppercase tracking-wider text-secondary-400'>{technology}</p>
                    ) )}
                </div>
            </section>
        </ContainerSection>
    )
}
