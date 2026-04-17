import React from "react";
import { NavLink } from "react-router";
import { Home, Clock, BarChart3 } from "lucide-react";

const Navbar = () => {
  const linkClasses =
    "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 font-medium";

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-tight cursor-pointer">
          <span className="text-slate-900">Keen</span>
          <span className="text-emerald-800">Keeper</span>
        </h1>
      </div>

      <div className="flex items-center space-x-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "bg-emerald-900 text-white" : "text-slate-500 hover:bg-gray-100"}`
          }
        >
          <Home size={18} />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "bg-emerald-900 text-white" : "text-slate-500 hover:bg-gray-100"}`
          }
        >
          <Clock size={18} />
          <span>Timeline</span>
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "bg-emerald-900 text-white" : "text-slate-500 hover:bg-gray-100"}`
          }
        >
          <BarChart3 size={18} />
          <span>Stats</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
