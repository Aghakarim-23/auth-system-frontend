import axios from "axios";

type RegisterData = {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
};

export const registerRequest = async (data: RegisterData) => {
  const res = await axios.post(
    "http://localhost:8001/api/auth/register",
    data
  );

  return res.data;
};