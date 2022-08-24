import { Fragment,useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/CrwnLogo.svg'
import { UserContext } from '../../contexts/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {

  const {currentUser}=useContext(UserContext)
  console.log("in nav ",currentUser)
  // console.log("This is the current user in navbar", currentUser)

  // const signOutHandler = async()=>{
  //   const res = signOutUser()
  //   setCurrentUser(null)
  // console.log("you are signout ", currentUser)

  // }


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
            {
              currentUser ? (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>):
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
            }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;