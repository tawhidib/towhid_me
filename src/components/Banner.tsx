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
      <Container
        maxWidth={"lg"}
        sx={{
          mx: "auto",
          minHeight: "60dvh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={4}>
          <Grid
            xs={12}
            md={6}
            item
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div>
                <Typography
                  variant="h6"
                  sx={{ color: "info.main", fontWeight: 600 }}
                  gutterBottom
                >
                  MERN-Stack Dev
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "700",
                  }}
                  component={"h3"}
                  gutterBottom
                >
                  I'm{" "}
                  <span className="linear-name-color">Md Towhidul Islam</span>
                </Typography>
                <Typography variant="h6" component={"h5"}>
                  I am Full-Stack Web Developer specialized in
                  <br />{" "}
                  <Typography sx={{ color: "success.light" }}>
                    JavaScript, React and Node.Js
                  </Typography>
                </Typography>
              </div>
            </Box>
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
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "420px",
                  height: "420px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="water-drop"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
