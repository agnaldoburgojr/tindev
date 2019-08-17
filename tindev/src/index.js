import React from "react";

import Routes from "./routes";
import { YellowBox } from "react-native";

export default function App() {
  return <Routes />;
}

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);
