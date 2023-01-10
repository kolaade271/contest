import '../css/signup.css';
import React, { useState, useEffect } from 'react';
import { Category,Gettype,Submit,Confirm} from '../../src/api/Auth';
import org from "../img/corporation.png";
import message from "../img/message.png";
import phone from "../img/phone.png";
import golden from "../img/golden.png";
import medal from "../img/medal.png";
import wooden from "../img/wooden.png";
import bsug from "../img/bsug.jpeg";
import bsh from "../img/bsh.png";
import cert from "../img/cert.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GenAlert } from '../../src/alert/alert';
import { Bars } from  'react-loader-spinner'
import Nav from './nav';
import Countdown from 'react-countdown';


function SignUp() {
  const [getCategory, setCategory] = useState(false);
  const [getOption_a, setOption_a] = useState(false);
  const [getOption_b, setOption_b] = useState(false);
  const [getOption_c, setOption_c] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getDataId, setDataId] = useState(false);
  const [isType, getisType] = useState(false);
  const [allData, getAlldata] = useState(false);
  const [ttype, gettType] = useState(false);
  const [getoptionId, setoptionId] = useState(false);
  const [getAcct, setAcct] = useState(false);
  const name = useFormInput('');
  const phoneno = useFormInput('');
  const deptno = useFormInput('');


useEffect(() => {
  Category().then(response => {
    console.log(response.data)
    setCategory(response.data.data)

  }) 
}, [])
const HandleProcess = (process) => {
  const action = process.target.value;
  const optionId = process.target.getAttribute('optionId');
  setoptionId(optionId)
  console.log(action)
  gettType(action)

}


const Confirmdata = (process) => {
 
  const id = process.target.getAttribute('confirm');
  setLoading(true)
  Confirm(id).then(response => {
    const stat = response.data.data;
    setLoading(false)
    if(stat === true){
      
      GenAlert(true, "Transaction Successull close the page");

    }
    else{
      GenAlert(false, "Transaction pending");
    }
    
  })

}

const Close = () => {
  window.location.reload();

}

const SubmitData = (process) => {
  let fullname = name.value;
  let phone = phoneno.value;
  let dept = deptno.value;
  const action = process.target.value;
  const dataId = process.target.getAttribute('dataId');
  const optionId = process.target.getAttribute('optionId');
  setLoading(true)
  console.log(optionId)
  if(fullname !=""){
    if(phone){
      if(dept !=""){
        Submit(fullname,phone,dept,dataId,optionId).then(response => {
          setLoading(false)
         const data = response.data.data;
          console.log(response.data.data)
          setAcct(data)
          //setCategory(response.data.data)
          if(data.status == true){
          
          }
        })   
      }
      else{
        GenAlert(false, "Department Required");
        setLoading(false)
      }
    }
    else{
      GenAlert(false, "Phone  Required");
      setLoading(false)
    }

  }
  else{
    GenAlert(false, "Fullname Required");
    setLoading(false)
  }

}

const changeCategory = (event) => {
  setLoading(true)
  const option = event.target.value;
  Gettype(option).then(response => {
    const data = response.data.data;
    console.log(response.data)
    setOption_a(data.taken_a)
    setOption_b(data.taken_b)
    setOption_c(data.taken_c)
    getAlldata(data)
    setDataId(data.id)
    getisType(true)
    setLoading(false)
    window.scrollTo(90, 5100);


   //setCategory(response.data.data)
  })   
};


  return (
    <div className="body">
     
      <ToastContainer />
      
          <div className="head">
        <div className="container">
          Shut down 
  </div>
</div>
{/* end modal */}




<footer className="foot" align="center">
      <span> All right reseverd @ Paysnug Africa</span>
     
    </footer>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default SignUp;
