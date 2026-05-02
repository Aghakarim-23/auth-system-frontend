import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginForm from "../components/auth/LoginForm";
import { useLogin } from "../hooks/auth/useLogin";
import { loginSchema } from "../schemas/login.schema";
import type { LoginSchemaType } from "../schemas/login.schema";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: LoginSchemaType) => {
    mutate(data);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-slate-50 p-4">
      <LoginForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        isSubmitting={isPending || isSubmitting}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </div>
  );
};

export default Login;