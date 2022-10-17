import React from "react";
import Layout from "../../../components/layout/Layout";
import { Container, Grid, Typography, Box  } from "@mui/material";
import MostRead from "../../../components/common/MostRead";
import Advertising from "../../../components/layout/Advertising";
import HorizontalCard from "../../../components/common/HorizontalCard"
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
  } from "next-share";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Advertising2 from "../../../public/assets/jibelcode-tt-2.jpg"




export async function getServerSideProps(context) {
  const { id, slug } = context.query;
  // Fetch data from external API
  const res = await fetch(
    `${process.env.API}${context.locale}/album/${id}/${slug}`
  );
  const album = await res.json();
  // Pass data to the page via props
  return {
    props: {
      album: album.album,
      similars: album.similars,
    },
  };
}

function album(props) {
  console.log(props);
  const album = props.album;
  const similars = props.similars;
  
  const { t, lang } = useTranslation("common");


  return (
    <Layout>
      <Container fixed>
        <Grid container spacing={2} pt="50px">
          <Grid item lg={9}>
            <Typography sx={{fontWeight:'bold'}} variant="h3">
              {album.title}
            </Typography>
            <Typography mt="25px">
              {album.startPublish.date.substring(0, 16)}
            </Typography>
            <Image src={album.image} alt="..." layout="responsive" width={16} height={9}/>
            <Box mt="25px">
              <FacebookShareButton url={album.link} quote={album.slug}>
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
            <Typography
              dangerouslySetInnerHTML={{ __html: album.description }}
            ></Typography>
            <Advertising />
            <Typography mt="25px" sx={{fontWeight:'bold'}} variant="h3">
              {t("Voir aussi")}
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
            <Box minHeight="250px" sx={{mt:'30px'}}>
              <Image src={Advertising2} alt="" />
            </Box>
            <Box minHeight="250px" sx={{mt:'30px'}}>
              <Image src={Advertising2} alt="" />
            </Box>
            <Box minHeight="250px" sx={{mt:'30px'}}>
              <Image src={Advertising2} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default album;
