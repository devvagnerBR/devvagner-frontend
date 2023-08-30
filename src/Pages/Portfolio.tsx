import { About, Certificates, Contact, ContainerApp, Experience, Graduation, Header, Introduction, Languages, MobileMenu, ModalContactInfo, Projects, Skills } from "@/Components"
import { DataContextProvider } from "@/Context"

export const Portfolio = () => {


    return (
        <DataContextProvider>
            <MobileMenu />
            <ContainerApp>
                <Header />
                <Introduction />
                <About />
                <Graduation />
                <Certificates />
                <Skills />
                <Languages />
                <Projects />
                <Experience />
                <Contact />
                <ModalContactInfo />
            </ContainerApp>
        </DataContextProvider>
    )
}
