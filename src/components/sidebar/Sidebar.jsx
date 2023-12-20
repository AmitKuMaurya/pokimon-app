import React from "react";
import { BsHouseDoor } from "react-icons/bs";
import { PiBathtub } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { IoIosGitNetwork, IoMdOpen } from "react-icons/io";
import { PiStackFill } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import Logo from '../../assets/zintlr.png';
import "./sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const SideBarContent = [
    {
      tag: "Dashboard",
      icon: <BsHouseDoor />,
    },
    {
      icon: <PiBathtub />,
      tag: "Bullion Operations",
    },
    {
      icon: <GrTransaction />,
      tag: "Transections",
    },
    {
      icon: <IoIosGitNetwork />,
      tag: "Your Network",
    },
    {
      icon: <IoPeople />,
      tag: "Consumers",
    },
    {
      icon: <PiStackFill />,
      tag: "Otner Operations",
    },
    {
      icon: <CiBank />,
      tag: "Manage Bank Accounts",
    },
    {
      icon: <FaQuestion />,
      tag: "FAQ",
    },
    {
      icon: <IoIosSettings />,
      tag: "Customize Dashboard",
    },
  ];

  return (
    <div className="box">
        <div>
            <Link to={"/"}>
            <img src={Logo} alt="logo image" />
          </Link>
        </div>
      {SideBarContent.map((ele) => {
        return (
          <div className="bar-ele" key={Math.random() * 10}>
            <div>
              <h3>{ele.icon}</h3>
               <p>{ele.tag}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
