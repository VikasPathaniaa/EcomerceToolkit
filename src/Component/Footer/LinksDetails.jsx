import React from "react";
import { Link } from "react-router-dom";

const LinksDetails = (props) => {
  const { links, heading, firstLink, secondLink, thirdLink, fourthLink } =
    props;

  console.log(links.homeLink);

  return (
    <div>
      <h2 className="font-semibold py-4 ">{heading}</h2>
      <Link href="/">
        <p className="my-2">{firstLink} </p>
      </Link>
      <Link to="/#offer">
        <p className="my-2">{secondLink} </p>
      </Link>
      <Link to="/#products">
        <p className="my-2">{thirdLink} </p>
      </Link>
      <p className="my-2">{fourthLink} </p>
    </div>
  );
};

export default LinksDetails;
