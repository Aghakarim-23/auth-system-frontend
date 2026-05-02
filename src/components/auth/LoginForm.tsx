import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

import type { UseFormRegister, UseFormHandleSubmit, FieldErrors } from "react-hook-form";
import type { LoginSchemaType } from "../../schemas/login.schema";

type Props = {
  register: UseFormRegister<LoginSchemaType>;
  errors: FieldErrors<LoginSchemaType>;
  isSubmitting: boolean;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: UseFormHandleSubmit<LoginSchemaType>;
  onSubmit: (data: LoginSchemaType) => void;
};

const LoginForm = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
  showPassword,
  setShowPassword,
}: Props) => {
  return (
    <div className="max-w-sm w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100">

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-800">
          Welcome back
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Sign in to your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-600">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />

            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-600">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password")}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-300 text-sm w-full pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 text-white font-medium py-2.5 rounded-xl text-sm transition"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>

        </div>

        <p className="text-center mt-6 text-sm text-slate-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-500 font-medium">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;