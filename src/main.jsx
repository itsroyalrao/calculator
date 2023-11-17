import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import process from "process";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={process.env.DOMAIN}
    clientId={process.env.CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
