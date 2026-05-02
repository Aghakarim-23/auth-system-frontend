import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: "🔒",
    title: "Secure Auth",
    desc: "Industry-standard authentication to keep your account safe.",
  },
  {
    icon: "⚡",
    title: "Fast & Reliable",
    desc: "Optimized for speed so you never have to wait.",
  },
  {
    icon: "🎨",
    title: "Clean Design",
    desc: "A minimal interface that stays out of your way.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Nav */}
      <nav className="flex items-center justify-between px-12 py-4 bg-white border-b border-slate-200">
        <span className="text-xl font-bold text-indigo-500">MyApp</span>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/profile")}
            className="px-5 py-2 rounded-lg border border-slate-200 text-indigo-500 text-sm font-medium hover:bg-slate-50 cursor-pointer"
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 cursor-pointer"
          >
            Log out
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20">
        <span className="mb-5 inline-block bg-indigo-50 text-indigo-500 text-sm font-semibold px-4 py-1.5 rounded-full">
          Welcome back
        </span>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
          You're all set
        </h1>
        <p className="text-lg text-slate-500 max-w-md mb-10 leading-relaxed">
          Explore your dashboard, manage your account, or check out what MyApp has to offer.
        </p>
        <button
          onClick={() => navigate("/profile")}
          className="px-8 py-3.5 bg-indigo-500 text-white rounded-xl text-base font-semibold hover:bg-indigo-600 cursor-pointer"
        >
          Go to Profile
        </button>
      </main>

      {/* Feature Cards */}
      <section className="flex flex-wrap justify-center gap-6 px-12 pb-20">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white border border-slate-200 rounded-2xl p-8 w-64 text-center"
          >
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-5 text-sm text-slate-400 border-t border-slate-200 bg-white">
        © 2026 MyApp — All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
