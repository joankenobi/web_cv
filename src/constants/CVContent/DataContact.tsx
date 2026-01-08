export interface DataContactInterface {
  mail: string;
  phone: string;
  location: string;
  linkedin: {
    text: string;
    url: string;
  };
  github: {
    text: string;
    url: string;
  }
}

const venezuelaphone = {
  phone: "+58 412 2129362",
  location: "Venezuela, Caracas",
}

const argentinephone = {
  phone: "+54 1170848979",
  location: "Argentina, Ciudad Autonoma de Buenos Aires",
}

const dataContactAll = {
  mail: "joan1233blanco@gmail.com",
  phone: argentinephone.phone,
  location: argentinephone.location,
  linkedin: {
    text: "linkedin.com/in/joan-blanco",
    url: "https://www.linkedin.com/in/joan-blanco/",
  },
  github: {
    text: "github.com/joankenobi",
    url: "https://www.github.com/joankenobi",
  }
}

const dataContactNophoneNodirection = {
  mail: "joan1233blanco@gmail.com",
  phone: "",
  location: "",
  linkedin: {
    text: "linkedin.com/in/joan-blanco",
    url: "https://www.linkedin.com/in/joan-blanco/",
  },
  github: {
    text: "github.com/joankenobi",
    url: "https://www.github.com/joankenobi",
  }
}

export const DataContact = {
  dataContactAll,
  dataContactNophoneNodirection,
}