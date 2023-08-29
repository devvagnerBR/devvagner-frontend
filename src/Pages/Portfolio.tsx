import { About, Certificates, ContainerApp, Experience, Graduation, Header, Introduction, Languages, Projects, Skills } from "@/Components"

export const Portfolio = () => {


    return (
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
        </ContainerApp>
    )
}
