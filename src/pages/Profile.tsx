import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type User = {
  name: string;
  surname: string;
  username: string;
  email: string;
  role: string;
};

const fetchProfile = async (): Promise<User> => {
  const token = localStorage.getItem("token");
  const res = await axios.get("http://localhost:8001/api/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.user;
};

const Profile = () => {
  const navigate = useNavigate();

  const { data: user, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
    staleTime: 0,
    retry: 1,
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const initials = user
    ? `${user.name?.[0] ?? ""}${user.surname?.[0] ?? ""}`.toUpperCase() || "?"
    : "?";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Nav */}
      <nav className="flex items-center justify-between px-12 py-4 bg-white border-b border-slate-200">
        <span
          className="text-xl font-bold text-indigo-500 cursor-pointer"
          onClick={() => navigate("/")}
        >
          MyApp
        </span>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-lg border border-slate-200 text-indigo-500 text-sm font-medium hover:bg-slate-50 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 cursor-pointer"
          >
            Log out
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        {isLoading && (
          <div className="text-slate-400 text-sm animate-pulse">Loading profile...</div>
        )}

        {isError && (
          <div className="text-red-400 text-sm">Failed to load profile. Please try again.</div>
        )}

        {user && (
          <div className="w-full max-w-md">
            {/* Avatar card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-indigo-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                {initials}
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {user.name} {user.surname}
              </h2>
              <p className="text-sm text-slate-400 mt-1">@{user.username}</p>
            </div>

            {/* Info card */}
            <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100">
              <InfoRow label="First name" value={user.name} />
              <InfoRow label="Last name" value={user.surname} />
              <InfoRow label="Username" value={`@${user.username}`} />
              <InfoRow label="Email" value={user.email} />
              <InfoRow label="Role" value={user.role} />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-5 text-sm text-slate-400 border-t border-slate-200 bg-white">
        © 2026 MyApp — All rights reserved.
      </footer>
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between px-6 py-4">
    <span className="text-sm text-slate-400 font-medium">{label}</span>
    <span className="text-sm text-slate-800 font-semibold">{value}</span>
  </div>
);

export default Profile;
