import React, { useState } from "react";
import menu_data from "../../data/menu-data";
import { NavLink } from "react-router-dom";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState<string>("");

  const openMobileMenu = (menu: string, audioPath: string) => {
    const audio = new Audio(audioPath);
    audio.play();
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const handleClick = (e: React.MouseEvent, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      if (link.length > 1) {
        const target = document.querySelector(link);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <ul className="navigation">
      {menu_data.map((menu, i) => (
        <React.Fragment key={i}>
          {menu.sub_menu && (
            <li className="menu-item-has-children">
              <NavLink
                to={menu.link}
                onClick={(e) => handleClick(e, menu.link)}
              >
                {menu.title}
              </NavLink>
              <ul
                className="sub-menu"
                style={{ display: navTitle === menu.title ? "block" : "none" }}
              >
                {menu.sub_menu.map((sub, i) => (
                  <li key={i}>
                    <NavLink
                      to={sub.link}
                      onClick={(e) => handleClick(e, sub.link)}
                    >
                      {sub.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div
                onClick={() => openMobileMenu(menu.title, '/assets/audio/click.wav')}
                className={`dropdown-btn ${navTitle === menu.title ? "open" : ""}`}
              >
                <span className="plus-line"></span>
              </div>
            </li>
          )}
          {!menu.sub_menu && (
            <li>
              <NavLink
                to={menu.link}
                onClick={(e) => handleClick(e, menu.link)}
              >
                {menu.title}
              </NavLink>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MobileMenus;
