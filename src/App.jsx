import React from "react";
import { ThemeProvider } from '@ui5/webcomponents-react';
import AppRouter from "./component/router/AppRouter";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;