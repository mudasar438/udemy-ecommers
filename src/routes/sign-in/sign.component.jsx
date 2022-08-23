import {
    signInWithGooglePopup,
    createUserProfileDocument,
    createUserDocumentFromAuth
  } from '../../utils/firebase/firebase.utils';
  
  const SignIn = () => {
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };
  
    return (
      <div>
      <h1>Sign In Page</h1>
      <button type='button' className='bg-green-500 p-1 my-2 rounded-md' onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
    );
  };
  
  export default SignIn;