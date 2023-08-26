import React from "react";

import "./chart.css";

import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "ديسمبر", Total: 1200 },
  { name: "نوفمبر", Total: 2100 },
  { name: "أكتوبر", Total: 800 },
  { name: "سبتمبر", Total: 1600 },
  { name: "أغسطس", Total: 900 },
  { name: "يوليو", Total: 2000 },
  { name: "يونيو", Total: 100 },
  { name: "مايو", Total: 200 },
  { name: "أبريل", Total: 800 },
  { name: "مارس", Total: 16 },
  { name: "فبراير", Total: 900 },
  { name: "يناير", Total: 1500 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="ch-title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#003173" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#003173" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
