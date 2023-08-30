import { ContainerSection } from '@/Components'
import college_logo from "@/Assets/Images/descomplica_logo2x.png"

export const Graduation = () => {
    return (
        <ContainerSection>
            <h1 id="about" className='text-xl'>Formação acadêmica</h1>
            <section className='mt-8 max-lg:mt-4  cursor-pointer  flex lg:items-center items-start '>
                <img src={college_logo} alt="" className='max-mobile:w-20' width={50}  />
                <div className='flex flex-col pl-2'>
                    <h1 className='max-sm:text-sm'>Centro Universitário União das Américas Descomplica</h1>
                    <h1 className='font-light max-sm:text-sm '>Análise e desenvolvimento de sistemas -
                        <span className=' max-sm:text-sm max-sm:pl-0  text-primary-500 pl-1'> Cursando</span>
                    </h1>
                </div>
            </section>
        </ContainerSection>
    )
}
