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
          justifyContent: "start",
          gap: 2,
          padding: 4,
        }}
      >
        <p
          style={{
            writingMode: "vertical-rl",
            display: "flex",
            textAlign: "left",
            alignSelf: "flex-end",
            margin: 0,
            paddingLeft: 4,
            paddingBottom: 16,
            fontSize: 12,
            marginRight: 12,
          }}
        >
          {name}
        </p>
        {(text.split("\n").length === 1
          ? text.split("\n").concat([""])
          : text.split("\n")
        )
          .reverse()
          .map((a, index) => {
            if (index > 1) return;
            let temp = a;
            if (a.length > 17) {
              temp = temp.substr(0, 17);
            }
            return (
              <p
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  paddingTop: (1 - index) * 24 + 20,
                  margin: 0,
                  fontSize: 16,
                  writingMode: "vertical-rl",
                  fontWeight: "bold",
                }}
              >
                {temp}
              </p>
            );
          })}
      </div>
    </div>
  );
};
export default Tannzaku;
