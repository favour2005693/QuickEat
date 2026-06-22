import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { OnlineStatusProvider } from "./contexts/OnlineStatusContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <OnlineStatusProvider>
        <App />
      </OnlineStatusProvider>
    </ThemeProvider>
  </StrictMode>,
);
