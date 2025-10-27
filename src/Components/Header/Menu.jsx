import "./Header.scss";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

export default function Menu({ isOpen, toggleSideBar }) {
  const { t } = useTranslation();
  return (
    <div
      className={`fixed top-0 left-0 h-[100vh] shadow-lg transform sidebar p-3 bg-neutral-950 dark:bg-[rgb(33,33,33)] ${
        isOpen ? "translate-x-0" : "-translate-x-80"
      } transition-transform duration-500 ease-in-out z-70 w-2xs`}
    >
      <div>
        <img
          src="Public/svg/close.svg"
          onClick={toggleSideBar}
          alt="close"
          className="w-10 cursor-pointer"
        />
      </div>

      <div className="w-full h-full flex justify-center items-center pb-30">
        <ul className="p-4 flex text-center flex-col gap-10 text-white">
          <Link to="/">
            <li>{t("header.link1")}</li>
          </Link>
          <a href="#">
            <li>{t("header.link2")}</li>
          </a>
          <a href="#">
            <li>{t("header.link3")}</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
