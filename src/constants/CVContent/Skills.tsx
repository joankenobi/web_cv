export interface SkillInterface {
    titulo: string;
    text: Skill[];
}

interface Skill {
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

const SQLNoSQLdatabases: Skill = {
    name: "SQL & NoSQL databases",
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
    levelByO: "○○○○○",
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
    levelByO: "◉○○○○",
    level: "2 años"
}
const Scala: Skill = {
    name: "Scala",
    levelBySenior: "Junior",
    levelByO: "○○○○○",
    level: "6 meses"
}
const Azure: Skill = {
    name: "Azure",
    levelBySenior: "Junior",
    levelByO: "○○○○○",
    level: "6 meses"
}
const Ingles: Skill = {
    name: "Ingles",
    level: "comprensión lectora",
    levelByO: "◉◉○○○",
    levelYear: "3 años"
}

export const Allskills = {
    JavaScript,
    NestJs,
    TypeScript,
    React,
    Nodejs,
    Python,
    SQLNoSQLdatabases,
    RESTfulAPIs,
    Django,
    Docker,
    AWS,
    Git,
    AgileScrum,
    CICD,
    Pandas,
    Java,
    Scala,
    Azure,
    Ingles
}