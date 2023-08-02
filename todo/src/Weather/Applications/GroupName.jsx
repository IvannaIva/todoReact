import React from "react";
import styles from "../Applications/Applications.module.css";

const GroupName = ({ title }) => {
  return <p className={styles.title_group}>{title}</p>;
};

export default GroupName;
