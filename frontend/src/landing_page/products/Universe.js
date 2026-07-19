import React from "react";
import { Link } from "react-router-dom";

const universeItems = [
  {
    logo: "/media/smallcaseLogo.png",
    text: "Thematic investment platform",
  },
  {
    logo: "/media/smallcaseLogo.png",
    text: "Thematic investment platform",
  },
  {
    logo: "/media/smallcaseLogo.png",
    text: "Thematic investment platform",
  },
  {
    logo: "/media/smallcaseLogo.png",
    text: "Thematic investment platform",
  },
  {
    logo: "/media/smallcaseLogo.png",
    text: "Thematic investment platform",
  },
  {
    logo: "/media/smallcaseLogo.png",
    text: "Thematic investment platform",
  },
];

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">

        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {universeItems.map((item, index) => (
          <div className="col-4 p-3 mt-5" key={index}>
            <img src={item.logo} alt="Partner platform logo" />
            <p className="text-small text-muted">{item.text}</p>
          </div>
        ))}

        <Link
          to="/signup"
          className="btn btn-primary fs-5 mb-5 p-2"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </Link>

      </div>
    </div>
  );
}

export default Universe;
