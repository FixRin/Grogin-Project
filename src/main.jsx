import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/Css/index.css";
import { ProductProvider } from "./context/DataContext.jsx";
import { LangProvider } from "./context/LangContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CurrencyProvider } from './context/CurrencyContext.jsx'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrencyProvider>
      <ThemeProvider>
        <LangProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </LangProvider>
      </ThemeProvider>
    </CurrencyProvider>
  </StrictMode>
);
