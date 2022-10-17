import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

function HorizontalCard(props) {
  const width = props.width ? props.width : {};
  const mt = props.mt ? props.mt : {};
  const bb = props.borderBottom ? props.borderBottom : {};
  const fontSize = props.fontSize ? props.fontSize : {};
  const mb = props.mb ? props.mb : {};
  const pb = props.pb ? props.pb : {};
  const pl = props.paddingLeft ? props.paddingLeft : {};
  const pr = props.paddingRight ? props.paddingRight : {};
  const { t, lang } = useTranslation("common");

  return (
    <Box width={width} className="test2" paddingLeft={pl} paddingRight={pr}>
      {props.image && (
        <Image
          src={props.image}
          layout="responsive"
          width={16}
          height={9}
          objectFit="cover"
          alt="..."
        />
      )}

      {props.label && (
        <Typography
          className="label"
          sx={{
            width: "90px",
            textAlign: "center",
            bgcolor: "#7A3792",
            color: "white",
            my: "8px",
            pb: "2px",
          }}
        >
          {props.label}
        </Typography>
      )}
      {props.title && (
        <Link href={props.link}>
          <Typography
            variant="title"
            component="h3"
            ml="1px"
            mt={mt}
            fontSize={fontSize}
          >
            {props.title}
          </Typography>
        </Link>
      )}
      {props.intro && (
        <Typography sx={{ color: "gray", mt: "10px" }}>
          {props.intro}
        </Typography>
      )}
      {props.date && (
        <Typography
          ml="1px"
          borderBottom={bb}
          mt="10px"
          mb={mb}
          pb={pb}
          component="p"
          variant="caption"
          sx={{ color: "gray" }}
        >
          {t("Publié le")} {props.date.substring(0, 11)} {t("à")}{" "}
          {props.date.substring(11)}
        </Typography>
      )}
    </Box>
  );
}

export default HorizontalCard;
