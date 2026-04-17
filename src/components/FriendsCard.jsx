import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const FriendsCard = ({ friends, setFriends }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("FriendsData.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "overdue":
        return "bg-red-500 text-white";
      case "almost due":
        return "bg-amber-500 text-white";
      case "on-track":
        return "bg-emerald-900 text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold mb-6">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-slate-50/30">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <NavLink to={`/friend/${friend.id}`} key={friend.id}>
            <div className="bg-white p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center hover:shadow-md h-full">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />

              <h3 className="text-xl font-bold">{friend.name}</h3>
              <p className="text-xs text-gray-400 mb-3">
                {friend.days_since_contact}d ago
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className={`mt-auto px-4 py-1 rounded-full text-xs font-bold ${getStatusStyles(
                  friend.status,
                )}`}
              >
                {friend.status}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FriendsCard;
