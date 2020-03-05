import React from "react";
import withTheme from '../../hoc/withTheme'
import ThemeToogler from "../ThemeToogler/ThemeToogler";
import styles from "./Layout.module.css";

const Layout = ({children, theme}) => {
  return (
    <div  className={styles.wrapper} style={{background: theme.bodybg }} >
      <div className={styles.container} style={{ color: theme.fontColor, background: theme.layoutbg }}>
        <ThemeToogler />
        {children}
      </div>
    </div>
  );
};

export default withTheme(Layout);
