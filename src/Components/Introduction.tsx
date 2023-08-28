import { ContainerSection } from "@/Components"
import cover_profile from "@/Assets/Images/cover_profile.png"
import profile from "@/Assets/Images/profile.png"
import college_logo from "@/Assets/Images/descomplica_logo.png"
import * as Icon from "@phosphor-icons/react"

export const Introduction = () => {

    return (
        <section className="w-full flex  flex-col items-center">
            <section className="w-full relative">
                <img src={cover_profile} className="w-full" alt="" />
                <img src={profile} className="absolute max-w-[38%] transition-all max-md:top-[40%] w-[170px] max-window: top-[50%] left-4 max-sm:left-4 max-sm:top-[20%] flex  max-sm:w-[30%] " alt="" />
            </section>
            <ContainerSection>
                <header className="pt-12 max-sm:pt-14 max-mobile:pt-8 max-lg:pt-16 flex max-md:flex-col max-md:items-start max-md:gap-4 w-full justify-between  ">
                    <div className="flex flex-col gap-2 max-md:order-1 max-mobile:w-full max-md:pt-2 max-sm:pt-0 ">
                        <h1 className="text-2xl font-medium leading-none">Wagner Guimarães</h1>
                        <h1 className="text-lg  font-light leading-none">Desenvolvedor Front-end | Full-stack</h1>
                        <h2 className="text-sm text-primary-500 leading-none  max-md:leading-5">ReactJS | Typescript | Javascript | Tailwind | SASS | Firebase | SQL | NodeJS</h2>

                        <div className="flex md:hidden items-center gap-2 cursor-pointer">
                            <img src={college_logo} alt="faculdade Descomplica Logo" title="Faculdade Descomplica" />
                            <p className="max-lg:text-sm text-center ">Universidade Uniamérica</p>
                        </div>

                        <h3 className="text-sm pt-4 max-sm:pt-0">Rio de Janeiro - Brasil - <span className="text-sm text-primary-500 cursor-pointer">Informações de contato</span> </h3>
                        <div className="flex gap-8 pt-4 max-sm:pt-0">
                            <div className="flex">
                                <a href="" className="flex items-center gap-2 text-primary-500 text-base">
                                    Github
                                    <Icon.ArrowSquareOut size={18} weight="bold" className="fill-primary-500" />
                                </a>
                            </div>
                            <div className="flex">
                                <a href="" className="flex gap-1 items-center text-primary-500 text-base">
                                    LinkedIn
                                    <Icon.ArrowSquareOut size={18} weight="bold" className="fill-primary-500" />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center  pt-4 gap-8 max-mobile:flex-col">
                            <button className="flex items-center justify-center gap-2 max-mobile:w-full bg-primary-500 py-4 px-4 rounded-md text-secondary-50">
                                <Icon.PaperPlaneTilt size={22} weight="bold" className="fill-secondary-50" />
                                Enviar Mensagem
                            </button>
                            <button className="flex gap-2 text-primary-500">
                                <Icon.DownloadSimple size={22} className="fill-primary-500" weight="bold" />
                                Baixar Currículo
                            </button>
                        </div>
                    </div>
                    <div className="flex items-start justify-center gap-2 pr-4 max-lg:pr-0 max-md:hidden ">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img src={college_logo} alt="faculdade Descomplica Logo" title="Faculdade Descomplica" />
                            <p className="max-lg:text-sm text-center ">Universidade Uniamérica</p>
                        </div>
                    </div>
                </header>
            </ContainerSection>
        </section>
    )
}
