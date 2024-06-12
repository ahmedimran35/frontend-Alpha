import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./routes/router.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import CategoryProvider from "./Providers/CategoryProvider.jsx";
import ResponsivenessProvider from "./Providers/ResponsivenessProvider.jsx";

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProviders>
          <ResponsivenessProvider>
            <CategoryProvider>
              <RouterProvider router={router} />
            </CategoryProvider>
          </ResponsivenessProvider>
        </AuthProviders>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
