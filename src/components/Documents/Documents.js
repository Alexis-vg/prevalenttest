import React from "react";
import Document from "./Document";

const Documents = ({ documents }) => {
  console.log(documents);
  return (
    <div className="grid gap-y-5 mx-4 mt-10 mb-5 2xl:mt-0 ">
      {documents.map((document) => (
        <Document key={document.id} {...document} />
      ))}
    </div>
  );
};

export default Documents;
