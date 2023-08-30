import * as Icon from "@phosphor-icons/react"
import { useData } from "@/Context"
import { useScroll } from "@/Hooks"

export const ModalContactInfo = () => {

    const {
        setModalContactInfos,
        modalContactInfos,
        handleOutSideClick
    } = useData()

    useScroll( modalContactInfos )


    if ( !modalContactInfos ) return null
    return (
        <div onClick={handleOutSideClick} className='transition-all absolute flex items-center justify-center bg-zinc-900/60 h-screen w-[calc(100vw-3px)] z-50'>
            <main className="w-[600px] max-sm:h-full transition-all  max-w-full shadow-sm h-max rounded-md p-4 flex flex-col bg-secondary-50">
                <header className="flex w-full h-max items-center justify-between pb-4 border-b">
                    <h1>Wagner Guimarães</h1>
                    <Icon.X onClick={() => setModalContactInfos( false )} className="fill-secondary-600 cursor-pointer" size={30} />
                </header>
                <main className="mt-4 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <Icon.LinkedinLogo size={26} className="fill-primary-500 " />
                        <a className="text-primary-500 text-base hover:underline cursor-pointer">LinkedIn</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon.GithubLogo size={26} className="fill-primary-500 " />
                        <a className="text-primary-500 text-base hover:underline cursor-pointer">Github</a>
                    </div>
                    <div className="flex items-start gap-2">
                        <Icon.Envelope size={26} className="fill-secondary-500" />
                        <div className="flex flex-col items-start justify-end">
                            <h1 className="text-base ">E-mail </h1>
                            <a href="mailto:devvagnerbr@gmail.com" className="text-base  font-light text-primary-500 hover:underline cursor-pointer">wagnerluizsg@outlook.com.br</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <Icon.Phone size={26} className="fill-secondary-500" />
                        <div className="flex flex-col items-start justify-end">
                            <h1 className="text-base">Telefone</h1>
                            <a target="_blank" href="https://web.whatsapp.com/send?phone=5522999887464" className="text-base  font-light text-primary-500 hover:underline cursor-pointer">(22) 99988-7464</a>
                        </div>
                    </div>
                </main>
            </main>
        </div>
    )
}
