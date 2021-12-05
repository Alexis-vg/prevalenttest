import Logo from "../../assets/icons/logo.svg";
import Menu from "../../assets/icons/burguer-menu.svg";

const Header = () => {
  return (
    <header className="bg-gray-navbar px-6">
      <nav className={" flex items-center justify-between "}>
        <section className={"flex items-center"}>
          <figure className={"relative  cursor-pointer"}>
            <img
              alt="gente prevalente logo"
              src={Logo}
              className={"rounded-sm w-full h-full object-cover"}
            />
          </figure>
          <h1 className={"text-white-pure font-bold text-base mt-1"}>
            Gente Prevalente
          </h1>
        </section>
        <img src={Menu} alt="" />
      </nav>
    </header>
  );
};

export default Header;
