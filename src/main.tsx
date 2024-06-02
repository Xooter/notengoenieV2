import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { CharsContext } from "./context/CharsContext";
import { FrecuencyContext } from "./context/FrecuencyContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CharsContext>
    <FrecuencyContext>
      <App />
    </FrecuencyContext>
  </CharsContext>,
);
