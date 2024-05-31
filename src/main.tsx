import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { CharsContext } from "./context/CharsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CharsContext>
    <App />
  </CharsContext>,
);
