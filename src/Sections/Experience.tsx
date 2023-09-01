import { ContainerSection } from '@/Components'
import { experienceData } from "@/Data"


export const Experience = () => {


    return (
        <ContainerSection >
            <h1 className='text-xl' >Experiência</h1>
            <main className='flex flex-col' id='contact' >
                {experienceData?.map( ( experience ) => (
                    <div className='mt-8 max-md:mt-4' key={experience.id}>
                        <h1 className='font-medium leading-none'>{experience.job}</h1>
                        <h2 className='mt-2 font-light text-base leading-none'>{experience.company_name}</h2>
                        <p className='mt-2 text-base font-light text-secondary-300 leading-none'>{experience.time}</p>
                        <p className='mt-4 leading-none text-base font-light md:pr-16'>{experience.description}</p>
                    </div>
                ) )}
            </main>
        </ContainerSection>
    )
}
