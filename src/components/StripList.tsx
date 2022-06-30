import React from "react";
import { useGetStrips } from "../database/getStrips";
type Props = {};

const StripList: React.FC<Props> = () => {
  const strips = useGetStrips();

  if (strips === undefined) return <p>loading...</p>;

  return (
    <div className="todo_container">
      <h2>短冊 host</h2>
      {strips.map((strip, index) => (
        <div className="todo" key={strip.id ? strip.id : index} style={styles.todo}>
          <p style={styles.todoName}>{strip.name}</p>
          <p style={styles.todoDescription}>{strip.text}</p>
        </div>
      ))}
    </div>
  );
};
export default StripList;

const styles: { [key: string]: React.CSSProperties } = {
  todo: { width: "100%", marginBottom: 15 },
  todo_container: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "right",
  },
};
