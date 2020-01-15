import React from "react";

const Avatar = props => {
  console.log(props);
  return (
    <section className="avatar_container">
      <figure>
        <img className="avatar" src={props.avatar} alt="" />
      </figure>
      <p className="username">{props.username}</p>
    </section>
  );
};

export default Avatar;
