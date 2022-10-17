import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";
import HorizontalCard from "./Common/HorizontalCard";
import VerticalCard from "./Common/VerticalCard";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";


const axios = require("axios");

function NationalNews() {
  const [post, setPost] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios

      .get(`${process.env.API}${router.locale}/6/1/articles/1`)
      .then((set) => setPost(set.data.items));
  }, []);

  const width = {
    width: "50%",
  };

  const mx = {
    marginRight: "2%",
    marginLeft: "2%",
  };

  const vcwidth = {
    first: "50%",
    second: "50%",
  };



  const { t, lang } = useTranslation("common");


  return (
    <Container fixed component="section" sx={{ paddingTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={12} xl={12} position="relative">
          <Typography
            sx={{ borderTop: "solid 1px", width: "100%", color: "#7A3792" }}
            variant="h4"
            paddingTop="20px"
          >
            {t("Actualité nationale")}
          </Typography>
        </Grid>
        <Grid item sm={12} md={12} lg={6} xl={6}>
          {post.slice(0, 1).map((card) => (
            <VerticalCard
              key={card.id}
              image={card.image}
              label={card.label}
              title={card.title}
              intro="مكرم و شهرزاد المعروفان ب صاحبا مشروعالذي يتمثل في خلق فرص سفر من قبل صانعي محتوى و يقودها مرشدون محليون  صانعي محتوى و يقودها مرشدون محليون  صانعي محتوى و يقودها مرشدون محليون ..."
              date={card.startPublish.date.substring(0, 16)}
              width={vcwidth}
              link={card.link}
            />
          ))}
        </Grid>
        <Grid
          item
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="grid"
          display="flex"
        >
          {post.slice(4, 6).map((card) => (
            <HorizontalCard
              key={card.id}
              image={card.image}
              label={card.label}
              title={card.title}
              slug={card.slug}
              date={card.startPublish.date.substring(0, 16)}
              width={width}
              mx={mx}
              link={card.link}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default NationalNews;
