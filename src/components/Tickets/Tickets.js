import React from "react";
import TheatreTicket from "./TheatreTicket";
import GiftTicket from "./GiftTicket";

const Tickets = () => {
  return (
    <>
      <section className="tickets">
        <p className="tickets-text">Tickets</p>
        <TheatreTicket />
        <GiftTicket />
      </section>
    </>
  );
};

export default Tickets;
