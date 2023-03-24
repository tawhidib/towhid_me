import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper";
import Container from "@mui/material/Container";

// font-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiPostgresql,
  SiReact,
  SiExpress,
} from "react-icons/si";

import { TbBrandNextjs } from "react-icons/tb";
import {
  BsFiletypeScss,
  BsFillBootstrapFill,
  BsGit,
  BsFiletypeSql,
} from "react-icons/bs";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

interface MySKillType {
  icon: React.ReactNode;
  name: string;
  color: string;
}

const mySkills: MySKillType[] = [
  { icon: <FaHtml5 />, name: "HTML 5", color: "#F75421" },
  { icon: <FaCss3Alt />, name: "CSS 3", color: "#0184C2" },
  { icon: <BsFiletypeScss />, name: "SCSS", color: "#C76494" },
  { icon: <BsFillBootstrapFill />, name: "Bootstrap", color: "#760FF0" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#07B0CE" },
  { icon: <SiAntdesign />, name: "Ant-Design", color: "#5BA7D9" },
  { icon: <SiMui />, name: "Material UI", color: "#007BF7" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "#E8D44D" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#2F74C0" },
  { icon: <BsGit />, name: "Git", color: "#E84D31" },
  { icon: <FaGithub />, name: "Github", color: "#000000" },
  { icon: <SiReact />, name: "ReactJs", color: "#5ED3F3" },
  { icon: <TbBrandNextjs />, name: "NextJs", color: "#414141" },
  { icon: <SiExpress />, name: "Express", color: "#414141" },
  { icon: <BsFiletypeSql />, name: "SQL", color: "#0075CF" },
  { icon: <SiPostgresql />, name: "Postgres", color: "#31648C" },
  { icon: <FaNode />, name: "NodeJs", color: "#87BF00" },
];

export default function Skills() {
  return (
    <Box component={"div"} sx={{ background: "#FFFFFF", py: "18px" }}>
      <Container
        maxWidth={"xl"}
        sx={{
          margin: "0 auto",
        }}
      >
        <Swiper
          slidesPerView={8}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 4,
            },
            900: { slidesPerView: 6 },
            1200: {
              slidesPerView: 8,
            },
          }}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {mySkills.map((skill, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  color: skill.color,
                }}
              >
                <Typography
                  component={"p"}
                  sx={{ fontSize: "80px", textAlign: "center" }}
                >
                  {skill.icon}
                </Typography>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ textAlign: "center", fontWeight: 600 }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
