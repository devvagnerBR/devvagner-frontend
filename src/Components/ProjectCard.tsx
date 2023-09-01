import { PROJECT_PROPS } from "@/Types"



export const ProjectCard = ( { project }: { project: PROJECT_PROPS } ) => {

    return (
        <section className="p-4  border rounded-sm  flex items-center justify-center w-max ">
            <div className="w-full h-full flex flex-col items-center justify-center ">
                <img src={project.image} className=" w-full max-w-[280px] " alt={project.subtitle} />
                <div className="w-full flex  flex-col pt-2">
                    <div className="">
                        <h1>{project.title}</h1>
                        <p className="text-base font-light ">{project.subtitle}</p>
                    </div>
                    <main
                        className="flex flex-wrap gap-2  mt-2 max-sm:w-full items-center justify-between  ">
                        {project.tags.map( ( tag ) => (
                            <p className=' font-light text-xs  w-max  p-1 rounded-sm  border uppercase tracking-wider text-secondary-400' key={tag}>{tag}</p>
                        ) )}

                    </main>
                    <nav className="w-full flex gap-2 items-center rounded-sm  justify-around mt-2 h-12">
                        <a target="_blank" href={project.demo_url} className="w-full h-full rounded-sm border flex items-center justify-center bg-primary-500 text-secondary-50 hover:shadow-sm hover:bg-blue-600 ">Demo</a>
                        <a target="_blank" href={project.github_url} className="w-full h-full rounded-sm border flex items-center justify-center border-primary-500 hover:border-blue-600 text-primary-500 hover:shadow-md ">Github</a>
                    </nav>
                </div>
            </div>
        </section>
    )
}
