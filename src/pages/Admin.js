import content from "../helpers/data";

import { Card } from "../components";

const Admin = () => {
  return (
    <section
      className={
        "grid grid-cols-1 gap-20 px-3 py-20 2xl:grid-cols-2 2xl:gap-20 2xl:px-32"
      }
    >
      {content.map((card, index) => {
        const { id, title, status, img } = card;

        return (
          <Card
            index={index}
            key={id}
            id={id}
            title={title}
            status={status}
            img={img}
          />
        );
      })}
    </section>
  );
};

export default Admin;
