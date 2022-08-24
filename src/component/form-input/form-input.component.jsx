import { async } from "@firebase/util";
import React from "react";
import {useState} from 'react'
import {signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'


const defaultFormFields = {
 
  email: '',
  password: '',

};



const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setFormFields({ ...formFields, [name]: value });
    
  };
  console.log("fom data",formFields)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log("This is the form fields",formFields)
try{

  await signInAuthUserWithEmailAndPassword(email,password)
  alert("User login ")
}
catch(err){
  alert("Email or password wrong")
  console.log(err.message)
}



  }


  return (
    <div className="bg-blue-200">
      SignIn
      <form onSubmit={handleSubmit} className="flex flex-col p-2 m-3 border border-black ">
      <input
          className='bg-green-300 m-2 p-1 rounded-md'
         placeholder='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
         
        />
       
        <input
          placeholder="confirm Password"
          type="password"
          className="bg-green-300 m-2 p-1 rounded-md"
          required
          onChange={handleChange}
          name="password"
         
        />
       
        <button type="submit" className="text-xl bg-black rounded-sm p-3 my-4 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;

// import './form-input.styles.scss'

// const FormInput = ({ label, ...otherProps }) => {
//   return (
//     <div className='group'>
//       <input className='form-input' {...otherProps} />
//       {label && (
//         <label
//           className={`${
//             otherProps.value.length ? 'shrink' : ''
//           } form-input-label`}
//         >
//           {label}
//         </label>
//       )}
//     </div>
//   );
// };

// export default FormInput;
