import React from 'react'
import Image from 'next/image'
import { Typography, Box } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import useTranslation from "next-translate/useTranslation";



function OverlayCard(props) {

  const pl = props.paddingLeft ? props.paddingLeft : {};
  const pr = props.paddingRight ? props.paddingRight : {};
  const { t, lang } = useTranslation("common");


  return (
    <Box
      position="relative"
      textAlign="right"
      paddingLeft={pl}
      paddingRight={pr}
    >
      <Image
        className="brightness"
        src={props.image}
        layout="responsive"
        width={16}
        height={11}
        quality={100}
        alt="..."
      />
      <Box position="absolute" bottom="0" padding="10px" color="white">
        <Typography
          variant="title"
          component="h3"
        >
          {props.title}
        </Typography>
        <Typography mt="10px" mb="5px" component="p" variant="caption">
        {t("Publié le")} {props.date.substring(0, 11)} {t("à")} {props.date.substring(11)}
        </Typography>
      </Box>
      <Box position="absolute" color="white" bottom="45%" right="45%">
        <PlayCircleOutlineIcon fontSize="large" />
      </Box>
    </Box>
  );
}

export default OverlayCard