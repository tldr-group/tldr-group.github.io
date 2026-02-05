import * as z from "zod/mini";

import { Publication, PublicationSchema } from "../types";

// this imports the json from `content` such that we can use it as a variable
import publicationsJSON from "../../public/content/updates/publications.json";

// Render publication as link if link supplied
const PublicationComponent = ({ publicationData }: { publicationData: Publication }) => {
  // 'destructuring': take the properties of publicationData & assign them to variables with same name
  // note these are variables, not states: they don't cause a re-render when changed
  // (we never change them, so not a problem)
  const { authors, title, journal, year, doi, link } = publicationData;

  // ternary if in javascript: if variable before ? is true, return LHS, else return RHS of :
  const doiText = doi ? ", DOI:" + doi : "";

  // <span> is inline text element in HTML; {variable} means render this variable as text in the component
  const innerContent = (
    <span>
      {" "}
      {authors}, "{title}",{"  "}
      <i>
        {journal} ({year})
      </i>
      {doiText}
    </span>
  );

  // this says: if link present (via ?), render innerContent inside a <a> tage (a link tag), otherwise just render innerContent as text
  return (
    <div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {innerContent}
        </a>
      ) : (
        <span>{innerContent}</span>
      )}
      <a href={link} target="_blank" rel="noopener noreferrer"></a>
    </div>
  );
};

// a simple unorderd list of publications which links to the paper with minor styling
export const Publications = () => {
  // zod is library for parsing json data according to schema (think type / class in other languages). We parse data
  const publications: Publication[] = z.array(PublicationSchema).parse(publicationsJSON);

  // 'map' takes each element in array and applies function to it, in our case this function returns a <li> element with publication component inside
  return (
    <div>
      <ul>
        {publications.map((pub) => (
          <li key={pub.doi}>{<PublicationComponent publicationData={pub} />}</li>
        ))}
      </ul>
    </div>
  );
};
