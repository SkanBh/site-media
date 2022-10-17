import React from "react";
import HorizontalCard from "./Common/HorizontalCard";
import { Grid, Box, Typography, Hidden, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTranslation from "next-translate/useTranslation";
import MostRead from "./common/MostRead";

const axios = require("axios");

function Featured() {
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
  

  const { t, lang } = useTranslation("common");

  return (
    <Container fixed component="section" sx={{ paddingTop: "50px" }}>
      <Grid container spacing={2} alignItems="start">
        <Hidden only={["xs", "sm", "md"]}>
          <Grid item lg={3} xl={3}>
            <MostRead />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={12} lg={9} xl={9} container spacing={2}>
          <Grid item sm={12} md={12} lg={12} xl={12} position="relative">
            <Typography
              sx={{ borderTop: "solid 1px", color: "#7A3792" }}
              variant="h4"
              paddingTop="20px"
            >
              {t("A la une")}
            </Typography>
          </Grid>
          <Grid item sm={12} md={8} lg={8} xl={8}>
            {post.slice(0, 1).map((card) => (
              <HorizontalCard
                key={card.id}
                image={card.image}
                label={card.label}
                title={card.title}
                slug={card.slug}
                intro="مكرم و شهرزاد المعروفان ب صاحبا مشروعالذي يتمثل في خلق فرص سفر من قبل صانعي محتوى و يقودها مرشدون محليون . فكرة إنشاء هذا  مكرم و شهرزاد المعروفان ب صاحبا مشروع الذي يتمثل في خلق فرص سفر من قبل صانعي محتوى و يقودها مرشدون محليون . فكرة إنشاء هذا ..."
                date={card.startPublish.date.substring(0, 16)}
                fontSize={fontSize}
                link={card.link}
              />
            ))}
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            lg={4}
            xl={4}
            display="flex"
            className="grid"
            id="featured"
            sx={{ flexDirection: { lg: "column", md: "column" } }}
          >
            {post.slice(1, 3).map((card) => (
              <Grid item sm={6} md={12} lg={12} key={card.id}>
                <HorizontalCard
                  image={card.image}
                  label={card.label}
                  title={card.title}
                  date={card.startPublish.date.substring(0, 16)}
                  link={card.link}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Featured;
