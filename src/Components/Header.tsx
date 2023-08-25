import * as Icon from "@phosphor-icons/react"

export const Header = () => {


    const isPortuguese = true;

    return (
        <header className='w-screen flex bg-secondary-50  items-center justify-center h-[3.25rem]'>
            <section className='w-full max-w-[960px] h-full max-window:px-4 flex items-center justify-between'>
                <section className='flex gap-2 text-sm'>
                    <button
                        className={`text-sm cursor-pointer ${isPortuguese ? "font-bold text-secondary-600" : "text-secondary-400"} `}>
                        PT
                    </button>
                    <button
                        className={`text-sm cursor-pointer  ${isPortuguese ? "text-secondary-400" : "font-bold text-secondary-600"} `}>
                        EN
                    </button>
                </section>
                <nav className='flex gap-4 max-sm:hidden'>
                    <a className='cursor-pointer'>Início</a>
                    <a className='cursor-pointer'>Sobre</a>
                    <a className='cursor-pointer'>Projetos</a>
                    <a className='cursor-pointer'>Contato</a>
                </nav>
                <Icon.List className='sm:hidden cursor-pointer' size={40} />
            </section>
        </header >
    )
}
