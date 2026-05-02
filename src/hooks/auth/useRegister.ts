import { useMutation } from "@tanstack/react-query";
import { registerRequest } from "../../api/auth";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerRequest,

    onSuccess: (data) => {
      console.log("Register success", data);

      // optional: redirect
      // navigate("/login");
    },

    onError: (error) => {
      console.log("Register error", error);
    },
  });
};