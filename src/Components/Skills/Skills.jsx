import "./Skills.scss";
import { useTranslation } from "react-i18next";
import GradientBar from "./GradientBar";
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
    <section className="min-h-screen skills flex justify-center" id="skills">
      <div className="py-20 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-white text-6xl font-medium">
            {t("skills.title")}
          </h1>
        </div>

        <div className="px-20 sm:px-50 mt-25">
          <div className="flex gap-10 justify-between ">
            <div className="flex flex-wrap justify-center lg:flex-col gap-15">
              <GradientBar
                value={90}
                alt="HTML5"
                width="3rem"
                height="3rem"
                url={HTML5}
              />
              <GradientBar
                value={80}
                alt="CSS3"
                width="3rem"
                height="3rem"
                url={CSS3}
              />
              <GradientBar
                value={60}
                alt="JS"
                width="3rem"
                height="3rem"
                url={JS}
              />
              <GradientBar
                value={80}
                alt="Bootstrap 5"
                width="3rem"
                height="3rem"
                url={Bootstrap5}
              />
            </div>
            <div className="flex flex-wrap justify-center lg:flex-col gap-15  ">
              <GradientBar
                className="flex-row-reverse"
                fillStyle={{
                  transform: "scaleX(-10)",
                  transformOrigin: "right",
                }}
                value={60}
                alt="React"
                width="3rem"
                height="3rem"
                url={ReactLogo}
              />
              <GradientBar
                className="flex-row-reverse"
                fillStyle={{
                  transform: "scaleX(-10)",
                  transformOrigin: "right",
                }}
                value={10}
                alt="Sass"
                width="3rem"
                height="3rem"
                url={Sass}
              />
              <GradientBar
                className="flex-row-reverse"
                fillStyle={{
                  transform: "scaleX(-10)",
                  transformOrigin: "right",
                }}
                value={20}
                alt="Tailwind CSS"
                width="3rem"
                height="3rem"
                url={Tailwind}
              />
              <GradientBar
                className="flex-row-reverse"
                fillStyle={{
                  transform: "scaleX(-10)",
                  transformOrigin: "right",
                }}
                value={70}
                alt="TypeScript"
                width="3rem"
                height="3rem"
                url={TypeScript}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
