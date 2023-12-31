import { useData } from "@/Context";
import * as Icon from "@phosphor-icons/react"
import { Link } from "react-scroll"


export const Header = () => {

    const { setModalMobileMenu } = useData()

    return (
        <header className='sm:fixed w-[calc(100vw-3px)] flex  bg-secondary-50 z-50   items-center justify-center shrink-0 h-[3.25rem]'>
            <section className='w-full max-w-[960px] h-full max-window:px-4 flex items-center justify-end'>
                <nav className='flex gap-8 max-sm:hidden transition-all'>
                    <Link
                        to="start"
                        spy
                        smooth
                        offset={-500}
                        duration={600}
                        isDynamic
                        activeClass="text-secondary-600 "
                        className='uppercase cursor-pointer text-sm text-secondary-400'>
                        Início
                    </Link>
                    <Link
                        to="projects"
                        smooth
                        offset={-60}
                        duration={300}
                        isDynamic
                        spy
                        activeClass="text-secondary-600"
                        className='uppercase cursor-pointer text-sm text-secondary-400'>
                        Projetos
                    </Link>
                    <Link
                        to="contact"
                        smooth
                        offset={0}
                        duration={600}
                        spy
                        activeClass="text-secondary-600"
                        className='uppercase cursor-pointer text-sm text-secondary-400'>
                        Contato
                    </Link>
                </nav>
                <Icon.List onClick={() => setModalMobileMenu( true )} className='sm:hidden cursor-pointer no_click' size={40} />
            </section>
        </header >
    )
}
