import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/Dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Budget",
    path: "/Budget",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Reports",
    path: "/Reports",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Accounts",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
];