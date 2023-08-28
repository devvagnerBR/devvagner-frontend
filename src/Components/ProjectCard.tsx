import { PROJECT_PROPS } from "@/Types"



export const ProjectCard = ( { project }: { project: PROJECT_PROPS } ) => {


    return (
        <section className="p-4  border rounded-sm  flex items-center justify-center w-max ">
            <div className="w-full h-full flex flex-col items-center justify-center ">
                <img src={project.image} className=" w-full max-w-[280px] " alt={project.subtitle} />
                <div className="w-full flex  flex-col pt-2">
                    <div className="">
                        <h1>{project.title}</h1>
                        <p className="text-base font-light pt-2">{project.subtitle}</p>
                    </div>
                    <main
                        className="flex flex-wrap gap-2 mt-4 max-sm:w-full items-center justify-between  ">
                        {project.tags.map( ( tag ) => (
                            <p className=' font-light text-xs  w-max  p-1 rounded-sm  border uppercase tracking-wider text-secondary-400' key={tag}>{tag}</p>
                        ) )}
                    </main>
                </div>
            </div>
        </section>
    )
}
