import { useState,useContext } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
// import { UserContext } from '../../contexts/user.context';
import { Link } from 'react-router-dom';


import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // const {setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email,password);

      // setCurrentUser(user)
      await createUserDocumentFromAuth(user, { displayName });
      alert(displayName + " Profile add in Firebase")
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        alert('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className=' bg-slate-400  flex justify-end flex-col'>
      <h2 className='text-3xl p-3 text-center'>Sign up with your email and password</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col p-2 m-3 border border-black  ">
        <input
        className='bg-blue-200 m-2 p-1 rounded-md'
         placeholder='Enter Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <input
          className='bg-blue-200 m-2 p-1 rounded-md'
         placeholder='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <input
        placeholder='Enter Password'
          className='bg-blue-200 m-2 p-1 rounded-md'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <input
        placeholder='confirm Password'
          
          type='password'
          className='bg-blue-200 m-2 p-1 rounded-md'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
      <Link to={'/'} className=' p-2' >Donot have Account</Link>
    </div>
  );
};

export default SignUpForm