import "./Header.scss";
import { useTranslation } from "react-i18next";
import LanguageBtn from "../../Language/Language.jsx";
import { Link } from "react-router-dom";

export default function Header({ toggleSideBar }) {
  const { t } = useTranslation();
  return (
    <header className="w-full flex justify-center bg-neutral-950 text-white absolute">
      <nav className="w-full max-w-screen-2xl h-25 flex items-center justify-between px-4">
        <div className="flex items-center gap-3 font-medium">
          <img
            className="w-[50px] h-[50px]"
            src="/Public/images/avatar.png"
            alt="avatar"
          />
          <p className="myName text-xl lg:text-2xl">{t("header.name")}</p>
        </div>

        <ul className="lg:text-2xl hidden md:flex gap-15">
          <a href="#skills">
            <li>{t("header.link1")}</li>
          </a>
          <a href="#projects">
            <li>{t("header.link2")}</li>
          </a>
          <a href="#">
            <li>{t("header.link3")}</li>
          </a>
        </ul>

        <div className="flex gap-5">
          <div>
            <p className="myName hidden md:block text-xl lg:text-2xl font-medium">
              {t("header.position")}
            </p>
          </div>
          <LanguageBtn />
          <img
            onClick={toggleSideBar}
            className="w-10 md:hidden"
            src="Public/svg/menu.svg"
            alt="menu"
          />
        </div>
      </nav>
    </header>
  );
}
