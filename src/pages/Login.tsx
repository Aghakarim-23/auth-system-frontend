// pages/Login.tsx

import { useState } from "react";
import { useForm, } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import LoginForm from "../components/auth/LoginForm";
import axios from "axios";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    console.log(data);

     try {
    const res = await axios.post("http://localhost:8001/api/auth/login", data);

    console.log("Success:", res.data);

  } catch (error) {
    console.log("Login failed:", error);
  }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-slate-50 p-4">
      <LoginForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        isSubmitting={isSubmitting}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </div>
  );
};

export default Login;