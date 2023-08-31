import { useData } from '@/Context'
import { useMobileMenu, useScroll } from '@/Hooks'
import *  as Icon from "@phosphor-icons/react"
import { Link } from "react-scroll"
import CV from "@/Assets/Files/Wagner Luiz - currículo - desenvolvedor de software.pdf"

export const MobileMenu = () => {


    const { modalMobileMenu, setModalMobileMenu } = useData()
    const { handleCloseModal } = useMobileMenu()
    useScroll( modalMobileMenu )

    if ( !modalMobileMenu ) return null
    return (
        <div className='absolute z-[100] sm:hidden w-[calc(100vw-3px)] h-screen top-0 bg-secondary-50 flex p-2'>
            <div className='flex flex-col  w-full'>
                <header className='flex w-full items-center justify-between h-max  pb-2 border-b px-2'>
                    <h1>Menu</h1>
                    <Icon.X onClick={() => setModalMobileMenu( false )} size={36} className='fill-secondary-600 cursor-pointer no_click' />
                </header>
                <main className='px-2 pt-8 flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Icon.Rows size={30} className='fill-primary-500' weight='light' />
                        <p className='text-primary-500'>Seções</p>
                    </div>
                    <Link
                        to="start"
                        smooth
                        offset={-500}
                        duration={400}
                        isDynamic
                        className='cursor-pointer'
                        onClick={handleCloseModal}>
                        Início
                    </Link>
                    <Link
                        to="projects"
                        smooth
                        offset={0}
                        duration={600}
                        isDynamic
                        className='cursor-pointer'
                        onClick={handleCloseModal}>
                        Projetos
                    </Link>
                    <Link
                        to="contact"
                        smooth
                        offset={220}
                        duration={600}
                        isDynamic
                        className='cursor-pointer'
                        onClick={handleCloseModal}>
                        Contato
                    </Link>
                </main>
                <main className='px-2 pt-8 flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Icon.Cards size={30} className='fill-primary-500' weight='light' />
                        <p className='text-primary-500'>Minhas Redes</p>
                    </div>
                    <a onClick={handleCloseModal} href="https://www.linkedin.com/in/devvagner/" target='_blank'>LinkedIn</a>
                    <a onClick={handleCloseModal} href="https://github.com/devvagnerBR" target='_blank'>Github</a>
                </main>
                <main className='px-2 pt-8 flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Icon.AddressBook size={30} className='fill-primary-500' weight='light' />
                        <p className='text-primary-500'>Contato</p>
                    </div>
                    <a onClick={handleCloseModal} target='_blank' href='mailto:devvagnerbr@gmail.com'>Email</a>
                    <a onClick={handleCloseModal} target="_blank" href="https://web.whatsapp.com/send?phone=5522999887464" >WhatsApp</a>
                    <a onClick={handleCloseModal} href='https://www.instagram.com/wgr.lz' target='_blank'>Instagram</a>
                </main>
                <main className='px-2 pt-8 flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Icon.ListPlus size={30} className='fill-primary-500' weight='light' />
                        <p className='text-primary-500'>Outros</p>
                    </div>
                    <a href={CV} download>
                        Baixar Currículo
                    </a>
                    <Link
                        to="contact"
                        smooth
                        offset={220}
                        duration={600}
                        isDynamic
                        className='cursor-pointer'
                        onClick={handleCloseModal}>
                        Enviar Mensagem
                    </Link>
                </main>
            </div>
        </div>
    )
}
