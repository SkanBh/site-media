import React from "react";
import {
  Typography,
  Grid,
  Box,
  TextField,
  Container,
  Hidden,
} from "@mui/material";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import useTranslation from "next-translate/useTranslation";

function Footer() {
  const { t, lang } = useTranslation("common");

  return (
    <Box component="footer" sx={{ paddingTop: "50px" }}>
      <Grid container spacing={1} sx={{ width: "100%" }}>
        <Grid item sm={12} md={12} lg={12} xl={12} className="degrade">
          <Container fixed>
            <Typography
              variant="h4"
              component="h5"
              color="white"
              sx={{
                fontSize: { xs: "18px", md: "28px", lg: "38px" },
                pt: "25px",
              }}
            >
              {t("Newsletter")}
            </Typography>
            <TextField
              className="textfield"
              sx={{
                mt: "2%",
                width: "100%",
                input: {
                  color: "white",
                  fontSize: { xs: "14px", md: "18px", lg: "28px" },
                },
              }}
              id="standard-size-small"
              defaultValue="insérer votre adresse email"
              size="medium"
              variant="standard"
              color="warning"
            />
            <Box
              sx={{
                mt: "20px",
                mb: "30px",
                borderRadius: "50px",
                width: "120px",
                height: "45px",
                color: "#D4248A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "white",
              }}
            >
              <Typography variant="caption" fontSize="14px">
                S ABONNER
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item sm={12} md={12} lg={12} xl={12} pb="8px">
          <Container fixed>
            <Grid container spacing={1}>
              <Grid item lg={4} md={4} sm={6} color="gray">
                <Box margin="15px 10%">
                  <Image src={Logo} width={180} height={60} alt=""/>
                </Box>

                <Typography mt="20px">
                  Adresse: 10.A.Azzam, Bloc A,A43 <br /> Résidence Wifek,
                  Montplaisir
                </Typography>
                <Typography mt="20px">Telephone: (+216) 71 905 620</Typography>
                <Typography mt="20px" mb="10px">
                  Email: arabesquetunisie@gmail.com
                </Typography>
              </Grid>
              <Hidden only={["xs", "sm"]}>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xs={6}
                  display="flex"
                  flexDirection="row"
                  color="gray"
                  justifyContent="space-around"
                >
                  <Box>
                    <Typography mt="10px">{t("Accueil")}</Typography>
                    <Typography mt="10px">{t("National")}</Typography>
                    <Typography mt="10px">{t("Regional")}</Typography>
                    <Typography mt="10px">{t("International")}</Typography>
                    <Typography mt="10px">{t("Sport")}</Typography>
                    <Typography mt="10px">{t("Economie")}</Typography>
                    <Typography mt="10px">{t("Faits divers")}</Typography>
                  </Box>
                  <Box>
                    <Typography mt="10px">{t("Culture et Art")}</Typography>
                    <Typography mt="10px">{t("Technologies")}</Typography>
                    <Typography mt="10px">{t("Videos")}</Typography>
                    <Typography mt="10px">{t("Recette du jour")}</Typography>
                    <Typography mt="10px">{t("Fashion Police")}</Typography>
                    <Typography mt="10px">{t("Lifestyle")} </Typography>
                  </Box>
                </Grid>
              </Hidden>
              <Grid item lg={4} md={4} xs={6}>
                <Box sx={{ textAlign: "end" }}>
                  <Typography
                    sx={{
                      color: "#D32489",
                      mt: "35px",
                      fontSize: "18px",
                      marginRight: { sm: "52%", md: "50%", lg: "45%" },
                    }}
                  >
                    {t("Suivez nous")}
                  </Typography>
                  <Box mt="25px">
                    <FacebookOutlinedIcon
                      className="fbIcon"
                      sx={{
                        border: "solid 1px",
                        borderRadius: "25px",
                        color: "gray",
                        p: "10px",
                        width: "50px",
                        height: "50px",
                      }}
                    />
                    <TwitterIcon
                      sx={{
                        border: "solid 1px",
                        borderRadius: "25px",
                        color: "gray",
                        p: "10px",
                        width: "50px",
                        height: "50px",
                        mx: "4%",
                      }}
                    />
                    <InstagramIcon
                      sx={{
                        border: "solid 1px",
                        borderRadius: "25px",
                        color: "gray",
                        p: "10px",
                        width: "50px",
                        height: "50px",
                        mx: "4%",
                      }}
                    />
                    <YouTubeIcon
                      className="ytIcon"
                      sx={{
                        border: "solid 1px",
                        borderRadius: "25px",
                        color: "gray",
                        p: "10px",
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid
          item
          sm={12}
          md={12}
          lg={12}
          xl={12}
          bgcolor="#7A3792"
          height="50px"
          width="100%"
        >
          <Container
            fixed
            sx={{ display: "flex", justifyContent: "space-between", pt: "4px" }}
          >
            <Typography color="white">{t("Arabesque")}</Typography>
            <Typography color="white">{t("Développé")}</Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
