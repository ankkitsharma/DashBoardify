"use client";
import React from "react";
import styles from "./SearchHeading.module.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function SearchHeading() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const handleClick = () => {
    router.push("/");
  };
  if (search) {
    return (
      <div className={styles.container}>
        <div>Showing Search results for: {search}</div>
        <button className="button" onClick={handleClick}>
          Take me to home page {"<-"}
        </button>
      </div>
    );
  } else {
    return <></>;
  }
}
