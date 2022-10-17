import React from "react";
import { Grid, Container, Box } from "@mui/material";
import Advertising from "../../../../components/layout/Advertising";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HorizontalCard from "../../../../components/Common/HorizontalCard";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import MostRead from "../../../../components/common/MostRead";
import Layout from "../../../../components/Layout/Layout";
import Link from "next/link";
import Image from "next/image";
import Advertising2 from "../../../../public/assets/jibelcode-tt-2.jpg"

function DetailsArticles(props) {
  const articles = props.article;
  const { t, lang } = useTranslation("common");
  const [post, setPost] = useState([]);
  const page = props.page;
  const id = props.id;
  const slug = props.slug;

  const fontSize = {
    fontSize: "25px",
  };

  return (
    <Layout>
      <Container fixed>
        <Grid container spacing={2} pt="50px">
          <Grid item lg={3}>
            <MostRead />
          </Grid>
          <Grid item lg={9} container spacing={2}>
            <Grid item lg={8}>
              {articles.slice(0, 1).map((card) => (
                <HorizontalCard
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  slug={card.slug}
                  intro="مكرم و شهرزاد المعروفان ب صاحبا مشروعالذي يتمثل في خلق فرص سفر من قبل صانعي محتوى و يقودها مرشدون محليون . فكرة إنشاء هذا  مكرم و شهرزاد المعروفان ب صاحبا مشروع الذي يتمثل في خلق فرص سفر من قبل صانعي محتوى و يقودها مرشدون محليون . فكرة إنشاء هذا ..."
                  date={card.startPublish.date.substring(0, 16)}
                  fontSize={fontSize}
                  link={card.link}
                />
              ))}
            </Grid>
            <Grid item lg={4}>
              {articles.slice(2, 4).map((card) => (
                <Grid item sm={6} md={12} lg={12} key={card.id}>
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
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <Box minHeight="250px" sx={{ mt: "60px" }}>
              <Image src={Advertising2} alt="" />
            </Box>
            <Box minHeight="250px" sx={{ mt: "60px" }}>
              <Image src={Advertising2} alt="" />
            </Box>
            <Box minHeight="250px" sx={{ mt: "60px" }}>
              <Image src={Advertising2} alt="" />
            </Box>
          </Grid>
          <Grid item lg={9} container spacing={2} justifyContent="center">
            <Grid item md={12} lg={12}>
              <Advertising />

              <Grid container spacing={2} mt="5%">
                {articles.slice(3, 12).map((card) => (
                  <Grid item sm={6} md={4} lg={4} key={card.id}>
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
            <Box mt="5%">
              <Pagination
                color="tertiary"
                count={props.pagination.pages}
                page={page}
                className="pagination-nav"
                renderItem={(item) => (
                  <PaginationItem
                    components={{
                      previous: ArrowForwardIcon,
                      next: ArrowBackIcon,
                      Link,
                    }}
                    href={`/articles/${id}/${slug}/${item.page}`}
                    {...item}
                  />
                )}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id, page, slug } = context.query;
  // Fetch data from external API
  const res = await fetch(
    `${process.env.API}${context.locale}/12/${page}/articles/${id}`
  );
  const article = await res.json();

  // Pass data to the page via props
  return {
    props: {
      article: article.items,
      topic: article.topic,
      pagination: article.pagination,
      id: parseInt(id),
      page: parseInt(page),
      slug: slug,
    },
  };
}

export default DetailsArticles;
