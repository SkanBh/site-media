import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";
import VerticalCard from "./Common/VerticalCard";
import Advertising2 from "../public/assets/jibelcode-tt-2.jpg";
import { useRouter } from "next/router";
import Carousel3 from "../components/Carousel3";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";


const axios = require("axios");

function LifestyleAndHoroscope() {
  const [post, setPost] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${process.env.API}${router.locale}/6/1/articles/1`)
      .then((set) => setPost(set.data.items));
  }, []);

  const fontSize = {
    fontSize: "28px",
  };

  const mt = {
    marginTop: "7%",
  };

  const flex = {
    display: "flex",
  };

  const fdr = {
    flexDirection: "column-reverse",
  };

  const vcwidth = {
    first: "37%",
    second: "63%",
  };

  const flexgrow = {
    flexGrow: "1",
  };

  const { t, lang } = useTranslation("common");


  return (
    <Container fixed component="section" sx={{ paddingTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid
          item
          sm={12}
          md={8}
          lg={8}
          xl={8}
          position="relative"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography
            className="lifestyle"
            sx={{
              pt: "10px",
              pb: "10px",
              width: "35%",
              bgcolor: "#7A3792",
              color: "white",
              textAlign: "center",
            }}
            variant="h4"
            component="h3"
          >
            {t("Lifestyle")}
          </Typography>
          {post.slice(0, 2).map((card) => (
            <VerticalCard
              key={card.id}
              image={card.image}
              title={card.title}
              date={card.startPublish.date.substring(0, 16)}
              mt={mt}
              intro="مكرم و شهرزاد المعروفان ب صاحبا مشروعالذي يتمثل في خلق فرص سفر من قبل  شهرزاد المعروفان ب صاحبا مشروعالذي يتمثل في خلق فرص سفر من قبل  صانعي محتوى و يقودها مرشدون محليون . فكران ..."
              flex={flex}
              flexDirection={fdr}
              lien
              width={vcwidth}
              flexGrow={flexgrow}
              link={card.link}
              fontSize={fontSize}
            />
          ))}
        </Grid>
        <Grid item sm={12} md={4} lg={4} xl={4}>
          <Box minHeight="250px">
            <Image src={Advertising2} alt="" />
          </Box>
          <Typography
            className="degrade"
            sx={{
              width: "130px",
              height: "45px",
              textAlign: "center",
              color: "white",
              p: "11px",
              mt: "5%",
            }}
          >
            {t("Horoscope")}
          </Typography>

          <Box>
            <Carousel3 />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LifestyleAndHoroscope;
