import React, { useContext, useState } from "react";
import { TimelineContext } from "../context/store";
import {
  ChevronDown,
  Handshake,
  MessageCircle,
  Phone,
  Video as VideoIcon,
} from "lucide-react";

const Timeline = () => {
  const { activities } = useContext(TimelineContext);

  const [filter, setFilter] = useState("All");
  const filteredActivities =
    filter === "All"
      ? activities
      : activities.filter((item) => item.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <Phone className="text-emerald-600" size={20} />;
      case "Text":
        return <MessageCircle className="text-blue-500" size={20} />;
      case "Video":
        return <VideoIcon className="text-purple-500" size={20} />;
      default:
        return <Handshake className="text-amber-500" size={20} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-10 min-h-screen">
      <h2 className="text-2xl font-bold mb-8 text-[#1B3B2F]">
        Activity Timeline
      </h2>

      <div className="relative w-full max-w-xs mb-2">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full appearance-none bg-white border border-gray-200 text-slate-500 py-3 px-4 pr-10 rounded-xl shadow-sm focus:outline-none"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
          <ChevronDown size={18} />
        </div>
      </div>
      <div className="space-y-4">
        {filteredActivities.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl border border-dashed border-gray-200 text-center text-slate-400 italic">
            No interactions logged yet.
          </div>
        ) : (
          filteredActivities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-lg shrink-0">
                {getIcon(item.type)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-800">
                  {item.type}{" "}
                  <span className="text-slate-400 font-normal mx-1">with</span>{" "}
                  {item.person}
                </p>
                <span className="text-xs text-slate-400 font-medium">
                  {item.date}
                </span>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;
