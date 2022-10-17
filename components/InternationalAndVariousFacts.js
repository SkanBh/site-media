import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import Carrousel2 from "./common/Carrousel2";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const axios = require("axios");

function FashionAndCulture() {
  const [post, setPost] = useState([]);
  const router = useRouter()

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
        <Grid item sm={12} md={12} lg={6} xl={6} position="relative">
          <Typography
            sx={{ borderTop: "solid 1px", width: "100%", color: "#7A3792" }}
            variant="h4"
            paddingTop="20px"
          >
            {t("International")}
          </Typography>
          <Box mt="20px" mr="-8px" ml="-8px">
            <Carrousel2
              data={post}
              paddingLeft={pl}
              paddingRight={pr}
            />
          </Box>
        </Grid>
        <Grid item sm={12} md={12} lg={6} xl={6} position="relative">
          <Typography
            sx={{ borderTop: "solid 1px", width: "100%", color: "#7A3792" }}
            variant="h4"
            paddingTop="20px"
          >
            {t("Faits divers")}
          </Typography>
          <Box mt="20px" mr="-8px" ml="-8px">
            <Carrousel2
              data={post}
              paddingLeft={pl}
              paddingRight={pr}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FashionAndCulture;
