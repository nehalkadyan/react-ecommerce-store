import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <Auth0Provider
    domain="dev-0swau5de.us.auth0.com"
    clientId="VPeWPtAebozkwvoxVcjVMBmKG1Yhsrls"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </Auth0Provider>
);


