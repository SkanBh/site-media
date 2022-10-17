import React from "react";
import Layout from "../../components/layout/Layout";
import { Container, Grid, Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import HorizontalCard from "../../components/common/HorizontalCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

function videos1(props) {
  const videos = props.videos;
  const page = props.page;
  const pagination = props.pagination;

  return (
    <Layout>
      <Container fixed>
        <Grid container spacing={2} pt="50px" justifyContent="center">
          <Grid item lg={12} container spacing={2}>
            {videos.map((card) => (
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
          <Box mt="5%">
            <Pagination
              color="tertiary"
              count={pagination.pages}
              page={page}
              className="pagination-nav"
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowForwardIcon,
                    next: ArrowBackIcon,
                    Link,
                  }}
                  href={`/videos/${item.page}`}
                  {...item}
                />
              )}
            />
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { page } = context.query;
  // Fetch data from external API
  const res = await fetch(`${process.env.API}${context.locale}/videos/${page}`);
  const videos = await res.json();

  // Pass data to the page via props
  return {
    props: {
      videos: videos.items,
      pagination: videos.pagination,
      page: parseInt(page),
    },
  };
}

export default videos1;
