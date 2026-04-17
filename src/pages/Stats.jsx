import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { TimelineContext } from "../context/store";

const Stats = () => {
  const { activities } = useContext(TimelineContext);

  const dataMap = activities.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: "Call", value: dataMap["Call"] || 0, color: "#1B3B2F" },
    { name: "Text", value: dataMap["Text"] || 0, color: "#8B5CF6" },
    { name: "Video", value: dataMap["Video"] || 0, color: "#10B981" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h2 className="text-3xl font-bold mb-8 text-slate-800">
        Friendship Analytics
      </h2>

      <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-emerald-900 font-semibold mb-6">
          By Interaction Type
        </h3>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    cornerRadius={10}
                  />
                ))}
              </Pie>
              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                wrapperStyle={{ paddingTop: "20px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
