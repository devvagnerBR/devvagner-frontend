import { useData } from '@/Context'
import { useScroll } from '@/Hooks'
import *  as Icon from "@phosphor-icons/react"

export const MobileMenu = () => {


    const { modalMobileMenu, setModalMobileMenu } = useData()
    useScroll( modalMobileMenu )

    if ( !modalMobileMenu ) return null
    return (
        <div className='absolute z-[100] sm:hidden  w-[calc(100vw-3px)] h-screen top-0 bg-secondary-50 flex p-2'>
            <div className='flex flex-col  w-full'>
                <header className='flex w-full items-center justify-between h-max  pb-2 border-b px-2'>
                    <h1>Menu</h1>
                    <Icon.X onClick={() => setModalMobileMenu( false )} size={36} className='fill-secondary-600 cursor-pointer' />
                </header>
                <main className='px-2 pt-8 flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Icon.Rows size={30} className='fill-primary-500' weight='light' />
                        <p className='text-primary-500'>Seções</p>
                    </div>
                    <p>Início</p>
                    <p>Projetos</p>
                    <p>Contato</p>
                </main>
                <main className='px-2 pt-8 flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Icon.Cards size={30} className='fill-primary-500' weight='light' />
                        <p className='text-primary-500'>Minhas Redes</p>
                    </div>
                    <p>LinkedIn</p>
                    <p>GitHub</p>
                </main>
                <main className='px-2 pt-8 flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Icon.AddressBook size={30} className='fill-primary-500' weight='light' />
                        <p className='text-primary-500'>Contato</p>
                    </div>
                    <p>Email</p>
                    <p>WhatsApp</p>
                    <p>Instagram</p>
                </main>
                <main className='px-2 pt-8 flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Icon.ListPlus size={30} className='fill-primary-500' weight='light' />
                    <p className='text-primary-500'>Outros</p>
                    </div>
                    <p>Baixar Currículo</p>
                    <p>Enviar Mensagem</p>
                </main>
            </div>
        </div>
    )
}
