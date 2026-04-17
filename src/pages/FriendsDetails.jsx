import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import {
  BellRing,
  Archive,
  Trash2,
  Edit2,
  Phone,
  MessageSquare,
  Video,
  ArrowLeft,
} from "lucide-react";
import { TimelineContext } from "../context/store";
import friendsData from "/public/FriendsData.json";

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addActivity } = useContext(TimelineContext);

  const friend = friendsData.find((f) => f.id === parseInt(id));

  const handleCheckIn = (type) => {
    const newEntry = {
      type: type,
      person: friend.name,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };
    addActivity(newEntry);
    toast.success(`${type} interaction recorded!`, {
      style: {
        borderRadius: "10px",
        background: "#1B3B2F",
        color: "#fff",
      },
      iconTheme: {
        primary: "#10B981",
        secondary: "#fff",
      },
    });
  };

  if (!friend)
    return <div className="p-10 text-center font-bold">Friend not found!</div>;

  return (
    <div className="bg-slate-50/50 min-h-screen p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 mb-8 hover:text-[#1B3B2F] transition-colors font-medium"
        >
          <ArrowLeft size={20} /> Back to Friends
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-28 h-28 rounded-full border-4 border-slate-50 mb-4 object-cover"
              />
              <h2 className="text-2xl font-bold text-slate-800">
                {friend.name}
              </h2>
              <div className="flex gap-2 my-4">
                <span
                  className={`text-[10px] px-3 py-1 rounded-full uppercase font-bold text-white ${friend.status === "overdue" ? "bg-red-500" : "bg-emerald-600"}`}
                >
                  {friend.status}
                </span>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] px-3 py-1 rounded-full uppercase font-bold">
                  {friend.tags[0] || "Friend"}
                </span>
              </div>
              <p className="text-slate-500 italic text-sm mb-2">
                "{friend.bio}"
              </p>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-white border border-gray-100 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 shadow-sm">
                <BellRing size={18} /> Snooze 2 Weeks
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-white border border-gray-100 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 shadow-sm">
                <Archive size={18} /> Archive
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-white border border-gray-100 rounded-xl text-red-500 font-semibold hover:bg-red-50 shadow-sm">
                <Trash2 size={18} /> Delete
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="text-4xl font-bold text-slate-800">
                  {friend.days_since_contact}
                </div>
                <div className="text-xs text-slate-400 font-bold uppercase mt-2">
                  Days Since Contact
                </div>
              </div>
              <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="text-4xl font-bold text-slate-800">
                  {friend.goal}
                </div>
                <div className="text-xs text-slate-400 font-bold uppercase mt-2">
                  Goal (Days)
                </div>
              </div>
              <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="text-2xl font-bold text-emerald-900">
                  {friend.next_due_date}
                </div>
                <div className="text-xs text-slate-400 font-bold uppercase mt-2">
                  Next Due
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative">
              <h3 className="text-[#1B3B2F] font-bold mb-4">
                Relationship Goal
              </h3>
              <button className="absolute top-6 right-6 p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-emerald-700">
                <Edit2 size={16} />
              </button>
              <p className="text-slate-500 font-medium">
                Connect every{" "}
                <span className="text-slate-900 font-extrabold">
                  {friend.goal} days
                </span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-[#1B3B2F] font-bold mb-8 text-xl">
                Quick Check-In
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <button
                  onClick={() => handleCheckIn("Call")}
                  className="flex flex-col items-center justify-center gap-3 py-8 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-200 group"
                >
                  <Phone
                    size={28}
                    className="text-emerald-600 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm font-bold text-slate-700">Call</span>
                </button>
                <button
                  onClick={() => handleCheckIn("Text")}
                  className="flex flex-col items-center justify-center gap-3 py-8 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-200 group"
                >
                  <MessageSquare
                    size={28}
                    className="text-blue-500 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm font-bold text-slate-700">Text</span>
                </button>
                <button
                  onClick={() => handleCheckIn("Video")}
                  className="flex flex-col items-center justify-center gap-3 py-8 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-200 group"
                >
                  <Video
                    size={28}
                    className="text-purple-500 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm font-bold text-slate-700">
                    Video
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
