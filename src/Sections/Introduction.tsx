import { useData } from "@/Context"
import { Link } from "react-scroll"
import * as Icon from "@phosphor-icons/react"
import { ContainerSection } from "@/Components"
import profile from "@/Assets/Images/avatar.png"
import cover_profile from "@/Assets/Images/cover_profile.png"
import college_logo from "@/Assets/Images/descomplica_logo.png"
import CV from "@/Assets/Files/Wagner Luiz - currículo - desenvolvedor de software.pdf"


export const Introduction = () => {

    const { setModalContactInfos } = useData();

    return (
        <section id="start" className="w-full flex window:mt-16 max-window:mt-10 max-sm:mt-0  flex-col items-center">
            <section className="w-full relative">
                <img src={cover_profile} className="w-full" alt="" />
                <img src={profile} className="absolute rounded-full border-4 border-secondary-50 max-w-[38%] transition-all max-md:top-[40%] w-[170px] max-window: top-[50%] left-4 max-sm:left-4 max-sm:top-[20%] flex  max-sm:w-[30%] " alt="" />
            </section>
            <ContainerSection>
                <header className="pt-12 max-sm:pt-14 max-mobile:pt-8 max-lg:pt-16 flex max-md:flex-col max-md:items-start max-md:gap-4 w-full justify-between  ">
                    <div className="flex flex-col gap-2 max-md:order-1 max-mobile:w-full max-md:pt-2 max-sm:pt-0 ">
                        <h1 className="text-2xl font-medium leading-none">Wagner Guimarães</h1>
                        <h1 className="text-lg  font-light leading-none">Desenvolvedor  Full-stack</h1>
                        <h2 className="text-sm text-primary-500 leading-none  max-md:leading-5">React Js | Java | Typescript | Javascript | Tailwind | SASS | Firebase | SQL | Node Js</h2>

                        <div className="flex md:hidden items-center gap-2 cursor-pointer">
                            <img src={college_logo} alt="faculdade Descomplica Logo" title="Faculdade Descomplica" />
                            <a href="https://descomplica.com.br/faculdade" target="_blank" className="max-lg:text-sm text-center ">Universidade Uniamérica</a>
                        </div>

                        <h3 onClick={() => setModalContactInfos( true )} className="text-sm pt-4 max-sm:pt-0">Rio de Janeiro - Brasil - <span className="text-sm text-primary-500 cursor-pointer hover:underline">Informações de contato</span> </h3>
                        <div className="flex gap-8 pt-4 max-sm:pt-0">
                            <div className="flex hover:underline">
                                <a href="https://github.com/devvagnerBR" target="_blank" className="flex items-center gap-2 text-primary-500 text-base">
                                    Github
                                    <Icon.ArrowSquareOut size={18} weight="bold" className="fill-primary-500" />
                                </a>
                            </div>
                            <div className="flex hover:underline">
                                <a href="https://www.linkedin.com/in/devvagner" target="_blank" className="flex gap-1 items-center text-primary-500 text-base">
                                    LinkedIn
                                    <Icon.ArrowSquareOut size={18} weight="bold" className="fill-primary-500" />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center  pt-4 gap-8 max-mobile:flex-col">
                            <Link to="contact" smooth offset={20} duration={600}>
                                <button className="flex items-center hover:bg-blue-600 transition-all justify-center gap-2 max-mobile:w-full bg-primary-500 py-4 px-4 rounded-md text-secondary-50">
                                    <Icon.PaperPlaneTilt size={22} weight="bold" className="fill-secondary-50" />
                                    Enviar Mensagem
                                </button>
                            </Link>
                            <a href={CV} download className="flex gap-2 text-primary-500 hover:text-blue-600" >
                                <Icon.DownloadSimple size={22} className="fill-primary-500 hover:fill-blue-600" weight="bold" />
                                Baixar Currículo
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start justify-center gap-2 pr-4 max-lg:pr-0 max-md:hidden ">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img src={college_logo} alt="faculdade Descomplica Logo" title="Faculdade Descomplica" />
                            <a href="https://descomplica.com.br/faculdade" target="_blank" className="max-lg:text-sm text-center hover:text-neutral-900">Universidade Uniamérica</a>
                        </div>
                    </div>
                </header>
            </ContainerSection>
        </section>
    )
}
