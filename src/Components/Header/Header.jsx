import "./Header.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="w-full flex justify-center bg-neutral-950 text-white absolute">
      <nav className="w-full max-w-screen-xl h-25 flex items-center justify-between px-4">
        <div className="flex items-center gap-3 font-medium">
          <img
            className="w-[50px] h-[50px]"
            src="/Public/images/avatar.png"
            alt="avatar"
          />
          <p className="myName text-xl lg:text-2xl">{t("header.name")}</p>
        </div>

        <ul className="lg:text-2xl hidden md:flex gap-15">
          <li>{t("header.link1")}</li>
          <li>{t("header.link2")}</li>
          <li>{t("header.link3")}</li>
        </ul>
        <div>
          <p className="myName text-xl lg:text-2xl font-medium">
            Frontend Developer
          </p>
        </div>
      </nav>
    </header>
  );
}
