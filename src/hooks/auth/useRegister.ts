import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { registerRequest } from "../../api/auth";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerRequest,
    onSuccess: () => {
      toast.success("Hesab uğurla yaradıldı!");
      navigate("/login");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Qeydiyyat mümkün olmadı";
        toast.error(message);
      } else {
        toast.error("Xəta baş verdi. Yenidən cəhd edin");
      }
    },
  });
};
