import React from "react";
import Header from "./Header";
import { useState, useRef, useDispatch } from "react";
import { checkValidate } from "../Utils/validation";
import { addUser } from "../Utils/UserSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth} from "../Utils/firebase";
import { photoURLImg } from "../Utils/constant";


const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    console.log("isSignInForm", isSignInForm);
    setSignInForm(!isSignInForm);
  };

  const onButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Signed up Logic
// First time User Sign Up the photoUrl and DisplayName does not get updated inside our redux store even though we updated inside updateProfile function
// but still store not updated.
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("userCredential", userCredential);
          const user = userCredential.user;
          console.log("user", user);
        
        updateProfile(user, {
// onAuthStateChange when user sign up we dispatching addUser action this update our store with values but it's not updating displayName and photoURL
// bcz by that time photoURL and displaName is not there,it is being called after create user after updating profile we are not setting the store up
// so good solution is to dispatch an action inside updatProfile then what happens is user is created with emailId, pwd now we'll update store again
        displayName: name.current.value, photoURL: photoURLImg
         }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser 
// we want updated value of user so we fetch from auth not from user in updateProfile bcz it comes while sign up user
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorMessage",errorCode + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
          alt="backgroundLogo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault}
        className=" my-20 absolute md:w-3/12 mx-auto right-0 left-0 p-12 text-whiite rounded-lg bg-opacity-70 bg-black"
      >
        <h1 className="font-bold text-2xl py-4 text-white ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-slate-800 text-white"
          />
        )}
        <input
          ref={email} // "useRef()" will help us to get reference from the input boxes
          type="email"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-slate-800 text-white"
        />

        <input
          ref={password}
          type="password"
          placeholder="Passord"
          className="p-4 my-3 w-full bg-slate-800 text-white"
        />

        <p className="text-red-500 test-lg font-bold py-2">{errorMessage}</p>
        <button
          className="p-2 my-5 bg-red-700 w-full rounded-lg"
          onClick={onButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-white  cursor-pointer " onClick={toggleSignInForm}>
          New to Netlix? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
