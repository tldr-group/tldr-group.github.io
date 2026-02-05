import * as z from "zod/mini";

import { Publication, PublicationSchema } from "../types";

import publicationsJSON from "../content/updates/publications.json";

// a simple unorderd list of publications which links to the paper with minor styling
// could become a fancier component in the future (i.e, abstract Publication into a component)
// could also use bibtex for publication content and export it here with a button
export const Publications = () => {
  const publications: Publication[] = z.array(PublicationSchema).parse(publicationsJSON);

  return (
    <div>
      <ul>
        {publications.map((pub) => (
          <li key={pub.doi}>
            <a href={pub.link} target="_blank" rel="noopener noreferrer">
              {pub.authors}, "{pub.title}",{" "}
              <i>
                {pub.journal} ({pub.year})
              </i>
              , DOI: {pub.doi}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
