import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ResponsiveAppBar from "./AppBar";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ResponsiveAppBar />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
