import React from "react";

type Props = {
  name: string;
  text: string;
};
const Tannzaku: React.VFC<Props> = ({ name, text }) => {
  return (
    <div
      style={{
        position: "relative",
        width: 100,
        height: 400,
      }}
    >
      <img
        style={{
          width: 100,
          height: 400,
        }}
        src={require("../assets/tannzakuList/5.png")}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
          padding: 4,
          backgroundImage: require("../assets/tannzakuList/5.png"),
        }}
      >
        <p
          style={{
            writingMode: "vertical-rl",
            display: "flex",
            textAlign: "left",
            alignSelf: "flex-end",
            padding: 4,
            fontSize: 12,
          }}
        >
          {name}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            padding: 8,
          }}
        >
          {text.split("\n").map((a, index) => {
            if (index > 1) return;
            return (
              <p
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  paddingTop: index * 24,
                  fontSize: 20,
                  writingMode: "vertical-rl",
                  fontWeight: "bold",
                }}
              >
                {a}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Tannzaku;
