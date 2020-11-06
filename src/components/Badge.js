import React from "react";

import confLogo from "../assets/img/badge-header.svg";

const name = {
  first: "Pedro",
  second: "Briceño",
};

class Badge extends React.Component {
  render() {
    return (
      <div className="">
        <figure className="">
          <img src={confLogo} alt="logo de la conferencia" />
        </figure>

        <div>
          <img src="" alt="avantar" />
          <h1>
            {name.first} <br /> {name.second}
          </h1>
        </div>

        <div>
          <p>Frontend Engineer</p>
          <p>@Briceño</p>
        </div>

        <div>#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
