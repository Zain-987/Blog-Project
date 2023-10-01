import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../api/Internal";
import toast from "react-hot-toast";
import InputComp from "../components/InputComp";
const yupSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[a-zA-Z0-9]+$/, "Username must be Alpha Numeric !")
    .required("Username is Required ! "),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9]+$/, "Password Must be Alpha Numeric")
    .required("Password is Required ! "),
});

const Login = () => {
  const navigate = useNavigate();

  const [Error, setError] = useState("");
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    resolver: yupResolver(yupSchema),
  });
  const [loading, setLoading] = useState(false);

  const SubmitHandler = async (data) => {
    setLoading(true);
    let response = await loginUser(data);

    if (response.status === 200) {
      navigate("/");
      toast.success("Success 👏");
    } else if (response.code === "ERR_BAD_REQUEST") {
      setError(response.response.data.message);
      toast.error("Error Occured !");
    }
    setLoading(false);
  };
  return (
    <section className="flex justify-center items-center min-h-[80vh]">
      <form
        className="max-w-[400px] w-[96%] text-center  space-y-4"
        onSubmit={handleSubmit(SubmitHandler)}
      >
        <h2 className="text-2xl font-[600] ">Register To Your Account</h2>
        <InputComp
          type={"text"}
          register={register}
          errors={errors}
          placeholder={"Username"}
        />
        <InputComp
          type={"text"}
          register={register}
          errors={errors}
          placeholder={"Password"}
        />
        <button
          disabled={Object.keys(errors).length > 0 || loading ? true : false}
          className="text-white  p-2 rounded bg-slate-700 w-[96%] text-center disabled:opacity-80 hover:opacity-95"
          type="submit"
        >
          {loading ? <span>Loading...</span> : "Login"}
        </button>
        <p>
          New Here ?{" "}
          <Link to={"/signup"} className="text-blue-500">
            Register
          </Link>
        </p>
        {Errors && <p className="text-red-500">{Error}</p>}
      </form>
    </section>
  );
};

export default Login;
