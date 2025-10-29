import "./Projects.scss";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import FinalProject from "../../assets/Images/final-project.png";
import FindFilm from "../../assets/Images/find-film.png";
import Currency from "../../assets/Images/currency-exchange.png";
import WeatherApp from "../../assets/Images/weatherApp.png";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section
      className="min-h-screen flex items-center justify-center flex-col"
      id="projects"
    >
      <div className="w-screen mt-30 mb-30 md:px-20 lg:px-48">
        <div className="w-full text-center md:text-left">
          <h1 className="text-white text-5xl font-semibold">
            {t("projects.title")}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-15 px-4 pt-20">
          <ProjectCard
            name={t("projects.final-project.title")}
            description={t("projects.final-project.description")}
            url={FinalProject}
            web="https://revaz-gelashvili.github.io/final-project/gravity-9.html"
          />
          <ProjectCard
            name={t("projects.find-film.title")}
            description={t("projects.find-film.description")}
            url={FindFilm}
            web="https://revaz-gelashvili.github.io/Middle-Project/"
          />
          <ProjectCard
            name={t("projects.currency.title")}
            description={t("projects.currency.description")}
            url={Currency}
            web="https://revaz-gelashvili.github.io/react-lecture-2/"
          />
          <ProjectCard
            name={t("projects.weatherapp.title")}
            description={t("projects.weatherapp.description")}
            url={WeatherApp}
            web="https://revaz-gelashvili.github.io/YourWeather/"
          />
        </div>
      </div>
    </section>
  );
}
