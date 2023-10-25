import kabum from "@/Assets/Images/Projects/kabum.png"
import docMentor from "@/Assets/Images/Projects/doc_mentor.png"
import devHouse from "@/Assets/Images/Projects/dev_house.png"
import { PROJECT_PROPS } from "@/Types"

export const projectsData: PROJECT_PROPS[] = [
    {
        id: 1,
        image: kabum,
        title: "KaBuM",
        subtitle: "E-commerce KaBuM Clone",
        tags: ["REACT", "FIREBASE", "TAILWIND"],
        demo_url: "https://cabum.wagnerluiz.tech/",
        github_url: "https://github.com/devvagnerBR/cabum-fullstack"
    },
    {
        id: 2,
        image: docMentor,
        title: "Doc Mentor",
        subtitle: "Plataforma de gestão de alunos",
        tags: ["REACT", "FIREBASE", "TAILWIND"],
        demo_url: "https://docmentor.wagnerluiz.tech/",
        github_url: "https://github.com/devvagnerBR/doc-mentor-v1"
    },
    {
        id: 3,
        image: devHouse,
        title: "Dev House",
        subtitle: "Plataforma de perguntas",
        tags: ["REACT", "FIREBASE", "TAILWIND"],
        demo_url: "https://devhouse.wagnerluiz.tech/",
        github_url: "https://github.com/devvagnerBR/devhouse-fullstack"
    },
]