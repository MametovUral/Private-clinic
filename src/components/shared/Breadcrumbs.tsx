import { Match } from "@/types";
import { Link, useMatches } from "react-router-dom";

function Breadcrumbs() {
  const matches = useMatches() as Match[];

  return (
    <div>
      <ul className="flex gap-2 mb-[56px]">
        {matches.map((match, i) => (
          <li key={i}>
            <Link to={match.pathname}>
              {match.handle && typeof match.handle.crumb === "function"
                ? match.handle.crumb(match)
                : ""}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
