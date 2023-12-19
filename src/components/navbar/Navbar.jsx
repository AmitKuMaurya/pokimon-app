import React from "react";
import { CiBellOn, CiCreditCard1, CiSearch, CiWallet } from "react-icons/ci";
import "./navbar.css";
import Profile from "../../assets/profile.png";
import IND_Logo from "../../assets/ind_logo.png";
import Up_Graph from "../../assets/up-grafh.png";
import Up_Data_Graph from "../../assets/up-data-graph.png";
import { PiMoneyLight } from "react-icons/pi";
export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="search-box">
                <input type="text" name="" id="" placeholder="Search Ex:(Rewards)" />
                <h1><CiSearch /></h1>
            </div>
            <div className="detail-box">
                <div>
                    <h2>
                    <PiMoneyLight />
                    </h2>
                    <h2>

                    <CiWallet />
                    </h2>
                    <h2>

                        <CiCreditCard1 />
                    </h2>
                    <h2>

                    <CiBellOn />
                    </h2>
                </div>
                {/* second child box */}
                <div> 
                    {/* first sub box */}
                    <div>
                        <div>Gold</div>
                        <div>
                            <div>IN</div>
                            <div><img src={IND_Logo} alt="india logo" /> ^</div>
                        </div>
                    </div>
                    {/* second sub box */}
                    <div>
                        <img src={Up_Data_Graph} alt="a data graph" />
                    </div>
                    {/* third sub box */}
                    <div>
                        <div>
                            <div>Buy: ₹ 73900.00</div>
                            <div>
                                <img src={Up_Graph} alt="graph" />
                            </div>
                        </div>
                        <div>
                            <div>Sell: ₹ 70900.00</div>
                            <img src={Up_Graph} alt="up graph" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Profile} alt="" />
                </div>
            </div>
        </div>
    );
};
