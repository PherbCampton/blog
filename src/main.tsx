import { createRoot } from "react-dom/client";
import { Providers } from "./providers/providers";

import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Router>
    <Providers>
      <App />
    </Providers>
  </Router>
);
