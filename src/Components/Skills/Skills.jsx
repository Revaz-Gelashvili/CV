import "./Skills.scss";
import { useTranslation } from "react-i18next";
import HTML5 from "../../assets/svg/html5.svg";
import CSS3 from "../../assets/svg/css3.svg";
import JS from "../../assets/svg/js.svg";
import Bootstrap5 from "../../assets/svg/bt5.svg";
import ReactLogo from "../../assets/svg/react.svg";
import Sass from "../../assets/svg/sass.svg";
import Tailwind from "../../assets/svg/tailwind.svg";
import TypeScript from "../../assets/svg/ts.svg";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen skills" id="skills">
      <div className="py-20">
        <div className="text-center">
          <h1 className="text-white text-6xl font-medium">
            {t("skills.title")}
          </h1>
        </div>
        <div className="md:px-20 lg:px-48 flex justify-between mt-25">
          <div className="flex flex-col gap-15">
            <img src={HTML5} alt="Html5" />
            <img src={CSS3} alt="CSS3" />
            <img src={JS} alt="JavaScript" />
            <img src={Bootstrap5} alt="Bootstrap 5" />
          </div>
          <div className="flex flex-col gap-15  ">
            <img src={ReactLogo} alt="React" />
            <img src={Sass} alt="Sass" />
            <img src={Tailwind} alt="Tailwind CSS" />
            <img src={TypeScript} alt="TypeScript" />
          </div>
        </div>
      </div>
    </section>
  );
}
