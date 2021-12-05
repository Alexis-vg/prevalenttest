import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Documents } from "..";
import Formulary from "./Formulary";
import Image from "./Image";
import ApproveButton from "../CallToActions/ApproveButton";
import RejectButton from "../CallToActions/RejectButton";

const DataCompany = ({ logo, setStatus, id, ...rest }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  console.log(rest);
  return (
    <div
      className={
        "relative bg-white-pure p-5 mx-2 rounded-lg card-shadow 2xl:mx-auto 2xl:px-24 2xl:pb-40 2xl:w-2/3 "
      }
    >
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: "rounded-xl border-opacity-50 text-left w-2/6",
        }}
      >
        <h1 className={"font-bold text-4xl text-center"}>
          Documentos cargados
        </h1>
        <div className="grid gap-y-5 mx-8 mt-10 mb-5">
          <Documents {...rest} />
        </div>
      </Modal>
      <Image logo={logo} />
      <Formulary {...rest} onOpenModal={onOpenModal} />
      <h2 className={"font-bold text-lg 2xl:hidden"}>Documentos cargados</h2>
      <div className="2xl:hidden">
        <Documents {...rest} />
      </div>
      <div
        className={
          "flex-col items-center mb-10 cursor-pointer 2xl:absolute top-0 right-0 mr-10 hidden 2xl:flex"
        }
      >
        <ApproveButton setStatus={setStatus} id={id} />
        <RejectButton setStatus={setStatus} id={id} />
      </div>
    </div>
  );
};

export default DataCompany;
