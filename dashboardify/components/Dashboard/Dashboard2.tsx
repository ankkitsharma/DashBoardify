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
import Modal from "../Modal/Modal";
import { removeWidget } from "@/lib/features/widget/widgetSlice";
import { useAppDispatch } from "@/lib/hooks";

interface Dashboard2Props {
  data?: widgetState | undefined; // or some other type that makes sense for your component
  id?: string;
}

export default function Dashboard({ data, id }: Dashboard2Props) {
  const dispatch = useAppDispatch();
  const deleteWidget = () => {
    if (id != undefined) {
      dispatch(removeWidget(id));
    }
  };
  return (
    <div className={styles.dashboard + " " + styles.card}>
      {data && <div className={styles.widgetHeading}>{data.widgetName}</div>}
      {data && (
        <button
          className={"button" + " " + styles.deleteWidget}
          onClick={deleteWidget}
        >
          x
        </button>
      )}
      {data ? (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={data?.widgetData}
          >
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
      ) : (
        <Modal />
      )}
    </div>
  );
}
