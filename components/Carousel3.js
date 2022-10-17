import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="testing1">
        <Slider className="testing" {...settings}>
          <div>
            <h2> Belier</h2>
            En couple, ne laissez pas l incompréhension s installer. Vous serez
            plein d attentions pour votre conjoint mais une irrésistible envie d
            aventure risque de vous prendre ! Célibataire, une atmosphère
            paisible et sereine va régner sur le domaine de vos amours. Vous
            cherchez par tous les moyens à élargir votre cercle de relations
            professionnelles. Ne négligez pas vos tâches quotidiennes, pour
            autant. Côté finances, ménagez-vous une large marge de manœuvre en
            prévoyant le pire. Le surmenage vous guette!
          </div>
          <div>
            <h2> Taureau</h2>
            En couple, ne laissez pas l incompréhension s installer. Vous serez
            plein d attentions pour votre conjoint mais une irrésistible envie d
            aventure risque de vous prendre ! Célibataire, une atmosphère
            paisible et sereine va régner sur le domaine de vos amours. Vous
            cherchez par tous les moyens à élargir votre cercle de relations
            professionnelles. Ne négligez pas vos tâches quotidiennes, pour
            autant. Côté finances, ménagez-vous une large marge de manœuvre en
            prévoyant le pire. Le surmenage vous guette!
          </div>
          <div>
            <h2> Gémeaux</h2>
            En couple, ne laissez pas l incompréhension s installer. Vous serez
            plein d attentions pour votre conjoint mais une irrésistible envie d
            aventure risque de vous prendre ! Célibataire, une atmosphère
            paisible et sereine va régner sur le domaine de vos amours. Vous
            cherchez par tous les moyens à élargir votre cercle de relations
            professionnelles. Ne négligez pas vos tâches quotidiennes, pour
            autant. Côté finances, ménagez-vous une large marge de manœuvre en
            prévoyant le pire. Le surmenage vous guette!
          </div>
          <div>
            <h2> Cancer</h2>
            En couple, ne laissez pas l incompréhension s installer. Vous serez
            plein d attentions pour votre conjoint mais une irrésistible envie d
            aventure risque de vous prendre ! Célibataire, une atmosphère
            paisible et sereine va régner sur le domaine de vos amours. Vous
            cherchez par tous les moyens à élargir votre cercle de relations
            professionnelles. Ne négligez pas vos tâches quotidiennes, pour
            autant. Côté finances, ménagez-vous une large marge de manœuvre en
            prévoyant le pire. Le surmenage vous guette!
          </div>
          <div>
            <h2> Lion</h2>
            En couple, ne laissez pas l incompréhension s installer. Vous serez
            plein d attentions pour votre conjoint mais une irrésistible envie d
            aventure risque de vous prendre ! Célibataire, une atmosphère
            paisible et sereine va régner sur le domaine de vos amours. Vous
            cherchez par tous les moyens à élargir votre cercle de relations
            professionnelles. Ne négligez pas vos tâches quotidiennes, pour
            autant. Côté finances, ménagez-vous une large marge de manœuvre en
            prévoyant le pire. Le surmenage vous guette!
          </div>
          <div>
            <h2> Vierge</h2>
            En couple, ne laissez pas l incompréhension s installer. Vous serez
            plein d attentions pour votre conjoint mais une irrésistible envie d
            aventure risque de vous prendre ! Célibataire, une atmosphère
            paisible et sereine va régner sur le domaine de vos amours. Vous
            cherchez par tous les moyens à élargir votre cercle de relations
            professionnelles. Ne négligez pas vos tâches quotidiennes, pour
            autant. Côté finances, ménagez-vous une large marge de manœuvre en
            prévoyant le pire. Le surmenage vous guette!
          </div>
        </Slider>
      </div>
    );
  }
}
