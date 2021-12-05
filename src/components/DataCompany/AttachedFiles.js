import React from "react";

const AttachedFiles = ({ onOpenModal }) => {
  return (
    <button
      className={
        "hidden 2xl:block card-shadow rounded-lg p-3 px-2 cursor-pointer"
      }
      onClick={onOpenModal}
    >
      <h1 className={"text-lg font-bold"}>
        <span
          className={
            "inline-block w-10 h-10 bg-clipper-icon bg-no-repeat bg-top align-middle"
          }
        />
        Ver archivos adjuntos
      </h1>
    </button>
  );
};

export default AttachedFiles;
