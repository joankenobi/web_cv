export interface EducationInterface {
    titulo: string;
    text: Education[];
}
interface Education {
    title: string;
    institution: string;
    duration: string;
  }
  
const UniIngenieriaMecatronica={
    title: "Ingeniería Mecatrónica",
    institution: "Universidad Nacional Experimental Politécnica Antonio José de Sucre (UNEXPO)",
    duration: "Graduado: Nov 2022",
  }

export const AllEducations = {
    UniIngenieriaMecatronica,
}