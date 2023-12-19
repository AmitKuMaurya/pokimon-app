import { BsHouseDoor } from "react-icons/bs";
import { PiBathtub } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { IoIosGitNetwork } from "react-icons/io";
import { PiStackFill } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";

const SideBarContent = [
    {
        tag : "Dashboard",
        icon : <BsHouseDoor />,
    },
    {
        icon : <PiBathtub/>,
        tag : "Bullion Operations"
    },
    {
        icon : <GrTransaction/>,
        tag : "Transections"
    },
    {
        icon : <IoIosGitNetwork/>,
        tag : "Your Network"
    },
    {
        icon : <IoPeople/>,
        tag : "Consumers"
    },
    {
        icon : <PiStackFill/>,
        tag : "Otner Operations"
    },
    {
        icon : <CiBank/>,
        tag : "Manage Bank Accounts"
    },
    {
        icon : <FaQuestion/>,
        tag : "FAQ"
    },
    {
        icon : <IoIosSettings/>,
        tag : "Customize Dashboard"
    }
]
// export 
