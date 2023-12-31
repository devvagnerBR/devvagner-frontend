import { SKILLS_PROPS } from "@/Types";

const skillsData: SKILLS_PROPS = {
    front_end: ["React", "Typescript", "Javascript", "Tailwind", "SASS", "HTML", "CSS", "CSS Modules", "Git"],
    back_end: ["NodeJS","JAVA", "SQL", "Firebase", "JWT", "ExpressJS" ,"Prisma" , "Express.js"],
    design: ["Figma", "Photoshop"],
}

export const frontEnd = skillsData.front_end;
export const backEnd = skillsData.back_end;
export const design = skillsData.design;