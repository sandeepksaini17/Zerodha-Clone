import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Account Opening",
    links: [
      { label: "Online Account Opening", to: "/support/account-opening/online" },
      { label: "Offline Account Opening", to: "/support/account-opening/offline" },
      { label: "Company, Partnership and HUF Account", to: "/support/account-opening/company" },
      { label: "Opening", to: "/support/account-opening" },
      { label: "NRI Account Opening", to: "/support/account-opening/nri" },
      { label: "Charges at Zerodha", to: "/support/charges" },
      { label: "Zerodha IDFC FIRST Bank 3-in-1 Account", to: "/support/3-in-1" },
      { label: "Getting Started", to: "/support/getting-started" },
    ],
  },
  {
    title: "Trading & Markets",
    links: [
      { label: "Intraday Trading", to: "/support/intraday" },
      { label: "Margins", to: "/support/margins" },
      { label: "Kite Platform", to: "/support/kite" },
      { label: "F&O Trading", to: "/support/fno" },
    ],
  },
  {
    title: "Funds & Banking",
    links: [
      { label: "Add Funds", to: "/support/add-funds" },
      { label: "Withdraw Funds", to: "/support/withdraw-funds" },
      { label: "Bank Mandate", to: "/support/bank-mandate" },
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {sections.map((section, index) => (
          <div className="col-4 p-4" key={index}>
            <h4 className="mb-3">
              <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
              {section.title}
            </h4>

            {section.links.map((item, i) => (
              <div key={i}>
                <Link
                  to={item.to}
                  style={{
                    textDecoration: "none",
                    lineHeight: "2.5",
                    display: "block",
                  }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
