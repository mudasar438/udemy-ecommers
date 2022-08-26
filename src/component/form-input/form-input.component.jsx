import { async } from "@firebase/util";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import google from '../../assets/google.png'
// import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const Navigate = useNavigate();

  // const {setCurrentUser} = useContext(UserContext)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  // console.log("fom data",formFields)

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
   Navigate('/home')
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      localStorage.setItem("username", JSON.stringify(user));
      Navigate("/home");
      // setCurrentUser(user)

      alert("User login ");
      // console.log("sigin", user)
    } catch (err) {
      alert("Email or password wrong");
      console.log(err.message);
    }
  };

  return (
    <>
      <div class="h-screen bg-slate-200 flex justify-center items-center w-full">
        <form  onSubmit={handleSubmit}>
          <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            
            <div class="space-y-4">
              <h1 class="text-center text-2xl font-semibold text-gray-600">
              Sign In
              </h1>
             
              <div>
                <label
                  for="email"
                  class="block mb-1 text-gray-600 font-semibold"
                >
                  Email
                </label>
                <input
                 
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  placeholder="Email"
                  type="email"
                  required
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-1 text-gray-600 font-semibold"
                >
                  Password
                </label>
                <input
                  placeholder="confirm Password"
                  type="password"
                  // className="bg-green-300 m-2 p-1 rounded-md"
                  required
                  onChange={handleChange}
                  name="password"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-[99%]"
                />
              </div>
            </div>
            <button type="submit" class="mt-4 w-full bg-yellow-500 hover:bg-yellow-400 font-semibold py-2 rounded-md  tracking-wide">
              Sign In
            </button>
            <button
         className="mt-12 w-full bg-white font-semibold py-2 rounded-md  border border-yellow-300 tracking-wide hover:bg-indigo-100 hover:borde"
          onClick={signInWithGoogle}
        >
          <span className="flex items-center justify-around "><div className="w-[30px]"><img src={google} alt="" srcset="" /></div> <p>Sign in With Google</p></span>
        </button>
            <Link to="signup">
        <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                      Don’t have an account yet ? <span className="text-blue-700 font-semibold hover:text-lg">Sign Up</span>  
                  </p>
                  </Link>
          </div>
        </form>
      </div>
      {/* <div className="bg-blue-200">
        SignIn
        <form
         
          className="flex flex-col p-2 m-3 border border-black "
        >
          <input
            className="bg-green-300 m-2 p-1 rounded-md"
            placeholder="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
          />

          <input
            placeholder="confirm Password"
            type="password"
            className="bg-green-300 m-2 p-1 rounded-md"
            required
            onChange={handleChange}
            name="password"
          />

          <button
            type="submit"
            className="text-xl bg-black rounded-sm p-3 my-4 text-white"
          >
            Submit
          </button>
        </form>
        <button
          className="bg-green-400 p-1 my-1 rounded-sm "
          onClick={signInWithGoogle}
        >
          Sing in With Google
        </button>
        <div className="">
          <Link to="signup">Do not Have Account</Link>
        </div>
      </div> */}
    </>
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
