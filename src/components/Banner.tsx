import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import myImage from "../assets/images/myImage.png";
import Image from "next/image";

const Banner = (): JSX.Element => {
  return (
    <Box
      component={"div"}
      sx={{ mt: "24px", py: "80px", background: "" }}
      className="banner-bg"
    >
      <Container maxWidth={"lg"} sx={{ mx: "auto" }}>
        <Grid container spacing={4}>
          <Grid
            xs={12}
            md={6}
            item
            sx={{
              textAlign: "center",
            }}
          >
            <Typography> Hello</Typography>
          </Grid>
          <Grid
            xs={12}
            md={6}
            item
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: "440px",
                height: "440px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="water-drop"
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
