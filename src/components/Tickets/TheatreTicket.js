import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

const TheatreTicket = () => {

    return (
        <>
        <article className="tickets-card">
          <img className="cardPoster"src="https://cdn.clorian.com/img/clients/FridaKahlo/products/ult_product-cartel-transparent.png" alt="fridaposter"/>
          <div className="cardPoster-text">
             <h1>LIFE AND WORK OF FRIDA KAHLO</h1>
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
          <p>There is always a good occasion to give Frida Kahlo as a gift, <a href="https://tickets.accionaexhibitions.com/en/784-web-individual/4448-gift-card-life-and-work-of-frida-kahlo">buy your tickets here.</a></p>
          <Buttons
          information={"/information"}
          direction={"/buygiftcard"}/> 
          </div>
        </article>
        </>
    )
};

export default TheatreTicket;