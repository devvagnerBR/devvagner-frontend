import { ContainerSection } from "@/Components"
import cover_profile from "@/Assets/Images/cover_profile.png"
import profile from "@/Assets/Images/profile.png"


export const Introduction = () => {



    return (
        <section className="w-full flex mt-4 max-window:mt-0  flex-col items-center">
            <section className="w-full ">
                <img src={cover_profile} className="w-full relative " alt="" />
                <img src={profile} className="absolute max-w-[180px] top-[7rem] left-8  flex   " alt="" />
            </section>
            <ContainerSection>
                <header>
                    <h1></h1>
                </header>
            </ContainerSection>
        </section>
    )
}
