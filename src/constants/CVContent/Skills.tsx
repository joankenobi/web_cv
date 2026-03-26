export interface SkillInterface {
    titulo: string;
    text: Skill[];
}

export interface Skill {
    name: string;
    levelYear?: string;
    levelByO?: string;
    levelBySenior?: string;
    level?: string;
}

const JavaScript: Skill = {
    name: "JavaScript",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    level: "3 años",
}

const NestJs: Skill = {
    name: "NestJs",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    level: "3 años",
}

const TypeScript: Skill = {
    name: "TypeScript",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    level: "3 años"
}

const React: Skill = {
    name: "React",
    levelBySenior: "Junior",
    levelByO: "◉○○○○",
    level: "1 años"
}

const Nodejs: Skill = {
    name: "Nodejs",
    levelBySenior: "Junior",
    levelByO: "◉○○○○",
    level: "1 años"
}

const Python: Skill = {
    name: "Python",
    levelBySenior: "Semi senior",
    levelByO: "◉◉◉○○",
    level: "3 años"
}
const FastApi: Skill = {
    name: "FastApi",
    levelBySenior: "Semi senior",
    levelByO: "◉◉◉○○",
    level: "3 años"
}

const SpringBoot: Skill = {
    name: "SpringBoot",
    levelBySenior: "Semi senior",
    levelByO: "◉◉◉○○",
    level: "3 años"
}

const SQL: Skill = {
    name: "SQL",
    levelBySenior: "Junior",
    levelByO: "◉◉○○○",
    level: "2 años"
}

const NoSQL: Skill = {
    name: "NoSQL",
    levelBySenior: "Junior",
    levelByO: "◉◉○○○",
    level: "2 años"
}

const RESTfulAPIs: Skill = {
    name: "Restful APIs",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    level: "3 años"
}

const Linux: Skill = {
    name: "Linux",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    level: "3 años"
}

const Django: Skill = {
    name: "Django",
    levelBySenior: "Junior",
    levelByO: "◉○○○○",
    level: "2 años"
}

const Docker: Skill = {
    name: "Docker",
    levelBySenior: "Junior",
    levelByO: "◉○○○○",
    level: "1 años"
}

const AWS: Skill = {
    name: "AWS",
    levelBySenior: "Junior",
    levelByO: "◉○○○○",
    level: "1 años"
}

const Git: Skill = {
    name: "Git",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    level: "3 años"
}

const AgileScrum: Skill = {
    name: "Agile/Scrum",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    level: "3 años"
}

const CICD: Skill = {
    name: "CI/CD",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    level: "3 años"
}

const Pandas: Skill = {
    name: "Pandas",
    levelBySenior: "Semi senior",
    levelByO: "◉○○○○",
    level: "2 años"
}
const Java: Skill = {
    name: "Java",
    levelBySenior: "Semi senior",
    levelByO: "◉◉◉○○",
    level: "3 años"
}
const Selenium: Skill = {
    name: "Selenium",
    levelBySenior: "Junior",
    levelByO: "◉◉○○○",
    level: "6 meses"
}
const Microservicios: Skill = {
    name: "Microservicios",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    level: "3 años"
}
const Ingles: Skill = {
    name: "Ingles",
    level: "comprensión lectora",
    levelByO: "◉◉○○○",
    levelYear: "3 años"
}
const Español: Skill = {
    name: "Español",
    level: "nativo",
    levelByO: "◉◉◉◉◉",
    levelYear: "26 años"
}

export const Allskills = {
    JavaScript,
    NestJs,
    TypeScript,
    React,
    Nodejs,
    Python,
    SQL,
    NoSQL,
    RESTfulAPIs,
    Django,
    Docker,
    FastApi,
    SpringBoot,
    AWS,
    Git,
    Linux,
    AgileScrum,
    CICD,
    Pandas,
    Java,
    Selenium,
    Microservicios,
    Ingles,
    Español
}