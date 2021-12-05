import { useNavigate } from "react-router-dom";

const Card = ({ title, status, img, index }) => {
  console.log(index);
  const navigate = useNavigate();

  const handleClick = () => {
    if (index === 0) {
      navigate(`/aprobacion-empresas`);
    }
  };

  return (
    <article
      onClick={handleClick}
      className={
        "relative bg-white-pure card-shadow rounded-lg h-44 2xl:h-96 cursor-pointer transform hover:scale-105 transition duration-500 ease-in-out"
      }
    >
      <section className={""}>
        <figure
          className={
            "absolute -top-7 left-4 flex p-2 bg-blue-gdm w-16 h-16 rounded-lg card-shadow 2xl:w-28 2xl:h-28 2xl:ml-4"
          }
        >
          <img src={img} alt={title} />
        </figure>
        <h1
          className={
            "ml-24 mr-2 mt-2 font-normal text-2xl 2xl:text-4xl 2xl:mt-32 2xl:ml-8"
          }
        >
          {title}
        </h1>
      </section>
      <footer
        className={
          "absolute bottom-0 w-full text-gray-dust py-2 px-4 text-xs font-normal border-gray-languid border-t-2 2xl:text-sm 2xl:py-7 2xl:pl-8"
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
