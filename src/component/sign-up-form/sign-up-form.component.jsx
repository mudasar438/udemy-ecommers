import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
// import { UserContext } from '../../contexts/user.context';
import { Link, useNavigate } from "react-router-dom";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const Navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // const {setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      localStorage.setItem("username", JSON.stringify(user));
      Navigate("/home");

      // setCurrentUser(user)
      await createUserDocumentFromAuth(user, { displayName });
      alert(displayName + " Profile add in Firebase");
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        alert("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <div class="mt-12 md:h-screen md:mt-0  md:bg-slate-200 flex   justify-center items-center w-full">
        <form onSubmit={handleSubmit}>
          <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div class="space-y-4">
              <h1 class="text-center text-2xl font-semibold text-gray-600">
                Create New User
              </h1>
              <div>
                <label
                  for="email"
                  class="block mb-1 text-gray-600 font-semibold"
                >
                  Username
                </label>
                <input
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  type="text"
                  required
                  onChange={handleChange}
                  name="displayName"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-1 text-gray-600 font-semibold"
                >
                  Email
                </label>
                <input
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
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
                  type="password"
                  // className="bg-green-300 m-2 p-1 rounded-md"
                  required
                  onChange={handleChange}
                  name="password"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-[99%]"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-1 text-gray-600 font-semibold"
                >
                  confirm Password
                </label>
                <input
                  type="password"
                  
                  required
                  onChange={handleChange}
                  name="confirmPassword"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-[99%]"
                />
              </div>
            </div>
            <button
              type="submit"
              class="mt-4 w-full bg-yellow-500 hover:bg-yellow-400 font-semibold py-2 rounded-md  tracking-wide"
            >
              Sign Up
            </button>
           
           
          </div>
        </form>
      </div>

      {/* <form
        onSubmit={handleSubmit}
        className="flex flex-col p-2 m-3 border border-black  "
      >
        <input
          className="bg-blue-200 m-2 p-1 rounded-md"
          placeholder="Enter Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <input
          className="bg-blue-200 m-2 p-1 rounded-md"
          placeholder="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <input
          placeholder="Enter Password"
          className="bg-blue-200 m-2 p-1 rounded-md"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <input
          placeholder="confirm Password"
          type="password"
          className="bg-blue-200 m-2 p-1 rounded-md"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form> */}
    </>
  );
};

export default SignUpForm;
