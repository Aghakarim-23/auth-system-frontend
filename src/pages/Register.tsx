// pages/Register.tsx

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import RegisterForm from "../components/auth/RegisterForm";
import axios from "axios";

type RegisterData = {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>();

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    try {
      console.log("REGISTER DATA:", data);
      await axios.post("http://localhost:8001/api/auth/register", data);
    } catch (error) {
      console.log("Register failed:", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-slate-50 p-4">
      <RegisterForm
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

export default Register;
