import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import React from "react";

interface CustomThemeProps {
  children: React.ReactNode;
}

const CustomTheme = (props: CustomThemeProps): JSX.Element => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomTheme;
