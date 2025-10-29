import "./Skills.scss";
import { useTranslation } from "react-i18next";

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
            <img src="/Public/svg/html5.svg" alt="Html5" />
            <img src="/Public/svg/css3.svg" alt="CSS3" />
            <img src="/Public/svg/js.svg" alt="JavaScript" />
            <img src="/Public/svg/bt5.svg" alt="Bootstrap 5" />
          </div>
          <div className="flex flex-col gap-15  ">
            <img src="/Public/svg/react.svg" alt="React" />
            <img src="/Public/svg/sass.svg" alt="Sass" />
            <img src="/Public/svg/tailwind.svg" alt="Tailwind CSS" />
            <img src="/Public/svg/ts.svg" alt="TypeScript" />
          </div>
        </div>
      </div>
    </section>
  );
}
