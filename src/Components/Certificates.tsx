import { ContainerSection } from '@/Components'
import { certificatesData } from '@/Data'


export const Certificates = () => {

    return (
        <ContainerSection>
            <h1 className='text-xl'>Licenças e certificados</h1>
            <section className='flex flex-col max-md:gap-4 gap-8 pt-8'>
                {certificatesData?.map( ( certificate ) => {
                    return (
                        <main className='flex items-center  ' key={certificate.id}>
                            <img src={certificate.image} alt={certificate.school_name} />
                            <div className='flex flex-col pl-2'>
                                <h1 className='max-md:text-base'>{certificate.school_name}</h1>
                                <p className='font-light max-md:text-base'>{certificate.course} <span className='text-primary-500 max-md:text-sm'>{certificate.conclusion_year}</span> </p>
                            </div>
                        </main>
                    )
                } )}
            </section>
            <p className='mt-4 text-sm text-secondary-400 font-light'>mais certificações você pode encontrar no meu perfil no <a target='_blank' href='https://www.linkedin.com/in/devvagner/details/certifications' className='text-primary-500 text-sm cursor-pointer'>LinkedIn</a></p>
        </ContainerSection>
    )
}
