import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App.jsx";
import "./index.css";
import { getConfig } from "../config.js";

const config = getConfig();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
