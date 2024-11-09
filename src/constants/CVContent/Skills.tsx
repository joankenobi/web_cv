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

const GraphQL: Skill={
    name: "GraphQL",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    levelYear: "1.5 años",
}

const TypeORM: Skill={
    name: "TypeORM",
    levelBySenior: "Junior",
    levelByO: "◉◉○○○",
    levelYear: "1 año",
}

const ExpressJs: Skill={
    name: "Express Js",
    levelBySenior: "Junior",
    levelByO: "◉◉○○○",
    levelYear: "1 año",
}

const Sequelize: Skill={
    name: "Sequelize",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    levelYear: "1 año",
}

const Inversify: Skill={
    name: "Inversify",
    levelBySenior: "Junior",
    levelByO: "◉○○○○",
    levelYear: "6 meses",
}

const TailwindCSS: Skill={
    name: "Tailwind CSS",
    levelBySenior: "Junior",
    levelByO: "◉◉○○○",
    levelYear: "6 meses",
}

const Postman: Skill={
    name: "Postman",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    levelYear: "1 año",
}

const UnitTesting: Skill={
    name: "Unit Testing",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    levelYear: "1.5 años",
}

const E2ETesting: Skill={
    name: "E2E Testing",
    levelBySenior: "Semi senior",
    levelByO: "◉◉○○○",
    levelYear: "1.5 años",
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

export const NayaAllskills = {
    JavaScript,
    GraphQL,
    TypeORM,
    ExpressJs,
    Sequelize,
    Inversify,
    TailwindCSS,
    Postman,
    UnitTesting,
    E2ETesting,
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