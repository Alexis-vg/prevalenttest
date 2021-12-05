import React from "react";

const Buttons = ({ prevPage, nextPage, increment, companies }) => {
  return (
    <div
      className={
        "flex justify-between items-center my-9 mx-2 2xl:order-last 2xl:mt-10 2xl:w-96 2xl:mx-auto"
      }
    >
      <button
        onClick={prevPage}
        className={"w-9 h-9 bg-center bg-contain bg-prev-arrow-icon"}
      />
      <p className={"opacity-75 text-sm"}>
        Empresa {increment + 1} de {companies.length} pendiente por aprovación
      </p>
      <button
        onClick={nextPage}
        className={"w-9 h-9 bg-center bg-contain bg-next-arrow-icon"}
      />
    </div>
  );
};

export default Buttons;
