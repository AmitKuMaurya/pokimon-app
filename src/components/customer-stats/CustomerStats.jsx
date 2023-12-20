import React from "react";
import KYC_IMG from "../../assets/c1.png";
import RISK_IMG from "../../assets/c2.png";
import TICKET_IMG from "../../assets/c3.png";
import Tech_Life from "../../assets/Tech_Life.png";
import { IoPeople } from "react-icons/io5";
import "./customer-stats.css";
import { Link } from "react-router-dom";
const CustomerStats = () => {
  const CustomerStats = [
    {
      icon: KYC_IMG,
      text: "You have 276 KYC approval pending",
    },
    {
      icon: RISK_IMG,
      text: "There are 182 high risk consumers",
    },
    {
      icon: TICKET_IMG,
      text: "There are 32 tickets open",
    },
  ];

  return (
    <>
      <div className="customer">
        <div>
          <div>
            <h2>Hello Shakir!</h2>
            <p>You have 134 Customer this week.</p>

            <button>
            <Link to={'/customers'}>
              {" "}
              <IoPeople /> Add Customers
            </Link>
            </button>
          </div>
          <div>
            <img src={Tech_Life} alt="logo" />
          </div>
        </div>
        <div>
          {CustomerStats.map((ele) => {
            return (
              <>
                <div>
                  <img src={ele.icon} alt="" />
                  <span>{ele.text}</span>
                  <div>
                    <button>View List</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CustomerStats;
