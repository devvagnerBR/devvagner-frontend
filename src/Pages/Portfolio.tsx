import { About, Certificates, Contact, ContainerApp, Experience, Graduation, Header, Introduction, Languages, ModalContactInfo, Projects, Skills } from "@/Components"
import { DataContextProvider } from "@/Context"

export const Portfolio = () => {


    return (
        <DataContextProvider>
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
