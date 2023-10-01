import React, { useState } from "react";
import { app } from "../Firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/UserSlice";
import { googleAuth } from "../api/Internal";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const OAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  const [loading, setLoading] = useState(false);
  const HandleGoogleAuth = async () => {
    try {
      setLoading(true);
      let account = new GoogleAuthProvider();
      const auth = getAuth(app);
      const popup = await signInWithPopup(auth, account);

      const data = {
        username: popup.user.displayName,
        email: popup.user.email,
        photo: popup.user.photoURL,
        password: generateRandomString(10),
      };

      //   create a Google Route
      const response = await googleAuth(data);

      if (response.status === 200) {
        dispatch(setUser(response.data.user));
        navigate("/");
        toast.success("Success 👏");
      } else if (response.code === "ERR_BAD_REQUEST") {
        setError(response.response.data.message);
        toast.error("Error Occured");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className={`text-white bg-red-500 w-[96%] p-2 rounded ${
        loading && "bg-red-100"
      }`}
      type="button"
      onClick={HandleGoogleAuth}
    >
      {loading ? "Loading..." : "CONTINUE WITH GOOGLE"}
    </button>
  );
};

export default OAuth;
