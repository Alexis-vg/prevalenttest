import { useNavigate } from "react-router-dom";

const Card = ({ title, status, img }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/aprobacion-empresas`);
  };

  return (
    <article
      onClick={handleClick}
      className={
        "relative bg-white-pure card-shadow rounded-lg h-44 cursor-pointer"
      }
    >
      <section className={"grid grid-cols-cards "}>
        <figure
          className={
            "absolute col-start-1 col-end-2 -top-6 left-4 flex p-2 bg-blue-gdm w-16 h-16 rounded-lg card-shadow "
          }
        >
          <img src={img} alt={title} />
        </figure>
        <h1 className={"col-start-2 col-end-3 my-3 mr-7 font-normal text-2xl"}>
          {title}
        </h1>
      </section>
      <footer
        className={
          "absolute bottom-0 w-full text-gray-dust py-2 px-4 text-xs font-normal border-gray-languid border-t-2"
        }
      >
        <i
          className={
            "mr-2 align-bottom bg-clock-icon inline-block w-5 h-5 bg-no-repeat"
          }
        />
        {status}
      </footer>
    </article>
  );
};

export default Card;
