import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HorizontalCard from "./HorizontalCard";


export default function MultipleItems2(props) {
  
  const data = props ? props.data : {}
  const pl = props.paddingLeft ? props.paddingLeft : {} ;
  const pr = props.paddingRight ? props.paddingRight : {} ;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings} >
        {data.map((card) => (
          <HorizontalCard 
            key={card.id}
            image={card.image}
            label={card.label}
            title={card.title}
            date={card.startPublish.date.substring(0, 16)}
            paddingLeft={pl} paddingRight={pr}
            link={card.link}
          />
        ))}
      </Slider>
    </>
  );
}
