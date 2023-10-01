import React from "react";
import { app } from "../Firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const OAuth = () => {
  const HandleGoogleAuth = async () => {
    try {
      let account = new GoogleAuthProvider();
      const auth = getAuth(app);
      const popup = await signInWithPopup(auth, account);
      console.log(popup);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="text-white bg-red-500 w-[96%] p-2 rounded"
      type="button"
      onClick={HandleGoogleAuth}
    >
      CONTINUE WITH GOOGLE
    </button>
  );
};

export default OAuth;
