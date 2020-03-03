import React from "react";
import { logout } from "../../utils/auth";

export const SideBar = () => {
  return (
    <aside className="menu dsc-sidebar has-text-centered">
      <ul className="menu-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/groups">Search/Create groups</a>
        </li>
        <li>
          <a href="/clubs">Find Club</a>
        </li>
        <li>
          <a href="/availability">Space Availability</a>
        </li>
        <li>
          <a href="#!" onClick={() => logout()}>
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
};
