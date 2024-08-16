"use client";
import React, { useEffect, useState } from "react";
import styles from "./DashboardContainer.module.css";
import Dashboard1 from "../Dashboard/Dashboard1";
import Dashboard2 from "../Dashboard/Dashboard2";
import { useAppSelector } from "@/lib/hooks";
import { widgetState1 } from "@/lib/features/widget/widgetSlice";
import jsondata from "@/JsonData/Dashboard1/data1.json";
import { uuid } from "uuidv4";
import { useSearchParams } from "next/navigation";

export default function DashboardContainer() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const widget = useAppSelector((state) => state.values);
  const [dash1, setDash1] = useState<widgetState1["values"]>([
    {
      widgetName: "",
      dashboardName: "",
      widgetData: [],
      id: uuid(),
    },
  ]);
  const [dash2, setDash2] = useState<widgetState1["values"]>([
    {
      widgetName: "",
      dashboardName: "",
      widgetData: [],
      id: uuid(),
    },
  ]);

  useEffect(() => {
    if (Array.isArray(widget)) {
      if (search) {
        const widgetName = search; // Get the widget name from the query parameter
        const dash_1 = widget.filter((item) => {
          return (
            item.dashboardName === "Dashboard1" &&
            item.widgetName.includes(widgetName)
          );
        });
        setDash1(dash_1);
        const dash_2 = widget.filter((item) => {
          return (
            item.dashboardName === "Dashboard2" &&
            item.widgetName.includes(widgetName)
          );
        });
        setDash2(dash_2);
      } else {
        const dash_1: any = widget.filter((item) => {
          return item.dashboardName === "Dashboard1";
        });
        setDash1(dash_1);
        const dash_2: any = widget.filter((item) => {
          return item.dashboardName === "Dashboard2";
        });
        setDash2(dash_2);
      }
      // console.log("dash_1 ", dash_1);
      // console.log("dash_2 ", dash_2);
      // console.log("jsondata ", jsondata);
    }
  }, [widget, search]);

  return (
    <div className="pt-3">
      <div className={"pt-2"}>Dashboard1</div>
      <div className={"pt-2" + " " + styles.dashContainer}>
        {dash1.length > 0 ? (
          dash1.map((item) =>
            item && typeof item === "object" ? (
              <Dashboard1 data={item} key={item.id} id={item.id} />
            ) : null
          )
        ) : (
          <Dashboard1 />
        )}
      </div>
      <div className={"pt-2"}>Dashboard2</div>
      <div className={"pt-2" + " " + styles.dashContainer}>
        {dash2.length > 0 ? (
          dash2?.map((item) =>
            item && typeof item === "object" ? (
              <Dashboard2 data={item} key={item.id} id={item.id} />
            ) : null
          )
        ) : (
          <Dashboard2 />
        )}
      </div>
    </div>
  );
}
