import Logo from "../../assets/icons/logo.svg";
import Menu from "../../assets/icons/burguer-menu.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-navbar px-6">
      <nav className={" flex items-center justify-between "}>
        <section className={"flex items-center"}>
          <Link to="/">
            <figure className={"relative  cursor-pointer"}>
              <img
                alt="gente prevalente logo"
                src={Logo}
                className={"rounded-sm w-full h-full object-cover"}
              />
            </figure>
          </Link>
          <h1 className={"text-white-pure font-bold text-base mt-1"}>
            Gente Prevalente
          </h1>
        </section>
        <div className={"relative hidden 2xl:block"}>
          <input className={"bg-red-500 py-1 px-3"} type="text" />
          <span className={"absolute top-1 left-2 text-white-pure"}>
            <i className="inline-block bg-spyglass-white-icon w-5 h-5 bg-no-repeat align-bottom"></i>{" "}
            Buscar...
          </span>
        </div>
        <ul className={"hidden 2xl:flex w-2/4 justify-between items-center"}>
          <li className={"text-white-pure"}>
            <span
              className={
                " inline-block w-6 h-5 bg-gear-white-icon align-top bg-center mr-3"
              }
            />
            Administracion
          </li>
          <li className={"text-white-pure"}>
            <span
              className={
                "inline-block w-6 h-5 bg-building-white-icon align-top bg-center mr-3"
              }
            />
            Empleo
            <span
              className={
                "inline-block w-6 h-5 bg-down-arrow-white-icon align-top bg-center mr-3 bg-no-repeat ml-3"
              }
            />
          </li>
          <li className={"text-white-pure"}>
            <span
              className={
                "inline-block w-6 h-5 bg-cv-white-icon align-top bg-center mr-3"
              }
            />
            Mi CV
          </li>
          <div className={"flex items-center"}>
            <span
              className={"inline-block w-8 h-8 bg-anonymous-profile-icon"}
            />
            <h1 className={"text-white-pure ml-2"}>Daniel</h1>
            <span
              className={
                "inline-block w-6 h-5 bg-down-arrow-white-icon align-middle bg-center bg-no-repeat ml-2"
              }
            />
          </div>
        </ul>
        <img className={"2xl:hidden"} src={Menu} alt="" />
      </nav>
    </header>
  );
};

export default Header;
