import { BsPersonBadge } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import { MdAccountBalance, MdPersonPinCircle } from "react-icons/md";
import { FaShop } from "react-icons/fa6";

export const onboardMenu = [
  {
    name: "Franchise",
    icon: <FaShop />,
    link: "/onboard/franchise",
    access: ["admin","distributor","fieldExecutive"],
  },
  {
    name: "Distributor",
    icon: <MdPersonPinCircle />,
    link: "/onboard/distributor",
    access: ["admin"],
  },
  {
    name: "Executive",
    icon: <BsPersonBadge />,
    link: "/onboard/executive",
    access: ["admin","distributor"],
  },
  {
    name: "Tele Caller",
    icon: <FaHeadset />,
    link: "/onboard/telecaller",
    access: ["admin"],
  },
  {
    name: "Accountant",
    icon: <MdAccountBalance />,
    link: "/onboard/accountant",
    access: ["admin"],
  },
];
