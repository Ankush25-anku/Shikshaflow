"use client";

import Link from "next/link";
import DropDown from "./DropDown";

export default function Nav({ setMobileToggle }) {
  const closeMenu = () => setMobileToggle(false);

  return (
    <ul className="cs_nav_list fw-medium">
      {/* Home */}
      {/* <li className="menu-item-has-children">
        <Link href="/">Home</Link>
        <DropDown>
          <ul>
            <li onClick={closeMenu}>
              <Link href="/">RC TECHBOX</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/home2">Shiksha Flow</Link>
            </li>
          </ul>
        </DropDown>
      </li> */}

           <li onClick={closeMenu}>
        <Link href="/">Home</Link>
      </li>

      {/* About (Scroll to section) */}
      <li onClick={closeMenu}>
        <Link href="/#about">About Us</Link>
      </li>

      {/* Project */}
      {/* <li className="menu-item-has-children">
        <Link href="/project">Project</Link>
        <DropDown>
          <ul>
            <li onClick={closeMenu}>
              <Link href="/project">Projects</Link>
            </li>
          </ul>
        </DropDown>
      </li> */}

      {/* Services */}
      {/* <li className="menu-item-has-children">
        <Link href="/service">Services</Link>
        <DropDown>
          <ul>
            <li onClick={closeMenu}>
              <Link href="/service">Services</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/service/service-details">Service Details</Link>
            </li>
          </ul>
        </DropDown>
      </li> */}

      {/* Contact */}
      <li onClick={closeMenu}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
