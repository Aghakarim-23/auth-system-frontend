import axios from "axios";

export const loginRequest = async (data: {
  email: string;
  password: string;
}) => {
  const res = await axios.post("/api/login", data);
  return res.data;
};

export const registerRequest = async (data: any) => {
  const res = await axios.post(
    "http://localhost:8001/api/auth/register",
    data
  );

  return res.data;
};