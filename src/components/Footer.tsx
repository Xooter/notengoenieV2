import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
      <div className=" text-sm">
        2008-2024{" "}
        <a className="strong" href="https://lucasworcel.com/">
          lucasworcel
        </a>
      </div>

      <Link className="strong" to="/about">
        About
      </Link>

      <a className="strong text-sm" href="https://github.com/Xooter">
        Joaquin Righetti
      </a>
    </div>
  );
};
