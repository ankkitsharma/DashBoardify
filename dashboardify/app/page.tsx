import React from "react";
import styles from "./page.module.css";
import AddWidgetBar from "@/components/AddWidgetBar/AddWidgetBar";
import DashboardContainer from "@/components/DashboardContainer/DashboardContainer";
import SearchHeading from "@/components/SearchHeading/SearchHeading";

export default function page() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.pageHeader}>
        <AddWidgetBar />
        <SearchHeading />
      </div>
      <DashboardContainer />
    </div>
  );
}
