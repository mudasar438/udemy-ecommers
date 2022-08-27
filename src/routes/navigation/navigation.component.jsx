import { Fragment, useContext, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import { ReactComponent as CrwnLogo } from "../../assets/CrwnLogo.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import SwipeableTemporaryDrawer from "../../component/drawer/drawer";
import { AiOutlineMenu } from "react-icons/ai";

import "./navigation.styles.scss";

const Navigation = () => {
  const [show, setShow] = useState(true);
  const Navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const MenuButton = () => {
    if (show === "false") {
      setShow("true");
    }
    if (show === "true") {
      setShow("false");
    }
  };

  const logOut = () => {
    signOutUser();
    localStorage.removeItem("username");
    Navigate("/");
  };

  return (
    <Fragment>
      <div className="flex relative justify-between items-center border  border-yellow-400 bg-slate-50 w-full p-2  md:h-[70px] lg:h-[80px]">
        <Link className="logo-container" to="/home">
          <CrwnLogo className="logo" />
        </Link>
        <div className="block md:hidden">
          <button onClick={() => setShow((s) => !s)}>
            <AiOutlineMenu className=" " />
          </button>
        </div>

        <div
          className={
            !show
              ? "md:hidden block absolute right-0 top-14  w-full mb-12 mx-auto bg-slate-100 text-center"
              : " hidden absolute right-0 top-14   w-full bg-red-400 text-center"
          }
        >
          <ul className="">
            <Link to='/home'>
            <li className="border border-yellow-400 m-1">HOME</li>
            </Link>
          </ul>
          <ul>
            <Link to='/shop'>
            <li className="border border-yellow-400 m-1">SHOP</li>
            </Link>
          </ul>
                <ul>
                  <li className="border border-yellow-400 m-1 flex justify-center items-center"> <CartIcon /></li>
                </ul>
          <ul>
            <li>

          {
              currentUser ? (
                
                <span
                  className="border border-yellow-400 m-1 w-full px-3 mb-2 hover:text-blue-400"
                  onClick={logOut}
                >
                  SIGN OUT
                </span>
              ) : null
              // <Link className='nav-link' to='/signup'>
              //   SIGN IN
              // </Link>
            }
            </li>
          </ul>
        </div>
        <div className=" w-[40%] md:flex justify-end items-center hidden ">
          <div className="flex items-center justify-end md:w-full lg:w-[70%]  ">
            <Link
              className=" text-gray-600 font-semibold hover:text-blue-400 mr-3"
              to="/home"
            >
              HOME
            </Link>
            <Link
              className=" text-gray-600 font-semibold  hover:text-blue-400"
              to="/shop"
            >
              SHOP
            </Link>
            {
              currentUser ? (
                <span
                  className="text-gray-600 font-semibold nav-link ml-2 hover:text-blue-400"
                  onClick={logOut}
                >
                  SIGN OUT
                </span>
              ) : null
              // <Link className='nav-link' to='/signup'>
              //   SIGN IN
              // </Link>
            }
            <CartIcon />
          </div>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
