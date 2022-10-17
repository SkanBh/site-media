import React from "react";
import Logo from "../../public/assets/logo.png";
import { Box, Grid, Typography, Container, TextField } from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Advertising from "./Advertising";
import useTranslation from "next-translate/useTranslation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";

const axios = require("axios");

function Header() {
  const router = useRouter();
  const { t, lang } = useTranslation("common");
  const [pagelist, setpagelist] = useState([]);
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [language, setLanguage] = useState(true);
  const toggleLanguage = () => {
    setLanguage(!language);
  };

  useEffect(() => {
    axios
      .get(`${process.env.API}${router.locale}/menus/1/links`)
      .then((res) => setpagelist(res.data.items));
  }, []);

  const list = () => (
    <Box>
      <List>
        {Array.isArray(pagelist)
          ? pagelist.map((text, index) => (
              <ListItem key={Math.random()}>
                <Link href={text.link}>
                  <ListItemButton>{text.label}</ListItemButton>
                </Link>
              </ListItem>
            ))
          : null}
      </List>
    </Box>
  );

  return (
    <Container fixed component="header" sx={{ mt: "1%" }}>
      <Grid container spacing={1} alignItems="center">
        <Grid className="logoHeader" item sm={6} md={6} lg={6}>
          <Link href="/"><a><Image src={Logo} alt="Logo" /></a></Link>
        </Grid>
        <Grid item sm={6} md={6} lg={6} display="flex" justifyContent="end">
          <Box
            className="separateur"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <TextField id="input-with-sx" variant="standard" />
            <SearchIcon fontSize="small" sx={{ color: "#D32489", my: 0.5 }} />
          </Box>

          <Box className="separateur" display="flex" alignItems="center">
            <Link href={`/`} locale={language ? "fr" : "ar"}>
              <Box
                //onClick={() => toggleLanguage()}
                sx={{ color: "#D32489", cursor: "pointer", display:'flex' }}
              >
                <LanguageIcon fontSize="small" />
                <Typography
                  className="language"
                  variant="caption"
                  color="#D32489"
                >
                  {language ? "FR" : "AR"}
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box
            sx={{
              border: "solid 1px",
              borderRadius: "50px",
              width: "120px",
              height: "45px",
              color: "#D32489",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => setisDrawerOpen(true)}
          >
            <MenuIcon fontSize="medium" />
            <Typography className="menu" variant="caption" mt="2px">
              {t("Menu")}
            </Typography>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setisDrawerOpen(false)}
            >
              {list()}
            </Drawer>
          </Box>
        </Grid>
        <Grid item md={12} lg={12} sx={{ textAlign: "center" }}>
          <Advertising />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
