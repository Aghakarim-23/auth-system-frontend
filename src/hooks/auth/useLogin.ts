import { useMutation } from "@tanstack/react-query";
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
  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      console.log("Success:", data);
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.log("Login error:", error);
    },
  });
};