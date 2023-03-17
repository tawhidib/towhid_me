import CustomTheme from "@/lib/themeCumstomization";
import "@/styles/globals.css";
import ThemeProvider from "@mui/material/";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomTheme>
      <Component {...pageProps} />
    </CustomTheme>
  );
}
