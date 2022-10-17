import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";


function VerticalCard(props) {
  const mt = props ? props.mt : {};
  const flex = props ? props.flex : {};
  const fdr = props ? props.flexDirection : {};
  const vcwidth = props ? props.width : {};
  const flexgrow = props ? props.flexGrow : {};
  const fontSize = props ? props.fontSize : {};

  const { t, lang } = useTranslation("common");


  return (
    <Box display="flex" mt={mt} flexGrow={flexgrow}>
      <Box width={vcwidth.first}>
        <Image src={props.image} layout="responsive"
          width={16}
          height={16}
          objectFit="cover"
          alt="..." />
      </Box>
      <Box className="vbox" width={vcwidth.second} position="relative">
        {props.label && (
          <Typography
            sx={{
              width: "90px",
              textAlign: "center",
              bgcolor: "#7A3792",
              color: "white",
              mb: "8px",
            }}
          >
            {props.label}
          </Typography>
        )}
        <Link href={props.link}>
          <Typography
            variant="title"
            component="h3"
            ml="1px"
            fontSize={fontSize}
          >
            {props.title}
          </Typography>
        </Link>
        <Box flex={flex} flexDirection={fdr}>
          <Typography sx={{ color: "gray", mt: "10px" }}>
            {props.intro}
          </Typography>
          <Typography
            mt="10px"
            mb="5px"
            component="p"
            variant="caption"
            sx={{ color: "gray" }}
          >
            {t("Publié le")} {props.date.substring(0, 11)} {t("à")} {props.date.substring(11)}
          </Typography>
        </Box>
        {props.lien && (
          <Box
            display="flex"
            position="absolute"
            right="0"
            bottom="75px"
            color="#D4248A"
            alignItems="center"
          >
            <Typography variant="caption">{t("Continuez à lire")}</Typography>
            <Typography ml="10px">➔</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default VerticalCard;
