import React from "react";
import Layout from "../../../components/Layout/Layout";
import { Container, Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import MostRead from "../../../components/common/MostRead";
import Advertising from "../../../components/layout/Advertising";
import HorizontalCard from "../../../components/common/HorizontalCard";
import useTranslation from "next-translate/useTranslation";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

function article(props) {
  const article = props.article;
  const similars = props.similars;
  
  const { t, lang } = useTranslation("common");


  return (
    <Layout>
      <Container fixed>
        <Grid container spacing={2} pt="50px">
          <Grid item lg={9}>
            <Typography sx={{fontWeight:'bold'}} variant="h3">
              {article.title}
            </Typography>
            <Typography mt="25px">
            {t("Publié le")} {article.startPublish.date.substring(0, 10)} {t("à")} {article.startPublish.date.substring(11,16)}
            </Typography>
            <Box mt="25px">
              <Image
                src={article.image}
                alt="..."
                layout="responsive"
                width={16}
                height={9}
              />
            </Box>
            <Typography
              dangerouslySetInnerHTML={{ __html: article.description }}
            ></Typography>
            <Box mt="25px">
              <FacebookShareButton
                url={"https://github.com/next-share"}
                quote={
                  "next-share is a social share buttons for your next React apps."
                }
                hashtag={"#nextshare"}
              >
                <FacebookIcon size={45} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://github.com/next-share"}
                title={
                  "next-share is a social share buttons for your next React apps."
                }
              >
                <TwitterIcon size={45} round />
              </TwitterShareButton>
              <LinkedinShareButton url={"https://github.com/next-share"}>
                <LinkedinIcon size={45} round />
              </LinkedinShareButton>
            </Box>
            <Box mt="25px"> FACEBOOK COMMENTS</Box>
            <Advertising />
            <Typography mt="25px" sx={{fontWeight:'bold'}} variant="h3">
              {t("Lire aussi")}
            </Typography>
            <Grid container spacing={2} mt="25px">
              {similars.map((card) => (
                <Grid item sm={6} md={4} lg={3} key={card.id}>
                  <HorizontalCard
                    image={card.image}
                    title={card.title}
                    date={card.startPublish.date.substring(0, 16)}
                    link={card.link}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item lg={3}>
            <MostRead />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id, page, slug } = context.query;
  // Fetch data from external API
  const res = await fetch(`${process.env.API}${context.locale}/article/${id}`);
  const article = await res.json();

  // Pass data to the page via props
  return {
    props: {
      article: article.article,
      similars: article.similars,
      id: parseInt(id),
      page: parseInt(page),
      slug: slug,
    },
  };
}

export default article;
