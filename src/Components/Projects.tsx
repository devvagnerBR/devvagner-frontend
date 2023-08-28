import { ContainerSection, ProjectCard } from "@/Components"
import { projectsData } from "@/Data"
import { PROJECT_PROPS } from "@/Types"



import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css'
import getPageWidth from "@/Hooks/useGetPageSize";




export const Projects = () => {

    const { size } = getPageWidth()

    return (
        <ContainerSection>
            <h1 className='text-xl'>Projetos</h1>
            <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                grabCursor
                width={size < 500 ? 300 : 320}
                className="mt-8 max-md:mt-4 flex  items-center justify-center   ">
                {projectsData.map( ( project: PROJECT_PROPS ) => (
                    <SwiperSlide key={project.id}>
                        <ProjectCard project={project} />
                    </SwiperSlide>
                ) )}
            </Swiper>

        </ContainerSection >
    )
}
