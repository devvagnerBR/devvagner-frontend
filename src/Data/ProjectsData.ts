import kabum from "@/Assets/Images/Projects/kabum.png"
import docMentor from "@/Assets/Images/Projects/doc_mentor.png"
import devHouse from "@/Assets/Images/Projects/dev_house.png"
import { PROJECT_PROPS } from "@/Types"

export const projectsData: PROJECT_PROPS[] = [
    { id: 1, image: kabum, title: "KaBuM", subtitle: "E-commerce KaBuM Clone", tags: ["REACT", "FIREBASE", "TAILWIND"], demo_url: "https://cabum.devvagner.com/", github_url: "https://github.com/devvagnerBR/CaBuM" },
    { id: 2, image: docMentor, title: "Doc Mentor", subtitle: "Plataforma de gestão de alunos", tags: ["REACT", "FIREBASE", "TAILWIND"], demo_url: "https://doc-mentor.devvagner.com/", github_url: "https://github.com/devvagnerBR/doc-mentor" },
    { id: 3, image: devHouse, title: "Dev House", subtitle: "Plataforma de perguntas", tags: ["REACT", "FIREBASE", "TAILWIND"], demo_url: "https://devhouse.devvagner.com/", github_url: "https://github.com/devvagnerBR/dev-house" },
]