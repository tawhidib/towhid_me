import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import React from "react";

interface CustomThemeProps {
  children: React.ReactNode;
}

const CustomTheme = (props: CustomThemeProps): JSX.Element => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#1D3557",
      },
      text: {
        primary: "#F1FAEE",
      },
    },
    typography: {
      fontSize: 14,
    },
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomTheme;
