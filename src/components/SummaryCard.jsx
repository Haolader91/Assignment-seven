import React from "react";

const SummaryCard = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">10</h2>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">
              Total Friends
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">3</h2>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">
              On Track
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">6</h2>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">
              Need Attention
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">12</h2>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryCard;
