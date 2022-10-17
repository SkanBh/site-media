import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import Carrousel from "../components/Common/Carrousel";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const axios = require("axios");

function Videos() {
  const [post, setPost] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${process.env.API}${router.locale}/6/1/articles/1`)
      .then((set) => setPost(set.data.items));
  }, []);

  const pr = {
    paddingRight: "8px",
  };

  const pl = {
    paddingLeft: "8px",
  };

  const { t, lang } = useTranslation("common");

  return (
    <Container fixed component="section" sx={{ paddingTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={12} xl={12} position="relative">
          <Typography
            sx={{ borderTop: "solid 1px", color: "#7A3792" }}
            variant="h4"
            paddingTop="20px"
          >
            {t("Videos")}
          </Typography>
        </Grid>
        <Grid item sm={12} md={12} lg={12} xl={12}>
          <Carrousel
            data={post}
            paddingLeft={pl}
            paddingRight={pr}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Videos;
