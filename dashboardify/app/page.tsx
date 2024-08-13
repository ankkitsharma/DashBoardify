import React from "react";
import styles from "./page.module.css";
import AddWidgetBar from "@/components/AddWidgetBar/AddWidgetBar";
import DashboardContainer from "@/components/DashboardContainer/DashboardContainer";

export default function page() {
  return (
    <div className={styles.mainPage}>
      <AddWidgetBar />
      <DashboardContainer />
    </div>
  );
}
