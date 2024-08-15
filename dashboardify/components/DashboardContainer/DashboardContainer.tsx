import React from "react";
import styles from "./DashboardContainer.module.css";
import Dashboard1 from "../Dashboard/Dashboard1";
import Dashboard2 from "../Dashboard/Dashboard2";

export default function DashboardContainer() {
  return (
    <div className="pt-3">
      <div className={"pt-2"}>Dashboard1</div>
      <div className={"pt-2" + " " + styles.dashContainer}>
        <Dashboard1 />
        <Dashboard1 />
        <Dashboard1 />
      </div>
      <div className={"pt-2"}>Dashboard2</div>
      <div className={"pt-2" + " " + styles.dashContainer}>
        <Dashboard2 />
        <Dashboard2 />
        <Dashboard2 />
      </div>
    </div>
  );
}
