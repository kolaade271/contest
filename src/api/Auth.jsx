import axios from 'axios';


export const Category = () => {
  return (axios.post("https://c84f-102-89-41-208.eu.ngrok.io/cont/category.php",
    {
    }, {
    headers: {
      'Content-Type': 'application/json',
    }
  }));

}



export const Gettype = (option) => {
  return (axios.post("https://c84f-102-89-41-208.eu.ngrok.io/cont/gettype.php",
    {
      option:option
    }, {
    headers: {
      'Content-Type': 'application/json',
    }
  }));

}


export const Submit = (fullname,phone,dept,dataId,optionId) => {
  return (axios.post("https://c84f-102-89-41-208.eu.ngrok.io/cont/submit.php",
    {
      fullName:fullname,
      phone:phone,
      dept:dept,
      dataId:dataId,
      optionId:optionId
    }, {
    headers: {
      'Content-Type': 'application/json',
    }
  }));

}

