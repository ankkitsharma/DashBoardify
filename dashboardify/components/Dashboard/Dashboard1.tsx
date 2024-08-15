"use client";
import React, { PureComponent } from "react";
import styles from "./Dashboard.module.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { widgetState } from "@/lib/features/widget/widgetSlice";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
interface Dashboard1Props {
  data: widgetState; // or some other type that makes sense for your component
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Dashboard({ data }: Dashboard1Props) {
  return (
    <div className={styles.dashboard + " " + styles.card}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data.widgetData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.widgetData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
