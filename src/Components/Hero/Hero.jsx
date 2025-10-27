import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero min-h-screen flex justify-center pt-10">
      <div className="content w-lg md:w-7xl mx-10 lg:mx-50 h-auto flex flex-col gap-30 md:flex-row lg:justify-between items-center mt-20">
        <div className="left-div h-[500px] md:h-[600px] w-full text-center md:text-left text-white flex flex-col justify-between">
          <h1 className="text-6xl md:text-7xl font-semibold">
            Front-End Developer & UI/UX Designer
          </h1>
          <p className="text-2xl font-medium text-neutral-400">
            I build beautiful and functional web experiences with a focus on
            React, TypeScript, and modern UI/UX principles.
          </p>
          <button className="w-full md:w-96 h-24 font-bold text-3xl md:text-4xl text-black rounded-2xl">
            View my work
          </button>
        </div>
        <div className="right-div">
          <img
            className="w-lg md:w-lg lg:w-2xl"
            src="Public/images/profile-hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
