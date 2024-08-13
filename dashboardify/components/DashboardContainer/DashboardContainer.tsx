import React from "react";
import styles from "./DashboardContainer.module.css";
import Dashboard from "../Dashboard/Dashboard";

export default function DashboardContainer() {
  return (
    <div className="pt-3">
      <div className={"pt-2"}>Dashboard1</div>
      <div className={"pt-2" + " " + styles.dashContainer}>
        <Dashboard />
        <Dashboard />
        <Dashboard />
      </div>
      <div className={"pt-2"}>Dashboard2</div>
      <div className={"pt-2" + " " + styles.dashContainer}>
        <Dashboard />
        <Dashboard />
        <Dashboard />
      </div>
    </div>
  );
}
