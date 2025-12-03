export default function GradientBar({
  value,
  alt,
  url,
  width,
  height,
  className,
  fillStyle,
}) {
  const imgStyles = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div
      className={`flex items-center gap-10 lg:w-sm xl:w-md 2xl:w-lg ${className}`}
    >
      <img src={url} alt={alt} style={imgStyles} />
      <div className="bar-container hidden lg:block" style={styles.bar}>
        <div
          style={{
            ...styles.fill,
            ...fillStyle,
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  bar: {
    width: "100%",
    height: "20px",
    background: "#1a1a1a",
    borderRadius: "10px",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    background: "linear-gradient(90deg, #D6CBF4, white)",
    transition: "width 0.3s linear",
  },
};
