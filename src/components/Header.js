import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../Utils/UserSlice";
import { auth } from "../Utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headerUser = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
// Sign-out successful. we removed navigate from here bcz whenever user sign in and sign up everytime authChange will called
      })
      .catch((error) => {
      });
  };

  useEffect(() => {
    // If my user sign up for first time , after Sign Up and Sign Out this will called.

    // Hygine practice :  useEffect() called once when my component loads but my header component is loaded multiple times in a single session.
    //  It'll keep attaching eventlistener(onAuthStateChange) every time when useEffect called but when my component unmounts we want to unsubscribe to this action.

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // This function is like event listener whenever user auth status changes(Sign In , Sign Out) this will keep track of it.
      // If component unmounts I want to unsubscribe to this also.

      // auth will come from our firebase
      if (user) {
        // User is signed in, get my user here
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL:photoURL
          })
        );
        // Inside addUser add my uid , displayname and email
        // Updating our store
        navigate("/browse");
      } else {
        // User is Sign Out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    // <>
    <div className="absolute px-10 py-5 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src=""
        alt="logo"
      />
     {headerUser && (<div className="flex p-2">
       <img className="w-12 h-12 p-4" alt="usericon" src={headerUser?.photoURL} /> 
        <button className="font-bold text-white" onClick={handleSignOut}>
          (Sign Out)
        </button>
      </div>)} 
      {/* We use this {hederUser &&(div)} because we only want to show user photo once user Sign In */}
    </div>
    /* </> */
  );
};

export default Header;
