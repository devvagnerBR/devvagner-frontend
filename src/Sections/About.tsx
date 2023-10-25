import { ContainerSection } from "@/Components"

export const About = () => {

    
    return (
        <ContainerSection>
            <h1 className='text-xl'>Sobre</h1>
            <p className='pt-8 max-lg:pt-4 max-md:text-base font-light text-lg leading-6'>
                Olá! Sou um entusiasta da tecnologia e apaixonado por criar experiências incríveis na web. Meu nome é Wagner
                e sou um desenvolvedor full stack com um toque de paixão pelo design.Combinando a minha habilidade técnica com
                uma visão artística, busco trazer à vida interfaces interativas que cativam encantam os usuários além de solidas habilidades em criação de  apis e banco de dados.
            </p>

            <p className='pt-4 font-light max-md:text-base text-lg leading-6'>
                Tenho 28 anos e atualmente moro no Rio de Janeiro/RJ. Meu primeiro contato com programação foi em 2021,
                quando participei do bootcamp da Labenu, onde estudei tecnologias, tanto no Front-End quanto no Back-End.
            </p>
        </ContainerSection>
    )
}
