import React, { useState } from "react";
import { addStrip } from "../database/addStrips";
type Props = {};

const StripForm: React.FC<Props> = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.header}>短冊 client</h2>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
        style={styles.input}
        value={name}
        placeholder="企業名"
      />
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
        style={styles.input}
        value={text}
        placeholder="内容"
      />
      <button
        style={styles.button}
        onClick={() => {
          addStrip({ name, text, id: "" }).then(() => {
            setName("");
            setText("");
          });
        }}
      >
        短冊作成
      </button>
    </div>
  );
};
export default StripForm;

const styles: { [key: string]: React.CSSProperties } = {
  header: { marginTop: 0, marginBottom: 0 },
  container: {
    width: 500,
    height: 1095,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  input: { border: "none", backgroundColor: "#ddd", marginBottom: 10, padding: 8, fontSize: 18 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};
