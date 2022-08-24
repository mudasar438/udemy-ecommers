import SignUpForm from '../../component/sign-up-form/sign-up-form.component';
import SignIn from '../../component/form-input/form-input.component';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='w-[100%] mx-auto border border-black flex justify-between'>
      <div className="w-[40%] border border-black">

      <SignIn />
      </div>
      <div className="w-[50%]">

      <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;