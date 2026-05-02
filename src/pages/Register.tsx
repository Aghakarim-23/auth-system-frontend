import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterForm from "../components/auth/RegisterForm";
import { useRegister } from "../hooks/auth/useRegister";
import { registerSchema } from "../schemas/register.schema";
import type { RegisterSchemaType } from "../schemas/register.schema";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(registerSchema) });

  const onSubmit = (data: RegisterSchemaType) => {
    mutate(data);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-slate-50 p-4">
      <RegisterForm
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

export default Register;
