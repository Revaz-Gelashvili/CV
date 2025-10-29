import "./Projects.scss";

export default function ProjectCard({ name, description, url, web }) {
  return (
    <div className="card">
      <a href={web} target="_blank" rel="noopener noreferrer">
        <div
          className="images"
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
        ></div>
      </a>
      <a
        href={web}
        target="_blank"
        rel="noopener noreferrer"
        className=" text-4xl font-bold text-white"
      >
        <h1 className="mt-5">{name}</h1>
      </a>
      <p className="text-neutral-400 font-medium text-2xl mt-6 ">
        {description}
      </p>
    </div>
  );
}
