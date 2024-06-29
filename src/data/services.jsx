import { ImMobile } from "react-icons/im";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import {
  GiRotaryPhone,
  GiGasStove,
  GiTap,
  GiHelp,
} from "react-icons/gi";
import { MdRouter } from "react-icons/md";
import { BiBus } from "react-icons/bi";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaBookReader, FaTrain } from "react-icons/fa";
import { FaHandsHoldingChild, FaCoins } from "react-icons/fa6";
import { HiOutlineReceiptTax } from "react-icons/hi";

export const services = [
  {
    name: "Mobile",
    icon: <ImMobile />,
    link: "/services/mobile",
    access:["admin","franchise"]
  },
  {
    name: "DTH",
    icon: <PiTelevisionSimpleBold />,
    link: "/services/dth",
    access:["admin","franchise"]
  },
  {
    name: "Landline",
    icon: <GiRotaryPhone />,
    link: "/services/landline",
    access:["admin","franchise"]
  },
  {
    name: "Broadband",
    icon: <MdRouter />,
    link: "/services/broadband",
    access:["admin"]
  },
  {
    name: "Cylinder",
    icon: <GiGasStove />,
    link: "/services/cylinder",
    access:["admin"]
  },
  {
    name: "Electricity",
    icon: <RiLightbulbFlashFill />,
    link: "/services/electricity",
    access:["admin","franchise"]
  },
  {
    name: "Water",
    icon: <GiTap />,
    link: "/services/water",
    access:["admin","franchise"]
  },
  {
    name: "FastTag",
    icon: <BsCreditCard2FrontFill />,
    link: "/services/fasttag",
    access:["admin","franchise"]
  },
  {
    name: "Train",
    icon: <FaTrain />,
    link: "/services/train",
    access:["admin"]
  },
  {
    name: "Bus",
    icon: <BiBus />,
    link: "/services/bus",
    access:["admin"]
  },
  {
    name: "Insurance",
    icon: <FaHandsHoldingChild />,
    link: "/services/insurance",
    access:["admin"]
  },
  {
    name: "Tax Filing",
    icon: <HiOutlineReceiptTax />,
    link: "/services/tax",
    access:["admin"]
  },
  {
    name: "Loan",
    icon: <FaCoins />,
    link: "/services/loan",
    access:["admin"]
  },
  {
    name: "Education",
    icon: <FaBookReader />,
    link: "/services/education",
    access:["admin"]
  },
  {
    name: "Others",
    icon: <GiHelp />,
    link: "https://app.digistorepay.com/",
    access:["admin"]
  },
];
