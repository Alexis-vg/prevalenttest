import React from "react";

const Card = ({ title, status, img }) => {
  return (
    <article>
      <img src={img} alt="" />
      <header>
        <h1>{title}</h1>
      </header>
      <footer>{status}</footer>
    </article>
  );
};

export default Card;
