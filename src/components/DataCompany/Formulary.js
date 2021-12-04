const Formulary = ({ id, name, businessName, NIT, employees, status }) => {
  return (
    <div className={"mt-7"}>
      <label className={"text-sm opacity-70 block"}>Nombre de la empresa</label>
      <p className={"font-bold text-base uppercase mb-14 border-b-2"}>{name}</p>
      <label className={"text-sm opacity-70 block"}>Razón Social</label>
      <p className={"font-bold text-base uppercase mb-14 border-b-2"}>
        {businessName}
      </p>
      <label className={"text-sm opacity-70 block"}>
        Tipo de identificación
      </label>
      <p className={"font-bold text-base uppercase mb-14 border-b-2"}>{NIT}</p>
      <label className={"text-sm opacity-70 block"}>Identificación</label>
      <p className={"font-bold text-base uppercase mb-14 border-b-2"}>{id}</p>
      <label className={"text-sm opacity-70 block"}># de empleados</label>
      <p className={"font-bold text-base uppercase mb-14 border-b-2"}>
        {employees}
      </p>
    </div>
  );
};

export default Formulary;
