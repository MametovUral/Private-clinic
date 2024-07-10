import { Match } from "@/types";
import { Link, useMatches } from "react-router-dom";

import "@/styles/breadCrumbs.scss";

function Breadcrumbs() {
  const matches = useMatches() as Match[];

  console.log(matches.map((itme) => itme.handle));

  return (
    <div>
      <ul className="flex  mb-[56px]">
        {matches.map((match, i) => (
          <li
            className="breadcrumb-link font-manrope font-extralight text-[13px] text-custom-slateGray"
            key={i}
          >
            <Link className="" to={match.pathname}>
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
