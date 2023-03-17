import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Banner = (): JSX.Element => {
  return (
    <Box
      component={"div"}
      sx={{ mt: "24px", py: "80px", backgroundColor: "red" }}
    >
      <Typography variant="h4">My name is tawhid</Typography>
    </Box>
  );
};

export default Banner;
