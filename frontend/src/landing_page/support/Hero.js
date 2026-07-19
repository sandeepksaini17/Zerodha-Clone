import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <Link to="/support/tickets">Track Tickets</Link>
      </div>

      <div className="row p-5 m-3">
        
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            placeholder="Eg. how do I activate F&O"
            className="form-control mt-3 mb-3"
          />

          <div className="d-flex flex-column gap-2">
            <Link to="/support/account-opening">Track account opening</Link>
            <Link to="/support/segment-activation">Track segment activation</Link>
            <Link to="/support/intraday-margins">Intraday margins</Link>
            <Link to="/support/kite-manual">Kite user manual</Link>
          </div>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <Link to="/support/articles/takeovers-delisting">
                Current Takeovers and Delisting - January 2024
              </Link>
            </li>
            <li>
              <Link to="/support/articles/intraday-leverages">
                Latest Intraday leverages - MIS & CO
              </Link>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;
