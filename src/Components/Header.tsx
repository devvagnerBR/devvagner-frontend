import { useData } from "@/Context";
import * as Icon from "@phosphor-icons/react"
import { Link } from "react-scroll"


export const Header = () => {

    const { setModalMobileMenu } = useData()
    const isPortuguese = true;

    return (
        <header className='sm:fixed w-[calc(100vw-3px)] flex bg-secondary-50 z-50   items-center justify-center shrink-0 h-[3.25rem]'>
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
                <nav className='flex gap-8 max-sm:hidden transition-all'>
                    <Link to="start" smooth offset={-500} duration={600} isDynamic spy activeClass="text-secondary-600 " className='uppercase cursor-pointer text-sm text-secondary-400'>Início</Link>
                    {/* <Link to="about" smooth offset={0} duration={300} spy activeClass="text-secondary-400 " className='uppercase cursor-pointer text-sm text-secondary-400'>Sobre</Link> */}
                    <Link to="projects" smooth offset={-60} duration={300} spy activeClass="text-secondary-600 " className='uppercase cursor-pointer text-sm text-secondary-400'>Projetos</Link>
                    <Link to="contact" smooth offset={20} duration={600} spy activeClass="text-secondary-600 " className='uppercase cursor-pointer text-sm text-secondary-400'>Contato</Link>
                </nav>
                <Icon.List onClick={() => setModalMobileMenu( true )} className='sm:hidden cursor-pointer no_click' size={40} />
            </section>
        </header >
    )
}
