import { Link } from "react-router-dom";

export default function Button({ className, children, link }) {
  return (
    <Link to={link}>
      <button className={className}>{children}</button>
    </Link>
  );
}
