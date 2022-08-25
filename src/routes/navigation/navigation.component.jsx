import { Fragment,useContext } from 'react';
import { Outlet, Link ,useNavigate} from 'react-router-dom';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import {ReactComponent as CrwnLogo} from '../../assets/CrwnLogo.svg'
import { UserContext } from '../../contexts/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils'
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';


import './navigation.styles.scss'

const Navigation = () => {
  const Navigate =  useNavigate()


  const {currentUser}=useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

  const logOut = ()=>{
    signOutUser()
    Navigate('/')

  }
  // console.log("in nav ",currentUser)
  // console.log("This is the current user in navbar", currentUser)

  // const signOutHandler = async()=>{
  //   const res = signOutUser()
  //   setCurrentUser(null)
  // console.log("you are signout ", currentUser)

  // }


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/home'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
            {
              currentUser ? (<span className='nav-link' onClick={logOut}>SIGN OUT</span>):null
          // <Link className='nav-link' to='/signup'>
          //   SIGN IN
          // </Link>
            }

            <CartIcon />

        </div>
      {isCartOpen &&  <CartDropdown/>}


      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;