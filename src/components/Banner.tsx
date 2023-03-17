import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Banner = (): JSX.Element => {
  return (
    <Box
      component={"div"}
      sx={{ mt: "24px", py: "80px", background: "" }}
      className="banner-bg"
    >
      <Container maxWidth={"lg"} sx={{ mx: "auto" }}>
        <Typography variant="h4">My name is tawhid</Typography>
      </Container>
    </Box>
  );
};

export default Banner;
