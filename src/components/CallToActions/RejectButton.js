import axios from "axios";

const RejectButton = ({ setStatus, id }) => {
  const rejectCompany = async () => {
    await axios.put(`http://localhost:8080/api/companies/${id}`, {
      status: "rejected",
    });
    setStatus("rejected");
  };
  return (
    <button onClick={rejectCompany}>
      <h1 className="font-bold text-lg bg-white-pure rounded-2xl card-shadow py-2 px-5 pr-8">
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
