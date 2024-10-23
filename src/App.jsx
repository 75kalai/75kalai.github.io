import "./App.scss";
import { ConfigProvider, theme } from "antd";

import AnimatedCursor from "react-animated-cursor";
import Home from "./pages/Home/Home";

function App() {
  const antThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
      fontSize: "18px",
    },
  };

  return (
    <div id="app">
      <ConfigProvider theme={antThemeConfig}>
        <Home />
        <AnimatedCursor />
      </ConfigProvider>
    </div>
  );
}

export default App;
