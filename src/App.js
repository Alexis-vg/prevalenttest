import React from "react";
import { Card, Header } from "./components";
import content from "./helpers/data";
function App() {
  return (
    <>
      <Header />
      <section className={"grid gap-20 px-3 py-20"}>
        {content.map((card) => (
          <Card title={card.title} status={card.status} img={card.img} />
        ))}
      </section>
    </>
  );
}

export default App;
