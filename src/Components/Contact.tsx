import { useContact } from '@/Hooks'
import { ContainerSection, Footer } from '@/Components'
import * as Icon from "@phosphor-icons/react"



export const Contact = () => {

    const { formValues, handleChange, handleSubmit, loading } = useContact()

    return (
        <ContainerSection>
            <h1 className='text-xl text-primary-500'>Entrar em contato</h1>
            <main className='mt-8 max-md:mt-4'>
                <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
                    <div className='flex w-full max-md:flex-col  gap-4'>
                        <label
                            htmlFor="name"
                            className='w-full text-base text-primary-500'>
                            Nome
                            <input
                                className='border rounded-sm text-primary-500 focus:border-primary-500 transition-all pl-2 h-12 border-primary-500/40 w-full'
                                type="text"
                                id="name"
                                name='name'
                                onChange={handleChange}
                                value={formValues.name}
                            />
                        </label>
                        <label
                            htmlFor="email"
                            className='w-full text-base text-primary-500'>
                            Email
                            <input
                                className='border rounded-sm text-primary-500 pl-2 h-12 border-primary-500/40 focus:border-primary-500 transition-all w-full'
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={formValues.email}
                            />
                        </label>
                    </div>
                    <label
                        htmlFor="message"
                        className='w-full flex flex-col text-base text-primary-500'>
                        Mensagem
                        <textarea
                            id="message"
                            name="message"
                            onChange={handleChange}
                            value={formValues.message}
                            className='border  rounded-sm text-primary-500  p-2 h-36 max-h-[9rem] resize-none focus:border-primary-500 transition-all border-primary-500/40'
                        />
                    </label>
                    <div className='flex gap-4 max-sm:flex-col'>
                        {!loading &&
                            <button type='submit' className='w-full sh rounded-sm bg-primary-500 h-12 text-secondary-50 flex items-center justify-center gap-4'>Enviar Mensagem
                                <Icon.ArrowUpRight size={24} className='fill-secondary-50' />
                            </button>}
                        {loading &&
                            <button disabled={loading} type='submit' className='disabled:bg-primary-500/70 w-full sh rounded-sm bg-primary-500 h-12 text-secondary-50 flex items-center justify-center gap-4'>Enviando
                                <Icon.CircleNotch size={24} className='fill-secondary-50 animate-spin' />
                            </button>}
                        <div className='flex gap-4 max-md:gap-2 w-full items-center justify-center'>
                            <a href="https://github.com/devvagnerBR" target='_blank'>
                                <Icon.GithubLogo className='fill-primary-500 cursor-pointer' size={30} weight='regular' />
                            </a>
                            <a href="https://www.linkedin.com/in/devvagner/" target='_blank'>
                                <Icon.LinkedinLogo className='fill-primary-500 cursor-pointer' size={30} weight='regular' />
                            </a>
                            <a href='mailto:devvagnerbr@gmail.com' target='_blank' className='text-primary-500 cursor-pointer max-md:text-base'>devvagnerbr@gmail.com</a>
                        </div>
                    </div>
                </form>
                <Footer />
            </main>
        </ContainerSection >
    )
}
