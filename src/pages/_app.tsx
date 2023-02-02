import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ResponsiveAppBar from "./AppBar";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
