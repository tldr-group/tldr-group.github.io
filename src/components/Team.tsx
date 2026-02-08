import * as z from "zod/mini";
import { useState } from "react";

import { Person, PersonSchema } from "../types";

import teamJSON from "../content/text/team.json";

const PersonComponent = ({ personData }: { personData: Person }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { name, role, desc, outLinks, imagePath } = personData;

  const w = 150;
  const h = 1.5 * w;

  return (
    <div
      className="outlined-content person-card"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <div>
        <img
          src={imagePath}
          alt={`${name}'s profile`}
          style={{ width: `${w}px`, height: `${h}px`, objectFit: "cover" }}
        />
      </div>

      <h3>{name}</h3>
      <p style={{ textAlign: "center", marginTop: "0em" }}>{role}</p>
      {isHovered && <p>{desc}</p>}
      {isHovered && (
        <div style={{ display: "flex", flex: "row" }}>
          {outLinks.map((link, i) => (
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-tag"
              style={{ marginRight: "10px" }}
              key={i}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export const Team = () => {
  const people: Person[] = z.array(PersonSchema).parse(teamJSON);

  // filter takes an array & returns new array with elements that match the boolean expression
  // in the first section, this is filtering for current members
  // we can then map over this filtered array to render a PersonComponent for each person, passing in their data as props
  return (
    <div>
      <h2>Core Team</h2>
      <div className="person-grid">
        {people
          .filter((p) => p.isCurrent)
          .map((person, i) => (
            <PersonComponent key={i} personData={person} />
          ))}
      </div>
      <h2>Former Members</h2>
      <div className="person-grid">
        {people
          .filter((p) => !p.isCurrent)
          .map((person, i) => (
            <PersonComponent key={i} personData={person} />
          ))}
      </div>
    </div>
  );
};
