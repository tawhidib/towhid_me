import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { FaUserGraduate, FaSchool } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";

export default function Education() {
  return (
    <Container
      maxWidth={"lg"}
      component={"div"}
      sx={{ my: "80px", textAlign: "center" }}
    >
      <Typography
        component={"h4"}
        variant="h4"
        gutterBottom
        sx={{
          textTransform: "capitalize",
          color: "info.main",
          fontWeight: 600,
        }}
      >
        me as student
      </Typography>

      {/* NOTE:
        bottom line for a section should be implemented  
        */}

      <Timeline sx={{ mt: "40px" }} position="alternate">
        {/* university  */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            December, 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{ fontSize: "40px", color: "success", p: "0.8rem" }}
              color="success"
              variant="outlined"
            >
              <FaUserGraduate />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Bachelor of Computer Science & Engineering
            </Typography>
            <Typography>
              Daffodil International University, Bangladesh
            </Typography>
            <Typography>CGPA 3.4 out of 4.0</Typography>
          </TimelineContent>
        </TimelineItem>
        {/* college  */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2014 - 2015
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{ fontSize: "40px", color: "white", p: "0.8rem" }}
              color="success"
              variant="outlined"
            >
              <GiFamilyHouse />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Higher Secondary Certificate
            </Typography>
            <Typography>
              Government Science College, Dhaka, Bangladesh
            </Typography>
            <Typography>Major: Science</Typography>
            <Typography>GPA 4.33 out of 5.00</Typography>
          </TimelineContent>
        </TimelineItem>
        {/* school  */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2012 - 2013
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{ fontSize: "40px", color: "white", p: "0.8rem" }}
              color="success"
              variant="outlined"
            >
              <FaSchool />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Secondary School Certificate
            </Typography>
            <Typography>Mirhazirbug Ideal High School</Typography>
            <Typography>Major: Science</Typography>
            <Typography>GPA 5.0 out of 5.0</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
