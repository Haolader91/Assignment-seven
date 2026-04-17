import React, { useContext } from "react";
import { TimelineContext } from "../context/store";
import {
  Handshake,
  MessageCircle,
  Phone,
  Video as VideoIcon,
} from "lucide-react";

const Timeline = () => {
  const { activities } = useContext(TimelineContext);

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
      <div className="space-y-4">
        {activities.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl border border-dashed border-gray-200 text-center text-slate-400 italic">
            No interactions logged yet.
          </div>
        ) : (
          activities.map((item, index) => (
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
