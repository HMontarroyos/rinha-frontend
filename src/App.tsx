import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme, ThemeType } from "../src/styles/Theme";
import Routes from "./routes";
import { JsonProvider } from "./contexts/JsonContext";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme as ThemeType}>
      <JsonProvider>
        <Routes />
      </JsonProvider>
    </ThemeProvider>
  );
}

export default App;
