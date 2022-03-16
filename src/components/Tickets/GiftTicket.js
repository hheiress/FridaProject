import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";


const GiftTicket = () => {

    return (
        <>
        <article className="tickets-card">
          <img className="cardPoster"src="https://cdn.clorian.com/img/clients/FridaKahlo/products/af_cartel_regalo_840x1200-retocada.png" alt="fridaposter"/>
          <div className="cardPoster-text">
             <h1>GIFT CARD - LIFE AND WORK OF FRIDA KAHLO</h1>
            <p>
            Acciona presents Life and Work of Frida Kahlo, an audiovisual
            exhibition that invites visitors to immerse themselves in the
            artworks of the most renewed Mexican artist of all time. By turning
            the surface of the exhibition space into a symphony of color and
            sound, the exhibition displays more than a hundred images of
            paintings, photographs, videos, and writings of Frida Kahlo.
          </p>
          <p>Where we are?</p>
          <span className="tickets-span">Teatro Instante</span>
          <p>C / Palos de la Frontera, 20</p>
          <p>Madrid</p>
          <Buttons 
          information={"/information"}
          direction={"/buygiftcard"}/>
          </div>
        </article>
        </>
    )
};

export default GiftTicket;