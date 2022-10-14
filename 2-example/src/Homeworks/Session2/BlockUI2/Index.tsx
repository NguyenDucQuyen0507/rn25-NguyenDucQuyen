import React from "react";
import styles from "./styles.module.css";
type Props = {};
interface BlockUI2 {
  text?: string;
  color?: string;
  color1?: string;
  percent?: number;
}
// Không truyền {} trong function là vì nó đã là 1 object
function Index(props: BlockUI2) {
  return (
    <div className={styles.container}>
      <div className={styles.text} style={{ backgroundColor: props.color }}>
        {props.text}
      </div>
      <div className={styles.percent} style={{}}>
        <div
          className={styles.percent_style}
          style={{
            backgroundColor: `${props.color1}`,
            width: `${props.percent}%`,
          }}
        >
          {props.percent}%
        </div>
        <div className="" style={{}}></div>
      </div>
    </div>
  );
}

export default Index;
