import axios from "axios";
import { toast } from "react-toastify";

const RejectButton = ({ id }) => {
  const rejectCompany = async () => {
    toast.info("Empresa Rechazada", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    await axios.put(`http://localhost:8080/api/companies/${id}`, {
      status: "rejected",
    });
  };
  return (
    <button onClick={rejectCompany}>
      <h1 className="font-bold text-lg bg-white-pure rounded-2xl card-shadow py-2 px-5 pr-8 active:bg-gray-200">
        {" "}
        <span
          className={
            "inline-block w-7 h-7 bg-center bg-contain bg-reject-red-icon align-bottom mr-3"
          }
        />
        Rechazar Empresa
      </h1>
    </button>
  );
};

export default RejectButton;
