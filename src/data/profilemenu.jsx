import { PiFiles, PiCertificateBold } from "react-icons/pi";
import { RiAccountCircleLine, RiWallet3Line } from "react-icons/ri";
import { BsActivity, BsReceipt } from "react-icons/bs";

export const profileMenu = [
  {
    name: "Summary",
    icon: <PiFiles />,
    link: "/profile/summary",
    access: ["admin", "franchise"],
  },
  {
    name: "Activity",
    icon: <BsActivity />,
    link: "/profile/activity",
    access: ["admin"],
  },
  {
    name: "Account",
    icon: <RiAccountCircleLine />,
    link: "/profile/account",
    access: ["admin", "franchise"],
  },
  {
    name: "Tutorial",
    icon: <PiCertificateBold />,
    link: "/profile/training",
    access: ["admin", "franchise"],
  },
  {
    name: "Transactions",
    icon: <BsReceipt />,
    link: "/profile/transactions",
    access: ["admin", "franchise"],
  },
  {
    name: "Wallet",
    icon: <RiWallet3Line />,
    link: "/profile/wallet",
    access: ["admin", "franchise"],
  },
];
