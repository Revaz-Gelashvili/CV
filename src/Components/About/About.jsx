import React, { useEffect, useState } from "react";

import "./About.scss";
import { useTranslation } from "react-i18next";
import AboutBG from "../../assets/Images/about-bg.jpg";
import AbmeGitHub from "../../assets/svg/abme-github.svg";
import AbmeLinkedIn from "../../assets/svg/abme-linkedin.svg";
import AbmeTelegram from "../../assets/svg/abme-telegram.svg";
import AbMeFacebook from "../../assets/svg/abme-facebook.svg";
import Fiverr from "../../assets/svg/fiverr.svg";

export default function About() {
  const { t } = useTranslation();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className="min-h-screen about flex justify-center items-center py-30 "
      id="about"
    >
      <div className="flex gap-10 w-full flex-col-reverse justify-center items-center lg:flex-row px-10">
        <div
          className="bg-profile flex justify-center relative w-full sm:w-[25rem] h-[40rem] sm:h-[40rem] rounded-[20px]"
          style={{
            backgroundImage: `url(${AboutBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex gap-5 absolute bottom-7 sm:bottom-10  p-2">
            <a
              href="http://www.fiverr.com/s/1qBGZo9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Fiverr} alt="Fiverr" />
            </a>
            <a
              href="https://github.com/Revaz-Gelashvili"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AbmeGitHub} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/revaz-gelashvili-676667388/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AbmeLinkedIn} alt="LinkedIn" />
            </a>
            <a
              href="https://t.me/re_gel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AbmeTelegram} alt="Telegram" />
            </a>
            <a
              href="https://www.facebook.com/revaz.gelashvili.2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AbMeFacebook} alt="Facebook" />
            </a>
          </div>
        </div>

        <div className="abme-text md:w-xl p-10 flex flex-col items-center justify-center text-center">
          <h1
            style={{ color: "#d6cbf4", fontSize: "3rem" }}
            className="font-sans font-medium"
          >
            {t("about.title")}
          </h1>
          <p className="description text-white mt-10 leading-10">
            {t("about.description")}
          </p>
          <div className="time rounded-lg">
            <p>{time.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
