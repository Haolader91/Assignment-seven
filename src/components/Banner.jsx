import { Plus } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 ">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
        Friends to keep close in your life
      </h1>

      <p className="max-w-2xl text-slate-500 text-lg leading-relaxed mb-10">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="flex items-center gap-2 bg-[#2D4A3E] hover:bg-[#233a31] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md active:scale-95">
        <Plus size={20} />
        <span>Add a Friend</span>
      </button>
    </section>
  );
};

export default Banner;
