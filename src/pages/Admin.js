import React from "react";
import content from "../helpers/data";

import { Card } from "../components";

const Admin = () => {
  return (
    <section
      className={
        "grid grid-cols-1 gap-20 px-3 py-20 2xl:grid-cols-2 2xl:gap-20 2xl:px-32"
      }
    >
      {content.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          status={card.status}
          img={card.img}
        />
      ))}
    </section>
  );
};

export default Admin;
