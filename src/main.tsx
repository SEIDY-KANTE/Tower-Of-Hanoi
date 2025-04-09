import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <div className="font-display">
        <App />
        <Toaster position="top-center" />
      </div>
    </DndProvider>
  </React.StrictMode>
);
