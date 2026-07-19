import React from "react";
import { Link } from "react-router-dom";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>

          {/* Internal Links */}
          <div>
            <Link to={tryDemo}>Try Demo</Link>
            <Link to={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </Link>
          </div>

          {/* External Links */}
          <div className="mt-3">
            <a
              href={googlePlay}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/media/googlePlayBadge.svg" alt="Google Play" />
            </a>

            <a
              href={appStore}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "50px" }}
            >
              <img src="/media/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;
