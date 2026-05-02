import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

type LoginData = {
  email: string;
  password: string;
};

const loginRequest = async (data: LoginData) => {
  const res = await axios.post(
    "http://localhost:8001/api/auth/login",
    data
  );
  return res.data;
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      toast.success("Uğurla daxil oldunuz!");
      navigate("/");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Email və ya şifrə yanlışdır";
        toast.error(message);
      } else {
        toast.error("Xəta baş verdi. Yenidən cəhd edin");
      }
    },
  });
};
