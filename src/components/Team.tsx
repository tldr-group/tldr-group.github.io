import * as z from "zod/mini";

import { Person, PersonSchema } from "../types";

import teamJSON from "../../public/content/updates/team.json";

const PersonComponent = ({ personData }: { personData: Person }) => {
  const { name, role, desc, outLinks, imagePath } = personData;

  return (
    <div>
      <div>
        <img
          src={imagePath}
          alt={`${name}'s profile`}
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      </div>

      <h3>{name}</h3>
      <p>{role}</p>
      <p>{desc}</p>

      <div style={{ display: "flex", flex: "row" }}>
        {outLinks.map((link) => (
          <a href={link.link} target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
            {link.text}
          </a>
        ))}
      </div>
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
      <div>
        {people
          .filter((p) => p.isCurrent)
          .map((person) => (
            <PersonComponent key={person.name} personData={person} />
          ))}
      </div>
      <h2>Former Members</h2>
      <div>
        {people
          .filter((p) => !p.isCurrent)
          .map((person) => (
            <PersonComponent key={person.name} personData={person} />
          ))}
      </div>
    </div>
  );
};
