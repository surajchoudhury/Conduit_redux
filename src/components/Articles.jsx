import React from "react";
import Avatar from "./Avatar";

const Articles = props => {
  return (
    <section className="articles_container">
      <Avatar {...props.author} />
      <article>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </article>
    </section>
  );
};

export default Articles;
