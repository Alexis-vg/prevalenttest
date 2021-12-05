import Loader from "react-loader-spinner";

export default function ReactLoader({ height = 70, width = 70 }) {
  return (
    <Loader
      type="TailSpin"
      color="#00000059"
      height={height}
      width={width}
      className="flex justify-center items-center"
    />
  );
}
