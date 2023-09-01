import { DataContextProvider } from "@/Context"
import { ContainerApp, Header, MobileMenu, ModalContactInfo } from "@/Components"
import { Introduction, About, Certificates, Contact, Experience, Graduation, Languages, Projects, Skills } from "@/Sections"

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
