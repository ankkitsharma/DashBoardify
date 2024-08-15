"use client";
import React, { useEffect, useState } from "react";
import styles from "./DashboardContainer.module.css";
import Dashboard1 from "../Dashboard/Dashboard1";
import Dashboard2 from "../Dashboard/Dashboard2";
import { useAppSelector } from "@/lib/hooks";
import { widgetState } from "@/lib/features/widget/widgetSlice";
import jsondata from "@/JsonData/Dashboard1/data1.json";

export default function DashboardContainer() {
  const widget = useAppSelector((state) => state);
  const [dash1, setDash1] = useState<widgetState[]>([]);
  const [dash2, setDash2] = useState<widgetState[]>([]);

  useEffect(() => {
    console.log(widget[1]);
    const dash_1 = widget.filter((item) => {
      return item.dashboardName === "Dashboard1";
    });
    setDash1(dash_1);
    const dash_2 = widget.filter((item) => {
      return item.dashboardName === "Dashboard2";
    });
    setDash2(dash_2);
    console.log("dash_1 ", dash_1);
    console.log("dash_2 ", dash_2);
    console.log("jsondata ", jsondata);
  }, [widget]);

  console.log("dash1 ", dash1);
  console.log("dash2 ", dash2);

  return (
    <div className="pt-3">
      <div className={"pt-2"}>Dashboard1</div>
      <div className={"pt-2" + " " + styles.dashContainer}>
        {dash1?.map((item) =>
          item && typeof item === "object" ? <Dashboard1 data={item} /> : null
        )}
      </div>
      <div className={"pt-2"}>Dashboard2</div>
      <div className={"pt-2" + " " + styles.dashContainer}>
        {dash2?.map((item) =>
          item && typeof item === "object" ? <Dashboard2 data={item} /> : null
        )}
      </div>
    </div>
  );
}
