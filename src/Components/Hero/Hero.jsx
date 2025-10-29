import "./Hero.scss";
import { useTranslation } from "react-i18next";
import Profile from "../../assets/Images/profile-hero.png";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="hero min-h-screen flex justify-center pt-10" id="hero">
      <div className="content w-lg md:w-screen md:px-20 lg:px-48  h-auto flex flex-col gap-30 md:flex-row lg:justify-between items-center mt-20">
        <div className="left-div h-[500px] md:h-[600px] w-full text-center md:text-left text-white flex flex-col justify-between">
          <h1 className="text-6xl md:text-7xl font-semibold">
            {t("hero.title")}
          </h1>
          <p className="text-2xl font-medium text-neutral-400">
            {t("hero.description")}
          </p>
          <button className="w-full md:w-96 h-24 font-bold text-3xl md:text-4xl text-black rounded-2xl">
            {t("hero.button")}
          </button>
        </div>
        <div className="right-div">
          <img
            className="w-lg md:w-lg lg:w-2xl"
            src={Profile}
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
}
