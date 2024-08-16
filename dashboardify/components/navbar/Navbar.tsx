"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaGithub } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={styles.navbarContainer + " " + styles.card}>
      <nav className={styles.navbar}>
        <Link href={"/"}>
          <div className={styles.logo}>
            <MdDashboard className={styles.dashIcon} />
            <div>/</div>
            <div>DASHBOARD.ify</div>
          </div>
        </Link>
        <form className={styles.searchForm}>
          <input
            type="search"
            placeholder="Search any widgets..."
            className={styles.search}
            name="search"
          />
        </form>
        <Link
          href={"https://github.com/ankkitsharma/DashBoardify"}
          target="_blank"
        >
          {" "}
          <FaGithub className={styles.source} />
        </Link>
      </nav>
      <form className={styles.searchForm2}>
        <input
          type="search"
          placeholder="Search any widgets..."
          className={styles.search2}
          name="search"
        />
      </form>
    </header>
  );
}
