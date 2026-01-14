export interface EducationInterface {
    titulo: string;
    text: Education[];
}
export interface Education {
    title: string;
    institution: string;
    duration: string;
    description: string;
  }
  
const UniIngenieriaMecatronica={
    title: "Ingeniería Mecatrónica",
    institution: "Universidad Nacional Experimental Politécnica Antonio José de Sucre (UNEXPO)",
    duration: "Graduado: Nov 2022",
    description: "La ingeniería Mecatrónica es una profesión que unifica conocimientos de mecánica, informatica, materiales y electronica, aunque su rol es enfocado a la automatización o la robótica, los profesionales de esta disciplina son muy capaces de adaptarse a las necesidades de cualquier problema."
  }

export const AllEducations = {
    UniIngenieriaMecatronica,
}