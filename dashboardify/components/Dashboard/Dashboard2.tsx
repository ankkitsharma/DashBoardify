"use client";
import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import styles from "./Dashboard.module.css";
import { widgetState } from "@/lib/features/widget/widgetSlice";

interface Dashboard1Props {
  data: widgetState; // or some other type that makes sense for your component
}

export default function Dashboard({ data }: Dashboard1Props) {
  return (
    <div className={styles.dashboard + " " + styles.card}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.widgetData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
