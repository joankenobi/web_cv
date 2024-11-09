import {DataContactInterface}  from "../CVContent/DataContact";

const NayaDataContactAll: DataContactInterface = {
    mail: "nayarith070@gmail.com",
    phone: "+58 412 5963699",
    location: "Venezuela, Caracas",
    linkedin: {
      text: "linkedin.com/in/nayarith-jiménez",
      url: "http://www.linkedin.com/in/nayarith-jim%C3%A9nez",
    },
    github: {
      text: "github.com/Naya070",
      url: "https://github.com/Naya070",
    }
  }

const NayaDataContactNophoneNodirection: DataContactInterface = {
    mail: "nayarith070@gmail.com",
    phone: "+58 412 5963699",
    location: "Venezuela, Caracas",
    linkedin: {
      text: "linkedin.com/in/nayarith-jiménez",
      url: "http://www.linkedin.com/in/nayarith-jim%C3%A9nez",
    },
    github: {
      text: "github.com/Naya070",
      url: "https://github.com/Naya070",
    }
  }


export const DataContact = {
    NayaDataContactAll,
    NayaDataContactNophoneNodirection,
}