import "Projects.scss";

export default function ProjectCard({ name, description, url, web }) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "320px",
          width: "420px",
        }}
      ></div>
      <a href={web} target="_blank" rel="noopener noreferrer" className="mt-6">
        <h1>{name}</h1>
      </a>
      <p className="text-neutral-400 font-medium mt-6">{description}</p>
    </div>
  );
}
