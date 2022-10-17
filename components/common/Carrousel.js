import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OverlayCard from "./OverlayCard";


export default function MultipleItems(props) {

  const data = props ? props.data : {};
  const pl = props.paddingLeft ? props.paddingLeft : {};
  const pr = props.paddingRight ? props.paddingRight : {};

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((card) => (
          <OverlayCard
            key={card.id}
            image={card.image}
            title={card.title}
            date={card.startPublish.date.substring(0, 16)}
            paddingLeft={pl}
            paddingRight={pr}
          />
        ))}
      </Slider>
    </>
  );
}
