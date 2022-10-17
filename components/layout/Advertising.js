import React from "react";
import Image from "next/image";
import Publicité from "../../public/assets/f2e61a5d444c0d432b632fb412b3ba2d.png";
import { Box } from "@mui/material";

function advertising() {
  return <Image src={Publicité} layout="responsive" alt="publicité" />;
}

export default advertising;
