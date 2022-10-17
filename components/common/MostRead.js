import React from "react";
import { Typography, Box } from "@mui/material";
import HorizontalCard from "./HorizontalCard";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";



const axios = require("axios");

function MostRead() {
    const [post, setPost] = useState([]);
    const router = useRouter();
  useEffect(() => {
    axios
      .get(`${process.env.API}${router.locale}/6/1/articles/1`)
      .then((set) => setPost(set.data.items));
  }, []);
    const { t, lang } = useTranslation("common");

    const mt = {
      marginTop: "5%",
    };

    const bb = {
      borderBottom: "solid 1px #BABABA",
    };
    const mb = {
      marginBottom: "5px",
    };

    const pb = {
      paddingBottom: "10px",
    };

  return (
    <>
      <Typography
        className="degrade"
        sx={{
          width: "130px",
          height: "45px",
          textAlign: "center",
          color: "white",
          p: "11px",
        }}
      >
        {t("Les plus lus")}
      </Typography>
      <Box className="test" mt="28px">
        {post.slice(0, 5).map((card) => (
          <HorizontalCard
            key={card.id}
            title={card.title}
            date={card.startPublish.date.substring(0, 16)}
            mt={mt}
            borderBottom={bb}
            mb={mb}
            pb={pb}
            link={card.link}
          />
        ))}
      </Box>
    </>
  );
}

export default MostRead;
