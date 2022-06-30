import React from "react";
import Amplify from "aws-amplify";
import "./App.css";
import awsExports from "../aws-exports";
import StripList from "./StripList";
import StripForm from "./StripForm";
Amplify.configure(awsExports);

const App = () => {
  return (
    <div className="wrapper">
      <StripForm />
      <StripList />
    </div>
  );
};

export default App;
